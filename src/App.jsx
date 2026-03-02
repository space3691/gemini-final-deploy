import React from 'react';
export default function App() {
  return (
    <div style={{ 
      backgroundColor: '#ff0000', 
      color: 'white', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '5rem', fontWeight: '900' }}>SYNC SUCCESSFUL!</h1>
      <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>The connection to Vercel is LIVE.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', border: '4px solid white', borderRadius: '2rem' }}>
         GO BACK TO CHAT AND ASK FOR THE FINAL DESIGN
      </div>
    </div>
  );
}