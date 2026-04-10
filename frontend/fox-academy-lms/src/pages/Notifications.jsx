import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import amara from "../assets/images/amara.jpg";

export default function Notifications() {
  const [notifications, setNotifications] = useState({
    allNotifications: true,
    newAssignment: true,
    dueReminder: true,
    graded: true,
    moduleUnlocked: true,
    feedback: true,
    sessionReminder: true,
    bookingConfirmed: true,
    replies: true,
    mentions: true,
    pinnedPost: false,
    fileUploads: true,
    workBoard: true,
    teamActivity: true,
    deliverableFeedback: true,
    securityAlerts: false,
    platformAnnouncements: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleAllNotifications = () => {
    const newState = !notifications.allNotifications;
    setNotifications({
      allNotifications: newState,
      newAssignment: newState,
      dueReminder: newState,
      graded: newState,
      moduleUnlocked: newState,
      feedback: newState,
      sessionReminder: newState,
      bookingConfirmed: newState,
      replies: newState,
      mentions: newState,
      pinnedPost: false,
      fileUploads: newState,
      workBoard: newState,
      teamActivity: newState,
      deliverableFeedback: newState,
      securityAlerts: false,
      platformAnnouncements: newState,
    });
  };

  const ToggleSwitch = ({ checked, onChange }) => (
    <button
      onClick={onChange}
      style={{
        width: "32px",
        height: "16px",
        background: checked ? "#459F49" : "#E2E2E2",
        borderRadius: "9999px",
        border: "none",
        position: "relative",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "12px",
          height: "12px",
          background: checked ? "#FFFFFF" : "#C6C6C6",
          borderRadius: "9999px",
          right: checked ? "2px" : "2px",
          top: "2px",
          transition: "right 0.2s ease",
        }}
      />
    </button>
  );

  const MasterToggleSwitch = ({ checked, onChange }) => (
    <button
      onClick={onChange}
      style={{
        width: "48px",
        height: "24px",
        background: checked ? "#459F49" : "#E2E2E2",
        borderRadius: "9999px",
        border: "none",
        position: "relative",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "16px",
          height: "16px",
          background: "#FFFFFF",
          borderRadius: "9999px",
          right: checked ? "4px" : "4px",
          top: "4px",
        }}
      />
    </button>
  );

  const activeCount = Object.values(notifications).filter(Boolean).length;
  const totalCount = Object.keys(notifications).length;

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
          minHeight: "2298px",
          background: "rgba(254, 243, 233, 0.2)",
          margin: "0 auto",
        }}
      >
        {/* Main Content Area */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "48px",
            gap: "32px",
            width: "70%",
            height: "2298px",
            minHeight: "2298px",
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
              color: "#1A1C1C",
              textDecoration: "none",
              marginBottom: "16px",
            }}
          >
            <ChevronLeft size={16} />
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
              Notifications
            </h1>
            <p
              style={{
                fontFamily: "'Inter'",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#1A1C1C",
                margin: 0,
              }}
            >
              Choose what you want to be notified about and how.
            </p>
          </div>

          {/* Master Toggle Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "32px",
              width: "100%",
              height: "116px",
              background: "#EDEDFF",
              borderRadius: "12px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <h3
                style={{
                  fontFamily: "'Inter'",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#1A1C1C",
                  margin: 0,
                }}
              >
                All Notifications
              </h3>
              <p
                style={{
                  fontFamily: "'Inter'",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#1A1C1C",
                  margin: 0,
                }}
              >
                Globally enable or disable all notification triggers.
              </p>
            </div>
            <MasterToggleSwitch
              checked={notifications.allNotifications}
              onChange={toggleAllNotifications}
            />
          </div>

          {/* Category Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
            {/* Category 1: Learning & Assignments */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                padding: "32px",
                width: "100%",
                background: "#FFFFFF",
                border: "1px solid rgba(198, 198, 198, 0.2)",
                borderRadius: "12px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <h2
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#1A1C1C",
                    margin: 0,
                  }}
                >
                  Learning & Assignments
                </h2>
                <ToggleSwitch
                  checked={notifications.newAssignment && notifications.dueReminder && notifications.graded && notifications.moduleUnlocked}
                  onChange={() => {
                    const allChecked = notifications.newAssignment && notifications.dueReminder && notifications.graded && notifications.moduleUnlocked;
                    setNotifications((prev) => ({
                      ...prev,
                      newAssignment: !allChecked,
                      dueReminder: !allChecked,
                      graded: !allChecked,
                      moduleUnlocked: !allChecked,
                    }));
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  { key: "newAssignment", label: "New Assignment" },
                  { key: "dueReminder", label: "Due Reminder" },
                  { key: "graded", label: "Graded" },
                  { key: "moduleUnlocked", label: "Module Unlocked" },
                ].map((item) => (
                  <div key={item.key} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "8px 0px" }}>
                    <span
                      style={{
                        fontFamily: "'Inter'",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#1A1C1C",
                      }}
                    >
                      {item.label}
                    </span>
                    <ToggleSwitch
                      checked={notifications[item.key]}
                      onChange={() => toggleNotification(item.key)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Mentor & Feedback */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                padding: "32px",
                width: "100%",
                background: "#FFFFFF",
                border: "1px solid rgba(198, 198, 198, 0.2)",
                borderRadius: "12px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <h2
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#1A1C1C",
                    margin: 0,
                  }}
                >
                  Mentor & Feedback
                </h2>
                <ToggleSwitch
                  checked={notifications.feedback && notifications.sessionReminder && notifications.bookingConfirmed}
                  onChange={() => {
                    const allChecked = notifications.feedback && notifications.sessionReminder && notifications.bookingConfirmed;
                    setNotifications((prev) => ({
                      ...prev,
                      feedback: !allChecked,
                      sessionReminder: !allChecked,
                      bookingConfirmed: !allChecked,
                    }));
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  { key: "feedback", label: "Feedback" },
                  { key: "sessionReminder", label: "Session Reminder" },
                  { key: "bookingConfirmed", label: "Booking Confirmed" },
                ].map((item) => (
                  <div key={item.key} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "8px 0px" }}>
                    <span
                      style={{
                        fontFamily: "'Inter'",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#1A1C1C",
                      }}
                    >
                      {item.label}
                    </span>
                    <ToggleSwitch
                      checked={notifications[item.key]}
                      onChange={() => toggleNotification(item.key)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: Community */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                padding: "32px",
                width: "100%",
                background: "#FFFFFF",
                border: "1px solid rgba(198, 198, 198, 0.2)",
                borderRadius: "12px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <h2
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#1A1C1C",
                    margin: 0,
                  }}
                >
                  Community
                </h2>
                <ToggleSwitch
                  checked={notifications.replies && notifications.mentions}
                  onChange={() => {
                    const allChecked = notifications.replies && notifications.mentions;
                    setNotifications((prev) => ({
                      ...prev,
                      replies: !allChecked,
                      mentions: !allChecked,
                    }));
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  { key: "replies", label: "Replies" },
                  { key: "mentions", label: "Mentions" },
                  { key: "pinnedPost", label: "Pinned Post" },
                ].map((item) => (
                  <div key={item.key} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "8px 0px" }}>
                    <span
                      style={{
                        fontFamily: "'Inter'",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#1A1C1C",
                      }}
                    >
                      {item.label}
                    </span>
                    <ToggleSwitch
                      checked={notifications[item.key]}
                      onChange={() => toggleNotification(item.key)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Category 4: Phase 2 & Team Activity */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                padding: "32px",
                width: "100%",
                background: "#FFFFFF",
                border: "1px solid rgba(198, 198, 198, 0.2)",
                borderRadius: "12px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <h2
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#1A1C1C",
                    margin: 0,
                  }}
                >
                  Phase 2 & Team Activity
                </h2>
                <ToggleSwitch
                  checked={notifications.fileUploads && notifications.workBoard && notifications.teamActivity && notifications.deliverableFeedback}
                  onChange={() => {
                    const allChecked = notifications.fileUploads && notifications.workBoard && notifications.teamActivity && notifications.deliverableFeedback;
                    setNotifications((prev) => ({
                      ...prev,
                      fileUploads: !allChecked,
                      workBoard: !allChecked,
                      teamActivity: !allChecked,
                      deliverableFeedback: !allChecked,
                    }));
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  { key: "fileUploads", label: "File Uploads" },
                  { key: "workBoard", label: "Work Board" },
                  { key: "teamActivity", label: "Team Activity" },
                  { key: "deliverableFeedback", label: "Deliverable Feedback" },
                ].map((item) => (
                  <div key={item.key} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "8px 0px" }}>
                    <span
                      style={{
                        fontFamily: "'Inter'",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#1A1C1C",
                      }}
                    >
                      {item.label}
                    </span>
                    <ToggleSwitch
                      checked={notifications[item.key]}
                      onChange={() => toggleNotification(item.key)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Category 5: Account & System */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                padding: "32px",
                width: "100%",
                background: "#FFFFFF",
                border: "1px solid rgba(198, 198, 198, 0.2)",
                borderRadius: "12px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <h2
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#1A1C1C",
                    margin: 0,
                  }}
                >
                  Account & System
                </h2>
                <ToggleSwitch
                  checked={notifications.securityAlerts && notifications.platformAnnouncements}
                  onChange={() => {
                    const allChecked = notifications.securityAlerts && notifications.platformAnnouncements;
                    setNotifications((prev) => ({
                      ...prev,
                      securityAlerts: !allChecked,
                      platformAnnouncements: !allChecked,
                    }));
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  { key: "securityAlerts", label: "Security Alerts" },
                  { key: "platformAnnouncements", label: "Platform Announcements" },
                ].map((item) => (
                  <div key={item.key} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "8px 0px", opacity: item.key === "securityAlerts" ? 0.5 : 1 }}>
                    <span
                      style={{
                        fontFamily: "'Inter'",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#1A1C1C",
                      }}
                    >
                      {item.label}
                    </span>
                    <ToggleSwitch
                      checked={notifications[item.key]}
                      onChange={() => toggleNotification(item.key)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Save Footer */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingTop: "48px",
              gap: "24px",
              width: "100%",
              borderTop: "1px solid rgba(198, 198, 198, 0.1)",
              marginTop: "24px",
            }}
          >
            <button
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
              Reset to Default
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
                lineHeight: "20px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              Save Preferences
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            padding: "48px 32px",
            gap: "43px",
            width: "30%",
            height: "2298px",
            background: "#FAFAFA",
            borderLeft: "1px solid rgba(229, 229, 229, 0.2)",
          }}
        >
          {/* User Profile Widget */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "48px", borderBottom: "1px solid rgba(198, 198, 198, 0.1)" }}>
            <h3
              style={{
                fontFamily: "'Inter'",
                fontWeight: 600,
                fontSize: "10.4px",
                lineHeight: "16px",
                letterSpacing: "0.52px",
                color: "#777777",
                margin: 0,
              }}
            >
              YOUR ACCOUNT
            </h3>
            <div style={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "center" }}>
              <img
                src={amara}
                alt="Profile"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "9999px",
                  objectFit: "cover",
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#000000",
                    margin: 0,
                  }}
                >
                  Amara Obi
                </p>
                <p
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 700,
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#DD7C1E",
                    margin: "4px 0 0 0",
                  }}
                >
                  UX Design Intern
                </p>
              </div>
            </div>
          </div>

          {/* Notification Summary */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "48px", borderBottom: "1px solid rgba(198, 198, 198, 0.1)" }}>
            <h3
              style={{
                fontFamily: "'Inter'",
                fontWeight: 600,
                fontSize: "10.4px",
                lineHeight: "16px",
                letterSpacing: "0.52px",
                color: "#777777",
                margin: 0,
              }}
            >
              NOTIFICATION SUMMARY
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#737373",
                  }}
                >
                  Active Triggers
                </span>
                <span
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#1A1C1C",
                  }}
                >
                  {activeCount}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#737373",
                  }}
                >
                  Total Triggers
                </span>
                <span
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#1A1C1C",
                  }}
                >
                  {totalCount}
                </span>
              </div>
            </div>
          </div>

          {/* NOTE Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "24px",
              background: "#DD7C1E",
              borderRadius: "12px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Inter'",
                fontWeight: 600,
                fontSize: "10.4px",
                lineHeight: "16px",
                letterSpacing: "0.52px",
                color: "#FFFFFF",
                opacity: 0.6,
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
                margin: 0,
              }}
            >
              Changes to notification preferences might take up to 24 hours to propagate across all platforms.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
