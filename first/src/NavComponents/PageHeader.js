import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = () => {

  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <Link to="/">
          <img src="logo.png" alt="Logo" style={styles.logo} />
        </Link>
      </div>
      <div style={styles.right}>
        <Link
          to="/login"
          style={{ ...styles.navItem, color: 'black' }}
        >
          COMMUNITY
        </Link>

        <Link
          to="/learn"
          style={{ ...styles.navItem, color : 'black' }}
        >
          LEARN
        </Link>

        <Link
          to='/about'
          style={{ ...styles.navItem, color : 'black' }}
        >
          ABOUT
        </Link>
      
        <Link
          to="/quiz"
          style={{ ...styles.navItem, color: 'black' }}
        >
          MENTAL HEALTH CHECK
        </Link>
      </div>
    </header>
  );
};

const styles = {
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: '80px',
    backgroundColor: '#FAF1DA',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    zIndex: 9999,
    transition: 'top 0.3s',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    margin: '0 30px',
    fontFamily: 'ANTA, sans-serif',
    fontSize: '16px',
    textDecoration: 'none',
    position: 'relative',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  underline: {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#333', // Color of the underline
    transition: 'transform 0.3s, opacity 0.3s',
    transformOrigin: 'bottom right',
  },
};

export default PageHeader;
