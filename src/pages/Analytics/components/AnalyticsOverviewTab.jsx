
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AnalyticsOverviewTab = ({ alerts, handleFeatureClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 chart-container border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              HR Metrics Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg cursor-pointer" onClick={() => handleFeatureClick("Interactive Chart")}>
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive Chart Visualization</p>
                <p className="text-muted-foreground/70 text-sm">Click to explore data</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
              Alerts & Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card/70 border border-border hover:bg-primary/5 transition-colors cursor-pointer"
                onClick={() => handleFeatureClick(alert.title)}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground text-sm">{alert.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alert.priority === 'High' 
                      ? 'bg-destructive/20 text-destructive' 
                      : alert.priority === 'Medium'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {alert.priority}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs mb-3">{alert.description}</p>
                <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary">
                  {alert.action}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default AnalyticsOverviewTab;
