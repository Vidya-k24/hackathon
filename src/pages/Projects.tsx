import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "AI-Powered Customer Analytics Platform",
      category: "ai",
      tags: ["Machine Learning", "Python", "React"],
      description: "Built a comprehensive analytics platform using ML algorithms to predict customer behavior and increase retention by 35%.",
      client: "RetailCorp",
    },
    {
      title: "Enterprise Cloud Migration",
      category: "cloud",
      tags: ["AWS", "DevOps", "Kubernetes"],
      description: "Successfully migrated 50+ applications to AWS, reducing infrastructure costs by 40% while improving scalability.",
      client: "GlobalTech Inc",
    },
    {
      title: "E-Commerce Mobile App",
      category: "mobile",
      tags: ["React Native", "Node.js", "MongoDB"],
      description: "Developed a feature-rich mobile shopping app with real-time inventory management and personalized recommendations.",
      client: "ShopNow",
    },
    {
      title: "Healthcare Data Integration System",
      category: "data",
      tags: ["Python", "ETL", "PostgreSQL"],
      description: "Integrated multiple healthcare systems into a unified data warehouse, enabling real-time patient insights.",
      client: "MedCare Systems",
    },
    {
      title: "Financial Trading Dashboard",
      category: "web",
      tags: ["React", "D3.js", "WebSocket"],
      description: "Real-time trading platform with advanced charting, portfolio management, and automated trading capabilities.",
      client: "InvestPro",
    },
    {
      title: "Smart City IoT Platform",
      category: "iot",
      tags: ["IoT", "Azure", "Python"],
      description: "Deployed IoT sensors across the city for traffic management, reducing congestion by 25%.",
      client: "CityTech Municipal",
    },
    {
      title: "Cybersecurity Audit Platform",
      category: "security",
      tags: ["Security", "Python", "React"],
      description: "Automated security auditing system that identifies vulnerabilities and provides remediation recommendations.",
      client: "SecureNet Corp",
    },
    {
      title: "Business Intelligence Suite",
      category: "data",
      tags: ["Power BI", "SQL", "Python"],
      description: "Custom BI solution with interactive dashboards providing real-time business metrics and predictive analytics.",
      client: "DataDriven LLC",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & ML" },
    { id: "cloud", label: "Cloud" },
    { id: "mobile", label: "Mobile" },
    { id: "web", label: "Web" },
    { id: "data", label: "Data" },
    { id: "iot", label: "IoT" },
    { id: "security", label: "Security" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border bg-background/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="transition-all"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    Client: {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
