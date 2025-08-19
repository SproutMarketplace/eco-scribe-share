import { Button } from "@/components/ui/button";
import { Search, Database, Users, Globe } from "lucide-react";
import heroImage from "@/assets/hero-science.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Advancing Science Through
          <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Collaborative Research
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Connect with scientists worldwide. Search species, share data, collaborate on research,
          and contribute to the world's largest scientific knowledge base.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
            <Search className="mr-2 h-5 w-5" />
            Start Researching
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 border-white/30 text-white hover:bg-white/10">
            <Users className="mr-2 h-5 w-5" />
            Join Community
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Database className="h-8 w-8 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold">2.5M+</div>
            <div className="text-sm text-gray-300">Species Documented</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Users className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm text-gray-300">Active Researchers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Globe className="h-8 w-8 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold">180+</div>
            <div className="text-sm text-gray-300">Countries</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Search className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
            <div className="text-2xl font-bold">1M+</div>
            <div className="text-sm text-gray-300">Research Papers</div>
          </div>
        </div>
      </div>
    </section>
  );
};