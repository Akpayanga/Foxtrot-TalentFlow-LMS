import React from "react";

export default function ProfileField({
  label,
  value,
  placeholder,
  isReadOnly,
  isTextArea,
  helperText,
  maxLength,
  onChange,
}) {
  const inputClasses =
    "w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-900 focus:outline-none focus:border-[#F38821] focus:ring-1 focus:ring-[#F38821] transition-all placeholder:text-gray-400";

  return (
    <div className="flex flex-col w-full">
      <label className="text-[11px] font-bold text-gray-900 mb-2 uppercase tracking-wide">
        {label}
      </label>

      {isReadOnly ? (
        <div className="bg-[#F3F4F6] border border-gray-100 rounded-lg px-4 py-3.5 flex justify-between items-center cursor-not-allowed">
          <span className="text-[14px] font-medium text-gray-500">{value}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
      ) : isTextArea ? (
        <textarea
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          className={`${inputClasses} resize-none min-h-[140px] leading-[1.6]`}
        />
      ) : (
        <input 
          type="text" 
          placeholder={placeholder} 
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          className={inputClasses} 
        />
      )}

      {helperText && (
        <div className="flex items-center gap-1 mt-1.5">
          <p className="text-[10px] text-gray-400 italic font-medium">{helperText}</p>
        </div>
      )}
    </div>
  );
}
