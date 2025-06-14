
import React, { useState } from 'react';
import { Menu, Bell, Search, User, Settings, LogOut, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = ({ onMenuClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));

  const handleNotificationClick = () => {
    toast({
      title: "🔔 Notifications",
      description: "You have 3 new notifications! (This is a placeholder, actual notifications coming soon!)"
    });
  };

  const handleSearchClick = () => {
    toast({
      title: "🚧 Global Search",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
    toast({
      title: `🌙 Theme Changed`,
      description: `Switched to ${!isDarkMode ? 'Dark' : 'Light'} Mode.`,
    });
  };
  
  const handleProfileItemClick = (item) => {
     toast({
      title: `👤 Profile Action: ${item}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  }


  return (
    <header className="bg-card/80 backdrop-blur-lg border-b border-border px-4 sm:px-6 py-3 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden text-foreground hover:bg-primary/10"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="form-input pl-10 pr-4 py-2 w-48 md:w-80 rounded-lg text-sm"
              onClick={handleSearchClick}
              readOnly
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-foreground hover:bg-primary/10"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNotificationClick}
            className="relative text-foreground hover:bg-primary/10"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 notification-dot rounded-full border-2 border-card"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 hover:bg-primary/10 p-1 rounded-full"
              >
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">A</span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-xs font-medium text-foreground">Admin User</p>
                  <p className="text-xs text-muted-foreground">Super Admin</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 glass-effect border-border">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleProfileItemClick("Profile")} className="cursor-pointer hover:bg-primary/10">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleProfileItemClick("Settings")} className="cursor-pointer hover:bg-primary/10">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleProfileItemClick("Logout")} className="cursor-pointer hover:bg-primary/10 text-destructive focus:text-destructive focus:bg-destructive/10">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
