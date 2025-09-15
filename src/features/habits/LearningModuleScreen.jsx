import React from 'react';
import BackArrowIcon from '../../shared/components/BackArrowIcon';
import Calendar from './Calendar';
import { COLORS } from '../../shared/constants/colors';

const LearningModuleScreen = ({ module, setView, styles }) => {
    return (
        <div style={styles.learningContainer}>
            <div style={styles.pageHeader}>
                <button onClick={() => setView('healthy_habits')} style={styles.backButton}>
                    <BackArrowIcon />
                </button>
            </div>
             <div style={{paddingTop: '80px', paddingLeft: '20px', paddingRight: '20px'}}>
                <Calendar styles={styles} />
                <div style={styles.moduleContent}>
                    <h2 style={styles.moduleTitle}>{module.title}</h2>
                    <p style={styles.moduleText}>{module.description}</p>
                    <button style={{...styles.button, marginTop: '20px', backgroundColor: module.color || COLORS.button}}>
                        Commit to this Habit Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LearningModuleScreen;
