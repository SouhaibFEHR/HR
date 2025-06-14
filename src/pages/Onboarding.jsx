
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  UserCheck, 
  FileText, 
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Mail,
  Slack,
  Users,
  Target,
  Award,
  Briefcase,
  BookOpen,
  Settings,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';


const OnboardingMetrics = ({ metrics, handleFeatureClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
    {metrics.map((metric, index) => (
      <motion.div
        key={metric.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        <Card className="metric-card card-hover cursor-pointer border-border" onClick={() => handleFeatureClick(metric.title)}>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-xs sm:text-sm font-medium">{metric.title}</p>
                <p className="text-2xl sm:text-3xl font-bold text-foreground mt-1 sm:mt-2">{metric.value}</p>
                <p className="text-green-600 text-xs sm:text-sm mt-0.5 sm:mt-1">{metric.change} from last month</p>
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
);

const OnboardingList = ({ tasks, handleFeatureClick }) => (
  <div className="space-y-4">
    {tasks.map((task) => (
      <Card key={task.id} className="glass-effect border-border card-hover cursor-pointer" onClick={() => handleFeatureClick("Onboarding Details", task)}>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-grow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <span className="text-primary-foreground font-semibold text-sm sm:text-base">{task.avatar}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">{task.employee}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{task.role} • {task.department}</p>
                <p className="text-muted-foreground text-xs sm:text-sm">Started: {task.startDate}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 w-full lg:w-auto">
              <div className="text-center">
                <span className={`px-2 py-1 sm:px-3 rounded-full text-xs font-medium ${
                  task.status === 'Completed' 
                    ? 'status-active' 
                    : task.status === 'In Progress'
                    ? 'status-pending'
                    : 'status-inactive'
                }`}>
                  {task.status}
                </span>
              </div>
              
              <div className="text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">Tasks</p>
                <p className="text-foreground font-medium text-sm sm:text-base">{task.completedTasks}/{task.totalTasks}</p>
              </div>
              
              <div className="text-center min-w-[100px] sm:min-w-[120px]">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Progress</p>
                <Progress value={task.progress} className="h-1.5 sm:h-2" />
                <p className="text-xs text-muted-foreground mt-1">{task.progress}%</p>
              </div>
              
              <div className="flex space-x-1.5 sm:space-x-2 self-start sm:self-center">
                <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs" onClick={(e) => { e.stopPropagation(); handleFeatureClick("Email Employee", task);}}>
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-1" /><span className="hidden sm:inline">Email</span>
                </Button>
                <Button size="sm" className="gradient-bg text-primary-foreground hover:opacity-90 text-xs" onClick={(e) => { e.stopPropagation(); handleFeatureClick("Manage Onboarding", task);}}>
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-1" /><span className="hidden sm:inline">Manage</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const ChecklistTemplatesTab = ({ templates, handleFeatureClick }) => (
  <div className="space-y-6">
    <Card className="glass-effect border-border">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search templates..." className="form-input pl-10 text-sm" onClick={() => handleFeatureClick("Template Search")} readOnly />
          </div>
          <Button onClick={() => handleFeatureClick("Create Template")} className="gradient-bg text-primary-foreground hover:opacity-90 text-sm">
            <Plus className="w-4 h-4 mr-2" /> Create Template
          </Button>
        </div>
      </CardContent>
    </Card>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {templates.map((template) => (
        <Card key={template.id} className="glass-effect border-border card-hover cursor-pointer flex flex-col" onClick={() => handleFeatureClick("Template Details", template)}>
          <CardHeader className="p-4 sm:p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{template.name}</h3>
              <span className="tag text-xs px-2 py-1">{template.tasks} tasks</span>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-5 flex-grow">
            <div className="mb-3 sm:mb-4">
              <p className="text-xs text-muted-foreground mb-1">Categories:</p>
              <div className="flex flex-wrap gap-1.5">
                {template.categories.slice(0, 3).map((cat) => <span key={cat} className="tag text-xs px-1.5 py-0.5">{cat}</span>)}
                {template.categories.length > 3 && <span className="tag text-xs px-1.5 py-0.5">+{template.categories.length - 3} more</span>}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              <span>Duration: {template.duration}</span>
              <span>Used {template.usage} times</span>
            </div>
          </CardContent>
          <DialogFooter className="p-4 sm:p-5 border-t border-border mt-auto">
            <Button size="sm" variant="outline" className="flex-1 border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs" onClick={(e) => {e.stopPropagation(); handleFeatureClick("Preview Template", template);}}>
              <BookOpen className="w-3.5 h-3.5 mr-1.5" />Preview
            </Button>
            <Button size="sm" className="flex-1 gradient-bg text-primary-foreground hover:opacity-90 text-xs" onClick={(e) => {e.stopPropagation(); handleFeatureClick("Use Template", template);}}>
              <UserCheck className="w-3.5 h-3.5 mr-1.5" />Use
            </Button>
          </DialogFooter>
        </Card>
      ))}
    </div>
  </div>
);

const HrOperationsTab = ({ operations, handleFeatureClick }) => (
   <div className="space-y-4">
    {operations.map((op) => (
      <Card key={op.id} className="glass-effect border-border card-hover cursor-pointer" onClick={() => handleFeatureClick("Operation Details", op)}>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-grow">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gradient-to-r ${
                op.type === 'Leave Request' ? 'from-blue-500 to-cyan-500' : 
                op.type === 'Document Upload' ? 'from-green-500 to-emerald-500' : 
                'from-purple-500 to-pink-500'
              }`}>
                {op.type === 'Leave Request' && <Calendar className="w-5 h-5 text-primary-foreground" />}
                {op.type === 'Document Upload' && <FileText className="w-5 h-5 text-primary-foreground" />}
                {op.type === 'Payroll Query' && <Briefcase className="w-5 h-5 text-primary-foreground" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-0.5">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{op.type}</h3>
                  <span className={`tag text-xs px-2 py-0.5 ${
                    op.priority === 'High' ? 'priority-high' : op.priority === 'Normal' ? 'priority-medium' : 'priority-low'
                  }`}>{op.priority}</span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">{op.employee}</p>
                <p className="text-foreground text-xs sm:text-sm">{op.details}</p>
              </div>
            </div>
             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 w-full sm:w-auto mt-2 sm:mt-0">
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground">Status</p>
                  <span className={`px-2 py-1 sm:px-3 rounded-full text-xs font-medium ${
                    op.status === 'Completed' ? 'status-active' : 
                    op.status === 'Pending Approval' ? 'status-pending' : 
                    'status-inactive'
                  }`}>{op.status}</span>
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground">Submitted</p>
                  <p className="text-foreground font-medium text-sm sm:text-base">{op.submitted}</p>
                </div>
                <div className="flex space-x-1.5 sm:space-x-2 self-start sm:self-center">
                  <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs" onClick={(e) => {e.stopPropagation();handleFeatureClick("Contact Employee", op)}}>
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-1" /><span className="hidden sm:inline">Contact</span>
                  </Button>
                  <Button size="sm" className="gradient-bg text-primary-foreground hover:opacity-90 text-xs" onClick={(e) => {e.stopPropagation(); handleFeatureClick("Process Operation", op)}}>
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-1" /><span className="hidden sm:inline">Process</span>
                  </Button>
                </div>
              </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const OnboardingAnalyticsTab = ({ taskCategories, handleFeatureClick }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <Card className="glass-effect border-border">
      <CardHeader><CardTitle className="text-foreground">Task Completion by Category</CardTitle></CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {taskCategories.map((category) => (
          <div key={category.name} className="cursor-pointer hover:bg-primary/5 p-3 rounded-lg transition-colors" onClick={() => handleFeatureClick(`${category.name} Analytics`, category)}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-foreground font-medium text-sm sm:text-base">{category.name}</span>
              <span className="text-muted-foreground text-xs sm:text-sm">{category.completed}/{category.total}</span>
            </div>
            <Progress value={(category.completed / category.total) * 100} className="h-1.5 sm:h-2" indicatorClassName={`bg-gradient-to-r ${category.color}`} />
            <p className="text-xs text-muted-foreground mt-1">{Math.round((category.completed / category.total) * 100)}% completion</p>
          </div>
        ))}
      </CardContent>
    </Card>
    <Card className="glass-effect border-border">
      <CardHeader><CardTitle className="text-foreground">Onboarding Efficiency</CardTitle></CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        {[
          { label: "Average Completion Time", value: "12 days", progress: 75, color: "from-primary to-accent" },
          { label: "Employee Satisfaction", value: "4.8/5", progress: 96, color: "from-green-500 to-emerald-500" },
          { label: "Task Automation Rate", value: "67%", progress: 67, color: "from-purple-500 to-pink-500" }
        ].map(metric => (
          <div key={metric.label} className="cursor-pointer hover:bg-primary/5 p-3 rounded-lg transition-colors" onClick={() => handleFeatureClick(`${metric.label} Details`, metric)}>
            <div className="flex justify-between text-sm sm:text-base mb-1.5">
              <span className="text-muted-foreground">{metric.label}</span>
              <span className="text-foreground font-medium">{metric.value}</span>
            </div>
            <Progress value={metric.progress} className="h-1.5 sm:h-2" indicatorClassName={`bg-gradient-to-r ${metric.color}`} />
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);


const Onboarding = () => {
  const [activeTab, setActiveTab] = useState('onboarding');
  const [showNewOnboardingDialog, setShowNewOnboardingDialog] = useState(false);

  const handleFeatureClick = (feature, data = null) => {
    console.log("Feature clicked:", feature, data);
    toast({
      title: `🚧 ${feature}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleSubmitNewOnboarding = (e) => {
    e.preventDefault();
    handleFeatureClick("Submit New Onboarding Plan");
    setShowNewOnboardingDialog(false);
  };

  const onboardingTasks = [
    { id: 1, employee: "Sarah Johnson", role: "Senior React Developer", startDate: "Dec 15, 2024", progress: 75, completedTasks: 9, totalTasks: 12, status: "In Progress", avatar: "SJ", department: "Engineering" },
    { id: 2, employee: "Michael Chen", role: "UX Designer", startDate: "Dec 10, 2024", progress: 100, completedTasks: 10, totalTasks: 10, status: "Completed", avatar: "MC", department: "Design" },
    { id: 3, employee: "Emily Rodriguez", role: "Product Manager", startDate: "Dec 20, 2024", progress: 30, completedTasks: 3, totalTasks: 10, status: "In Progress", avatar: "ER", department: "Product" }
  ];

  const checklistTemplates = [
    { id: 1, name: "Engineering Onboarding", tasks: 15, categories: ["IT Setup", "Access", "Team Intro", "Training", "Project"], duration: "2 weeks", usage: 45 },
    { id: 2, name: "Sales Team Onboarding", tasks: 12, categories: ["CRM", "Product", "Sales Process", "Clients"], duration: "10 days", usage: 23 },
    { id: 3, name: "Executive Onboarding", tasks: 8, categories: ["Strategy", "Stakeholders", "Culture", "Leadership"], duration: "1 week", usage: 12 }
  ];

  const hrOperations = [
    { id: 1, type: "Leave Request", employee: "David Kim", details: "Vacation - Dec 25-29", status: "Pending Approval", submitted: "2 days ago", priority: "Normal" },
    { id: 2, type: "Document Upload", employee: "Lisa Wang", details: "Updated Contact Form", status: "Completed", submitted: "1 day ago", priority: "Low" },
    { id: 3, type: "Payroll Query", employee: "Alex Johnson", details: "Overtime calculation", status: "In Review", submitted: "3 hours ago", priority: "High" }
  ];

  const metrics = [
    { title: "Active Onboardings", value: onboardingTasks.filter(t => t.status === "In Progress").length, change: "+1", icon: UserCheck, color: "from-blue-500 to-cyan-500" },
    { title: "Avg. Completion Time", value: "12 days", change: "-2d", icon: Clock, color: "from-green-500 to-emerald-500" },
    { title: "Satisfaction Score", value: "4.8/5", change: "+0.2", icon: Award, color: "from-purple-500 to-pink-500" },
    { title: "Pending Tasks", value: "23", change: "-5", icon: FileText, color: "from-orange-500 to-red-500" }
  ];

  const taskCategories = [
    { name: "IT Setup", completed: 45, total: 50, color: "from-blue-500 to-cyan-500" },
    { name: "Documentation", completed: 38, total: 42, color: "from-green-500 to-emerald-500" },
    { name: "Training", completed: 29, total: 35, color: "from-purple-500 to-pink-500" },
    { name: "Team Meetings", completed: 33, total: 38, color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="space-y-6 md:space-y-8 px-2 sm:px-0">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">Onboarding & HR Ops</h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Streamline employee journeys and HR tasks.</p>
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <Button onClick={() => setShowNewOnboardingDialog(true)} className="gradient-bg text-primary-foreground hover:opacity-90 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> New Onboarding
          </Button>
          <Button onClick={() => handleFeatureClick("Automation Settings")} variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Automation
          </Button>
        </div>
      </motion.div>

      <OnboardingMetrics metrics={metrics} handleFeatureClick={handleFeatureClick} />
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-card border border-border rounded-lg p-1">
            <TabsTrigger value="onboarding" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Active Onboarding</TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Checklists</TabsTrigger>
            <TabsTrigger value="operations" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">HR Operations</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="onboarding" className="space-y-6">
            <Card className="glass-effect border-border">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search employees..." className="form-input pl-10 text-sm" onClick={() => handleFeatureClick("Employee Search")} readOnly />
                  </div>
                  <Button variant="outline" onClick={() => handleFeatureClick("Onboarding Filters")} className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-sm">
                    <Filter className="w-4 h-4 mr-2" /> Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
            <OnboardingList tasks={onboardingTasks} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
          <TabsContent value="templates">
            <ChecklistTemplatesTab templates={checklistTemplates} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
          <TabsContent value="operations">
            <HrOperationsTab operations={hrOperations} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
          <TabsContent value="analytics">
            <OnboardingAnalyticsTab taskCategories={taskCategories} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
        </Tabs>
      </motion.div>

      <Dialog open={showNewOnboardingDialog} onOpenChange={setShowNewOnboardingDialog}>
        <DialogContent className="sm:max-w-lg glass-effect border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Start New Onboarding</DialogTitle>
            <DialogDescription className="text-muted-foreground">Select employee and onboarding checklist.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitNewOnboarding} className="space-y-4 py-2 sm:py-4">
            <div><Label htmlFor="employeeName" className="text-foreground">Employee Name</Label><Input id="employeeName" placeholder="e.g., John Doe" className="form-input mt-1 text-sm" /></div>
            <div><Label htmlFor="employeeRole" className="text-foreground">Role</Label><Input id="employeeRole" placeholder="e.g., Software Engineer" className="form-input mt-1 text-sm" /></div>
            <div><Label htmlFor="startDate" className="text-foreground">Start Date</Label><Input id="startDate" type="date" className="form-input mt-1 text-sm" /></div>
            <div>
              <Label htmlFor="checklistTemplate" className="text-foreground">Checklist Template</Label>
              <select id="checklistTemplate" className="form-input mt-1 w-full p-2 text-sm">
                <option value="">Select a template...</option>
                {checklistTemplates.map(template => <option key={template.id} value={template.id}>{template.name}</option>)}
              </select>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" className="border-border text-muted-foreground hover:bg-secondary text-sm" onClick={() => setShowNewOnboardingDialog(false)}>Cancel</Button>
              <Button type="submit" className="gradient-bg text-primary-foreground hover:opacity-90 text-sm">Start Onboarding</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Onboarding;
