import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to ASA Sports Blog</h1>
            <p className="text-xl text-muted-foreground">
              Your ultimate source for sports news, updates, and insights
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Link to="/homepage">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                View Blog
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" size="lg">
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
