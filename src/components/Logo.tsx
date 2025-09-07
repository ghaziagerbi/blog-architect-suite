import asaLogo from "@/assets/asa-logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={asaLogo} 
        alt="ASA Sports Logo" 
        className={`${sizeClasses[size]} object-contain`}
      />
      <span className="text-xl font-bold text-foreground">ASA Sports Blog</span>
    </div>
  );
};