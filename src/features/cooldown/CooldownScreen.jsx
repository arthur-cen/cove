import React, { useState, useEffect, useRef } from 'react';
import BackArrowIcon from '../../shared/components/BackArrowIcon';
import PlayIcon from '../../shared/components/PlayIcon';
import { COLORS } from '../../shared/constants/colors';
import d3 from '../../utils/d3Mock';

const CooldownScreen = ({ setView, styles }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [guideText, setGuideText] = useState("");
    const svgRef = useRef(null);
    const animationTimeoutRef = useRef(null);
    const cycleCountRef = useRef(0);

    const handleGoBack = () => {
        setIsPlaying(false);
        setView('home');
    }

    const handlePlay = () => {
        cycleCountRef.current = 0;
        setIsPlaying(true);
    };
    
    useEffect(() => {
        if (!isPlaying) {
            return;
        }

        const svgElement = svgRef.current;
        const svg = d3.select(svgElement);
        svg.select("circle").remove();
        const circle = svg.append("circle")
            .attr("cx", 100)
            .attr("cy", 100)
            .attr("r", 50) 
            .attr("fill", "url(#grad1)");

        let cancelled = false;

        const breathCycle = () => {
            if (cancelled || cycleCountRef.current >= 10) {
                setGuideText("Session Complete");
                setIsPlaying(false);
                return;
            }
            cycleCountRef.current++;

            setGuideText("Inhale");
            circle.transition()
                .duration(15000)
                .ease(d3.easeCircleOut)
                .attr("r", 100)
                .on("end", () => {
                    if (cancelled) return;
                    
                    setGuideText("Hold");
                    animationTimeoutRef.current = setTimeout(() => {
                        if (cancelled) return;

                        setGuideText("Exhale");
                        circle.transition()
                            .duration(15000)
                            .ease(d3.easeCircleOut)
                            .attr("r", 50)
                            .on("end", () => {
                                if (cancelled) return;

                                setGuideText("Hold");
                                animationTimeoutRef.current = setTimeout(breathCycle, 5000);
                            });
                    }, 5000);
                });
        };

        breathCycle();

        return () => {
            cancelled = true;
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
            if (svgElement) {
                 const circleEl = d3.select(svgElement).select("circle");
                 if(circleEl && circleEl.interrupt) circleEl.interrupt();
            }
        };
    }, [isPlaying]);

    return (
        <div style={styles.cooldownContainer}>
            <div style={styles.pageHeader}>
                <button onClick={handleGoBack} style={styles.backButton}>
                    <BackArrowIcon />
                </button>
            </div>
            <div style={styles.cooldownContent}>
                {!isPlaying ? (
                    <div style={styles.cooldownIntro}>
                        <h2 style={styles.cooldownTitle}>Time for a Breather</h2>
                        <p style={styles.cooldownSubtitle}>
                           {guideText === "Session Complete" ? guideText : "Follow the guide to calm your mind and body."}
                        </p>
                        <button style={styles.playButton} onClick={handlePlay}>
                            <PlayIcon />
                        </button>
                    </div>
                ) : (
                    <div style={styles.animationContainer}>
                        <svg ref={svgRef} width="300" height="300" viewBox="0 0 200 200">
                             <defs>
                                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" style={{stopColor: COLORS.breatherGradientEnd, stopOpacity:1}} />
                                <stop offset="100%" style={{stopColor: COLORS.breatherGradientStart, stopOpacity:1}} />
                                </radialGradient>
                            </defs>
                        </svg>
                        <p style={styles.guideText}>{guideText}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CooldownScreen;
