import React from 'react';
import { COLORS } from '../../shared/constants/colors';

const AuthScreen = ({ setView, styles }) => (
  <div style={styles.authContainer}>
    <h1 style={styles.authTitle}>Connect</h1>
    <p style={styles.authSubtitle}>Sign in to continue</p>
    <input style={styles.input} placeholder="Email" type="email" />
    <input style={styles.input} placeholder="Password" type="password" />
    <button style={styles.button} onClick={() => setView('home')}>
      Sign In
    </button>
    <p style={styles.authFooter}>Don't have an account? <button style={{color: COLORS.accent1, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline'}}>Sign Up</button></p>
  </div>
);

export default AuthScreen;
