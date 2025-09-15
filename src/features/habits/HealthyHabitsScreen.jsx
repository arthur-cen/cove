import React from 'react';
import BackArrowIcon from '../../shared/components/BackArrowIcon';
import FeatureCard from '../../shared/components/FeatureCard';
import { ICONS } from '../../shared/constants/icons';
import { COLORS } from '../../shared/constants/colors';

const HealthyHabitsScreen = ({ setView, styles, onSelectModule }) => {
    const modules = [
        {
            id: 'gestures',
            title: 'Small Gestures, Big Impact',
            description: "Discover small, daily actions that nurture connection and appreciation in your relationship.",
            iconPath: ICONS.gestures,
            color: COLORS.accent3
        },
        {
            id: 'communication',
            title: 'Essential Communication Tips',
            description: "Learn foundational techniques for clearer, kinder, and more effective day-to-day conversations.",
            iconPath: ICONS.communication,
            color: COLORS.accent1
        },
        {
            id: 'love_languages',
            title: "Speak Your Partner's Love Language",
            description: "Understand how your partner gives and receives love, and learn to express affection in ways that resonate most.",
            iconPath: ICONS.love_languages,
            color: COLORS.accent2
        }
    ];

    return (
        <div style={styles.learningContainer}>
            <div style={styles.pageHeader}>
                <button onClick={() => setView('home')} style={styles.backButton}>
                    <BackArrowIcon />
                </button>
                <h1 style={styles.learningTitle}>Build Healthy Habits</h1>
            </div>
             <div style={{paddingTop: '80px', paddingLeft: '20px', paddingRight: '20px'}}>
                {modules.map((module) => (
                    <FeatureCard
                        key={module.id}
                        styles={styles}
                        iconPath={module.iconPath}
                        title={module.title}
                        description={module.description}
                        color={module.color}
                        onPress={() => onSelectModule(module)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HealthyHabitsScreen;
