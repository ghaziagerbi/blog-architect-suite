import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Trophy, Users, Dumbbell, Star, Building, Heart } from "lucide-react";

const categories = [
  {
    name: "Match Reports",
    description: "Detailed coverage of ASA matches, including analysis and highlights",
    count: 24,
    icon: Trophy,
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    name: "Transfers",
    description: "Latest news on player transfers, signings, and contract updates",
    count: 18,
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    name: "Training",
    description: "Behind-the-scenes look at training sessions and preparation",
    count: 15,
    icon: Dumbbell,
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    name: "Youth Academy",
    description: "Stories from our youth development program and rising stars",
    count: 12,
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    name: "Infrastructure",
    description: "Updates on stadium, facilities, and club infrastructure",
    count: 8,
    icon: Building,
    color: "text-gray-500",
    bgColor: "bg-gray-50"
  },
  {
    name: "Community",
    description: "ASA's involvement in community projects and social initiatives",
    count: 10,
    icon: Heart,
    color: "text-pink-500",
    bgColor: "bg-pink-50"
  }
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Categories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our content organized by topics. From match reports to community stories, 
            find exactly what you're looking for.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search categories..."
              className="pl-10 bg-muted/30"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.name} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <Badge variant="secondary">
                      {category.count} posts
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Posts
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Content Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">87</div>
              <div className="text-sm text-muted-foreground">Total Posts</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">1.2k</div>
              <div className="text-sm text-muted-foreground">Comments</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">15k</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}