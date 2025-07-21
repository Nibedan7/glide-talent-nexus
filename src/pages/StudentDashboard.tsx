import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Briefcase, 
  Users, 
  Bell, 
  BookOpen, 
  TrendingUp,
  CheckCircle,
  Clock,
  XCircle,
  Plus
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";

// Mock data
const mockProfile = {
  name: "Alex Johnson",
  college: "Stanford University",
  major: "Computer Science",
  year: "Junior",
  completionPercentage: 75,
  avatar: "/api/placeholder/120/120"
};

const mockApplications = [
  {
    id: 1,
    company: "Google",
    position: "Software Engineering Intern",
    status: "Under Review",
    appliedDate: "2024-01-15",
    statusColor: "bg-yellow-500"
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Frontend Developer Intern",
    status: "Accepted",
    appliedDate: "2024-01-10",
    statusColor: "bg-green-500"
  },
  {
    id: 3,
    company: "Meta",
    position: "Data Science Intern",
    status: "Rejected",
    appliedDate: "2024-01-08",
    statusColor: "bg-red-500"
  }
];

const mockMentorInvitations = [
  {
    id: 1,
    mentor: "Sarah Chen",
    expertise: "Full Stack Development",
    company: "Netflix",
    message: "I'd love to mentor you in web development!",
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 2,
    mentor: "David Park",
    expertise: "Machine Learning",
    company: "Tesla",
    message: "Let's work together on ML projects!",
    avatar: "/api/placeholder/60/60"
  }
];

const mockRecommendedJobs = [
  {
    id: 1,
    title: "React Developer Intern",
    company: "Airbnb",
    location: "San Francisco, CA",
    match: 95
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Stripe",
    location: "Remote",
    match: 88
  }
];

const StudentDashboard = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Accepted":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Rejected":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, {mockProfile.name}! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your career journey today.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Summary */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Profile Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold text-lg">AJ</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{mockProfile.name}</h3>
                      <p className="text-muted-foreground">{mockProfile.major} • {mockProfile.year}</p>
                      <p className="text-sm text-muted-foreground">{mockProfile.college}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Profile Completion</span>
                      <span className="text-foreground font-medium">{mockProfile.completionPercentage}%</span>
                    </div>
                    <Progress value={mockProfile.completionPercentage} className="h-2" />
                  </div>
                  
                  <Button className="w-full">Complete Your Profile</Button>
                </CardContent>
              </Card>

              {/* Job Recommendations */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Recommended for You
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockRecommendedJobs.map((job) => (
                      <div key={job.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div>
                          <h4 className="font-medium text-foreground">{job.title}</h4>
                          <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline">{job.match}% match</Badge>
                          <Button size="sm">Apply</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">View All Jobs</Button>
                </CardContent>
              </Card>

              {/* My Applications */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      My Applications
                    </div>
                    <Badge variant="outline">{mockApplications.length} total</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockApplications.map((application) => (
                      <div key={application.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                        <div className="flex items-start space-x-3">
                          {getStatusIcon(application.status)}
                          <div>
                            <h4 className="font-medium text-foreground">{application.position}</h4>
                            <p className="text-sm text-muted-foreground">{application.company}</p>
                            <p className="text-xs text-muted-foreground">Applied on {application.appliedDate}</p>
                          </div>
                        </div>
                        <Badge variant={
                          application.status === "Accepted" ? "default" :
                          application.status === "Rejected" ? "destructive" : "secondary"
                        }>
                          {application.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Mentor Invitations */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Mentor Invitations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockMentorInvitations.map((invitation) => (
                      <div key={invitation.id} className="p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                            <span className="text-primary font-medium text-sm">
                              {invitation.mentor.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground text-sm">{invitation.mentor}</h4>
                            <p className="text-xs text-muted-foreground">{invitation.expertise}</p>
                            <p className="text-xs text-muted-foreground">{invitation.company}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{invitation.message}</p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">Accept</Button>
                          <Button size="sm" variant="outline" className="flex-1">Decline</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Add Project to Portfolio
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Find a Mentor
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Browse Jobs
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Recent Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <p className="font-medium">New job matches available</p>
                      <p className="text-muted-foreground text-xs">2 hours ago</p>
                    </div>
                    <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                      <p className="font-medium">Application status updated</p>
                      <p className="text-muted-foreground text-xs">1 day ago</p>
                    </div>
                    <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
                      <p className="font-medium">Profile completion reminder</p>
                      <p className="text-muted-foreground text-xs">2 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;