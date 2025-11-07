import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through transparency and ethical practices.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in everything we do.",
    },
  ];

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Started with a vision to transform businesses through technology" },
    { year: "2019", title: "50+ Clients", description: "Reached milestone of serving 50 enterprise clients" },
    { year: "2021", title: "AI Division Launch", description: "Established dedicated AI and machine learning division" },
    { year: "2023", title: "Global Expansion", description: "Expanded operations to 5 countries across 3 continents" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About Mastersolis Infotech
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a forward-thinking IT company dedicated to empowering businesses through innovative technology solutions, 
              artificial intelligence, and expert consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To empower businesses worldwide with innovative technology solutions that drive growth, 
                  efficiency, and digital transformation. We strive to make cutting-edge technology accessible 
                  and practical for organizations of all sizes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the global leader in AI-powered business solutions, recognized for our innovation, 
                  reliability, and commitment to client success. We envision a future where technology 
                  seamlessly enhances every aspect of business operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Milestones */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        {milestone.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{milestone.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">200+</div>
              <div className="text-primary-foreground/80">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">100+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/80">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">5</div>
              <div className="text-primary-foreground/80">Countries</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
