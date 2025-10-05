import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Select = ({ children, value, onValueChange, ...props }) => {
  return (
    <SelectProvider value={value} onValueChange={onValueChange} {...props}>
      {children}
    </SelectProvider>
  );
};

const SelectProvider = ({ children, value, onValueChange }) => {
  const [isopen, setisopen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setisopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (newValue) => {
    setSelectedValue(newValue);
    onValueChange?.(newValue);
    setisopen(false);
  };

  return (
    <div ref={selectRef} className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isopen,
          setisopen,
          selectedValue,
          onSelect: handleSelect,
        })
      )}
    </div>
  );
};

const SelectTrigger = React.forwardRef(
  (
    { className = "", children, isopen, setisopen, style = {}, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        style={style}
        onClick={() => setisopen?.(!isopen)}
        {...props}
      >
        {children}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isopen ? "rotate-180" : ""
          }`}
        />
      </button>
    );
  }
);

const SelectValue = ({ placeholder, selectedValue, children }) => {
  return (
    <span className="block truncate">
      {selectedValue || placeholder || "Select..."}
    </span>
  );
};

const SelectContent = ({
  className = "",
  children,
  isopen,
  onSelect,
  style = {},
  ...props
}) => {
  if (!isopen) return null;

  return (
    <div
      className={`absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border bg-white shadow-lg ${className}`}
      style={style}
      {...props}
    >
      <div className="py-1">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { onSelect })
        )}
      </div>
    </div>
  );
};

const SelectItem = React.forwardRef(
  (
    { className = "", children, value, onSelect, style = {}, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`relative flex cursor-pointer select-none items-center px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 ${className}`}
        style={style}
        onClick={() => onSelect?.(value)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SelectTrigger.displayName = "SelectTrigger";
SelectValue.displayName = "SelectValue";
SelectContent.displayName = "SelectContent";
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
