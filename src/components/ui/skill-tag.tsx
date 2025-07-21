import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillTagProps {
  skill: string;
  variant?: "default" | "primary" | "secondary" | "accent";
  removable?: boolean;
  onRemove?: (skill: string) => void;
  className?: string;
}

const SkillTag = ({ 
  skill, 
  variant = "default", 
  removable = false, 
  onRemove, 
  className 
}: SkillTagProps) => {
  const variantClasses = {
    default: "bg-muted text-muted-foreground hover:bg-muted/80",
    primary: "bg-primary-light text-primary hover:bg-primary-light/80",
    secondary: "bg-secondary-light text-secondary hover:bg-secondary-light/80",
    accent: "bg-accent-light text-accent hover:bg-accent-light/80"
  };

  return (
    <Badge 
      className={cn(
        "px-3 py-1 text-xs font-medium transition-colors",
        variantClasses[variant],
        removable && "pr-1",
        className
      )}
    >
      {skill}
      {removable && onRemove && (
        <button
          onClick={() => onRemove(skill)}
          className="ml-2 p-0.5 rounded-full hover:bg-black/10 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </Badge>
  );
};

export { SkillTag };