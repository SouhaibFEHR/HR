import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  GitBranch, 
  Users, 
  Settings,
  ArrowRight,
  Clock,
  Target,
  Zap,
  Save,
  RotateCcw,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import { Progress } from '@/components/ui/progress';

const Pipeline = () => {
  const [pipelineStages, setPipelineStages] = useState([
    { id: 1, name: "Application Received", candidates: 45, color: "from-blue-500 to-cyan-500", automated: true },
    { id: 2, name: "Initial Screening", candidates: 23, color: "from-green-500 to-emerald-500", automated: true },
    { id: 3, name: "Technical Interview", candidates: 12, color: "from-purple-500 to-pink-500", automated: false },
    { id: 4, name: "Final Interview", candidates: 6, color: "from-orange-500 to-red-500", automated: false },
    { id: 5, name: "Offer Extended", candidates: 3, color: "from-yellow-500 to-orange-500", automated: false }
  ]);
  const [showStageDialog, setShowStageDialog] = useState(false);
  const [editingStage, setEditingStage] = useState(null);
  const [stageName, setStageName] = useState('');
  const [isAutomated, setIsAutomated] = useState(false);

  const handleFeatureClick = (feature, data = null) => {
    if (feature === "Edit Stage" || feature === "Add Stage") {
      setEditingStage(data);
      setStageName(data ? data.name : '');
      setIsAutomated(data ? data.automated : false);
      setShowStageDialog(true);
    } else {
      toast({
        title: `🚧 ${feature}`,
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  const handleSaveStage = (e) => {
    e.preventDefault();
    if (!stageName) {
      toast({ variant: "destructive", title: "Stage name is required." });
      return;
    }
    // Logic to save/update stage (using localStorage for now)
    console.log("Saving stage:", { name: stageName, automated: isAutomated, id: editingStage ? editingStage.id : Date.now() });
    toast({ title: "Stage Saved (Simulated)" });
    setShowStageDialog(false);
    setEditingStage(null);
    setStageName('');
    setIsAutomated(false);
  };

  const dropReasons = [
    { reason: "Skills Mismatch", count: 15, percentage: 35 },
    { reason: "Salary Expectations", count: 8, percentage: 19 },
  ];

  const automationRules = [
    { id: 1, name: "AI Resume Screening", trigger: "New Application", action: "Auto-advance qualified candidates", enabled: true, accuracy: 94 },
    { id: 2, name: "Interview Scheduling", trigger: "Screening Passed", action: "Send calendar invite automatically", enabled: true, accuracy: 98 },
  ];

  const pipelineMetrics = [
    { title: "Total Candidates", value: "89", change: "+12", icon: Users, color: "from-blue-500 to-cyan-500" },
    { title: "Conversion Rate", value: "23%", change: "+5%", icon: Target, color: "from-green-500 to-emerald-500" },
    { title: "Avg. Time in Pipeline", value: "18 days", change: "-3 days", icon: Clock, color: "from-purple-500 to-pink-500" },
    { title: "Automation Rate", value: "67%", change: "+8%", icon: Zap, color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="space-y-6 md:space-y-8 px-2 sm:px-0">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">Pipeline Editor</h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Design and optimize your recruitment pipeline.</p>
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <Button onClick={() => handleFeatureClick("Save Pipeline")} className="gradient-bg text-primary-foreground hover:opacity-90 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <Save className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Save Changes
          </Button>
          <Button onClick={() => handleFeatureClick("Add Stage")} variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Add Stage
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {pipelineMetrics.map((metric, index) => (
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
        <Card className="glass-effect border-border">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-foreground flex items-center text-base sm:text-lg">
              <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
              Pipeline Stages
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-thin">
              {pipelineStages.map((stage, index) => (
                <div key={stage.id} className="flex items-center shrink-0">
                  <div className="pipeline-stage min-w-[180px] sm:min-w-[220px] p-3 sm:p-4 rounded-xl cursor-grab" onClick={() => handleFeatureClick("Edit Stage", stage)}>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base line-clamp-1">{stage.name}</h3>
                      <div className="flex space-x-1">
                        {stage.automated && <div className="ai-badge px-1.5 py-0.5 rounded-full text-xs font-medium">AI</div>}
                        <Button size="icon" variant="ghost" className="h-6 w-6 p-0 text-muted-foreground hover:text-primary" onClick={(e) => { e.stopPropagation(); handleFeatureClick("Edit Stage", stage); }}><Edit className="w-3 h-3" /></Button>
                        <Button size="icon" variant="ghost" className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive" onClick={(e) => { e.stopPropagation(); handleFeatureClick("Delete Stage", stage); }}><Trash2 className="w-3 h-3" /></Button>
                      </div>
                    </div>
                    <div className="text-center mb-2 sm:mb-3">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center mb-1.5 sm:mb-2`}>
                        <span className="text-xl sm:text-2xl font-bold text-primary-foreground">{stage.candidates}</span>
                      </div>
                      <p className="text-muted-foreground text-xs">candidates</p>
                    </div>
                    <Button size="sm" variant="outline" className="w-full border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs" onClick={(e) => { e.stopPropagation(); handleFeatureClick(`View ${stage.name} Candidates`); }}><Users className="w-3.5 h-3.5 mr-1.5" />View Candidates</Button>
                  </div>
                  {index < pipelineStages.length - 1 && <div className="flex items-center justify-center mx-2 sm:mx-4"><ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" /></div>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
          <Card className="glass-effect border-border">
            <CardHeader className="p-4 sm:p-6"><CardTitle className="text-foreground text-base sm:text-lg">Drop Reasons Analysis</CardTitle></CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {dropReasons.map((reason) => (
                <div key={reason.reason} className="cursor-pointer hover:bg-primary/5 p-2.5 sm:p-3 rounded-lg transition-colors" onClick={() => handleFeatureClick(`${reason.reason} Details`)}>
                  <div className="flex items-center justify-between mb-1.5"><span className="text-foreground font-medium text-sm sm:text-base">{reason.reason}</span><span className="text-muted-foreground text-xs sm:text-sm">{reason.count} candidates</span></div>
                  <Progress value={reason.percentage} className="h-1.5 sm:h-2" indicatorClassName="bg-gradient-to-r from-red-500 to-pink-500" />
                  <div className="text-xs text-muted-foreground mt-1">{reason.percentage}% of total drops</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Card className="glass-effect border-border">
            <CardHeader className="p-4 sm:p-6 flex flex-row items-center justify-between">
              <CardTitle className="text-foreground text-base sm:text-lg">Automation Rules</CardTitle>
              <Button size="sm" onClick={() => handleFeatureClick("Create Automation Rule")} className="gradient-bg text-primary-foreground hover:opacity-90 text-xs"><Plus className="w-3.5 h-3.5 mr-1" />Add Rule</Button>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {automationRules.map((rule) => (
                <div key={rule.id} className="p-3 sm:p-4 rounded-xl bg-card/70 border border-border hover:bg-primary/5 transition-colors cursor-pointer" onClick={() => handleFeatureClick(`Edit ${rule.name}`)}>
                  <div className="flex items-center justify-between mb-1.5"><h4 className="font-semibold text-foreground text-sm sm:text-base">{rule.name}</h4>
                    <div className="flex items-center space-x-1.5"><span className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${rule.enabled ? 'status-active' : 'status-inactive'}`}>{rule.enabled ? 'Enabled' : 'Disabled'}</span><span className="ai-badge px-1.5 py-0.5 rounded-full text-xs font-medium">{rule.accuracy}%</span></div>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-0.5"><span className="font-medium">Trigger:</span> {rule.trigger}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm"><span className="font-medium">Action:</span> {rule.action}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Dialog open={showStageDialog} onOpenChange={setShowStageDialog}>
        <DialogContent className="sm:max-w-md glass-effect border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">{editingStage ? 'Edit Stage' : 'Add New Stage'}</DialogTitle>
            <DialogDescription className="text-muted-foreground">Configure the details for this pipeline stage.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSaveStage} className="space-y-4 py-2 sm:py-4">
            <div><Label htmlFor="stageName" className="text-foreground">Stage Name</Label><Input id="stageName" value={stageName} onChange={(e) => setStageName(e.target.value)} placeholder="e.g., Phone Screening" className="form-input mt-1 text-sm" /></div>
            <div className="flex items-center space-x-2"><input type="checkbox" id="isAutomated" checked={isAutomated} onChange={(e) => setIsAutomated(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /><Label htmlFor="isAutomated" className="text-sm text-foreground">Enable AI Automation</Label></div>
            {isAutomated && (<div><Label htmlFor="automationCriteria" className="text-foreground">Automation Criteria (Optional)</Label><textarea id="automationCriteria" rows={2} placeholder="e.g., AI score > 85 AND keywords match" className="form-input mt-1 w-full p-2 text-sm" /></div>)}
            <DialogFooter>
              <Button type="button" variant="outline" className="border-border text-muted-foreground hover:bg-secondary text-sm" onClick={() => setShowStageDialog(false)}>Cancel</Button>
              <Button type="submit" className="gradient-bg text-primary-foreground hover:opacity-90 text-sm">Save Stage</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Pipeline;