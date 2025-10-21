"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  placeholder?: string;
}

const FormInput = ({
  label,
  name,
  type = "text",
  register,
  errors,
  placeholder,
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const errorMessage = errors[name]?.message as string | undefined;

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-4">
      <Label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </Label>

      <div className="relative">
        <Input
          id={name}
          type={inputType}
          placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
          {...register(name)}
          className={`w-full pr-10 ${
            errorMessage ? "border-red-500 focus:ring-red-500" : ""
          }`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>

      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
