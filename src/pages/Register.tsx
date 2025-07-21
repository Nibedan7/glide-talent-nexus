import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, Mail, Lock, User, Building, Users, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
    // Student specific
    university: "",
    major: "",
    graduationYear: "",
    // Company specific
    companyName: "",
    industry: "",
    companySize: "",
    website: "",
    // Mentor specific
    expertise: "",
    experience: "",
    bio: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempt:", { userType, ...formData });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <span className="text-3xl font-bold text-white">CareerGlide</span>
          </Link>
          <p className="text-white/80 mt-2">Create your account and start your journey</p>
        </div>

        <Card className="shadow-large">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>Choose your role and fill in your details</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={userType} onValueChange={setUserType} className="mb-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student">
                  <User className="w-4 h-4 mr-2" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="company">
                  <Building className="w-4 h-4 mr-2" />
                  Company
                </TabsTrigger>
                <TabsTrigger value="mentor">
                  <Users className="w-4 h-4 mr-2" />
                  Mentor
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit} className="mt-6">
                {/* Common Fields */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Role-specific Fields */}
                <TabsContent value="student" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="university">University</Label>
                      <Input
                        id="university"
                        placeholder="e.g., Stanford University"
                        value={formData.university}
                        onChange={(e) => handleInputChange("university", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="major">Major</Label>
                      <Input
                        id="major"
                        placeholder="e.g., Computer Science"
                        value={formData.major}
                        onChange={(e) => handleInputChange("major", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Expected Graduation Year</Label>
                    <Input
                      id="graduationYear"
                      placeholder="e.g., 2025"
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                      required
                    />
                  </div>
                </TabsContent>

                <TabsContent value="company" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        placeholder="e.g., TechCorp Inc."
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Input
                        id="industry"
                        placeholder="e.g., Technology"
                        value={formData.industry}
                        onChange={(e) => handleInputChange("industry", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size</Label>
                      <Input
                        id="companySize"
                        placeholder="e.g., 100-500 employees"
                        value={formData.companySize}
                        onChange={(e) => handleInputChange("companySize", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        placeholder="e.g., https://company.com"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="mentor" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expertise">Expertise Areas</Label>
                      <Input
                        id="expertise"
                        placeholder="e.g., Software Engineering, AI/ML"
                        value={formData.expertise}
                        onChange={(e) => handleInputChange("expertise", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        placeholder="e.g., 5+ years"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about your background and what you can offer as a mentor..."
                      value={formData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      rows={3}
                      required
                    />
                  </div>
                </TabsContent>

                <div className="flex items-center space-x-2 mt-6 mb-6">
                  <input type="checkbox" id="terms" className="rounded" required />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Create {userType.charAt(0).toUpperCase() + userType.slice(1)} Account
                </Button>
              </form>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;