
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Users, 
  Brain, 
  Mail, 
  Calendar,
  MapPin,
  Briefcase,
  Clock,
  Eye,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';

const Recruiting = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showCreateJobDialog, setShowCreateJobDialog] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');


  const handleFeatureClick = (feature) => {
    toast({
      title: `🚧 ${feature}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleCreateJobSubmit = (e) => {
    e.preventDefault();
    if (!jobTitle || !department || !location || !description) {
      toast({
        variant: "destructive",
        title: "⚠️ Missing Information",
        description: "Please fill out all fields to create a job posting.",
      });
      return;
    }
    
    console.log("Creating job posting:", { jobTitle, department, location, description });
    
    setShowCreateJobDialog(false);
    setJobTitle('');
    setDepartment('');
    setLocation('');
    setDescription('');
    
    toast({
      title: "🎉 Job Posting Created (Simulated)",
      description: "Your new job posting has been drafted and is ready for review!"
    });
  };

  const jobPostings = [
    { id: 1, title: "Senior React Developer", department: "Engineering", location: "Remote", applicants: 47, status: "Active", posted: "2 days ago", aiScore: 94 },
    { id: 2, title: "UX Designer", department: "Design", location: "New York", applicants: 23, status: "Active", posted: "1 week ago", aiScore: 87 },
    { id: 3, title: "DevOps Engineer", department: "Engineering", location: "San Francisco", applicants: 31, status: "Draft", posted: "3 days ago", aiScore: 91 }
  ];

  const candidates = [
    { id: 1, name: "Sarah Johnson", role: "Senior React Developer", location: "Seattle, WA", aiScore: 96, status: "Interview Scheduled", avatar: "SJ", skills: ["React", "TypeScript"], lastActivity: "2h ago" },
    { id: 2, name: "Michael Chen", role: "UX Designer", location: "Austin, TX", aiScore: 89, status: "Under Review", avatar: "MC", skills: ["Figma", "Research"], lastActivity: "1d ago" },
    { id: 3, name: "Emily Rodriguez", role: "DevOps Engineer", location: "Remote", aiScore: 93, status: "Phone Screen", avatar: "ER", skills: ["AWS", "Kubernetes"], lastActivity: "3h ago" }
  ];

  return (
    <div className="space-y-8 px-2 sm:px-0">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">AI Recruiting Hub</h1>
          <p className="text-muted-foreground text-base md:text-lg">Intelligent talent acquisition powered by AI</p>
        </div>
        <div className="flex space-x-3">
          <Dialog open={showCreateJobDialog} onOpenChange={setShowCreateJobDialog}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                <Plus className="w-4 h-4 mr-2" /> Create Job
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px] glass-effect border-border">
              <DialogHeader>
                <DialogTitle className="text-foreground">Create New Job Posting</DialogTitle>
                <DialogDescription className="text-muted-foreground">Fill in the details for the new position.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateJobSubmit} className="space-y-4 py-4">
                <div>
                  <Label htmlFor="jobTitle" className="text-foreground">Job Title</Label>
                  <Input id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="e.g., Senior React Developer" className="form-input mt-1" />
                </div>
                <div>
                  <Label htmlFor="department" className="text-foreground">Department</Label>
                  <Input id="department" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="e.g., Engineering" className="form-input mt-1" />
                </div>
                <div>
                  <Label htmlFor="location" className="text-foreground">Location</Label>
                  <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., Remote, New York" className="form-input mt-1" />
                </div>
                <div>
                  <Label htmlFor="description" className="text-foreground">Job Description</Label>
                  <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Enter job responsibilities, requirements, etc." className="form-input mt-1 w-full p-2" />
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" className="border-border text-muted-foreground hover:bg-secondary" onClick={() => setShowCreateJobDialog(false)}>Cancel</Button>
                  <Button type="submit" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">Create Posting</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
          <Button onClick={() => handleFeatureClick("AI Sourcing")} className="bg-gradient-to-r from-purple-500 to-pink-500 text-primary-foreground hover:opacity-90">
            <Brain className="w-4 h-4 mr-2" /> AI Sourcing
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Active Jobs", value: "12", icon: Briefcase, color: "from-primary to-accent" },
          { title: "Total Candidates", value: "1,247", icon: Users, color: "from-green-500 to-emerald-500" },
          { title: "AI Matches", value: "89%", icon: Brain, color: "from-purple-500 to-pink-500" },
          { title: "Time to Hire", value: "14 days", icon: Clock, color: "from-orange-500 to-red-500" }
        ].map((stat, index) => (
          <motion.div key={stat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
            <Card className="metric-card card-hover cursor-pointer border-border" onClick={() => handleFeatureClick(stat.title)}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-card border border-border rounded-lg">
            <TabsTrigger value="jobs" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Job Postings</TabsTrigger>
            <TabsTrigger value="candidates" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Candidates</TabsTrigger>
            <TabsTrigger value="pipeline" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Pipeline</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <Card className="glass-effect border-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search job postings..." className="form-input pl-10" onClick={() => handleFeatureClick("Job Search")} readOnly />
                  </div>
                  <Button variant="outline" onClick={() => handleFeatureClick("Filters")} className="border-border text-foreground hover:bg-primary/10 hover:text-primary">
                    <Filter className="w-4 h-4 mr-2" /> Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              {jobPostings.map((job) => (
                <Card key={job.id} className="glass-effect border-border card-hover cursor-pointer" onClick={() => handleFeatureClick("Job Details")}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.status === 'Active' ? 'status-active' : 'status-pending'}`}>{job.status}</span>
                          <div className="ai-badge px-2 py-1 rounded-full text-xs font-medium">{job.aiScore}%</div>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground text-sm">
                          <div className="flex items-center"><Briefcase className="w-4 h-4 mr-1" />{job.department}</div>
                          <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{job.location}</div>
                          <div className="flex items-center"><Users className="w-4 h-4 mr-1" />{job.applicants} applicants</div>
                          <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{job.posted}</div>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-2 sm:mt-0">
                        <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary"><Eye className="w-4 h-4 mr-1" />View</Button>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-primary-foreground"><Mail className="w-4 h-4 mr-1" />Share</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
             <Card className="glass-effect border-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search candidates..." className="form-input pl-10" onClick={() => handleFeatureClick("Candidate Search")} readOnly />
                  </div>
                  <Button onClick={() => handleFeatureClick("AI Sourcing")} className="bg-gradient-to-r from-purple-500 to-pink-500 text-primary-foreground hover:opacity-90">
                    <Brain className="w-4 h-4 mr-2" /> AI Source
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {candidates.map((candidate) => (
                <Card key={candidate.id} className="candidate-card card-hover cursor-pointer" onClick={() => handleFeatureClick("Candidate Profile")}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center"><span className="text-primary-foreground font-semibold">{candidate.avatar}</span></div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{candidate.name}</h3>
                        <p className="text-muted-foreground text-sm">{candidate.role}</p>
                      </div>
                      <div className="ai-badge px-2 py-1 rounded-full text-xs font-medium">{candidate.aiScore}%</div>
                    </div>
                    <div className="space-y-2 text-sm mb-3">
                      <div className="flex items-center text-muted-foreground"><MapPin className="w-4 h-4 mr-2" />{candidate.location}</div>
                      <div className="flex items-center text-muted-foreground"><Clock className="w-4 h-4 mr-2" />{candidate.lastActivity}</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {candidate.skills.map((skill) => (<span key={skill} className="tag px-2 py-1 rounded-full text-xs font-medium">{skill}</span>))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${candidate.status === 'Interview Scheduled' ? 'status-active' : candidate.status === 'Under Review' ? 'status-pending' : 'status-inactive'}`}>{candidate.status}</span>
                      <div className="flex space-x-1">
                        <Button size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground hover:text-primary"><MessageSquare className="w-4 h-4" /></Button>
                        <Button size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground hover:text-primary"><Calendar className="w-4 h-4" /></Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pipeline" className="space-y-6">
            <Card className="glass-effect border-border">
              <CardHeader><CardTitle className="text-foreground">Recruitment Pipeline</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {['Applied', 'Screening', 'Interview', 'Final Review', 'Offer'].map((stage) => (
                    <div key={stage} className="pipeline-stage rounded-xl p-4 text-center cursor-pointer" onClick={() => handleFeatureClick(`${stage} Stage`)}>
                      <h4 className="font-semibold text-foreground mb-2">{stage}</h4>
                      <div className="text-2xl font-bold text-foreground mb-1">{Math.floor(Math.random() * 50) + 10}</div>
                      <p className="text-muted-foreground text-sm">candidates</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
             <p className="text-muted-foreground p-4 text-center">Analytics for recruitment will be displayed here. 🚧</p>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Recruiting;
