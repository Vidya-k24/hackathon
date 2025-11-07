import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
  const openings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / Silicon Valley",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI and machine learning solutions for enterprise clients.",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Hybrid / New York",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and implement scalable cloud architectures for enterprise applications.",
      skills: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform"],
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build modern web applications using React, Node.js, and cloud technologies.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "REST APIs"],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "3+ years",
      description: "Create intuitive and beautiful user experiences for web and mobile applications.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Hybrid / Austin",
      type: "Full-time",
      experience: "4+ years",
      description: "Automate and optimize our development and deployment pipelines.",
      skills: ["CI/CD", "Jenkins", "GitLab", "Monitoring", "Infrastructure as Code"],
    },
    {
      title: "Data Scientist",
      department: "Data",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Extract insights from complex datasets and build predictive models.",
      skills: ["Python", "R", "SQL", "Statistics", "Machine Learning"],
    },
  ];

  const benefits = [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "Flexible work arrangements",
    "Professional development budget",
    "Annual company retreats",
    "Latest tech equipment",
    "Unlimited PTO",
    "Parental leave",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground">
              Build the future of technology with talented people who share your passion for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Mastersolis?
            </h2>
            <p className="text-muted-foreground">
              We're not just building software—we're shaping the future. Join a team that values innovation, 
              collaboration, and continuous growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="text-sm font-medium text-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground">
              Find your next opportunity and make an impact.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base mb-4">{job.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="self-start md:self-auto">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-primary" />
                      {job.department}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {job.type}
                    </div>
                    <div className="flex items-center font-medium">
                      Experience: {job.experience}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center bg-gradient-primary border-0">
            <CardHeader className="space-y-4 py-12">
              <CardTitle className="text-3xl md:text-4xl text-primary-foreground">
                Don't See Your Role?
              </CardTitle>
              <CardDescription className="text-lg text-primary-foreground/90">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </CardDescription>
              <div className="pt-4">
                <Button size="lg" variant="secondary">
                  Send Your Resume
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
