import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Upload, 
  Users, 
  BookOpen, 
  MessageCircle, 
  MapPin,
  ArrowRight
} from "lucide-react";

const quickActions = [
  {
    icon: Search,
    title: "Species Search",
    description: "Find comprehensive information about any species",
    action: "Search Now",
    color: "bg-gradient-nature"
  },
  {
    icon: Upload,
    title: "Upload Data",
    description: "Contribute your research findings to the community",
    action: "Upload",
    color: "bg-gradient-scientific"
  },
  {
    icon: Users,
    title: "Connect",
    description: "Find and collaborate with researchers worldwide",
    action: "Join Network",
    color: "bg-gradient-earth"
  },
  {
    icon: BookOpen,
    title: "Research Hub",
    description: "Access latest publications and research papers",
    action: "Browse Papers",
    color: "bg-primary"
  },
  {
    icon: MessageCircle,
    title: "Forums",
    description: "Engage in scientific discussions and Q&A",
    action: "Join Discussion",
    color: "bg-nature-accent"
  },
  {
    icon: MapPin,
    title: "Field Guide",
    description: "Interactive species identification for field work",
    action: "Open Guide",
    color: "bg-earth"
  }
];

export const QuickActions = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Quick Actions
          </h2>
          <p className="text-lg text-muted-foreground">
            Jump into your research with these essential tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-card/80 backdrop-blur-sm hover:scale-105">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {action.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {action.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="group-hover:bg-primary group-hover:text-white transition-all duration-300 p-0 h-auto font-semibold"
                >
                  {action.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};