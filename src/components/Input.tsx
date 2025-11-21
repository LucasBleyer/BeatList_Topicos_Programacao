import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-emerald-300 drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full px-4 py-2 rounded-lg 
          bg-emerald-950/60 text-emerald-100 
          placeholder-emerald-300/40 
          border 
          ${error ? "border-red-500" : "border-emerald-800"} 
          focus:outline-none focus:ring-2 
          focus:ring-emerald-400 focus:border-emerald-400
          shadow-[0_0_12px_rgba(34,197,94,0.25)]
        `}
      />

      {error && (
        <span className="text-xs text-red-500 font-medium">
          {error}
        </span>
      )}
    </div>
  );
}
