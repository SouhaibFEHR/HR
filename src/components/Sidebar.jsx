import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BarChart3, 
  Target, 
  UserCheck, 
  GitBranch, 
  Shield, 
  X, 
  Sparkles 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'AI Recruiting', path: '/recruiting' },
  { icon: GraduationCap, label: 'Training & Development', path: '/training' },
  { icon: BarChart3, label: 'Analytics & Reporting', path: '/analytics' },
  { icon: Target, label: 'Performance Management', path: '/performance' },
  { icon: UserCheck, label: 'Onboarding & HR Ops', path: '/onboarding' },
  { icon: GitBranch, label: 'Pipeline Editor', path: '/pipeline' },
  { icon: Shield, label: 'Roles & Permissions', path: '/roles' },
];

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ 
          x: isOpen ? 0 : -300,
          width: isOpen || window.innerWidth >= 1024 ? 256 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 sidebar-gradient border-r border-border shadow-lg h-full",
          "lg:translate-x-0 lg:block flex-shrink-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
        style={{ width: isOpen || window.innerWidth >= 1024 ? '16rem' : '0' }}
      >
        <div className="flex flex-col h-full w-64">
          <div className="flex items-center justify-between p-5 border-b border-border flex-shrink-0">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">AI HR SaaS</h1>
                <p className="text-xs text-muted-foreground">Enterprise Platform</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-md hover:bg-primary/10 transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <nav className="flex-1 p-3 space-y-1.5 scrollbar-thin overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose} 
                  className={cn(
                    "flex items-center space-x-2.5 px-3.5 py-2.5 rounded-lg transition-all duration-200",
                    "hover:bg-primary/10 group",
                    isActive ? "bg-primary/15 border border-primary/20 shadow-sm" : "hover:bg-secondary/50"
                  )}
                >
                  <item.icon className={cn(
                    "w-4 h-4 transition-colors flex-shrink-0",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )} />
                  <span className={cn(
                    "text-sm font-medium transition-colors truncate",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-border flex-shrink-0">
            <div className="glass-effect rounded-lg p-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary-foreground">AI</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">AI Assistant</p>
                  <p className="text-xs text-muted-foreground">Online & Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;