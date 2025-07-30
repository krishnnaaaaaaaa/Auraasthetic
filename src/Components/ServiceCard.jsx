import React from 'react';

function ServiceCard({ title, Description }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '25px',
      width: '100%',
      maxWidth: '400px',
      padding: '15px',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#233123',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '20px',
        flexShrink: 0
      }}>
        <div style={{
          width: '25px',
          height: '25px',
          borderRadius: '50%',
          backgroundColor: '#C2EA66',
          border: '2.5px solid white'
        }}></div>
      </div>
      <div style={{ textAlign: 'left', paddingTop: '5px' }}>
        <h3 style={{
          margin: '0 0 8px 0',
          color: '#333',
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '1.2'
        }}>{title}</h3>
        <p style={{
          margin: 0,
          color: '#666',
          fontSize: '15px',
          lineHeight: '1.5'
        }}>{Description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
