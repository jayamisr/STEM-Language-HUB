import { toast as sonnerToast } from "sonner"
import React from "react"

// Define the shape of the Toast object explicitly
type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  action?: React.ReactNode;
} & Record<string, any>; // This '& Record' tells TS it IS an object

// 1. Standalone function
export const toast = (props: ToastProps) => {
  const { title, description, variant, ...rest } = props;
  
  if (variant === "destructive") {
    return sonnerToast.error(title, { 
      description,
      ...rest 
    });
  }
  return sonnerToast.success(title, { 
    description,
    ...rest 
  });
};

// 2. The Hook
export function useToast() {
  return {
    toast,
    toasts: [] as ToastProps[], 
    dismiss: (toastId?: string) => {},
  };
}