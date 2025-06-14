
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Shield, 
  Users, 
  Settings, 
  Edit, 
  Trash2, 
  Check, 
  X, 
  Eye, 
  Lock, 
  Unlock, 
  UserPlus, 
  Crown, 
  Filter, 
  UserCheck 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const Roles = () => {
  const [activeTab, setActiveTab] = useState('roles');
  const [showCreateRoleDialog, setShowCreateRoleDialog] = useState(false);
  const [showAssignUserDialog, setShowAssignUserDialog] = useState(false);
  const [editingRole, setEditingRole] = useState(null); 

  const handleFeatureClick = (feature, data = null) => {
    if (feature === "Edit Role Permissions") {
      setEditingRole(data); 
    } else {
      toast({
        title: `🚧 ${feature}`,
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  const rolesData = [
    { id: 1, name: "Super Administrator", description: "Full system access with all permissions", users: 2, permissionsCount: 45, color: "from-red-500 to-pink-500", level: "System", icon: Crown },
    { id: 2, name: "HR Manager", description: "Complete HR operations and employee management", users: 5, permissionsCount: 32, color: "from-blue-500 to-cyan-500", level: "Department", icon: Users },
    { id: 3, name: "Recruiter", description: "Recruitment and candidate management access", users: 8, permissionsCount: 18, color: "from-green-500 to-emerald-500", level: "Functional", icon: UserPlus },
    { id: 4, name: "Team Lead", description: "Team management and performance review access", users: 12, permissionsCount: 15, color: "from-purple-500 to-pink-500", level: "Team", icon: Users },
    { id: 5, name: "Employee", description: "Basic access to personal information and training", users: 234, permissionsCount: 8, color: "from-gray-500 to-gray-600", level: "Individual", icon: UserCheck },
  ];

  const permissionsData = [
    { module: "Recruiting", permissions: [ { name: "View Job Postings", key: "recruiting.jobs.view", description: "View all job postings", granted: true }, { name: "Create Job Postings", key: "recruiting.jobs.create", description: "Create new job postings", granted: false }, { name: "Manage Candidates", key: "recruiting.candidates.manage", description: "Edit candidate information", granted: true } ]},
    { module: "Training", permissions: [ { name: "View Courses", key: "training.courses.view", description: "Access course catalog", granted: true }, { name: "Create Courses", key: "training.courses.create", description: "Create new courses", granted: false } ]},
    { module: "Performance", permissions: [ { name: "View Reviews", key: "performance.reviews.view", description: "Access performance reviews", granted: true }, { name: "Conduct Reviews", key: "performance.reviews.conduct", description: "Complete performance reviews", granted: false } ]},
  ];
  
  const usersData = [
    { id: 1, name: "John Smith", email: "john.smith@company.com", role: "Super Administrator", department: "IT", lastActive: "2 hours ago", status: "Active", avatar: "JS" },
    { id: 2, name: "Sarah Johnson", email: "sarah.johnson@company.com", role: "HR Manager", department: "Human Resources", lastActive: "1 day ago", status: "Active", avatar: "SJ" },
    { id: 3, name: "Michael Chen", email: "michael.chen@company.com", role: "Recruiter", department: "Human Resources", lastActive: "3 hours ago", status: "Active", avatar: "MC" },
  ];

  const roleMetrics = [
    { title: "Total Roles", value: rolesData.length, change: "+2", icon: Shield, color: "from-primary to-accent" },
    { title: "Active Users", value: usersData.length, change: "+15", icon: Users, color: "from-green-500 to-emerald-500" },
    { title: "Permission Groups", value: permissionsData.length, change: "+1", icon: Lock, color: "from-purple-500 to-pink-500" },
    { title: "Security Score", value: "94%", change: "+3%", icon: Crown, color: "from-orange-400 to-amber-500" }
  ];

  return (
    <div className="space-y-6 md:space-y-8 px-2 sm:px-0">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">Roles & Permissions</h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Manage user roles and access control with precision.</p>
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <Button onClick={() => setShowCreateRoleDialog(true)} className="gradient-bg text-primary-foreground hover:opacity-90 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Create Role
          </Button>
          <Button onClick={() => setShowAssignUserDialog(true)} variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Assign Users
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {roleMetrics.map((metric, index) => (
          <motion.div key={metric.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
            <Card className="metric-card card-hover cursor-pointer border-border" onClick={() => handleFeatureClick(metric.title)}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-xs sm:text-sm font-medium">{metric.title}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-foreground mt-1 sm:mt-2">{metric.value}</p>
                    <p className="text-green-600 text-xs sm:text-sm mt-0.5 sm:mt-1">{metric.change}</p>
                  </div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                    <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card border border-border rounded-lg p-1">
            <TabsTrigger value="roles" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Roles</TabsTrigger>
            <TabsTrigger value="permissions" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Permissions</TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">User Assignment</TabsTrigger>
          </TabsList>

          <TabsContent value="roles" className="space-y-6">
            <Card className="glass-effect border-border">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search roles by name or level..." className="form-input pl-10 text-sm" onClick={() => handleFeatureClick("Role Search")} readOnly />
                  </div>
                  <Button variant="outline" onClick={() => handleFeatureClick("Role Filters")} className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-sm">
                    <Filter className="w-4 h-4 mr-2" /> Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {rolesData.map((role) => (
                <Card key={role.id} className="glass-effect border-border card-hover cursor-pointer flex flex-col" onClick={() => handleFeatureClick("Role Details", role)}>
                  <CardHeader className="p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${role.color} flex items-center justify-center`}>
                        <role.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <span className="tag text-xs px-2 py-1">{role.level}</span>
                    </div>
                    <CardTitle className="text-base sm:text-lg text-foreground">{role.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 flex-grow">
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{role.description}</p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                      <div className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" />{role.users} users</div>
                      <div className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1" />{role.permissionsCount} permissions</div>
                    </div>
                  </CardContent>
                  <DialogFooter className="p-4 sm:p-5 border-t border-border mt-auto">
                    <Button size="sm" variant="outline" className="flex-1 border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs" onClick={(e) => {e.stopPropagation(); handleFeatureClick("View Role", role);}}>
                      <Eye className="w-3.5 h-3.5 mr-1.5" />View
                    </Button>
                    <Button size="sm" className="flex-1 gradient-bg text-primary-foreground hover:opacity-90 text-xs" onClick={(e) => {e.stopPropagation(); handleFeatureClick("Edit Role Permissions", role);}}>
                      <Edit className="w-3.5 h-3.5 mr-1.5" />Edit
                    </Button>
                  </DialogFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-6">
             {editingRole ? (
              <Card className="glass-effect border-border">
                <CardHeader className="p-4 sm:p-6 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground text-base sm:text-lg">Edit Permissions for: <span className="text-primary">{editingRole.name}</span></CardTitle>
                    <DialogDescription className="text-muted-foreground text-xs sm:text-sm">Toggle permissions for this role.</DialogDescription>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => setEditingRole(null)} className="text-xs">
                    <X className="w-3.5 h-3.5 mr-1.5" /> Close
                  </Button>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto scrollbar-thin">
                  {permissionsData.map((module) => (
                    <div key={module.module} className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2 sm:mb-3">{module.module}</h4>
                      <div className="space-y-2 sm:space-y-3">
                        {module.permissions.map((perm) => (
                          <div key={perm.key} className="flex items-center justify-between p-2.5 sm:p-3 rounded-md bg-card/50 border border-border hover:bg-primary/5">
                            <div>
                              <p className="text-foreground text-xs sm:text-sm font-medium">{perm.name}</p>
                              <p className="text-muted-foreground text-xs">{perm.description}</p>
                            </div>
                            <Button size="sm" variant={perm.granted ? "default" : "outline"} className={`text-xs w-20 ${perm.granted ? 'bg-primary text-primary-foreground' : 'border-border text-muted-foreground'}`} onClick={() => handleFeatureClick("Toggle Permission", {role: editingRole, permission: perm.key})}>
                              {perm.granted ? <><Check className="w-3.5 h-3.5 mr-1"/> Granted</> : <><X className="w-3.5 h-3.5 mr-1"/> Denied</>}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
                <DialogFooter className="p-4 sm:p-6 border-t border-border">
                  <Button className="gradient-bg text-primary-foreground hover:opacity-90 text-sm" onClick={() => {handleFeatureClick("Save Role Permissions", editingRole); setEditingRole(null);}}>Save Changes</Button>
                </DialogFooter>
              </Card>
            ) : (
              <div className="text-center py-10">
                <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Select a role from the 'Roles' tab to view or edit its permissions.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="glass-effect border-border">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search users by name or email..." className="form-input pl-10 text-sm" onClick={() => handleFeatureClick("User Search")} readOnly />
                  </div>
                  <Button variant="outline" onClick={() => handleFeatureClick("User Filters")} className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-sm">
                    <Filter className="w-4 h-4 mr-2" /> Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-3 sm:space-y-4">
              {usersData.map((user) => (
                <Card key={user.id} className="glass-effect border-border card-hover cursor-pointer" onClick={() => handleFeatureClick("User Role Management", user)}>
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-bg flex items-center justify-center shrink-0">
                          <span className="text-primary-foreground font-semibold text-sm sm:text-base">{user.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base font-semibold text-foreground">{user.name}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-xs text-muted-foreground sm:hidden mt-1">{user.department} • {user.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 sm:space-x-6 w-full sm:w-auto mt-2 sm:mt-0">
                        <div className="hidden sm:block text-center">
                          <p className="text-xs text-muted-foreground">Department</p>
                          <p className="text-sm text-foreground font-medium">{user.department}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Role</p>
                          <span className="tag text-xs px-2 py-0.5">{user.role}</span>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Status</p>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${user.status === 'Active' ? 'status-active' : 'status-inactive'}`}>{user.status}</span>
                        </div>
                        <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs" onClick={(e) => {e.stopPropagation(); handleFeatureClick("Edit User Role", user);}}>
                          <Edit className="w-3.5 h-3.5 sm:mr-1.5" /><span className="hidden sm:inline">Edit Role</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      <Dialog open={showCreateRoleDialog} onOpenChange={setShowCreateRoleDialog}>
        <DialogContent className="sm:max-w-md glass-effect border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Create New Role</DialogTitle>
            <DialogDescription className="text-muted-foreground">Define a new role and its description.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4 py-2 sm:py-4" onSubmit={(e) => {e.preventDefault(); handleFeatureClick("Submit New Role"); setShowCreateRoleDialog(false);}}>
            <div><Label htmlFor="roleName" className="text-foreground">Role Name</Label><Input id="roleName" placeholder="e.g., Marketing Specialist" className="form-input mt-1 text-sm" /></div>
            <div><Label htmlFor="roleDescription" className="text-foreground">Description</Label><textarea id="roleDescription" rows={3} placeholder="Briefly describe this role's purpose." className="form-input mt-1 w-full p-2 text-sm" /></div>
            <DialogFooter>
              <Button type="button" variant="outline" className="border-border text-muted-foreground hover:bg-secondary text-sm" onClick={() => setShowCreateRoleDialog(false)}>Cancel</Button>
              <Button type="submit" className="gradient-bg text-primary-foreground hover:opacity-90 text-sm">Create Role</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showAssignUserDialog} onOpenChange={setShowAssignUserDialog}>
        <DialogContent className="sm:max-w-md glass-effect border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Assign Role to User</DialogTitle>
            <DialogDescription className="text-muted-foreground">Select a user and assign them a role.</DialogDescription>
          </DialogHeader>
           <form className="space-y-4 py-2 sm:py-4" onSubmit={(e) => {e.preventDefault(); handleFeatureClick("Submit User Assignment"); setShowAssignUserDialog(false);}}>
            <div>
              <Label htmlFor="selectUser" className="text-foreground">Select User</Label>
              <Select onValueChange={(value) => console.log("Selected user:", value)}>
                <SelectTrigger className="form-input mt-1 text-sm"><SelectValue placeholder="Choose a user..." /></SelectTrigger>
                <SelectContent className="glass-effect border-border">
                  {usersData.map(user => <SelectItem key={user.id} value={user.id.toString()} className="text-sm">{user.name} ({user.email})</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="selectRole" className="text-foreground">Select Role</Label>
              <Select onValueChange={(value) => console.log("Selected role:", value)}>
                <SelectTrigger className="form-input mt-1 text-sm"><SelectValue placeholder="Choose a role..." /></SelectTrigger>
                <SelectContent className="glass-effect border-border">
                  {rolesData.map(role => <SelectItem key={role.id} value={role.id.toString()} className="text-sm">{role.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" className="border-border text-muted-foreground hover:bg-secondary text-sm" onClick={() => setShowAssignUserDialog(false)}>Cancel</Button>
              <Button type="submit" className="gradient-bg text-primary-foreground hover:opacity-90 text-sm">Assign Role</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Roles;
