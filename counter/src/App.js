import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('counter');
    return saved !== null ? Number(saved) : 0;
  });

  const [animate, setAnimate] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true';
  });

  useEffect(() => {
    localStorage.setItem('counter', count);
  }, [count]);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleAnimate = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 150);
  };

  const increment = () => {
    setCount(prev => prev + 1);
    handleAnimate();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    handleAnimate();
  };

  const reset = () => {
    setCount(0);
    handleAnimate();
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌟 Enhanced Counter App</h1>
      <div style={styles.counterBox}>
        <button onClick={decrement} style={{ ...styles.button, backgroundColor: '#ff6b6b' }}>−</button>
        <span
          style={{
            ...styles.count,
            transform: animate ? 'scale(1.3)' : 'scale(1)',
            transition: 'transform 0.15s ease-in-out'
          }}
        >
          {count}
        </span>
        <button onClick={increment} style={{ ...styles.button, backgroundColor: '#1dd1a1' }}>+</button>
      </div>
      <div style={styles.bottomControls}>
        <button onClick={reset} style={styles.resetButton}>Reset</button>
        <button onClick={toggleDarkMode} style={styles.themeButton}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '80px',
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  },
  heading: {
    marginBottom: '30px'
  },
  counterBox: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '30px',
    fontSize: '2.5rem',
    background: '#ffffff20',
    padding: '20px 40px',
    borderRadius: '20px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
  },
  button: {
    fontSize: '2rem',
    padding: '10px 25px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    color: 'white'
  },
  resetButton: {
    marginTop: '30px',
    fontSize: '1.2rem',
    padding: '10px 30px',
    borderRadius: '10px',
    backgroundColor: '#576574',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  },
  themeButton: {
    marginLeft: '15px',
    marginTop: '30px',
    fontSize: '1.2rem',
    padding: '10px 20px',
    borderRadius: '10px',
    backgroundColor: '#8395a7',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  },
  count: {
    minWidth: '60px',
    display: 'inline-block',
    textAlign: 'center'
  },
  bottomControls: {
    marginTop: '20px'
  }
};

export default App;
