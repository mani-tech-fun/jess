import React, { createContext, useContext, useState, useEffect } from 'react';

interface WorldState {
  currentLocation: string;
  discoveredMemories: number[];
  audioEnabled: boolean;
  isReducedMotion: boolean;
}

interface WorldContextType {
  state: WorldState;
  setCurrentLocation: (location: string) => void;
  discoverMemory: (id: number) => void;
  toggleAudio: (enabled: boolean) => void;
}

const WorldContext = createContext<WorldContextType | undefined>(undefined);

export const WorldProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<WorldState>({
    currentLocation: 'courtyard',
    discoveredMemories: [],
    audioEnabled: false,
    isReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  });

  useEffect(() => {
    const savedMemories = localStorage.getItem('discoveredMemories');
    if (savedMemories) {
      setState(prev => ({ ...prev, discoveredMemories: JSON.parse(savedMemories) }));
    }
  }, []);

  const setCurrentLocation = (location: string) => {
    setState(prev => ({ ...prev, currentLocation: location }));
  };

  const discoverMemory = (id: number) => {
    setState(prev => {
      if (prev.discoveredMemories.includes(id)) return prev;
      const updated = [...prev.discoveredMemories, id];
      localStorage.setItem('discoveredMemories', JSON.stringify(updated));
      return { ...prev, discoveredMemories: updated };
    });
  };

  const toggleAudio = (enabled: boolean) => {
    setState(prev => ({ ...prev, audioEnabled: enabled }));
  };

  return (
    <WorldContext.Provider value={{ state, setCurrentLocation, discoverMemory, toggleAudio }}>
      {children}
    </WorldContext.Provider>
  );
};

export const useWorld = () => {
  const context = useContext(WorldContext);
  if (!context) throw new Error('useWorld must be used within a WorldProvider');
  return context;
};
