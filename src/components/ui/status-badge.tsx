import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Clock, CheckCircle, XCircle, AlertCircle, Send } from "lucide-react";

interface StatusBadgeProps {
  status: "pending" | "approved" | "rejected" | "under-review" | "sent" | "active" | "inactive";
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const statusConfig = {
    pending: {
      label: "Pending",
      icon: Clock,
      className: "bg-yellow-100 text-yellow-800 border-yellow-200"
    },
    "under-review": {
      label: "Under Review",
      icon: AlertCircle,
      className: "bg-blue-100 text-blue-800 border-blue-200"
    },
    approved: {
      label: "Approved",
      icon: CheckCircle,
      className: "bg-green-100 text-green-800 border-green-200"
    },
    rejected: {
      label: "Rejected",
      icon: XCircle,
      className: "bg-red-100 text-red-800 border-red-200"
    },
    sent: {
      label: "Sent",
      icon: Send,
      className: "bg-purple-100 text-purple-800 border-purple-200"
    },
    active: {
      label: "Active",
      icon: CheckCircle,
      className: "bg-green-100 text-green-800 border-green-200"
    },
    inactive: {
      label: "Inactive",
      icon: XCircle,
      className: "bg-gray-100 text-gray-800 border-gray-200"
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge 
      variant="outline"
      className={cn(
        "px-2 py-1 text-xs font-medium border",
        config.className,
        className
      )}
    >
      <Icon className="w-3 h-3 mr-1" />
      {config.label}
    </Badge>
  );
};

export { StatusBadge };