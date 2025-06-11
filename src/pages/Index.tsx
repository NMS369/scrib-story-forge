import { useState } from "react";
import Homepage from "@/components/Homepage";
import Dashboard from "@/components/Dashboard";
import Onboarding from "@/components/Onboarding";
import { Button } from "@/components/ui/button";

const Index = () => {
  console.log('Index component mounting...');
  const [currentView, setCurrentView] = useState<'homepage' | 'onboarding' | 'dashboard'>('homepage');

  // Demo navigation for prototype
  const renderView = () => {
    switch (currentView) {
      case 'homepage':
        return <Homepage />;
      case 'onboarding':
        return <Onboarding />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="relative">
      {/* Demo Navigation - Remove in production */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border rounded-lg p-2 space-x-2 shadow-lg">
        <Button 
          size="sm" 
          variant={currentView === 'homepage' ? 'default' : 'outline'}
          onClick={() => setCurrentView('homepage')}
        >
          Homepage
        </Button>
        <Button 
          size="sm" 
          variant={currentView === 'onboarding' ? 'default' : 'outline'}
          onClick={() => setCurrentView('onboarding')}
        >
          Onboarding
        </Button>
        <Button 
          size="sm" 
          variant={currentView === 'dashboard' ? 'default' : 'outline'}
          onClick={() => setCurrentView('dashboard')}
        >
          Dashboard
        </Button>
      </div>

      {renderView()}
    </div>
  );
};

export default Index;
