import { useState } from "react";
import { Search, Calendar, Users, Send, Check, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SkillTag } from "@/components/ui/skill-tag";
import { StatusBadge } from "@/components/ui/status-badge";

// Mock data
const mockStudents = [
  {
    id: 1,
    name: "Alex Johnson",
    college: "MIT",
    year: "3rd Year",
    skills: ["React", "Node.js", "Python", "Machine Learning"],
    avatar: "",
    gpa: "3.8",
    projects: 5,
    github: "alexj",
    linkedin: "alex-johnson"
  },
  {
    id: 2,
    name: "Sarah Chen",
    college: "Stanford University",
    year: "2nd Year",
    skills: ["JavaScript", "React", "MongoDB", "Express"],
    avatar: "",
    gpa: "3.9",
    projects: 3,
    github: "sarahc",
    linkedin: "sarah-chen"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    college: "UC Berkeley",
    year: "4th Year",
    skills: ["Java", "Spring Boot", "SQL", "AWS"],
    avatar: "",
    gpa: "3.7",
    projects: 7,
    github: "mikr",
    linkedin: "michael-rodriguez"
  }
];

const mockInvitations = [
  {
    id: 1,
    studentName: "Emma Wilson",
    college: "Harvard",
    skills: ["React", "TypeScript"],
    status: "pending" as const,
    sentDate: "2024-01-15",
    avatar: ""
  },
  {
    id: 2,
    studentName: "James Kim",
    college: "CMU",
    skills: ["Python", "AI/ML"],
    status: "approved" as const,
    sentDate: "2024-01-10",
    avatar: ""
  },
  {
    id: 3,
    studentName: "Lisa Zhang",
    college: "MIT",
    skills: ["JavaScript", "React"],
    status: "rejected" as const,
    sentDate: "2024-01-08",
    avatar: ""
  }
];

const mockAcceptedStudents = [
  {
    id: 1,
    name: "James Kim",
    college: "CMU",
    skills: ["Python", "AI/ML"],
    nextSession: "2024-01-20",
    totalSessions: 3,
    avatar: ""
  },
  {
    id: 2,
    name: "David Park",
    college: "Georgia Tech",
    skills: ["React", "Node.js"],
    nextSession: "2024-01-22",
    totalSessions: 5,
    avatar: ""
  }
];

const skillOptions = ["React", "Node.js", "Python", "Java", "JavaScript", "TypeScript", "Machine Learning", "AI", "AWS", "MongoDB", "SQL"];

const MentorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("search");

  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.college.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => student.skills.includes(skill));
    return matchesSearch && matchesSkills;
  });

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSendInvitation = (studentId: number) => {
    console.log(`Sending invitation to student ${studentId}`);
    // Implementation would go here
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Mentor Dashboard</h1>
          <p className="text-muted-foreground">Find and mentor talented students</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Active Students</p>
                  <p className="text-2xl font-bold text-foreground">{mockAcceptedStudents.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Sent Invitations</p>
                  <p className="text-2xl font-bold text-foreground">{mockInvitations.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">This Week Sessions</p>
                  <p className="text-2xl font-bold text-foreground">5</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Sessions</p>
                  <p className="text-2xl font-bold text-foreground">23</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="search">Find Students</TabsTrigger>
            <TabsTrigger value="invitations">My Invitations</TabsTrigger>
            <TabsTrigger value="students">My Students</TabsTrigger>
          </TabsList>

          {/* Find Students Tab */}
          <TabsContent value="search" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Search Students</CardTitle>
                <CardDescription>Find students based on skills and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or college..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Skill Filters */}
                <div>
                  <p className="text-sm font-medium mb-3">Filter by Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {skillOptions.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => handleSkillToggle(skill)}
                        className="cursor-pointer"
                      >
                        <SkillTag
                          skill={skill}
                          variant={selectedSkills.includes(skill) ? "primary" : "default"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Student Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStudents.map((student) => (
                    <Card key={student.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={student.avatar} />
                            <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{student.name}</h3>
                            <p className="text-sm text-muted-foreground">{student.college}</p>
                            <p className="text-sm text-muted-foreground">{student.year}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">GPA:</span>
                            <span className="font-medium">{student.gpa}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Projects:</span>
                            <span className="font-medium">{student.projects}</span>
                          </div>
                        </div>

                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Skills:</p>
                          <div className="flex flex-wrap gap-1">
                            {student.skills.slice(0, 3).map((skill) => (
                              <SkillTag key={skill} skill={skill} variant="secondary" />
                            ))}
                            {student.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{student.skills.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="mt-6 flex space-x-2">
                          <Button 
                            size="sm" 
                            className="flex-1"
                            onClick={() => handleSendInvitation(student.id)}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Send Invite
                          </Button>
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Invitations Tab */}
          <TabsContent value="invitations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sent Invitations</CardTitle>
                <CardDescription>Track your invitation status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInvitations.map((invitation) => (
                    <div key={invitation.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={invitation.avatar} />
                          <AvatarFallback>{invitation.studentName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{invitation.studentName}</p>
                          <p className="text-sm text-muted-foreground">{invitation.college}</p>
                          <div className="flex gap-1 mt-1">
                            {invitation.skills.slice(0, 2).map((skill) => (
                              <SkillTag key={skill} skill={skill} variant="secondary" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Sent: {invitation.sentDate}</p>
                          <StatusBadge status={invitation.status} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Students</CardTitle>
                <CardDescription>Students you're currently mentoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAcceptedStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={student.avatar} />
                          <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.college}</p>
                          <div className="flex gap-1 mt-1">
                            {student.skills.slice(0, 2).map((skill) => (
                              <SkillTag key={skill} skill={skill} variant="primary" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Next Session: {student.nextSession}</p>
                          <p className="text-sm text-muted-foreground">Total Sessions: {student.totalSessions}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule
                          </Button>
                          <Button size="sm">
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MentorDashboard;