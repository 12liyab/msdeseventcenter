
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { Calendar as CalendarIcon, User, BookOpen, Settings } from 'lucide-react';

const Dashboard = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock data
  const upcomingBookings = [
    {
      id: 1,
      title: 'Johnson Wedding',
      date: 'Jun 15, 2023',
      time: '3:00 PM - 10:00 PM',
      venue: 'Grand Ballroom',
      status: 'Confirmed'
    },
    {
      id: 2,
      title: 'Corporate Seminar',
      date: 'Jun 22, 2023',
      time: '9:00 AM - 5:00 PM',
      venue: 'Conference Center',
      status: 'Pending'
    }
  ];

  return (
    <Layout>
      <div className="bg-cream-50 py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="mb-2">My <span className="text-gold-500">Dashboard</span></h1>
            <p className="text-gray-600">
              Welcome back, John! Manage your bookings and account information.
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="bg-white border border-gray-200">
              <TabsTrigger value="overview" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="bookings" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                My Bookings
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
                Profile
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Welcome Card */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Welcome Back!</CardTitle>
                    <CardDescription>
                      Here's a summary of your upcoming events and bookings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-medium mb-4">Upcoming Bookings</h3>
                    {upcomingBookings.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingBookings.map((booking) => (
                          <div key={booking.id} className="border rounded-lg p-4 bg-white">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{booking.title}</h4>
                                <p className="text-sm text-gray-600">
                                  {booking.date} • {booking.time}
                                </p>
                                <p className="text-sm text-gray-600">Venue: {booking.venue}</p>
                              </div>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                booking.status === 'Confirmed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {booking.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-center py-4">
                        You don't have any upcoming bookings.
                      </p>
                    )}
                    
                    <div className="mt-4">
                      <Button asChild className="bg-gold-500 hover:bg-gold-600">
                        <a href="/bookings">Book New Event</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Calendar Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      Calendar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border p-0 pointer-events-auto"
                    />
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="md:col-span-3">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Button variant="outline" className="h-24 flex flex-col items-center justify-center border-gold-200 hover:bg-gold-50">
                        <BookOpen className="h-6 w-6 mb-2 text-gold-500" />
                        <span>New Booking</span>
                      </Button>
                      <Button variant="outline" className="h-24 flex flex-col items-center justify-center border-gold-200 hover:bg-gold-50">
                        <CalendarIcon className="h-6 w-6 mb-2 text-gold-500" />
                        <span>View Calendar</span>
                      </Button>
                      <Button variant="outline" className="h-24 flex flex-col items-center justify-center border-gold-200 hover:bg-gold-50">
                        <User className="h-6 w-6 mb-2 text-gold-500" />
                        <span>Edit Profile</span>
                      </Button>
                      <Button variant="outline" className="h-24 flex flex-col items-center justify-center border-gold-200 hover:bg-gold-50">
                        <Settings className="h-6 w-6 mb-2 text-gold-500" />
                        <span>Account Settings</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Bookings Tab - Simple implementation for now */}
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>My Bookings</CardTitle>
                  <CardDescription>
                    View and manage all your past and upcoming bookings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <p className="text-gray-600 mb-4">
                      This section will show a detailed list of all your bookings.
                    </p>
                    <Button
                      onClick={() => toast({ 
                        title: "Coming Soon", 
                        description: "This feature is under development."
                      })}
                      className="bg-gold-500 hover:bg-gold-600"
                    >
                      View All Bookings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab - Simple implementation for now */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                  <CardDescription>
                    View and edit your personal information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <p className="text-gray-600 mb-4">
                      This section will allow you to manage your profile and account settings.
                    </p>
                    <Button
                      onClick={() => toast({ 
                        title: "Coming Soon", 
                        description: "This feature is under development."
                      })}
                      className="bg-gold-500 hover:bg-gold-600"
                    >
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
