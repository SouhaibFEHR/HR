
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Target, 
  Users, 
  Calendar,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Brain,
  Award,
  FileText,
  Eye,
  Edit,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';


const PerformanceMetrics = ({ metrics, handleFeatureClick }) => (
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
                <p className="text-2xl sm:text-3xl font-bold text-foreground mt-1 sm:mt-2">{metric.value}</p><p className="text-green-600 text-xs sm:text-sm mt-0.5 sm:mt-1">{metric.change} from last cycle</p>
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

const ReviewCyclesList = ({ cycles, handleFeatureClick }) => (
  <div className="space-y-4">
    {cycles.map((cycle) => (
      <Card key={cycle.id} className="glass-effect border-border card-hover cursor-pointer" onClick={() => handleFeatureClick("Review Cycle Details", cycle)}>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-1.5">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{cycle.name}</h3>
                <span className={`px-2 py-1 sm:px-3 rounded-full text-xs font-medium ${
                  cycle.status === 'Active' ? 'status-active' : 
                  cycle.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 
                  'status-pending'
                }`}>
                  {cycle.status}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">
                <div className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" />{cycle.period}</div>
                <div className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" />{cycle.participants} participants</div>
                <div className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />Due: {cycle.deadline}</div>
              </div>
              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground font-medium">{cycle.completed}/{cycle.participants} completed ({cycle.progress}%)</span>
                </div>
                <Progress value={cycle.progress} className="h-1.5 sm:h-2" />
              </div>
            </div>
            <div className="flex space-x-1.5 sm:space-x-2 self-start lg:self-center mt-3 lg:mt-0">
              <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs" onClick={(e) => {e.stopPropagation(); handleFeatureClick("View Cycle", cycle)}}>
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-1" /><span className="hidden sm:inline">View</span>
              </Button>
              <Button size="sm" className="gradient-bg text-primary-foreground hover:opacity-90 text-xs" onClick={(e) => {e.stopPropagation(); handleFeatureClick("Manage Cycle", cycle)}}>
                <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-1" /><span className="hidden sm:inline">Manage</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const ReviewTemplatesTab = ({ templates, handleFeatureClick }) => (
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
              <span className="tag text-xs px-2 py-1">{template.sections} sections</span>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-5 flex-grow">
            <div className="mb-3 sm:mb-4">
              <p className="text-xs text-muted-foreground mb-1">Key Criteria:</p>
              <div className="flex flex-wrap gap-1.5">
                {template.criteria.slice(0, 3).map((crit) => <span key={crit} className="tag text-xs px-1.5 py-0.5">{crit}</span>)}
                {template.criteria.length > 3 && <span className="tag text-xs px-1.5 py-0.5">+{template.criteria.length - 3} more</span>}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              <span>Used {template.usage} times</span>
              <span>Last used: {template.lastUsed}</span>
            </div>
          </CardContent>
           <DialogFooter className="p-4 sm:p-5 border-t border-border mt-auto">
            <Button size="sm" variant="outline" className="flex-1 border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs" onClick={(e) => {e.stopPropagation(); handleFeatureClick("Preview Template", template);}}>
              <Eye className="w-3.5 h-3.5 mr-1.5" />Preview
            </Button>
            <Button size="sm" className="flex-1 gradient-bg text-primary-foreground hover:opacity-90 text-xs" onClick={(e) => {e.stopPropagation(); handleFeatureClick("Use Template", template);}}>
              <Edit className="w-3.5 h-3.5 mr-1.5" />Use
            </Button>
          </DialogFooter>
        </Card>
      ))}
    </div>
  </div>
);

const PendingReviewsTab = ({ reviews, handleFeatureClick }) => (
  <div className="space-y-4">
    {reviews.map((review) => (
      <Card key={review.id} className="glass-effect border-border card-hover cursor-pointer" onClick={() => handleFeatureClick("Review Details", review)}>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-grow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <span className="text-primary-foreground font-semibold text-sm sm:text-base">{review.avatar}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">{review.employee}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{review.role} • {review.department}</p>
                <p className="text-muted-foreground text-xs sm:text-sm">Reviewer: {review.reviewer}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 w-full lg:w-auto">
              <div className="text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">Stage</p>
                <span className="tag text-xs px-2 py-1">{review.stage}</span>
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">Due Date</p>
                <p className="text-foreground font-medium text-sm sm:text-base">{review.dueDate}</p>
              </div>
              <div className="text-center min-w-[100px] sm:min-w-[120px]">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Progress</p>
                <Progress value={review.progress} className="h-1.5 sm:h-2" />
                 <p className="text-xs text-muted-foreground mt-1">{review.progress}%</p>
              </div>
              <div className="flex space-x-1.5 sm:space-x-2 self-start sm:self-center">
                <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs" onClick={(e) => { e.stopPropagation(); handleFeatureClick("View Review", review);}}>
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-1" /><span className="hidden sm:inline">View</span>
                </Button>
                <Button size="sm" className="gradient-bg text-primary-foreground hover:opacity-90 text-xs" onClick={(e) => { e.stopPropagation(); handleFeatureClick("Continue Review", review);}}>
                  <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-1" /><span className="hidden sm:inline">Continue</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const AiInsightsTab = ({ insights, handleFeatureClick }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <Card className="glass-effect border-border">
      <CardHeader><CardTitle className="text-foreground flex items-center"><Brain className="w-5 h-5 mr-2 text-primary" />AI Performance Insights</CardTitle></CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="p-3 sm:p-4 rounded-lg bg-card/70 border border-border hover:bg-primary/5 transition-colors cursor-pointer" onClick={() => handleFeatureClick(insight.title, insight)}>
            <div className="flex items-start justify-between mb-1.5">
              <h4 className="font-semibold text-foreground text-sm sm:text-base">{insight.title}</h4>
              <span className={`px-1.5 py-0.5 sm:px-2 rounded-full text-xs font-medium ${
                insight.impact === 'Positive' ? 'bg-green-500/20 text-green-400' : 
                insight.impact === 'Warning' ? 'bg-yellow-500/20 text-yellow-500' : 
                'bg-red-500/20 text-red-500'
              }`}>{insight.impact}</span>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">{insight.description}</p>
            <Button size="xs" variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs px-2 py-1 h-auto">{insight.action}</Button>
          </div>
        ))}
      </CardContent>
    </Card>
     <Card className="glass-effect border-border">
      <CardHeader><CardTitle className="text-foreground flex items-center"><TrendingUp className="w-5 h-5 mr-2 text-primary" />Performance Trends</CardTitle></CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg cursor-pointer bg-card/50 hover:bg-primary/5 transition-colors" onClick={() => handleFeatureClick("Performance Trends Chart")}>
          <div className="text-center">
            <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground text-sm sm:text-base">Performance Trends Visualization</p>
            <p className="text-muted-foreground/70 text-xs">Historical performance data chart placeholder</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);


const Performance = () => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [showNewReviewDialog, setShowNewReviewDialog] = useState(false);

  const handleFeatureClick = (feature, data = null) => {
    console.log("Feature clicked:", feature, data);
    toast({
      title: `🚧 ${feature}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  
  const handleSubmitNewReview = (e) => {
    e.preventDefault();
    handleFeatureClick("Submit New Review Cycle");
    setShowNewReviewDialog(false);
  };

  const reviewCycles = [
    { id: 1, name: "Q4 2024 Performance Review", period: "Oct - Dec 2024", status: "Active", participants: 234, completed: 156, deadline: "Dec 31, 2024", progress: 67 },
    { id: 2, name: "Mid-Year Review 2024", period: "Jan - Jun 2024", status: "Completed", participants: 218, completed: 218, deadline: "Jul 15, 2024", progress: 100 },
  ];

  const reviewTemplates = [
    { id: 1, name: "Engineering Performance Review", sections: 5, criteria: ["Technical Skills", "Problem Solving", "Collaboration", "Leadership", "Innovation"], lastUsed: "2 weeks ago", usage: 45 },
    { id: 2, name: "Leadership Assessment", sections: 4, criteria: ["Strategic Thinking", "Team Management", "Communication", "Decision Making"], lastUsed: "1 month ago", usage: 23 },
  ];

  const pendingReviews = [
    { id: 1, employee: "Sarah Johnson", role: "Senior Developer", department: "Engineering", reviewer: "Mike Chen", stage: "Self Assessment", dueDate: "Dec 15, 2024", progress: 75, avatar: "SJ" },
    { id: 2, employee: "David Rodriguez", role: "Product Manager", department: "Product", reviewer: "Lisa Wang", stage: "Manager Review", dueDate: "Dec 18, 2024", progress: 40, avatar: "DR" },
  ];

  const performanceMetricsData = [
    { title: "Overall Rating", value: "4.2/5", change: "+0.3", icon: Star, color: "from-yellow-500 to-orange-500" },
    { title: "Reviews Completed", value: "156/234", change: "+12", icon: CheckCircle, color: "from-green-500 to-emerald-500" },
    { title: "High Performers", value: "45", change: "+8", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { title: "Avg. Completion Time", value: "12 days", change: "-2 days", icon: Clock, color: "from-blue-500 to-cyan-500" }
  ];

  const aiInsightsData = [
    { title: "Performance Trend Analysis", description: "Engineering team showing 15% improvement in technical skills over last quarter", impact: "Positive", action: "Continue Current Training" },
    { title: "Review Completion Risk", description: "23 employees at risk of missing review deadline", impact: "Warning", action: "Send Reminders" },
  ];

  return (
    <div className="space-y-6 md:space-y-8 px-2 sm:px-0">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">Performance Management</h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">AI-powered performance reviews and goal tracking.</p>
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <Button onClick={() => setShowNewReviewDialog(true)} className="gradient-bg text-primary-foreground hover:opacity-90 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> New Review Cycle
          </Button>
          <Button onClick={() => handleFeatureClick("AI Performance Analysis")} variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> AI Analysis
          </Button>
        </div>
      </motion.div>

      <PerformanceMetrics metrics={performanceMetricsData} handleFeatureClick={handleFeatureClick} />
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-card border border-border rounded-lg p-1">
            <TabsTrigger value="reviews" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Review Cycles</TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Templates</TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Pending Reviews</TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="space-y-6">
            <Card className="glass-effect border-border">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search review cycles..." className="form-input pl-10 text-sm" onClick={() => handleFeatureClick("Cycle Search")} readOnly />
                  </div>
                  <Button variant="outline" onClick={() => handleFeatureClick("Cycle Filters")} className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-sm">
                    <Filter className="w-4 h-4 mr-2" /> Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
            <ReviewCyclesList cycles={reviewCycles} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
          <TabsContent value="templates">
            <ReviewTemplatesTab templates={reviewTemplates} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
          <TabsContent value="pending">
            <PendingReviewsTab reviews={pendingReviews} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
          <TabsContent value="insights">
            <AiInsightsTab insights={aiInsightsData} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
        </Tabs>
      </motion.div>

      <Dialog open={showNewReviewDialog} onOpenChange={setShowNewReviewDialog}>
        <DialogContent className="sm:max-w-lg glass-effect border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Create New Review Cycle</DialogTitle>
            <DialogDescription className="text-muted-foreground">Set up a new performance review cycle.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitNewReview} className="space-y-4 py-2 sm:py-4">
            <div><Label htmlFor="cycleName" className="text-foreground">Cycle Name</Label><Input id="cycleName" placeholder="e.g., Q1 2025 Performance Review" className="form-input mt-1 text-sm" /></div>
            <div><Label htmlFor="cycleTemplate" className="text-foreground">Review Template</Label>
              <select id="cycleTemplate" className="form-input mt-1 w-full p-2 text-sm">
                <option value="">Select a template...</option>
                {reviewTemplates.map(template => <option key={template.id} value={template.id}>{template.name}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label htmlFor="startDate" className="text-foreground">Start Date</Label><Input id="startDate" type="date" className="form-input mt-1 text-sm" /></div>
              <div><Label htmlFor="endDate" className="text-foreground">End Date</Label><Input id="endDate" type="date" className="form-input mt-1 text-sm" /></div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" className="border-border text-muted-foreground hover:bg-secondary text-sm" onClick={() => setShowNewReviewDialog(false)}>Cancel</Button>
              <Button type="submit" className="gradient-bg text-primary-foreground hover:opacity-90 text-sm">Create Cycle</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Performance;
