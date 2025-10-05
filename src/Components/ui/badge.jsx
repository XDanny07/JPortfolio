import React from "react";

const Badge = React.forwardRef(
  (
    { className = "", variant = "default", children, style = {}, ...props },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      default: "bg-gray-900 text-white",
      secondary: "bg-gray-100 text-gray-900",
      outline: "border border-gray-300 text-gray-900",
      destructive: "bg-red-500 text-white",
    };

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
