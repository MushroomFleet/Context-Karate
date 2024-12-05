import React, { useState, useEffect } from 'react';
import { Terminal, FileText, GitBranch, Network } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const StoryManagementSystem = ({ aceData, holofsState }) => {
  // Core system states
  const [currentPath, setCurrentPath] = useState('/stories');
  const [commandHistory, setCommandHistory] = useState([]);
  const [activeStoryThread, setActiveStoryThread] = useState(null);
  const [systemHealth, setSystemHealth] = useState({
    aceIntegration: 0,
    holofsStatus: 0,
    dataProcessing: 0
  });

  // ACE system tracking
  const [aceMetrics] = useState({
    priorities: [
      'Character Relationship Mapping',
      'Institutional Framework Development',
      'Plot Thread Consistency',
      'Pattern Analysis Generation',
      'Context Verification'
    ],
    stageTracking: {
      comprehension: 0,
      contextClarity: 0,
      elicitationDepth: 0,
      recursiveProgress: 0,
      adaptiveResponse: 0
    },
    processStatus: {
      priming: false,
      tracking: false,
      clarification: false,
      expansion: false,
      recursion: false
    }
  });

  // HOLOFS virtual filesystem state
  const [fileSystem] = useState({
    currentDirectory: '/stories',
    activeFiles: [],
    mountedSources: [],
    processingQueue: []
  });

  // Simulate system health updates
  useEffect(() => {
    const updateHealth = () => {
      setSystemHealth(prev => ({
        aceIntegration: Math.min(100, prev.aceIntegration + 5),
        holofsStatus: Math.min(100, prev.holofsStatus + 3),
        dataProcessing: Math.min(100, prev.dataProcessing + 4)
      }));
    };
    const interval = setInterval(updateHealth, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            <CardTitle>Intelligence Fiction Development Environment</CardTitle>
          </div>
          <div className="flex gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              Files: {fileSystem.activeFiles.length}
            </span>
            <span className="flex items-center gap-1">
              <GitBranch className="w-4 h-4" />
              Threads: {commandHistory.length}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-4">
          {/* System Status Overview */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {Object.entries(systemHealth).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div className="mt-1 h-2 bg-gray-200 rounded">
                  <div 
                    className="h-full bg-green-500 rounded transition-all duration-500" 
                    style={{width: `${value}%`}}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ACE Framework Parameters */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Network className="w-4 h-4" />
              ACE Framework Parameters
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {aceMetrics.priorities.map((priority, index) => (
                <div key={index} className="bg-white p-3 rounded shadow-sm">
                  <div className="text-sm font-medium">{priority}</div>
                  <div className="mt-1 h-2 bg-blue-100 rounded">
                    <div 
                      className="h-full bg-blue-500 rounded transition-all duration-500" 
                      style={{width: `${Math.random() * 100}%`}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Story Thread Alert */}
          {activeStoryThread && (
            <Alert>
              <AlertDescription>
                Active Story Thread: {activeStoryThread}
                <div className="text-sm text-gray-500 mt-1">
                  Using fictional framework overlays • Maintaining plausible deniability
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* ACE Stage Progress */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">ACE Stage Progress</h3>
            <div className="space-y-2">
              {Object.entries(aceMetrics.stageTracking).map(([stage, progress]) => (
                <div key={stage} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="capitalize">{stage.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded">
                    <div 
                      className="h-full bg-green-500 rounded transition-all duration-500" 
                      style={{width: `${progress}%`}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryManagementSystem;
