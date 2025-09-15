import React from 'react';
import FeatureCard from '../../shared/components/FeatureCard';
import { ICONS } from '../../shared/constants/icons';
import { COLORS } from '../../shared/constants/colors';

const HomeScreen = ({ setView, styles }) => (
  <div style={styles.scrollViewContainer}>
    <div style={styles.header}>
      <h1 style={styles.headerTitle}>Welcome</h1>
      <p style={styles.headerSubtitle}>How can we help you connect today?</p>
    </div>
    <div style={styles.featuresContainer}>
      <FeatureCard
        styles={styles}
        iconPath={ICONS.wechat}
        title="Resolve a Conflict"
        description="A step-by-step guide to talk through a specific issue productively."
        color={COLORS.accent1}
        onPress={() => setView('mediator_chat')}
      />
      <FeatureCard
        styles={styles}
        iconPath={ICONS.dumbbell}
        title="Build Healthy Habits"
        description="Daily exercises and guides to strengthen your communication skills."
        color={COLORS.accent2}
        onPress={() => setView('healthy_habits')}
      />
      <FeatureCard
        styles={styles}
        iconPath={ICONS.meditation}
        title="Take a Breather"
        description="A tool to pause a heated argument and cool down before you reconnect."
        color={COLORS.accent3}
        onPress={() => setView('cooldown')}
      />
    </div>
  </div>
);

export default HomeScreen;
