
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AnalyticsTrainingTab = ({ trainingMetrics, handleFeatureClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <Card className="glass-effect border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Course Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {trainingMetrics.map((course) => (
            <div key={course.course} className="p-4 rounded-xl bg-card/70 border border-border hover:bg-primary/5 transition-colors cursor-pointer" onClick={() => handleFeatureClick(`${course.course} Analytics`)}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground">{course.course}</h4>
                <span className="text-muted-foreground">{course.enrolled} enrolled</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Completion Rate</span>
                <span className="text-foreground">{course.completion}%</span>
              </div>
              <Progress value={course.completion} className="h-2 bg-secondary" />
              <div className="text-xs text-muted-foreground mt-1">{course.completed} completed</div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="glass-effect border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Learning Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg cursor-pointer" onClick={() => handleFeatureClick("Learning Trends Chart")}>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Learning Progress Chart</p>
              <p className="text-muted-foreground/70 text-sm">Monthly completion trends</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnalyticsTrainingTab;
