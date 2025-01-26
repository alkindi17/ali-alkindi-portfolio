import { cn } from "@/utils/cn";

export default function PrimaryButton({ children, className }) {
  return (
    <button className={cn("primary-button mt-5", className)}>{children}</button>
  );
}
