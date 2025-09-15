import React, { useState, useEffect, useRef } from 'react';
import BackArrowIcon from '../../shared/components/BackArrowIcon';
import SendIcon from '../../shared/components/SendIcon';
import Icon from '../../shared/components/Icon';
import { ICONS } from '../../shared/constants/icons';

const MediatorChatScreen = ({ setView, styles }) => {
    const [sessionStarted, setSessionStarted] = useState(false);
    const [messages, setMessages] = useState([
        { 
            sender: 'ai', 
            text: "Welcome. This is a private and secure space to communicate. When you're ready, please press 'Start Session' below." 
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messageAreaRef = useRef(null);

    useEffect(() => {
        if (messageAreaRef.current) {
            messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
        }
    }, [messages]);

    const handleStartSession = () => {
        setMessages(prev => [...prev, {
            sender: 'ai',
            text: "Great. To begin, please take a moment to describe the situation from your perspective. What happened that led to this conflict?"
        }]);
        setSessionStarted(true);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() === '') return;
        
        const userMessage = { sender: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        setTimeout(() => {
            const aiResponse = { sender: 'ai', text: "Thank you for sharing. Can you tell me more about how that made you feel?" };
            setMessages(prev => [...prev, aiResponse]);
        }, 1200);
    };

    return (
        <div style={styles.chatContainer}>
            <div style={styles.pageHeader}>
                <button onClick={() => setView('home')} style={styles.backButton}>
                    <BackArrowIcon />
                </button>
                <div style={styles.chatHeaderInfo}>
                    <div style={styles.avatar}>
                        <Icon path={ICONS.avatar} color="#8DB5EE" size={24}/>
                    </div>
                    <p style={styles.chatHeaderTitle}>AI Mediator</p>
                </div>
            </div>
            <div style={styles.messageArea} ref={messageAreaRef}>
                {messages.map((msg, index) => (
                    <div key={index} style={msg.sender === 'ai' ? styles.mediatorMessageWrapper : styles.userMessageWrapper}>
                         <div style={msg.sender === 'ai' ? styles.mediatorMessageBubble : styles.userMessageBubble}>
                            <p style={msg.sender === 'ai' ? styles.messageText : styles.userMessageText}>{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div style={styles.chatFooter}>
                 {!sessionStarted ? (
                     <button style={{...styles.button, width: '100%'}} onClick={handleStartSession}>
                        Start Session
                    </button>
                 ) : (
                     <div style={styles.chatInputContainer}>
                         <input
                            style={styles.chatInput}
                            placeholder="Type your message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                         />
                         <button style={styles.sendButton} onClick={handleSendMessage}>
                            <SendIcon />
                         </button>
                     </div>
                 )}
            </div>
        </div>
    );
};

export default MediatorChatScreen;
