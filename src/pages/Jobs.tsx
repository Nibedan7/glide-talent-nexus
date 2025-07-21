import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, DollarSign, Building2, Filter } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Internship",
    duration: "3 months",
    stipend: "$2,000/month",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    description: "Join our dynamic team to build cutting-edge web applications using modern technologies.",
    posted: "2 days ago",
    applicants: 45
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Innovation Labs",
    location: "New York, NY",
    type: "Full-time",
    duration: "Permanent",
    stipend: "$75,000/year",
    skills: ["Node.js", "React", "MongoDB"],
    description: "Looking for a passionate full-stack developer to join our growing team.",
    posted: "1 week ago",
    applicants: 89
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "DataMind Inc",
    location: "Austin, TX",
    type: "Internship",
    duration: "6 months",
    stipend: "$1,800/month",
    skills: ["Python", "Machine Learning", "SQL"],
    description: "Work on real-world data projects and gain hands-on experience in data science.",
    posted: "3 days ago",
    applicants: 67
  }
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || job.type.toLowerCase() === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Your Dream <span className="text-primary">Opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover internships and jobs from top companies looking for talented individuals like you.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-2xl p-6 mb-8 shadow-medium">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={selectedType === "all" ? "default" : "outline"}
                  onClick={() => setSelectedType("all")}
                >
                  All Jobs
                </Button>
                <Button
                  variant={selectedType === "internship" ? "default" : "outline"}
                  onClick={() => setSelectedType("internship")}
                >
                  Internships
                </Button>
                <Button
                  variant={selectedType === "full-time" ? "default" : "outline"}
                  onClick={() => setSelectedType("full-time")}
                >
                  Full-time
                </Button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-large transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </div>
                    <Badge variant={job.type === "Internship" ? "secondary" : "default"}>
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {job.stipend}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      {job.applicants} applicants • Posted {job.posted}
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;