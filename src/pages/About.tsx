import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy, UserPlus } from "lucide-react";
import { Logo } from "@/components/Logo";

const stats = [
  {
    icon: Calendar,
    value: "1961",
    label: "Founded",
    description: "Years of proud history and tradition"
  },
  {
    icon: Users,
    value: "45,000",
    label: "Stadium Capacity",
    description: "Passionate fans supporting the team"
  },
  {
    icon: Trophy,
    value: "23",
    label: "Trophies Won",
    description: "Championships and cup victories"
  },
  {
    icon: UserPlus,
    value: "200+",
    label: "Youth Players",
    description: "Future stars in development"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ASA Sports</h1>
          <h2 className="text-xl text-muted-foreground mb-8">Astre Sportif D'Agadir</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Welcome to the official blog of Astre Sportif D'Agadir (ASA), one of Morocco's most prestigious 
              football clubs. Since 1961, we've been more than just a football team – we're a symbol of pride, 
              passion, and community spirit in Agadir and beyond.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="font-semibold mb-2">{stat.label}</div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1961, Astre Sportif D'Agadir has grown from humble beginnings to become one of 
                Morocco's most respected football institutions. Our journey has been marked by dedication, 
                perseverance, and an unwavering commitment to excellence both on and off the pitch.
              </p>
              <p>
                Throughout the decades, ASA has been a breeding ground for exceptional talent, contributing 
                significantly to Moroccan football. Our academy system has produced numerous players who have 
                gone on to represent both club and country at the highest levels.
              </p>
              <p>
                Today, we continue to build on our rich heritage while embracing modern football philosophy 
                and technology. Our commitment extends beyond the football field to community development, 
                youth education, and social responsibility initiatives throughout the Agadir region.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/api/placeholder/600/400" 
                alt="ASA Sports Stadium"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border">
              <div className="text-2xl font-bold text-primary">63</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from player development 
                  to community engagement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Unity</h3>
                <p className="text-muted-foreground">
                  Together we are stronger. Unity drives our team spirit and 
                  connects us with our passionate fanbase.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace modern approaches while respecting our traditions, 
                  constantly evolving and improving.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Impact */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ASA Sports is deeply committed to making a positive impact in our community 
              through various social and educational initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Youth Development</h3>
              <p className="text-muted-foreground">
                Our comprehensive youth academy provides training, education, and life skills 
                to young athletes from all backgrounds, helping them reach their full potential 
                both on and off the field.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Social Responsibility</h3>
              <p className="text-muted-foreground">
                Through various community outreach programs, we support local charities, 
                educational institutions, and social causes that matter to our supporters 
                and the broader Agadir community.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}