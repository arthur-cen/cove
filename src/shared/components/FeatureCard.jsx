import React from 'react';
import Icon from './Icon';
import ChevronRightIcon from './ChevronRightIcon';

const FeatureCard = ({ styles, iconPath, title, description, color, onPress }) => (
  <div style={styles.cardContainer} onClick={onPress} role="button" tabIndex="0">
    <div style={{...styles.cardIconContainer, backgroundColor: `${color}20`}}>
      <Icon path={iconPath} color={color} />
    </div>
    <div style={styles.cardTextContainer}>
      <p style={styles.cardTitle}>{title}</p>
      <p style={styles.cardDescription}>{description}</p>
    </div>
    <div style={styles.cardArrow}>
      <ChevronRightIcon />
    </div>
  </div>
);

export default FeatureCard;
