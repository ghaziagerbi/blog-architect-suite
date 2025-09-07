import { Search, Home, Grid3X3, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link 
              to="/categories" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/categories') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Grid3X3 className="h-4 w-4" />
              Categories
            </Link>
            <Link 
              to="/about" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <User className="h-4 w-4" />
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search posts..."
                className="pl-10 w-64 bg-muted/50"
              />
            </div>
            <Button asChild size="sm">
              <Link to="/admin">Admin</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};