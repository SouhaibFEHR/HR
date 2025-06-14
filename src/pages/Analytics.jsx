
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Download, 
  Calendar,
  Users,
  Target,
  Clock,
  Award,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';

import AnalyticsOverviewTab from '@/pages/Analytics/components/AnalyticsOverviewTab';
import AnalyticsRecruitmentTab from '@/pages/Analytics/components/AnalyticsRecruitmentTab';
import AnalyticsTrainingTab from '@/pages/Analytics/components/AnalyticsTrainingTab';
import AnalyticsPerformanceTab from '@/pages/Analytics/components/AnalyticsPerformanceTab';

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleFeatureClick = (feature) => {
    toast({
      title: `🚧 ${feature}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const kpiMetrics = [
    { title: "Total Employees", value: "1,247", change: "+12%", trend: "up", icon: Users, color: "from-primary to-accent" },
    { title: "Avg. Performance Score", value: "4.2/5", change: "+0.3", trend: "up", icon: Target, color: "from-green-500 to-emerald-500" },
    { title: "Training Completion", value: "87%", change: "+5%", trend: "up", icon: Award, color: "from-purple-500 to-pink-500" },
    { title: "Time to Hire", value: "14 days", change: "-3 days", trend: "down", icon: Clock, color: "from-orange-500 to-red-500" }
  ];

  const recruitmentMetricsData = [
    { stage: "Applications", count: 1247, percentage: 100, color: "from-primary to-accent" },
    { stage: "Screening", count: 623, percentage: 50, color: "from-green-500 to-emerald-500" },
    { stage: "Interviews", count: 312, percentage: 25, color: "from-yellow-500 to-orange-500" },
    { stage: "Offers", count: 87, percentage: 7, color: "from-purple-500 to-pink-500" },
    { stage: "Hired", count: 76, percentage: 6, color: "from-red-500 to-pink-500" }
  ];

  const trainingMetricsData = [
    { course: "React Development", enrolled: 156, completed: 134, completion: 86 },
    { course: "Leadership Skills", enrolled: 89, completed: 67, completion: 75 },
    { course: "Cloud Architecture", enrolled: 72, completed: 58, completion: 81 },
    { course: "Data Analytics", enrolled: 45, completed: 32, completion: 71 }
  ];

  const performanceDataMetrics = [
    { department: "Engineering", avgScore: 4.3, employees: 234, topPerformers: 45 },
    { department: "Design", avgScore: 4.1, employees: 67, topPerformers: 12 },
    { department: "Marketing", avgScore: 4.0, employees: 89, topPerformers: 18 },
    { department: "Sales", avgScore: 4.2, employees: 156, topPerformers: 32 }
  ];

  const alertsData = [
    { type: "warning", title: "Low Training Completion", description: "Data Analytics course has 71% completion rate", action: "Review Content", priority: "Medium" },
    { type: "info", title: "High Performer Recognition", description: "45 employees achieved top performance ratings", action: "Send Recognition", priority: "Low" },
    { type: "error", title: "Recruitment Bottleneck", description: "Interview stage showing 25% conversion rate", action: "Optimize Process", priority: "High" }
  ];

  return (
    <div className="space-y-8 px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">
            Analytics & Reporting
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Data-driven insights for HR operations
          </p>
        </div>
        <div className="flex space-x-3">
          <Button onClick={() => handleFeatureClick("Export Report")} variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button onClick={() => handleFeatureClick("Schedule Report")} className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
            <Calendar className="w-4 h-4 mr-2" /> Schedule
          </Button>
          <Button onClick={() => handleFeatureClick("Refresh Data")} className="bg-gradient-to-r from-green-500 to-emerald-500 text-primary-foreground hover:opacity-90">
            <RefreshCw className="w-4 h-4 mr-2" /> Refresh
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((metric, index) => (
          <motion.div key={metric.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
            <Card className="metric-card card-hover cursor-pointer border-border" onClick={() => handleFeatureClick(metric.title)}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{metric.title}</p>
                    <p className="text-3xl font-bold text-foreground mt-2">{metric.value}</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className={`w-4 h-4 mr-1 ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`} />
                      <span className={`text-sm ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>{metric.change}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                    <metric.icon className="w-6 h-6 text-primary-foreground" />
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
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Overview</TabsTrigger>
            <TabsTrigger value="recruitment" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Recruitment</TabsTrigger>
            <TabsTrigger value="training" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Training</TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <AnalyticsOverviewTab alerts={alertsData} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
          <TabsContent value="recruitment">
            <AnalyticsRecruitmentTab recruitmentMetrics={recruitmentMetricsData} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
          <TabsContent value="training">
            <AnalyticsTrainingTab trainingMetrics={trainingMetricsData} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
          <TabsContent value="performance">
            <AnalyticsPerformanceTab performanceData={performanceDataMetrics} handleFeatureClick={handleFeatureClick} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Analytics;
