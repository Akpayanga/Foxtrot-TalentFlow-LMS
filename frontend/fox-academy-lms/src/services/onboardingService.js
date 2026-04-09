const ONBOARDING_STORAGE_KEY = "onboardingState";

const defaultState = {
  profile: "pending",
  team: "pending",
  learn: "pending",
  complete: "pending",
  completed: false,
};

export function getOnboardingState() {
  const raw = localStorage.getItem(ONBOARDING_STORAGE_KEY);
  if (!raw) {
    return { ...defaultState };
  }

  try {
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return { ...defaultState };
  }
}

export function setOnboardingStep(step, status) {
  const current = getOnboardingState();
  const next = { ...current, [step]: status };
  localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function completeOnboarding() {
  const current = getOnboardingState();
  const next = {
    ...current,
    complete: current.complete === "pending" ? "completed" : current.complete,
    completed: true,
    completedAt: new Date().toISOString(),
  };

  localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function isOnboardingComplete() {
  return Boolean(getOnboardingState().completed);
}
