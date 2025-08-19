import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Microscope, 
  MapPin, 
  Dna, 
  FileText, 
  MessageSquare, 
  Package,
  TrendingUp,
  Users
} from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Species Database",
    description: "Comprehensive botanical and mycological species information with high-resolution imagery",
    gradient: "from-green-500 to-emerald-600",
    tags: ["Taxonomy", "Morphology", "Images"]
  },
  {
    icon: MapPin,
    title: "Distribution Maps",
    description: "Global species distribution data with real-time location tracking and habitat information",
    gradient: "from-blue-500 to-cyan-600",
    tags: ["Geolocation", "Habitats", "Climate"]
  },
  {
    icon: Dna,
    title: "Genetic Database",
    description: "DNA sequences, phylogenetic trees, and genetic diversity analysis for research",
    gradient: "from-purple-500 to-indigo-600",
    tags: ["DNA", "Phylogeny", "Evolution"]
  },
  {
    icon: FileText,
    title: "Research Papers",
    description: "Access to peer-reviewed articles, research findings, and scientific publications",
    gradient: "from-orange-500 to-red-600",
    tags: ["Publications", "Citations", "Research"]
  },
  {
    icon: MessageSquare,
    title: "Research Forums",
    description: "Connect with scientists, share findings, and collaborate on research projects",
    gradient: "from-teal-500 to-green-600",
    tags: ["Community", "Discussion", "Collaboration"]
  },
  {
    icon: Package,
    title: "Sample Exchange",
    description: "Request and share biological samples for research purposes with global scientists",
    gradient: "from-pink-500 to-purple-600",
    tags: ["Samples", "Exchange", "Networking"]
  },
  {
    icon: TrendingUp,
    title: "Data Analytics",
    description: "Advanced data visualization and statistical analysis tools for research insights",
    gradient: "from-yellow-500 to-orange-600",
    tags: ["Analytics", "Visualization", "Statistics"]
  },
  {
    icon: Users,
    title: "Citizen Science",
    description: "Engage citizen scientists in data collection and collaborative research projects",
    gradient: "from-indigo-500 to-blue-600",
    tags: ["Public", "Engagement", "Education"]
  }
];

export const FeatureCards = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Comprehensive Research Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for scientific research in botany, mycology, and natural sciences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {feature.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};