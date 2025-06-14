
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AnalyticsRecruitmentTab = ({ recruitmentMetrics, handleFeatureClick }) => {
  const sourcePerformanceData = [
    { source: "LinkedIn", applications: 456, quality: 89, cost: "$45" },
    { source: "Indeed", applications: 234, quality: 67, cost: "$23" },
    { source: "Company Website", applications: 189, quality: 92, cost: "$0" },
    { source: "Referrals", applications: 123, quality: 95, cost: "$12" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <Card className="glass-effect border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Recruitment Funnel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recruitmentMetrics.map((stage) => (
            <div key={stage.stage} className="cursor-pointer hover:bg-primary/5 p-3 rounded-lg transition-colors" onClick={() => handleFeatureClick(`${stage.stage} Details`)}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground font-medium">{stage.stage}</span>
                <span className="text-muted-foreground">{stage.count}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${stage.color}`}
                  style={{ width: `${stage.percentage}%` }}
                ></div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stage.percentage}% of total</div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="glass-effect border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Source Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {sourcePerformanceData.map((source) => (
            <div key={source.source} className="p-4 rounded-xl bg-card/70 border border-border hover:bg-primary/5 transition-colors cursor-pointer" onClick={() => handleFeatureClick(`${source.source} Analytics`)}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground">{source.source}</h4>
                <span className="text-muted-foreground">{source.applications} apps</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Quality Score</span>
                  <div className="text-foreground font-medium">{source.quality}%</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Cost per Hire</span>
                  <div className="text-foreground font-medium">{source.cost}</div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnalyticsRecruitmentTab;
