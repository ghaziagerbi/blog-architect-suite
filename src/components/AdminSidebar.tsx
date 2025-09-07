import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  FileText,
  Users,
  MessageSquare,
  Image,
  Settings,
  Search,
  Tag,
  Eye,
  Shield,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sidebarItems = [
  { title: "Dashboard", url: "/admin", icon: BarChart3 },
  { title: "Posts", url: "/admin/posts", icon: FileText },
  { title: "Users", url: "/admin/users", icon: Users },
  { title: "Categories", url: "/admin/categories", icon: Tag },
  { title: "Comments", url: "/admin/comments", icon: MessageSquare },
  { title: "Media", url: "/admin/media", icon: Image },
  { title: "SEO", url: "/admin/seo", icon: Search },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Appearance", url: "/admin/appearance", icon: Eye },
  { title: "Security", url: "/admin/security", icon: Shield },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} bg-card border-r flex flex-col transition-all duration-300`}>
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          {!collapsed && <Logo size="sm" />}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-10" />
          </div>
        </div>
      )}

      {/* View Blog Button */}
      <div className="p-4 border-b">
        <Button
          asChild
          variant="outline"
          size={collapsed ? "sm" : "default"}
          className="w-full"
        >
          <a href="/" target="_blank" rel="noopener noreferrer">
            {collapsed ? <Eye className="h-4 w-4" /> : (
              <>
                <Eye className="mr-2 h-4 w-4" />
                View Blog
              </>
            )}
          </a>
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  className={({ isActive: navIsActive }) => 
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      navIsActive || isActive(item.url)
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`
                  }
                  end={item.url === "/admin"}
                >
                  <IconComponent className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span className="font-medium">{item.title}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium">
            A
          </div>
          {!collapsed && (
            <div className="flex-1">
              <p className="font-medium text-sm">Admin</p>
              <p className="text-xs text-muted-foreground">admin@asasports.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};