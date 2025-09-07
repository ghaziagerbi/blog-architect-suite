import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Users, 
  MessageSquare, 
  Eye, 
  TrendingUp, 
  Calendar,
  Plus,
  AlertCircle
} from "lucide-react";

const stats = [
  {
    title: "Total Posts",
    value: "247",
    change: "+12%",
    changeType: "positive",
    icon: FileText,
    color: "text-blue-600"
  },
  {
    title: "Total Users", 
    value: "1,429",
    change: "+5%",
    changeType: "positive",
    icon: Users,
    color: "text-green-600"
  },
  {
    title: "Comments",
    value: "2,847", 
    change: "-2%",
    changeType: "negative",
    icon: MessageSquare,
    color: "text-orange-600"
  },
  {
    title: "Total Views",
    value: "89,429",
    change: "+18%",
    changeType: "positive", 
    icon: Eye,
    color: "text-purple-600"
  }
];

const pendingTasks = [
  {
    title: "Review 5 pending comments",
    priority: "high",
    count: 5
  },
  {
    title: "Approve 3 scheduled posts", 
    priority: "medium",
    count: 3
  },
  {
    title: "Update site settings",
    priority: "low", 
    count: 1
  }
];

const recentActivity = [
  { action: "New post published", item: "ASA Championship Victory", time: "2 hours ago" },
  { action: "Comment approved", item: "Youth Academy Success", time: "4 hours ago" },
  { action: "User registered", item: "Mohamed Ahmed", time: "6 hours ago" },
  { action: "Post edited", item: "Transfer Updates", time: "1 day ago" }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your blog.</p>
        </div>
        <Button className="bg-primary hover:bg-primary-dark">
          <Plus className="mr-2 h-4 w-4" />
          Create Post
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <Badge 
                        variant={stat.changeType === 'positive' ? 'default' : 'destructive'}
                        className="text-xs"
                      >
                        {stat.change}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">from last month</p>
                  </div>
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Analytics Overview */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Analytics Overview
            </CardTitle>
            <Button variant="outline" size="sm">View Details</Button>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Analytics chart would appear here</p>
                <p className="text-sm">Showing page views, engagement metrics, etc.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-sm">{task.title}</p>
                    <Badge 
                      variant={
                        task.priority === 'high' ? 'destructive' : 
                        task.priority === 'medium' ? 'default' : 'secondary'
                      }
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </div>
                <Badge variant="outline">{task.count} items</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.item}</p>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}