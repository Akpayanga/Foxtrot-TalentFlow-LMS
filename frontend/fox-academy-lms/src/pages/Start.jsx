import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth3 from "../assets/images/auth3.png";

export default function Start() {
  const navigate = useNavigate();
  const [inviteCode, setInviteCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/application/accepted");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid h-screen md:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-gray-100 md:block">
          <img
            src={auth3}
            alt="Professionals using Fox Academy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center bg-white px-6 py-10 md:px-21">
          <div className="w-full max-w-md space-y-8">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded bg-[#F38821]" />
              <span className="text-[20px] font-bold leading-normal text-[#F38821]">
                Fox Academy
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F38821] text-[14px] font-medium text-white">
                1
              </span>
              <span className="h-1 flex-1 bg-[#D1D5DC]" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D1D5DC] text-[14px] font-medium text-[#364153]">
                2
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-[28px] font-bold leading-[1.4] text-[#111827]">
                You&apos;ve Been Invited
              </h1>
              <p className="text-[16px] leading-normal text-[#374151]">
                Fox Academy is an invite-only platform. Enter the invite code shared by your cohort coordinator to get started.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-[13px] font-medium text-[#111827]">
                  Invite Code
                </label>
                <input
                  type="text"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  required
                  placeholder="e.g. TM-2025-COHORT4"
                  className="w-full rounded-[10px] border border-[#D1D5DC] bg-[#F4F4F4] px-4 py-3 text-[13px] placeholder:text-[#99A1AF] focus:border-[#F38821] focus:outline-none"
                />
                <p className="text-[11px] text-[#6B7280]">
                  Check your email or WhatsApp message from Trueminds for your code.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-[10px] bg-[#F38821] px-4 py-3 text-[16px] font-bold text-white transition hover:bg-[#e37b1d]"
              >
                Validate Code
              </button>
            </form>

            <p className="text-center text-[13px] text-[#6B7280]">
              Already have an account?{" "}
              <a href="/login" className="font-bold text-[#F38821] hover:underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



