
import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AnalyticsPerformanceTab = ({ performanceData, handleFeatureClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <Card className="glass-effect border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Department Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {performanceData.map((dept) => (
            <div key={dept.department} className="p-4 rounded-xl bg-card/70 border border-border hover:bg-primary/5 transition-colors cursor-pointer" onClick={() => handleFeatureClick(`${dept.department} Performance`)}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-foreground">{dept.department}</h4>
                <span className="text-muted-foreground">{dept.employees} employees</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-muted-foreground text-sm">Avg Score</span>
                  <div className="text-2xl font-bold text-foreground">{dept.avgScore}</div>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">Top Performers</span>
                  <div className="text-2xl font-bold text-foreground">{dept.topPerformers}</div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="glass-effect border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Performance Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg cursor-pointer" onClick={() => handleFeatureClick("Performance Distribution Chart")}>
            <div className="text-center">
              <Target className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Performance Distribution</p>
              <p className="text-muted-foreground/70 text-sm">Rating distribution across organization</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnalyticsPerformanceTab;
