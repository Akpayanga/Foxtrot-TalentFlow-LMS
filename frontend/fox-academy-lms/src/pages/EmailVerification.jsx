import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Mail, Check } from "lucide-react";
import { resendAccountVerificationEmail, verifyAccountEmail } from "../services/applicationService";

export default function EmailVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = location.state?.email || searchParams.get("email") || "amara@email.com";
  const token = searchParams.get("token");
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [status, setStatus] = useState(token ? "verifying" : "sent");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (secondsLeft > 0) {
      const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [secondsLeft]);

  useEffect(() => {
    if (!token || !email) {
      return undefined;
    }

    let isMounted = true;

    const confirmEmail = async () => {
      try {
        const response = await verifyAccountEmail({ email, token });
        if (!isMounted) {
          return;
        }
        setStatus("verified");
        setMessage(response?.message || "Your email has been verified successfully.");
        navigate(`/login?email=${encodeURIComponent(email)}&newUser=1`, { replace: true, state: { email, newUser: true } });
      } catch (requestError) {
        if (!isMounted) {
          return;
        }
        setStatus("error");
        setError(
          requestError?.response?.data?.message ||
            "We could not verify this email link. Please request a new verification email."
        );
      }
    };

    confirmEmail();

    return () => {
      isMounted = false;
    };
  }, [email, navigate, token]);

  const canResend = secondsLeft === 0;

  const handleResend = async () => {
    if (canResend) {
      try {
        setError("");
        setMessage("");
        setIsResending(true);
        await resendAccountVerificationEmail({ email });
        setStatus("sent");
        setMessage("A new verification link has been sent to your email.");
        setSecondsLeft(60);
      } catch (requestError) {
        setError(
          requestError?.response?.data?.message ||
            "We could not resend the verification email right now. Please try again."
        );
      } finally {
        setIsResending(false);
      }
    }
  };

  const formatTime = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
    const s = (totalSeconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

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
          {status === "verified" ? "Email Verified" : status === "error" ? "Verification Failed" : "Check Your Inbox"}
        </h1>

        {/* Main Text */}
        <p className="text-[15px] leading-relaxed text-[#4B5563] mb-8 max-w-85 mx-auto">
          {status === "verified"
            ? message || "Your email address has been verified successfully."
            : status === "error"
              ? error || "We could not verify the link."
              : <>We&apos;ve sent a verification link to <br className="hidden md:block" />
                <span className="font-semibold text-[#111827]">{email}</span>. Click the link in the email <br className="hidden md:block" />
                to activate your Fox Academy account.</>}
        </p>

        {/* Expiry Text */}
        <p className="text-[13px] text-[#6B7280] mb-6">
          {status === "verified" ? "You can now continue using your account." : "The link expires in 24 hours."}
        </p>

        {/* Divider line */}
        <hr className="border-gray-100 mb-6" />

        {/* Resend Button */}
        <button 
          onClick={handleResend}
          disabled={!canResend}
          className={`w-full rounded-[10px] border px-4 py-3.5 text-[15px] font-semibold transition ${
            canResend 
              ? "border-[#F38821] bg-transparent text-[#F38821] hover:bg-[#F38821]/5" 
              : "border-[#F38821]/30 bg-transparent text-[#F38821]/40 cursor-not-allowed"
          }`}
        >
          {isResending ? "Resending..." : status === "verified" ? "Verified" : "Resend Verification Email"}
        </button>

        {/* Counter Text */}
        <div className="h-5 mt-3 mb-8">
          {!canResend && (
            <p className="text-[13px] text-[#6B7280]">
              You can resend in <strong className="text-[#111827]">{formatTime(secondsLeft)}</strong>
            </p>
          )}
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
