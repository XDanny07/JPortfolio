import React from "react";

const Textarea = React.forwardRef(
  ({ className = "", style = {}, ...props }, ref) => {
    const baseClasses =
      "flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    return (
      <textarea
        className={`${baseClasses} ${className}`}
        style={style}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
