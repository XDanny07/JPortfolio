import React, { useState, useRef, useEffect } from "react";

const Popover = ({ children }) => {
  return <PopoverProvider>{children}</PopoverProvider>;
};

const PopoverProvider = ({ children }) => {
  const [isopen, setisopen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setisopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={popoverRef} className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isopen, setisopen })
      )}
    </div>
  );
};

const PopoverTrigger = React.forwardRef(
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

const PopoverContent = ({
  className = "",
  children,
  isopen,
  style = {},
  ...props
}) => {
  if (!isopen) return null;

  return (
    <div
      className={`absolute top-full left-0 z-50 mt-2 rounded-md border bg-white shadow-lg ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

PopoverTrigger.displayName = "PopoverTrigger";
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };
