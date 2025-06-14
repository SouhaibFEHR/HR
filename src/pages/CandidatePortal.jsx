
import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  FileText, 
  Calendar,
  MessageSquare,
  Bell,
  Settings,
  Upload,
  Download,
  Edit,
  MapPin,
  Mail,
  Phone,
  ArrowLeft
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';

const CandidatePortal = () => {
  const handleFeatureClick = (feature) => {
    toast({
      title: `🚧 ${feature}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const candidateInfo = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "Seattle, WA",
    avatar: "SJ",
  };

  const applications = [
    { id: 1, position: "Senior React Developer", company: "Innovatech Solutions", appliedDate: "Dec 1, 2024", status: "Interview Scheduled", stage: "Technical Interview", progress: 60, nextStep: "Technical Interview on Dec 18" },
    { id: 2, position: "Frontend Engineer", company: "NextGen Apps", appliedDate: "Nov 28, 2024", status: "Under Review", stage: "Initial Screening", progress: 30, nextStep: "Awaiting recruiter review" },
  ];

  const documents = [
    { id: 1, name: "Resume_Sarah_Johnson.pdf", type: "Resume", uploadDate: "Dec 1, 2024", size: "245 KB", status: "Verified" },
    { id: 2, name: "Cover_Letter_Innovatech.pdf", type: "Cover Letter", uploadDate: "Dec 1, 2024", size: "156 KB", status: "Verified" },
  ];

  const interviews = [
    { id: 1, position: "Senior React Developer", type: "Technical Interview", date: "Dec 18, 2024", time: "2:00 PM PST", interviewer: "Michael Brown", location: "Video Call", status: "Scheduled" },
  ];

  const messages = [
    { id: 1, from: "Jennifer Lee", role: "Innovatech Recruiter", subject: "React Developer Application", preview: "Hi Sarah, interview scheduled for Dec 18th...", date: "Dec 12, 2024", read: false },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-card/50 backdrop-blur-lg border-b border-border px-4 md:px-6 py-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => handleFeatureClick("Back to Main Portal")} className="text-foreground hover:bg-primary/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">Candidate Portal</h1>
              <p className="text-xs md:text-sm text-muted-foreground">Track your applications & interviews</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="icon" onClick={() => handleFeatureClick("Notifications")} className="relative text-foreground hover:bg-primary/10">
              <Bell className="w-5 h-5" /><span className="absolute -top-1 -right-1 w-3 h-3 notification-dot rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleFeatureClick("Settings")} className="text-foreground hover:bg-primary/10">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-3 pl-2 md:pl-4 border-l border-border">
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium text-foreground">{candidateInfo.name}</p>
                <p className="text-xs text-muted-foreground">Candidate</p>
              </div>
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">{candidateInfo.avatar}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto p-4 md:p-6 space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Welcome back, {candidateInfo.name}!</h2>
          <p className="text-muted-foreground text-base md:text-lg">Your job application dashboard.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "Active Applications", value: applications.filter(app => app.status !== "Completed").length, icon: Briefcase, color: "from-primary to-accent" },
            { title: "Scheduled Interviews", value: interviews.filter(i => i.status === "Scheduled").length, icon: Calendar, color: "from-green-500 to-emerald-500" },
            { title: "Uploaded Documents", value: documents.length, icon: FileText, color: "from-purple-500 to-pink-500" },
            { title: "Unread Messages", value: messages.filter(m => !m.read).length, icon: MessageSquare, color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <motion.div key={stat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
              <Card className="metric-card card-hover cursor-pointer border-border" onClick={() => handleFeatureClick(stat.title)}>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-xs md:text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl md:text-3xl font-bold text-foreground mt-1 md:mt-2">{stat.value}</p>
                    </div>
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
            <Card className="glass-effect border-border">
              <CardHeader><CardTitle className="text-foreground flex items-center"><Briefcase className="w-5 h-5 mr-2 text-primary" />My Applications</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="p-4 rounded-lg bg-card/70 border border-border hover:bg-primary/5 transition-colors cursor-pointer" onClick={() => handleFeatureClick("Application Details")}>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{app.position}</h3>
                        <p className="text-muted-foreground text-sm">{app.company}</p>
                      </div>
                      <span className={`mt-2 sm:mt-0 px-3 py-1 rounded-full text-xs font-medium ${app.status === 'Interview Scheduled' ? 'status-active' : app.status === 'Under Review' ? 'status-pending' : 'status-inactive'}`}>{app.status}</span>
                    </div>
                    <div className="mb-2"><div className="flex justify-between text-sm mb-1"><span className="text-muted-foreground">Progress</span><span className="text-foreground">{app.stage}</span></div><Progress value={app.progress} className="h-2 bg-secondary" /></div>
                    <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm"><span className="text-muted-foreground">Applied: {app.appliedDate}</span><span className="text-primary mt-1 sm:mt-0">{app.nextStep}</span></div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} className="space-y-6">
            <Card className="glass-effect border-border">
              <CardHeader><CardTitle className="text-foreground flex items-center"><User className="w-5 h-5 mr-2 text-primary" />Profile</CardTitle></CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-3"><span className="text-xl font-bold text-primary-foreground">{candidateInfo.avatar}</span></div>
                  <h3 className="font-semibold text-foreground text-lg">{candidateInfo.name}</h3>
                  <p className="text-muted-foreground text-sm">Software Developer</p>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center text-muted-foreground"><Mail className="w-4 h-4 mr-2 flex-shrink-0" />{candidateInfo.email}</div>
                  <div className="flex items-center text-muted-foreground"><Phone className="w-4 h-4 mr-2 flex-shrink-0" />{candidateInfo.phone}</div>
                  <div className="flex items-center text-muted-foreground"><MapPin className="w-4 h-4 mr-2 flex-shrink-0" />{candidateInfo.location}</div>
                </div>
                <Button className="w-full gradient-bg text-primary-foreground hover:opacity-90" onClick={() => handleFeatureClick("Edit Profile")}><Edit className="w-4 h-4 mr-2" />Edit Profile</Button>
              </CardContent>
            </Card>
            <Card className="glass-effect border-border">
              <CardHeader><CardTitle className="text-foreground">Quick Actions</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={() => handleFeatureClick("Upload Document")}><Upload className="w-4 h-4 mr-2" />Upload Document</Button>
                <Button variant="outline" className="w-full border-border text-foreground hover:bg-primary/10 hover:text-primary" onClick={() => handleFeatureClick("Schedule Interview")}><Calendar className="w-4 h-4 mr-2" />Schedule Interview</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="glass-effect border-border">
              <CardHeader><CardTitle className="text-foreground flex items-center justify-between">
                <div className="flex items-center"><FileText className="w-5 h-5 mr-2 text-primary" />Documents</div>
                <Button size="sm" onClick={() => handleFeatureClick("Upload New Document")} className="gradient-bg text-primary-foreground hover:opacity-90"><Upload className="w-3 h-3 md:w-4 md:h-4 mr-1" />Upload</Button>
              </CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg bg-card/70 border border-border hover:bg-primary/5" onClick={() => handleFeatureClick("Document Details")}>
                    <div className="flex items-center space-x-3"><div className="w-8 h-8 rounded gradient-bg flex items-center justify-center"><FileText className="w-4 h-4 text-primary-foreground" /></div><div><p className="text-foreground text-sm font-medium">{doc.name}</p><p className="text-muted-foreground text-xs">{doc.type} • {doc.size}</p></div></div>
                    <div className="flex items-center space-x-2"><span className={`px-2 py-1 rounded-full text-xs font-medium ${doc.status === 'Verified' ? 'status-active' : 'status-pending'}`}>{doc.status}</span><Button size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground hover:text-primary"><Download className="w-4 h-4" /></Button></div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            <Card className="glass-effect border-border">
              <CardHeader><CardTitle className="text-foreground flex items-center"><Calendar className="w-5 h-5 mr-2 text-primary" />Interviews</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {interviews.map((interview) => (
                  <div key={interview.id} className="p-4 rounded-lg bg-card/70 border border-border hover:bg-primary/5 cursor-pointer" onClick={() => handleFeatureClick("Interview Details")}>
                    <div className="flex justify-between items-start mb-1"><h4 className="font-semibold text-foreground text-sm">{interview.type}</h4><span className={`px-2 py-1 rounded-full text-xs font-medium ${interview.status === 'Scheduled' ? 'status-active' : 'status-inactive'}`}>{interview.status}</span></div>
                    <p className="text-muted-foreground text-xs mb-2">{interview.position}</p>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-muted-foreground">
                      <div>Date: <span className="text-foreground">{interview.date}</span></div><div>Time: <span className="text-foreground">{interview.time}</span></div>
                      <div>Interviewer: <span className="text-foreground">{interview.interviewer}</span></div><div>Location: <span className="text-foreground">{interview.location}</span></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="glass-effect border-border">
            <CardHeader><CardTitle className="text-foreground flex items-center"><MessageSquare className="w-5 h-5 mr-2 text-primary" />Recent Messages</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`p-3 md:p-4 rounded-lg border transition-colors cursor-pointer ${message.read ? 'bg-card/70 border-border hover:bg-primary/5' : 'bg-primary/10 border-primary/30 hover:bg-primary/20'}`} onClick={() => handleFeatureClick("Message Details")}>
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0"><span className="text-xs font-bold text-white">{message.from.split(' ').map(n=>n[0]).join('')}</span></div>
                      <div><p className="text-foreground text-sm font-medium">{message.from}</p><p className="text-muted-foreground text-xs">{message.role}</p></div>
                    </div>
                    <div className="text-right shrink-0 ml-2"><p className="text-muted-foreground text-xs">{message.date}</p>{!message.read && (<div className="w-2 h-2 bg-primary rounded-full ml-auto mt-1"></div>)}</div>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mt-1">{message.subject}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">{message.preview}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CandidatePortal;
