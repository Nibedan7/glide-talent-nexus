import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Mail, Lock, User, Building, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password, userType });
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <span className="text-3xl font-bold text-white">CareerGlide</span>
          </Link>
          <p className="text-white/80 mt-2">Welcome back! Sign in to your account</p>
        </div>

        <Card className="shadow-large">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>Choose your role and sign in to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={userType} onValueChange={setUserType} className="mb-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="student" className="text-xs">
                  <User className="w-4 h-4 mr-1" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="company" className="text-xs">
                  <Building className="w-4 h-4 mr-1" />
                  Company
                </TabsTrigger>
                <TabsTrigger value="mentor" className="text-xs">
                  <Users className="w-4 h-4 mr-1" />
                  Mentor
                </TabsTrigger>
                <TabsTrigger value="admin" className="text-xs">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Admin
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="rounded" />
                  <label htmlFor="remember" className="text-muted-foreground">Remember me</label>
                </div>
                <Link to="/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full">
                Sign In as {userType.charAt(0).toUpperCase() + userType.slice(1)}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary font-medium hover:underline">
                  Sign up here
                </Link>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Demo Credentials:</h4>
              <div className="text-xs space-y-1 text-muted-foreground">
                <div>Student: student@demo.com / password123</div>
                <div>Company: company@demo.com / password123</div>
                <div>Mentor: mentor@demo.com / password123</div>
                <div>Admin: admin@demo.com / password123</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;