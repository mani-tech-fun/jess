import { useState } from 'react';
import MagicalIntro from './components/MagicalIntro/MagicalIntro';
import MagicalWorld from './components/World/MagicalWorld';
import { WorldProvider } from './hooks/useWorldContext';
import './App.css';

function App() {
  const [scene, setScene] = useState('intro');

  const handleIntroComplete = () => {
    setScene('letter');
  };

  const handleEnterWorld = () => {
    setScene('world');
  };

  return (
    <WorldProvider>
      <div className="app-container">
        {scene === 'intro' && (
          <MagicalIntro onComplete={handleIntroComplete} />
        )}
        {scene === 'letter' && (
          <div className="placeholder-scene">
            <div className="letter-ui" style={{ textAlign: 'center' }}>
              <h1 style={{ fontFamily: 'Georgia, serif', color: '#fdf5e6' }}>The Magical Letter is arriving...</h1>
              <button
                className="magical-button"
                onClick={handleEnterWorld}
                style={{
                  marginTop: '2rem',
                  padding: '1rem 2rem',
                  border: '2px solid #ffd700',
                  color: '#ffd700',
                  background: 'transparent',
                  cursor: 'pointer',
                  fontFamily: 'Georgia, serif'
                }}
              >
                ENTER THE MAGICAL WORLD
              </button>
            </div>
          </div>
        )}
        {scene === 'world' && (
          <MagicalWorld />
        )}
      </div>
    </WorldProvider>
  );
}

export default App;
