import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/authService";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: location.state?.email || "",
    token: searchParams.get("token") || searchParams.get("code") || "",
    password: "",
    confirmPassword: "",
  });
  const [apiError, setApiError] = useState("");
  const [apiMessage, setApiMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setApiError("");
    setApiMessage("");

    if (!formData.email.trim()) {
      setApiError("Email is required.");
      return;
    }

    if (!formData.token.trim()) {
      setApiError("Reset code is required.");
      return;
    }

    if (!formData.password) {
      setApiError("New password is required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setApiError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await resetPassword({
        email: formData.email,
        token: formData.token,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      setApiMessage(response?.message || "Password reset successful. Please log in.");

      navigate("/login", {
        state: {
          email: formData.email,
          fromResetPassword: true,
        },
      });
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Unable to reset password right now. Please try again.";
      setApiError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-6 py-10">
      <div className="w-full max-w-md rounded-[10px] border border-[#D1D5DC] bg-white p-10">
        <h1 className="mb-2 text-center text-[23px] font-bold leading-[1.4] text-[#111827]">
          Reset Password
        </h1>
        <p className="mb-6 text-center text-[16px] leading-normal text-[#6B7280]">
          Enter your email, reset code, and a new password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {apiError ? (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
              {apiError}
            </p>
          ) : null}

          {apiMessage ? (
            <p className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
              {apiMessage}
            </p>
          ) : null}

          <div>
            <label className="mb-2 block text-[13px] font-medium text-[#111827]">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. amara@email.com"
              className="w-full rounded-[10px] border border-[#D1D5DC] px-4 py-3 text-[13px] text-[#111827] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-medium text-[#111827]">Reset Code</label>
            <input
              name="token"
              type="text"
              value={formData.token}
              onChange={handleChange}
              placeholder="Paste reset token/code"
              className="w-full rounded-[10px] border border-[#D1D5DC] px-4 py-3 text-[13px] text-[#111827] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-medium text-[#111827]">New Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 8 characters"
                className="w-full rounded-[10px] border border-[#D1D5DC] px-4 py-3 pr-11 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
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
            <label className="mb-2 block text-[13px] font-medium text-[#111827]">Confirm New Password</label>
            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter new password"
                className="w-full rounded-[10px] border border-[#D1D5DC] px-4 py-3 pr-11 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
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

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-[10px] bg-[#F38821] px-4 py-3 text-[16px] font-medium text-white transition hover:bg-[#e37b1d] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
