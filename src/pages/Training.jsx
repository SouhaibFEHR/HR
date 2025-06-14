
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  BookOpen, 
  Users, 
  Trophy, 
  Clock,
  Star,
  Play,
  CheckCircle,
  Target,
  Brain,
  Award,
  TrendingUp,
  Calendar,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';

const Training = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [showCreateCourseDialog, setShowCreateCourseDialog] = useState(false);

  const handleFeatureClick = (feature, data = null) => {
    console.log("Feature clicked:", feature, data);
    toast({
      title: `🚧 ${feature}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleSubmitNewCourse = (e) => {
    e.preventDefault();
    handleFeatureClick("Submit New Course");
    setShowCreateCourseDialog(false);
  };

  const courses = [
    { id: 1, title: "Advanced React Development", instructor: "Sarah Johnson", duration: "8 hours", enrolled: 45, rating: 4.8, progress: 65, category: "Development", level: "Advanced", thumbnail: "Abstract geometric shapes in vibrant colors" },
    { id: 2, title: "Leadership Fundamentals", instructor: "Michael Chen", duration: "6 hours", enrolled: 32, rating: 4.9, progress: 30, category: "Leadership", level: "Intermediate", thumbnail: "Silhouettes of a team collaborating" },
    { id: 3, title: "Cloud Architecture with AWS", instructor: "Emily Rodriguez", duration: "12 hours", enrolled: 28, rating: 4.7, progress: 80, category: "Cloud", level: "Advanced", thumbnail: "Stylized cloud computing icons" }
  ];

  const learningPaths = [
    { id: 1, title: "Full Stack Developer", courses: 8, duration: "40 hours", enrolled: 156, completion: 67, description: "Complete path from frontend to backend development" },
    { id: 2, title: "Engineering Manager", courses: 6, duration: "24 hours", enrolled: 89, completion: 45, description: "Leadership skills for technical managers" },
  ];

  const assessments = [
    { id: 1, title: "React Fundamentals Quiz", course: "Advanced React Development", questions: 25, timeLimit: "30 minutes", attempts: 3, bestScore: 88, status: "Completed" },
    { id: 2, title: "Leadership Assessment", course: "Leadership Fundamentals", questions: 20, timeLimit: "25 minutes", attempts: 2, bestScore: null, status: "Pending" },
  ];

  const achievements = [
    { title: "Course Completion Streak", description: "Completed 5 courses in a row", icon: Trophy, earned: true, date: "2 days ago" },
    { title: "Perfect Score", description: "Scored 100% on an assessment", icon: Star, earned: true, date: "1 week ago" },
  ];

  const trainingMetrics = [
    { title: "Active Courses", value: courses.length, change: "+3", icon: BookOpen, color: "from-primary to-accent" },
    { title: "Total Learners", value: "234", change: "+15", icon: Users, color: "from-green-500 to-emerald-500" },
    { title: "Completion Rate", value: "78%", change: "+5%", icon: CheckCircle, color: "from-purple-500 to-pink-500" },
    { title: "Avg. Rating", value: "4.7/5", change: "+0.1", icon: Star, color: "from-orange-400 to-amber-500" }
  ];

  return (
    <div className="space-y-6 md:space-y-8 px-2 sm:px-0">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">Training & Development</h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Personalized learning powered by AI.</p>
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <Button onClick={() => setShowCreateCourseDialog(true)} className="gradient-bg text-primary-foreground hover:opacity-90 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Create Course
          </Button>
          <Button onClick={() => handleFeatureClick("AI Learning Path")} variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> AI Recommendations
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {trainingMetrics.map((metric, index) => (
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 bg-card border border-border rounded-lg p-1">
            <TabsTrigger value="courses" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Courses</TabsTrigger>
            <TabsTrigger value="paths" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Learning Paths</TabsTrigger>
            <TabsTrigger value="assessments" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Assessments</TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">My Progress</TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md text-sm py-1.5">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <Card className="glass-effect border-border">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search courses by title or keyword..." className="form-input pl-10 text-sm" onClick={() => handleFeatureClick("Course Search")} readOnly />
                  </div>
                  <Button variant="outline" onClick={() => handleFeatureClick("Course Filters")} className="border-border text-foreground hover:bg-primary/10 hover:text-primary text-sm">
                    <Filter className="w-4 h-4 mr-2" /> Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="glass-effect border-border card-hover cursor-pointer flex flex-col" onClick={() => handleFeatureClick("Course Details", course)}>
                  <div className="aspect-video bg-secondary rounded-t-xl flex items-center justify-center overflow-hidden">
                    <img  className="w-full h-full object-cover" alt={course.thumbnail} src="https://images.unsplash.com/photo-1670231200760-efbbfc4a79e3" />
                  </div>
                  <CardHeader className="p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="tag text-xs px-2 py-1">{course.category}</span>
                      <span className={`tag text-xs px-2 py-1 ${course.level === 'Advanced' ? 'priority-high' : course.level === 'Intermediate' ? 'priority-medium' : 'priority-low'}`}>{course.level}</span>
                    </div>
                    <CardTitle className="text-base sm:text-lg text-foreground line-clamp-2">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 flex-grow">
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3">By {course.instructor}</p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-3">
                      <div className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />{course.duration}</div>
                      <div className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" />{course.enrolled} enrolled</div>
                      <div className="flex items-center"><Star className="w-3.5 h-3.5 mr-1 text-yellow-400" />{course.rating}</div>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-xs sm:text-sm mb-1"><span className="text-muted-foreground">Progress</span><span className="text-foreground">{course.progress}%</span></div>
                      <Progress value={course.progress} className="h-1.5 sm:h-2" />
                    </div>
                  </CardContent>
                  <DialogFooter className="p-4 sm:p-5 border-t border-border mt-auto">
                    <Button className="w-full gradient-bg text-primary-foreground hover:opacity-90 text-sm" onClick={(e) => {e.stopPropagation(); handleFeatureClick("Continue Learning", course);}}>
                      <Play className="w-4 h-4 mr-2" />Continue Learning
                    </Button>
                  </DialogFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="paths" className="space-y-6">
            {learningPaths.map((path) => (
              <Card key={path.id} className="glass-effect border-border card-hover cursor-pointer" onClick={() => handleFeatureClick("Learning Path Details", path)}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1.5">{path.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2">{path.description}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center"><BookOpen className="w-3.5 h-3.5 mr-1" />{path.courses} courses</div>
                        <div className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />{path.duration}</div>
                        <div className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" />{path.enrolled} enrolled</div>
                      </div>
                    </div>
                    <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-3">
                      <div className="w-full md:w-48">
                        <div className="flex justify-between text-xs sm:text-sm mb-1"><span className="text-muted-foreground">Completion</span><span className="text-foreground">{path.completion}%</span></div>
                        <Progress value={path.completion} className="h-1.5 sm:h-2" />
                      </div>
                      <Button size="sm" className="gradient-bg text-primary-foreground hover:opacity-90 text-sm" onClick={(e) => {e.stopPropagation(); handleFeatureClick("Start Path", path);}}>
                        <Target className="w-4 h-4 mr-2" />Start Path
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="assessments" className="space-y-4">
            {assessments.map((assessment) => (
              <Card key={assessment.id} className="glass-effect border-border card-hover cursor-pointer" onClick={() => handleFeatureClick("Assessment Details", assessment)}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1.5">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">{assessment.title}</h3>
                        <span className={`px-2 py-1 sm:px-3 rounded-full text-xs font-medium ${assessment.status === 'Completed' ? 'status-active' : 'status-pending'}`}>{assessment.status}</span>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-2">Part of: {assessment.course}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground">
                        <span>{assessment.questions} questions</span>
                        <span>{assessment.timeLimit}</span>
                        <span>{assessment.attempts} attempts</span>
                        {assessment.bestScore && <span className="text-primary font-medium">Best Score: {assessment.bestScore}%</span>}
                      </div>
                    </div>
                    <Button size="sm" className={`text-sm ${assessment.status === 'Completed' ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' : 'gradient-bg text-primary-foreground hover:opacity-90'}`} onClick={(e) => {e.stopPropagation(); handleFeatureClick(assessment.status === 'Completed' ? "View Results" : "Start Assessment", assessment);}}>
                      {assessment.status === 'Completed' ? <><TrendingUp className="w-4 h-4 mr-2" />View Results</> : <><Play className="w-4 h-4 mr-2" />Start Assessment</>}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="progress">
             <p className="text-muted-foreground p-4 text-center">Your learning progress will be displayed here. 🚧</p>
          </TabsContent>
          <TabsContent value="achievements">
             <p className="text-muted-foreground p-4 text-center">Your achievements and badges will be displayed here. 🚧</p>
          </TabsContent>
        </Tabs>
      </motion.div>

      <Dialog open={showCreateCourseDialog} onOpenChange={setShowCreateCourseDialog}>
        <DialogContent className="sm:max-w-lg glass-effect border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Create New Course</DialogTitle>
            <DialogDescription className="text-muted-foreground">Fill in the details for the new training course.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitNewCourse} className="space-y-4 py-2 sm:py-4">
            <div><Label htmlFor="courseTitle" className="text-foreground">Course Title</Label><Input id="courseTitle" placeholder="e.g., Introduction to Python" className="form-input mt-1 text-sm" /></div>
            <div><Label htmlFor="courseInstructor" className="text-foreground">Instructor</Label><Input id="courseInstructor" placeholder="e.g., Jane Doe" className="form-input mt-1 text-sm" /></div>
            <div><Label htmlFor="courseCategory" className="text-foreground">Category</Label><Input id="courseCategory" placeholder="e.g., Development, Design" className="form-input mt-1 text-sm" /></div>
            <div><Label htmlFor="courseDuration" className="text-foreground">Duration (hours)</Label><Input id="courseDuration" type="number" placeholder="e.g., 8" className="form-input mt-1 text-sm" /></div>
            <DialogFooter>
              <Button type="button" variant="outline" className="border-border text-muted-foreground hover:bg-secondary text-sm" onClick={() => setShowCreateCourseDialog(false)}>Cancel</Button>
              <Button type="submit" className="gradient-bg text-primary-foreground hover:opacity-90 text-sm">Create Course</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Training;
