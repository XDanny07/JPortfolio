import React, { useState, useRef, useEffect } from "react";

const DropdownMenu = ({ children }) => {
  return <DropdownProvider>{children}</DropdownProvider>;
};

const DropdownProvider = ({ children }) => {
  const [isopen, setisopen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isopen, setisopen })
      )}
    </div>
  );
};

const DropdownMenuTrigger = React.forwardRef(
  (
    { className = "", children, isopen, setisopen, asChild = false, ...props },
    ref
  ) => {
    const handleClick = () => setisopen?.(!isopen);

    if (asChild) {
      return React.cloneElement(children, {
        ref,
        onClick: handleClick,
        ...props,
      });
    }

    return (
      <button ref={ref} className={className} onClick={handleClick} {...props}>
        {children}
      </button>
    );
  }
);

const DropdownMenuContent = ({
  className = "",
  children,
  isopen,
  style = {},
  ...props
}) => {
  if (!isopen) return null;

  return (
    <div
      className={`absolute top-full right-0 z-50 mt-2 min-w-[200px] rounded-md border bg-white shadow-lg ${className}`}
      style={style}
      {...props}
    >
      <div className="py-1">{children}</div>
    </div>
  );
};

const DropdownMenuItem = React.forwardRef(
  ({ className = "", children, onClick, style = {}, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative flex cursor-pointer select-none items-center px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 ${className}`}
        style={style}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const DropdownMenuLabel = React.forwardRef(
  ({ className = "", children, style = {}, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`px-3 py-2 text-sm font-semibold ${className}`}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const DropdownMenuSeparator = React.forwardRef(
  ({ className = "", style = {}, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`-mx-1 my-1 h-px bg-gray-200 ${className}`}
        style={style}
        {...props}
      />
    );
  }
);

DropdownMenuTrigger.displayName = "DropdownMenuTrigger";
DropdownMenuContent.displayName = "DropdownMenuContent";
DropdownMenuItem.displayName = "DropdownMenuItem";
DropdownMenuLabel.displayName = "DropdownMenuLabel";
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
};
