import React, { useState } from "react";
import { ChevronLeft, Monitor, Smartphone, X } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";

export default function AccountSecurity() {
  const [emailMode, setEmailMode] = useState("view");
  const [passwordMode, setPasswordMode] = useState("view");
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getPasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(newPassword);

  return (
    <div style={{ background: "#F9F9F9", minHeight: "100vh" }}>
      <DashboardNavbar />

      <main
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1536px",
          height: "auto",
          minHeight: "1779px",
          background: "rgba(254, 243, 233, 0.2)",
          margin: "0 auto",
        }}
      >
        {/* Left Column: Main Content */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "48px",
            gap: "32px",
            width: "70%",
            borderRight: "1px solid rgba(198, 198, 198, 0.2)",
          }}
        >
          {/* Back Button */}
          <Link
            to="/settings"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter'",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.6px",
              color: "#474747",
              textDecoration: "none",
              marginBottom: "16px",
            }}
          >
            <ChevronLeft size={20} />
            <span>Back to Settings</span>
          </Link>

          {/* Page Header */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
            <h1
              style={{
                fontFamily: "'Inter'",
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: "55px",
                letterSpacing: "-1.1px",
                color: "#000000",
                margin: 0,
              }}
            >
              Account & Security
            </h1>
            <p
              style={{
                fontFamily: "'Inter'",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#474747",
                margin: 0,
              }}
            >
              Manage your login credentials and active sessions.
            </p>
          </div>

          {/* Sections Container */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px", width: "100%" }}>
            {/* Email Section */}
            <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Header */}
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Inter'",
                      fontWeight: 700,
                      fontSize: "12px",
                      lineHeight: "16px",
                      letterSpacing: "0.6px",
                      color: "#474747",
                    }}
                  >
                    EMAIL ADDRESS
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter'",
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "#1A1C1C",
                      marginTop: "8px",
                      padding: "12px 16px",
                      background: "#F3F3F3",
                      borderRadius: "8px",
                      opacity: 0.7,
                    }}
                  >
                    amaraobi@gmail.com
                  </div>
                </div>
                {emailMode === "view" && (
                  <button
                    onClick={() => setEmailMode("edit")}
                    style={{
                      padding: "12px 16px",
                      border: "1px solid #F9C899",
                      background: "transparent",
                      borderRadius: "10px",
                      fontFamily: "'Inter'",
                      fontWeight: 700,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "#FB8C00",
                      cursor: "pointer",
                    }}
                  >
                    Change Email
                  </button>
                )}
              </div>

              {/* Expanded Form */}
              {emailMode === "edit" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    padding: "32px",
                    background: "#F3F3F3",
                    borderRadius: "12px",
                  }}
                >
                  {/* Form Row - Two columns for inputs */}
                  <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
                    {/* New Email Field */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                      <label
                        style={{
                          fontFamily: "'Inter'",
                          fontWeight: 700,
                          fontSize: "12px",
                          lineHeight: "16px",
                          letterSpacing: "0.6px",
                          color: "#1A1C1C",
                        }}
                      >
                        NEW EMAIL
                      </label>
                      <input
                        type="email"
                        placeholder="Enter new email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        style={{
                          padding: "14px 16px",
                          background: "#FFFFFF",
                          border: "1px solid rgba(198, 198, 198, 0.3)",
                          borderRadius: "8px",
                          fontFamily: "'Inter'",
                          fontSize: "16px",
                          color: "#6B7280",
                        }}
                      />
                    </div>

                    {/* Confirm Email Field */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                      <label
                        style={{
                          fontFamily: "'Inter'",
                          fontWeight: 700,
                          fontSize: "12px",
                          lineHeight: "16px",
                          letterSpacing: "0.6px",
                          color: "#1A1C1C",
                        }}
                      >
                        CONFIRM EMAIL
                      </label>
                      <input
                        type="email"
                        placeholder="Confirm new email"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        style={{
                          padding: "14px 16px",
                          background: "#FFFFFF",
                          border: "1px solid rgba(198, 198, 198, 0.3)",
                          borderRadius: "8px",
                          fontFamily: "'Inter'",
                          fontSize: "16px",
                          color: "#6B7280",
                        }}
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: "16px", justifyContent: "flex-end" }}>
                    <button
                      onClick={() => {
                        setEmailMode("view");
                        setNewEmail("");
                        setConfirmEmail("");
                      }}
                      style={{
                        padding: "12px 16px",
                        border: "1px solid #F9C899",
                        background: "transparent",
                        borderRadius: "10px",
                        fontFamily: "'Inter'",
                        fontWeight: 700,
                        fontSize: "13px",
                        color: "#FB8C00",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      style={{
                        padding: "12px 16px",
                        background: "#DD7C1E",
                        border: "none",
                        borderRadius: "10px",
                        fontFamily: "'Inter'",
                        fontWeight: 700,
                        fontSize: "13px",
                        color: "#FFFFFF",
                        cursor: "pointer",
                      }}
                    >
                      Update Email
                    </button>
                  </div>
                </div>
              )}
            </section>

            {/* Password Section */}
            <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Header */}
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Inter'",
                      fontWeight: 700,
                      fontSize: "12px",
                      lineHeight: "16px",
                      letterSpacing: "0.6px",
                      color: "#474747",
                    }}
                  >
                    PASSWORD
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter'",
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "#1A1C1C",
                      marginTop: "8px",
                      padding: "12px 16px",
                      background: "#F3F3F3",
                      borderRadius: "8px",
                      opacity: 0.7,
                    }}
                  >
                    ••••••••••
                  </div>
                </div>
                {passwordMode === "view" && (
                  <button
                    onClick={() => setPasswordMode("edit")}
                    style={{
                      padding: "12px 16px",
                      border: "1px solid #F9C899",
                      background: "transparent",
                      borderRadius: "10px",
                      fontFamily: "'Inter'",
                      fontWeight: 700,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "#FB8C00",
                      cursor: "pointer",
                    }}
                  >
                    Change Password
                  </button>
                )}
              </div>

              {/* Expanded Form */}
              {passwordMode === "edit" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    padding: "32px",
                    background: "#F3F3F3",
                    borderRadius: "12px",
                  }}
                >
                  {/* First Row - Current Password on Left */}
                  <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
                    {/* Current Password */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                      <label
                        style={{
                          fontFamily: "'Inter'",
                          fontWeight: 700,
                          fontSize: "12px",
                          lineHeight: "16px",
                          letterSpacing: "0.6px",
                          color: "#1A1C1C",
                        }}
                      >
                        CURRENT PASSWORD
                      </label>
                      <input
                        type="password"
                        placeholder="Enter current password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        style={{
                          padding: "14px 16px",
                          background: "#FFFFFF",
                          border: "1px solid rgba(198, 198, 198, 0.3)",
                          borderRadius: "8px",
                          fontFamily: "'Inter'",
                          fontSize: "16px",
                          color: "#6B7280",
                        }}
                      />
                    </div>

                    {/* Right Column - New and Confirm */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px", flex: 1 }}>
                      {/* New Password */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label
                          style={{
                            fontFamily: "'Inter'",
                            fontWeight: 700,
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "0.6px",
                            color: "#1A1C1C",
                          }}
                        >
                          NEW PASSWORD
                        </label>
                        <input
                          type="password"
                          placeholder="Enter new password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          style={{
                            padding: "14px 16px",
                            background: "#FFFFFF",
                            border: "1px solid rgba(198, 198, 198, 0.3)",
                            borderRadius: "8px",
                            fontFamily: "'Inter'",
                            fontSize: "16px",
                            color: "#6B7280",
                          }}
                        />
                        {newPassword && (
                          <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
                            {[0, 1, 2, 3].map((i) => (
                              <div
                                key={i}
                                style={{
                                  flex: 1,
                                  height: "4px",
                                  borderRadius: "2px",
                                  background:
                                    i < passwordStrength ? "#459F49" : "rgba(198, 198, 198, 0.3)",
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Confirm Password */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label
                          style={{
                            fontFamily: "'Inter'",
                            fontWeight: 700,
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "0.6px",
                            color: "#1A1C1C",
                          }}
                        >
                          CONFIRM NEW PASSWORD
                        </label>
                        <input
                          type="password"
                          placeholder="Confirm new password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          style={{
                            padding: "14px 16px",
                            background: "#FFFFFF",
                            border: "1px solid rgba(198, 198, 198, 0.3)",
                            borderRadius: "8px",
                            fontFamily: "'Inter'",
                            fontSize: "16px",
                            color: "#6B7280",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: "16px", justifyContent: "flex-end" }}>
                    <button
                      onClick={() => {
                        setPasswordMode("view");
                        setCurrentPassword("");
                        setNewPassword("");
                        setConfirmPassword("");
                      }}
                      style={{
                        padding: "12px 16px",
                        border: "1px solid #F9C899",
                        background: "transparent",
                        borderRadius: "10px",
                        fontFamily: "'Inter'",
                        fontWeight: 700,
                        fontSize: "13px",
                        color: "#FB8C00",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      style={{
                        padding: "12px 16px",
                        background: "#DD7C1E",
                        border: "none",
                        borderRadius: "10px",
                        fontFamily: "'Inter'",
                        fontWeight: 700,
                        fontSize: "13px",
                        color: "#FFFFFF",
                        cursor: "pointer",
                      }}
                    >
                      Update Password
                    </button>
                  </div>
                </div>
              )}
            </section>

            {/* Active Sessions */}
            <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h2
                style={{
                  fontFamily: "'Manrope'",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#1A1C1C",
                  margin: 0,
                }}
              >
                Active Sessions
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Session 1 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(198, 198, 198, 0.2)",
                    borderRadius: "12px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "center" }}>
                    <Monitor size={24} style={{ color: "#474747" }} />
                    <div>
                      <p
                        style={{
                          fontFamily: "'Inter'",
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#1A1C1C",
                          margin: 0,
                        }}
                      >
                        Current Session — Chrome on macOS
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter'",
                          fontWeight: 400,
                          fontSize: "12px",
                          color: "#474747",
                          margin: "4px 0 0 0",
                          letterSpacing: "0.6px",
                        }}
                      >
                        LAGOS, NIGERIA
                      </p>
                    </div>
                  </div>
                  <span
                    style={{
                      padding: "4px 8px",
                      background: "#459F49",
                      color: "#FFFFFF",
                      borderRadius: "4px",
                      fontFamily: "'Inter'",
                      fontWeight: 700,
                      fontSize: "10px",
                      lineHeight: "15px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    ACTIVE NOW
                  </span>
                </div>

                {/* Session 2 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(198, 198, 198, 0.2)",
                    borderRadius: "12px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "center" }}>
                    <Smartphone size={24} style={{ color: "#474747" }} />
                    <div>
                      <p
                        style={{
                          fontFamily: "'Inter'",
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#1A1C1C",
                          margin: 0,
                        }}
                      >
                        iPhone 13 — Fox Academy App
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter'",
                          fontWeight: 400,
                          fontSize: "12px",
                          color: "#474747",
                          margin: "4px 0 0 0",
                          letterSpacing: "0.6px",
                        }}
                      >
                        2 DAYS AGO • LAGOS, NIGERIA
                      </p>
                    </div>
                  </div>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: "#DD7C1E",
                      cursor: "pointer",
                      fontSize: 0,
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Sign Out Button */}
              <button
                style={{
                  width: "100%",
                  padding: "16px 40px",
                  border: "1px solid #A0001D",
                  background: "transparent",
                  borderRadius: "8px",
                  fontFamily: "'Inter'",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#A0001D",
                  cursor: "pointer",
                  letterSpacing: "0.6px",
                }}
              >
                Sign Out Of All Other Sessions
              </button>
            </section>

            {/* Delete Account */}
            <section
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "24px",
                background: "rgba(255, 218, 214, 0.05)",
                border: "1px solid #E7B0BA",
                borderRadius: "12px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#A0001D",
                    margin: "0 0 4px 0",
                  }}
                >
                  Delete Account
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#474747",
                    margin: 0,
                  }}
                >
                  Permanently remove your account and all associated data.
                </p>
              </div>
              <button
                style={{
                  padding: "12px 24px",
                  border: "1px solid #BA1A1A",
                  background: "transparent",
                  borderRadius: "8px",
                  fontFamily: "'Inter'",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#BA1A1A",
                  cursor: "pointer",
                  letterSpacing: "0.6px",
                }}
              >
                Delete Account
              </button>
            </section>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            padding: "48px 24px",
            width: "30%",
            borderLeft: "1px solid rgba(229, 229, 229, 0.2)",
            gap: "24px",
          }}
        >
          {/* Security Tips */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              background: "#FFFFFF",
              padding: "24px",
              borderRadius: "12px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Inter'",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "0.5px",
                color: "#474747",
                margin: 0,
              }}
            >
              SECURITY TIPS
            </h3>

            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  background: "#DD7C1E",
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: "'Inter'",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "23px",
                  color: "#474747",
                  margin: 0,
                }}
              >
                Use a password with at least 8 characters.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  background: "#DD7C1E",
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: "'Inter'",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "23px",
                  color: "#474747",
                  margin: 0,
                }}
              >
                Enable Two-Factor Authentication.
              </p>
            </div>
          </div>

          {/* NOTE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              background: "#DD7C1E",
              color: "#FFFFFF",
              padding: "24px",
              borderRadius: "12px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Inter'",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.6px",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              NOTE
            </h3>
            <p
              style={{
                fontFamily: "'Inter'",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "20px",
                color: "#FFFFFF",
                opacity: 0.8,
                margin: 0,
              }}
            >
              Changes to your security settings will require a re-login on all active mobile devices for verification.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
