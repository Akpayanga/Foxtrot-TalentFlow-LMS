import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import auth4 from "../assets/images/auth4.png";
import { preRegisterUser } from "../services/authService";

export default function SignupCreate() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");

    if (formData.password !== formData.confirmPassword) {
      setSubmitError("Passwords do not match.");
      return;
    }

    if (!formData.acceptedTerms) {
      setSubmitError("You must accept the terms to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      await preRegisterUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      navigate("/verify-email", {
        state: {
          email: formData.email,
        },
      });
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid h-screen md:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-gray-100 md:block">
          <img
            src={auth4}
            alt="Learners collaborating"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1E2939]/55" />
        </div>

        <div className="flex items-center justify-center bg-[#F4F4F4] px-6 py-10 md:px-[84px]">
          <div className="w-full max-w-[448px] space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded bg-[#F38821]" />
              <span className="text-[20px] font-bold leading-[1.5] text-[#F38821]">
                Fox Academy
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D1D5DC] text-[14px] font-medium text-[#364153]">
                1
              </span>
              <span className="h-1 flex-1 bg-[#F38821]" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F38821] text-[14px] font-medium text-white">
                2
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-[28px] font-bold leading-[1.4] text-[#101828]">
                Create Your Account
              </h1>
              <p className="text-[16px] leading-[1.5] text-[#4A5565]">
                You&apos;re joining as a{" "}
                <span className="inline-flex items-center rounded-lg bg-[#F38821] px-3 py-0.5 text-[11px] font-bold text-white">
                  UI/UX Design Intern
                </span>
                <br />
                in the Phase 2 - 2026 cohort.
              </p>
            </div>

            <div className="relative flex items-center justify-center py-1">
              <span className="h-px flex-1 bg-[#D1D5DC]" />
              <span className="bg-[#F4F4F4] px-4 text-[14px] text-[#6A7282]">or</span>
              <span className="h-px flex-1 bg-[#D1D5DC]" />
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-[10px] border border-[#F38821] bg-white px-4 py-3 text-[16px] font-medium text-[#FB8C00] transition hover:bg-[#FEF3E9]">
              <span className="text-[28px] leading-none">G</span>
              Continue with Google
            </button>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Amara"
                    className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#F4F4F4] px-4 py-3 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Okafor"
                    className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#F4F4F4] px-4 py-3 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. amara@email.com"
                  className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#F4F4F4] px-4 py-3 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                />
              </div>

              <div className="space-y-4">
                <div>
                <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                  Create Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Minimum 8 characters"
                    className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#F4F4F4] px-4 py-3 pr-11 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99A1AF]"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                </div>

                <div>
                <label className="mb-2 block text-[13px] font-medium text-[#111827]">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    placeholder="Re-enter your password"
                    className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#F4F4F4] px-4 py-3 pr-11 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99A1AF]"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                </div>
              </div>

              <label className="flex items-center gap-2 text-[13px] text-[#374151]">
                <input
                  name="acceptedTerms"
                  type="checkbox"
                  checked={formData.acceptedTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border border-[#D1D5DC] bg-[#F3F3F5] accent-[#F38821]"
                />
                <span>
                  I agree to Fox Academy&apos;s{" "}
                  <a href="#" className="font-medium text-[#F38821] hover:underline">
                    Terms
                  </a>{" "}
                  of Use and <span className="text-[#111827]">Privacy Policy</span>
                </span>
              </label>

              {submitError ? (
                <p className="rounded-[8px] border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-[13px] text-[#B91C1C]">
                  {submitError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-[10px] bg-[#F38821] px-4 py-3 text-[16px] font-bold text-white transition hover:bg-[#e37b1d]"
              >
                {isSubmitting ? "Creating Account..." : "Create my Account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
