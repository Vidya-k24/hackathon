import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Cloud, 
  Code, 
  Smartphone, 
  Database, 
  Shield, 
  BarChart, 
  Cpu,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and predictive analytics. Our AI solutions help you make data-driven decisions faster.",
      features: [
        "Custom ML model development",
        "Natural Language Processing",
        "Computer Vision solutions",
        "Predictive analytics",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable, secure, and cost-effective cloud infrastructure tailored to your business needs.",
      features: [
        "Cloud migration services",
        "AWS, Azure, GCP expertise",
        "DevOps implementation",
        "Cloud security & compliance",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: [
        "React, Next.js, Vue.js",
        "Progressive Web Apps",
        "E-commerce platforms",
        "Custom CMS development",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: [
        "iOS & Android development",
        "React Native & Flutter",
        "App store optimization",
        "Mobile UI/UX design",
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data pipelines and architectures to unlock the value of your data.",
      features: [
        "Data warehouse design",
        "ETL pipeline development",
        "Real-time data processing",
        "Data governance",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions and best practices.",
      features: [
        "Security audits",
        "Penetration testing",
        "Security compliance",
        "Incident response",
      ],
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Turn raw data into actionable insights with advanced analytics and visualization.",
      features: [
        "Dashboard development",
        "Data visualization",
        "Reporting automation",
        "KPI tracking",
      ],
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Connect and manage smart devices to create intelligent, automated systems.",
      features: [
        "IoT architecture design",
        "Sensor integration",
        "Edge computing",
        "Real-time monitoring",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive IT solutions designed to accelerate your digital transformation journey 
              and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center bg-gradient-primary border-0">
            <CardHeader className="space-y-4 py-12">
              <CardTitle className="text-3xl md:text-4xl text-primary-foreground">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-lg text-primary-foreground/90">
                Let's discuss how our services can help transform your business and achieve your goals.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                  <Button size="lg" variant="secondary">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
