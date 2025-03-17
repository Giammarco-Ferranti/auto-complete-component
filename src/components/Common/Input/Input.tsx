import React from "react";
import "./Input.css";

interface InputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
}

const Input = ({ placeholder, onChange, value, type, name }: InputProps) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default Input;
