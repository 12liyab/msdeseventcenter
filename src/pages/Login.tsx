
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back to Ms Dee's Event Center.",
      });
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if passwords match
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      toast({
        title: "Registration Successful",
        description: "Your account has been created.",
      });
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <Layout>
      <div className="py-16 bg-cream-50 min-h-screen">
        <div className="container-custom max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to manage your events and bookings</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        value={loginData.email}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-sm font-medium">
                          Password
                        </label>
                        <Link to="/forgot-password" className="text-sm text-gold-600 hover:text-gold-700">
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={loginData.password}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gold-500 hover:bg-gold-600"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a className="text-gold-600 hover:text-gold-700 font-medium cursor-pointer" onClick={() => document.getElementById('register-tab')?.click()}>
                      Sign up
                    </a>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="register" id="register-tab">
              <Card>
                <CardHeader>
                  <CardTitle>Create an Account</CardTitle>
                  <CardDescription>
                    Enter your information to create an account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={registerData.name}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reg-email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="reg-email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        value={registerData.email}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reg-password" className="text-sm font-medium">
                        Password
                      </label>
                      <Input
                        id="reg-password"
                        name="password"
                        type="password"
                        required
                        value={registerData.password}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="text-sm font-medium">
                        Confirm Password
                      </label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gold-500 hover:bg-gold-600"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <a className="text-gold-600 hover:text-gold-700 font-medium cursor-pointer" onClick={() => document.getElementById('login-tab')?.click()}>
                      Sign in
                    </a>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
