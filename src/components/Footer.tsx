import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Twitter, 
  Github, 
  Mail, 
  Globe, 
  BookOpen, 
  Users, 
  Database,
  Leaf
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/20 to-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-nature rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">ScientiaLink</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Advancing scientific research through global collaboration and data sharing in botany, mycology, and natural sciences.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Research */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center">
              <Database className="h-5 w-5 mr-2 text-primary" />
              Research
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Species Database</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Genetic Data</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Distribution Maps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chemical Analysis</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Community
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Research Forums</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sample Exchange</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Citizen Science</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Collaboration Hub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Expert Network</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              Stay Updated
            </h4>
            <p className="text-muted-foreground text-sm">
              Get the latest research findings and platform updates.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/50 border-border"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 ScientiaLink. Advancing science through collaboration.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">API Documentation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};