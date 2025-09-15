import React from 'react';
import { COLORS } from '../constants/colors';

const PlayIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3L19 12L5 21V3Z" stroke={COLORS.buttonText} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default PlayIcon;
