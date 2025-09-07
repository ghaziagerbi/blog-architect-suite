import featuredMatchImage from "@/assets/featured-match.jpg";
import youthTrainingImage from "@/assets/youth-training.jpg";
import stadiumImage from "@/assets/stadium-about.jpg";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, MessageCircle, TrendingUp, ArrowRight } from "lucide-react";

// Mock data - in real app this would come from your database
const featuredPost = {
  id: 1,
  title: "ASA Wins Championship Final Against Wydad Casablanca",
  excerpt: "In a thrilling match that went into extra time, ASA secured their first championship title in over a decade with a spectacular 3-2 victory.",
  author: "Ahmed Benali",
  date: "January 15, 2024",
  category: "Match Reports",
  image: featuredMatchImage,
  comments: 45,
  views: 2847
};

const recentPosts = [
  {
    id: 2,
    title: "New Signing: Youssef Amrani Joins ASA",
    excerpt: "The talented midfielder brings experience from European leagues...",
    author: "Sara Mansouri",
    date: "January 14, 2024",
    category: "Transfers",
    image: youthTrainingImage,
    comments: 23,
    views: 1249
  },
  {
    id: 3,
    title: "Youth Academy Success Stories",
    excerpt: "Our youth development program continues to produce exceptional talent...",
    author: "Mohamed Karim",
    date: "January 13, 2024",
    category: "Youth Academy",
    image: stadiumImage,
    comments: 18,
    views: 856
  },
  {
    id: 4,
    title: "Stadium Renovation Updates",
    excerpt: "Latest progress on the stadium modernization project...",
    author: "Fatima El Kadi",
    date: "January 12, 2024",
    category: "Infrastructure",
    image: featuredMatchImage,
    comments: 12,
    views: 634
  }
];

const categories = [
  { name: "Match Reports", count: 24, icon: "🏆" },
  { name: "Transfers", count: 18, icon: "🔄" },
  { name: "Training", count: 15, icon: "💪" },
  { name: "Youth Academy", count: 12, icon: "🌟" },
  { name: "Infrastructure", count: 8, icon: "🏗️" },
  { name: "Community", count: 10, icon: "🤝" }
];

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Featured Post */}
        <section className="mb-12">
          <Card className="overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <Badge variant="secondary">{featuredPost.category}</Badge>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
              </div>
              
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
                {featuredPost.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {featuredPost.comments}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    {featuredPost.views} views
                  </div>
                </div>
                
                <Button>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <section className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Latest Posts</h2>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-primary">All Posts</Button>
                <Button variant="ghost" size="sm">Match Reports</Button>
                <Button variant="ghost" size="sm">Transfers</Button>
                <Button variant="ghost" size="sm">Training</Button>
                <Button variant="ghost" size="sm">Youth</Button>
                <Button variant="ghost" size="sm">Infrastructure</Button>
              </div>
            </div>

            <div className="space-y-6">
              {recentPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 hover:text-primary cursor-pointer transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Popular Posts
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm leading-tight mb-1 hover:text-primary cursor-pointer transition-colors">
                        {post.title}
                      </h4>
                      <div className="text-xs text-muted-foreground">
                        {post.date} • {post.views} views
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Categories</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}