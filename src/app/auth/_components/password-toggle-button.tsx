import { Eye, EyeOff } from "lucide-react";

// Toggle Button Component
export default function PasswordToggleButton({
  show,
  onClick,
}: {
  show: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
      onClick={onClick}
    >
      {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
    </div>
  );
}
