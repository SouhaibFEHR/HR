
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  GraduationCap, 
  Target, 
  Brain, 
  Sparkles, 
  Clock, 
  Zap 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const handleCardClick = (feature) => {
    toast({
      title: `🚧 ${feature}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const metrics = [
    {
      title: "Active Candidates",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "from-primary to-accent"
    },
    {
      title: "Training Completion",
      value: "89%",
      change: "+5%",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500" 
    },
    {
      title: "Performance Reviews",
      value: "156",
      change: "+23%",
      icon: Target,
      color: "from-purple-500 to-pink-500" 
    },
    {
      title: "AI Efficiency Score",
      value: "94%",
      change: "+8%",
      icon: Brain, 
      color: "from-orange-400 to-amber-500"
    }
  ];

  const recentActivities = [
    {
      type: "recruitment",
      message: "AI screened 45 new candidates for Software Engineer role",
      time: "2 minutes ago",
      icon: Users,
      color: "text-primary"
    },
    {
      type: "training",
      message: "15 employees completed React Advanced course",
      time: "1 hour ago",
      icon: GraduationCap,
      color: "text-green-600"
    },
    {
      type: "performance",
      message: "Q4 performance reviews initiated for Engineering team",
      time: "3 hours ago",
      icon: Target,
      color: "text-purple-600"
    },
    {
      type: "ai",
      message: "AI generated personalized learning paths for 23 employees",
      time: "5 hours ago",
      icon: Sparkles,
      color: "text-amber-500"
    }
  ];

  const aiInsights = [
    {
      title: "Recruitment Optimization",
      description: "AI suggests focusing on JavaScript skills for better candidate matches",
      impact: "High",
      action: "Review Job Requirements"
    },
    {
      title: "Training Recommendation",
      description: "Cloud Architecture course recommended for 12 senior developers",
      impact: "Medium",
      action: "Schedule Training"
    },
    {
      title: "Performance Alert",
      description: "3 team members showing signs of burnout - recommend wellness check",
      impact: "High",
      action: "Schedule 1:1s"
    }
  ];

  return (
    <div className="space-y-6 md:space-y-8 px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
            AI HR Dashboard
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Welcome back! Here's what's happening with your HR operations.
          </p>
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <Button 
            onClick={() => handleCardClick("AI Insights")}
            className="gradient-bg text-primary-foreground hover:opacity-90 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            AI Insights
          </Button>
          <Button 
            onClick={() => handleCardClick("Generate Report")}
            variant="outline" 
            className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
          >
            Generate Report
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="metric-card card-hover cursor-pointer border-border" onClick={() => handleCardClick(metric.title)}>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="glass-effect border-border">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center text-foreground text-base sm:text-lg">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {aiInsights.map((insight, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card/70 border border-border hover:bg-primary/5 transition-colors cursor-pointer"
                  onClick={() => handleCardClick(insight.title)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base mb-1">{insight.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2">{insight.description}</p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium ${
                          insight.impact === 'High' 
                            ? 'bg-destructive/20 text-destructive' 
                            : 'bg-amber-500/20 text-amber-600'
                        }`}>
                          {insight.impact} Impact
                        </span>
                        <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-xs px-2 py-1 h-auto">
                          {insight.action}
                        </Button>
                      </div>
                    </div>
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 ml-2 sm:ml-4" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Card className="glass-effect border-border">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center text-foreground text-base sm:text-lg">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2.5 sm:space-x-3 p-2.5 sm:p-3 rounded-md sm:rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                  onClick={() => handleCardClick("Activity Details")}
                >
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 ${activity.color}`}>
                    <activity.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground text-xs sm:text-sm font-medium">{activity.message}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass-effect border-border">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-foreground text-base sm:text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { title: "Post New Job", icon: Users, color: "from-primary to-accent" },
                { title: "Create Training", icon: GraduationCap, color: "from-green-500 to-emerald-500" },
                { title: "Start Review", icon: Target, color: "from-purple-500 to-pink-500" },
                { title: "AI Analysis", icon: Brain, color: "from-orange-400 to-amber-500" }
              ].map((action) => (
                <Button
                  key={action.title}
                  onClick={() => handleCardClick(action.title)}
                  className={`h-20 sm:h-24 bg-gradient-to-r ${action.color} hover:scale-105 transition-transform text-primary-foreground text-xs sm:text-sm`}
                >
                  <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                    <action.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>{action.title}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Dashboard;
