import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Check } from "lucide-react";
import { completeRegistration } from "../services/authService";

export default function EmailVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const password = location.state?.password || "";

  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [verifySuccess, setVerifySuccess] = useState("");

  const handleVerify = async () => {
    if (!email.trim()) {
      setVerifyError("Email is missing from the registration flow.");
      setVerifySuccess("");
      return;
    }

    if (!password.trim()) {
      setVerifyError("Password is missing from the registration flow.");
      setVerifySuccess("");
      return;
    }

    setVerifyError("");
    setVerifySuccess("");
    setIsVerifying(true);

    try {
      const response = await completeRegistration({
        email: email.trim(),
        password,
      });
      setVerifySuccess(response?.message || "Registration completed successfully.");
      navigate("/dashboard", { replace: true, state: { fromRegistration: true } });
    } catch (error) {
      setVerifyError(
        error?.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (email && password) {
      handleVerify();
    }

    // Auto-complete registration when the signup flow provides credentials.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4">
      <div className="w-full max-w-120 bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100/50 text-center">
        {/* Icon */}
        <div className="mx-auto relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF0E3] mb-6">
          <Mail className="w-8 h-8 text-[#111827]" strokeWidth={1.5} />
          <div className="absolute top-0 right-0 bg-[#0F172A] rounded-full w-5.5 h-5.5 flex items-center justify-center border-[2.5px] border-white ring-0">
            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-[24px] md:text-[28px] font-bold text-[#111827] mb-3">
          Complete Your Registration
        </h1>

        {/* Main Text */}
        <p className="text-[15px] leading-relaxed text-[#4B5563] mb-8 max-w-85 mx-auto">
          {email ? (
            <>
              We&apos;re finishing setup for <br className="hidden md:block" />
              <span className="font-semibold text-[#111827]">{email}</span>.
            </>
          ) : (
            <>
              We&apos;re missing your registration details. Please return to
              signup and try again.
            </>
          )}
        </p>

        {/* Expiry Text */}
        <p className="text-[13px] text-[#6B7280] mb-6">
          Once verification succeeds, you&apos;ll be redirected to your dashboard.
        </p>

        <div className="mb-8 space-y-3 text-left">
          {verifyError ? (
            <p className="rounded-lg border border-[#FCA5A5] bg-[#FEF2F2] px-3 py-2 text-[13px] text-[#B91C1C]">
              {verifyError}
            </p>
          ) : null}

          {verifySuccess ? (
            <p className="rounded-lg border border-[#86EFAC] bg-[#F0FDF4] px-3 py-2 text-[13px] text-[#166534]">
              {verifySuccess}
            </p>
          ) : null}

          <button
            onClick={handleVerify}
            disabled={isVerifying || !email || !password}
            className="w-full rounded-[10px] bg-[#F38821] px-4 py-3 text-[15px] font-semibold text-white transition hover:bg-[#e37b1d] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isVerifying ? "Completing..." : "Continue to Dashboard"}
          </button>
        </div>

        {/* Footer links */}
        <div className="space-y-2">
          <p className="text-[13px] text-[#6B7280]">
            Wrong email address?{" "}
            <Link to="/signup" className="text-[#F38821] font-semibold hover:underline">
              Go back and re-register.
            </Link>
          </p>
          <p className="text-[13px] text-[#6B7280]">
            Need help? Contact{" "}
            <a href="mailto:support@truemindsltd.com" className="hover:text-[#4B5563] transition-colors">
              support@truemindsltd.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
