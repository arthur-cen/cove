import React, { useState } from 'react';
import AuthScreen from './features/auth/AuthScreen';
import HomeScreen from './features/home/HomeScreen';
import MediatorChatScreen from './features/mediator/MediatorChatScreen';
import CooldownScreen from './features/cooldown/CooldownScreen';
import HealthyHabitsScreen from './features/habits/HealthyHabitsScreen';
import LearningModuleScreen from './features/habits/LearningModuleScreen';
import { styles } from './shared/styles/styles';

// --- Main App Component ---
export default function App() {
  const [currentView, setCurrentView] = useState({ view: 'auth', props: {} });

  const navigate = (view, props = {}) => {
    setCurrentView({ view, props });
  };

  const selectModule = (module) => {
    navigate('learning_module', { module });
  };

  const renderView = () => {
    switch (currentView.view) {
      case 'home':
        return <HomeScreen setView={navigate} styles={styles} />;
      case 'mediator_chat':
        return <MediatorChatScreen setView={navigate} styles={styles} />;
      case 'cooldown':
        return <CooldownScreen setView={navigate} styles={styles} />;
      case 'healthy_habits':
        return <HealthyHabitsScreen setView={navigate} styles={styles} onSelectModule={selectModule} />;
      case 'learning_module':
        return <LearningModuleScreen module={currentView.props.module} setView={navigate} styles={styles} />;
      case 'auth':
      default:
        return <AuthScreen setView={navigate} styles={styles} />;
    }
  };

  return (
    <div style={styles.safeArea}>
      {renderView()}
    </div>
  );
}
