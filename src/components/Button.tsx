import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
  full?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  full = false,
  ...props
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none";

  const variants = {
    primary:
      "bg-neonGreen text-black hover:bg-neonGreen/90 shadow-[0_0_8px_rgba(0,255,140,0.7)] hover:shadow-[0_0_12px_rgba(0,255,140,1)]",

    secondary:
      "bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700",

    danger:
      "bg-red-600 text-white hover:bg-red-700 shadow-[0_0_8px_rgba(255,0,0,0.4)]",

    outline:
      "border border-neonGreen text-neonGreen hover:bg-neonGreen/10 hover:shadow-[0_0_10px_rgba(0,255,140,0.5)]",

    ghost:
      "text-neonGreen hover:bg-neonGreen/10 rounded-md",
  };

  return (
    <button
      {...props}
      className={`
        ${base}
        ${variants[variant]}
        ${full ? "w-full" : ""}
        ${props.className || ""}
      `}
    >
      {children}
    </button>
  );
}
