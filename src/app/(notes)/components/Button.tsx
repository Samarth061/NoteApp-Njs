import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <>
      <button
        type="submit"
        className={`mt-5 px-4 bg-blue-500 text-white rounded w-[200px] h-8${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
