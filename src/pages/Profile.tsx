import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
  });

  const orders = [
    {
      id: "ORD-001",
      date: "2025-01-15",
      status: "delivered",
      total: 149.97,
      items: 3,
    },
    {
      id: "ORD-002",
      date: "2025-01-10",
      status: "shipped",
      total: 89.99,
      items: 2,
    },
    {
      id: "ORD-003",
      date: "2024-12-28",
      status: "processing",
      total: 199.99,
      items: 4,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-500";
      case "shipped": return "bg-blue-500";
      case "processing": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">My Account</h1>

        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Order History</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="bg-card p-6 rounded-lg max-w-2xl">
              <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  />
                </div>
                <Button>Save Changes</Button>
              </form>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Change Password</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </form>
              </div>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Order History</h2>
              {orders.map((order) => (
                <div key={order.id} className="bg-card p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{order.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      {order.items} items • ${order.total.toFixed(2)}
                    </div>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Saved Addresses</h2>
                <Button>Add New Address</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <Badge>Default</Badge>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <p className="font-semibold mb-2">Home</p>
                  <p className="text-sm text-muted-foreground">
                    123 Main Street<br />
                    Apt 4B<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div></div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <p className="font-semibold mb-2">Work</p>
                  <p className="text-sm text-muted-foreground">
                    456 Business Ave<br />
                    Floor 10<br />
                    New York, NY 10002<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Profile;
