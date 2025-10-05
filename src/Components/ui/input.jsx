import React from "react";

const Input = React.forwardRef(
  ({ className = "", type = "text", style = {}, ...props }, ref) => {
    const baseClasses =
      "flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    return (
      <input
        type={type}
        className={`${baseClasses} ${className}`}
        style={style}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
