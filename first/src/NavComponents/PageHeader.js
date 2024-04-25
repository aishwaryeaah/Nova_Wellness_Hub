import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = () => {

  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>
          <div style={styles.nova}>NOVA</div>
          <div style={styles.wellness}>Wellness</div>
        </Link>
      </div>
      <div style={styles.right}>
        <Link
          to="/login"
          style={styles.navItem}
        >
          COMMUNITY
        </Link>

        <Link
          to="/learn"
          style={styles.navItem}
        >
          LEARN
        </Link>

        <Link
          to='/about'
          style={styles.navItem}
        >
          ABOUT
        </Link>
      
        <Link
          to="/quiz"
          style={styles.navItem}
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
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  nova: {
    fontFamily: 'Goblin One, san-serif',
    fontSize: '24px',
    marginBottom: '-15px', // Adjust spacing between NOVA and Wellness
  },
  wellness: {
    fontFamily: 'Croissant One, san-serif', // Replace YourArtisticFont with your desired font
    fontSize: '20px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    margin: '0 30px',
    fontFamily: 'Anta, san-serif',
    fontSize: '16px',
    textDecoration: 'none',
    position: 'relative',
    cursor: 'pointer',
    color: '#333',
    transition: 'color 0.3s',
  },
};

export default PageHeader;
