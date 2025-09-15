// --- Stylesheet Object ---
export const styles = {
  safeArea: {
    backgroundColor: '#F7F9FC',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Home & General
  scrollViewContainer: { width: '100%', maxWidth: '420px', margin: '0 auto', paddingBottom: 40, alignSelf: 'flex-start' },
  header: { padding: '40px 24px 20px 24px' },
  headerTitle: { fontSize: 32, fontWeight: 'bold', color: '#333D4B', marginBottom: 8, margin: 0 },
  headerSubtitle: { fontSize: 18, color: '#6B778D', margin: 0 },
  featuresContainer: { padding: '0 20px' },
  cardContainer: {
    backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, display: 'flex',
    flexDirection: 'row', alignItems: 'center', marginBottom: 16,
    boxShadow: '0 4px 12px rgba(107, 119, 141, 0.2)', cursor: 'pointer',
  },
  cardIconContainer: {
    width: 60, height: 60, borderRadius: 30, display: 'flex', justifyContent: 'center',
    alignItems: 'center', marginRight: 16, flexShrink: 0,
  },
  cardTextContainer: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#333D4B', marginBottom: 4, margin: 0 },
  cardDescription: { fontSize: 14, color: '#6B778D', lineHeight: 1.5, margin: 0 },
  cardArrow: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 8 },
  button: {
    width: '100%', padding: '16px', borderRadius: '12px', border: 'none',
    backgroundColor: '#8DB5EE', color: '#FFFFFF', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer',
  },
  backButton: { background: 'none', border: 'none', cursor: 'pointer', padding: '8px' },
  pageHeader: {
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, padding: '12px 16px', 
    display: 'flex', alignItems: 'center', backgroundColor: 'rgba(247, 249, 252, 0.8)',
    backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'
  },

  // Auth Screen
  authContainer: { width: '100%', maxWidth: '380px', padding: '20px', textAlign: 'center', margin: 'auto' },
  authTitle: { fontSize: 36, fontWeight: 'bold', color: '#333D4B', marginBottom: 8 },
  authSubtitle: { fontSize: 16, color: '#6B778D', marginBottom: 32 },
  input: {
    width: '100%', padding: '16px', marginBottom: '16px', borderRadius: '12px', border: 'none',
    backgroundColor: '#EDF2F7', fontSize: '16px', boxSizing: 'border-box',
  },
  authFooter: { color: '#6B778D', marginTop: '24px' },

  // Mediator Chat
  chatContainer: {
    width: '100%', maxWidth: '420px', height: '100vh', maxHeight: '800px', display: 'flex',
    flexDirection: 'column', backgroundColor: '#FFFFFF', borderRadius: '20px',
    boxShadow: '0 8px 30px rgba(107, 119, 141, 0.2)', overflow: 'hidden', margin: 'auto', position: 'relative',
  },
  chatHeaderInfo: { display: 'flex', alignItems: 'center', marginLeft: '12px' },
  avatar: {
    width: '40px', height: '40px', borderRadius: '20px', backgroundColor: '#EBF2FB',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  chatHeaderTitle: { margin: 0, marginLeft: '12px', fontSize: '18px', fontWeight: '600', color: '#333D4B' },
  messageArea: { flex: 1, padding: '80px 20px 20px 20px', overflowY: 'auto', display: 'flex', flexDirection: 'column' },
  mediatorMessageWrapper: { display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' },
  userMessageWrapper: { display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' },
  mediatorMessageBubble: { backgroundColor: '#EBF2FB', borderRadius: '18px 18px 18px 4px', padding: '12px 16px', maxWidth: '85%' },
  userMessageBubble: { backgroundColor: '#8DB5EE', borderRadius: '18px 18px 4px 18px', padding: '12px 16px', maxWidth: '85%' },
  messageText: { margin: 0, color: '#333D4B', lineHeight: 1.6 },
  userMessageText: { margin: 0, color: '#FFFFFF', lineHeight: 1.6 },
  chatFooter: { padding: '16px', borderTop: '1px solid #EDF2F7', flexShrink: 0, backgroundColor: '#FFFFFF' },
  chatInputContainer: { display: 'flex', alignItems: 'center' },
  chatInput: {
    flex: 1, padding: '12px 16px', borderRadius: '20px', border: 'none',
    backgroundColor: '#EDF2F7', fontSize: '16px', marginRight: '10px',
  },
  sendButton: {
    width: '44px', height: '44px', borderRadius: '22px', border: 'none', backgroundColor: '#8DB5EE',
    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', flexShrink: 0,
  },

  // Cooldown Screen
  cooldownContainer: {
    width: '100%', maxWidth: '420px', height: '100vh', maxHeight: '800px', display: 'flex',
    flexDirection: 'column', backgroundColor: '#F7F9FC', borderRadius: '20px',
    boxShadow: '0 8px 30px rgba(107, 119, 141, 0.2)', overflow: 'hidden', margin: 'auto', position: 'relative',
  },
  cooldownContent: {
    flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center', padding: '20px',
  },
  cooldownIntro: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  cooldownTitle: { fontSize: '28px', fontWeight: 'bold', color: '#333D4B', marginBottom: '12px' },
  cooldownSubtitle: { fontSize: '18px', color: '#6B778D', marginBottom: '40px', maxWidth: '300px' },
  playButton: {
    width: '80px', height: '80px', borderRadius: '40px', border: 'none', backgroundColor: '#80D8C3',
    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 4px 15px #80D8C380',
  },
  animationContainer: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  guideText: { fontSize: '24px', fontWeight: '600', color: '#333D4B', marginTop: '40px', minHeight: '30px' },

  // Healthy Habits
  learningContainer: {
    width: '100%', maxWidth: '420px', margin: '0 auto',
    alignSelf: 'flex-start', boxSizing: 'border-box', position: 'relative',
    minHeight: '100vh',
  },
  learningTitle: { fontSize: '24px', fontWeight: 'bold', color: '#333D4B', marginLeft: '12px' },
  
  // Learning Module
  calendarContainer: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 24, boxShadow: '0 2px 8px rgba(107, 119, 141, 0.15)' },
  calendarHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px', marginBottom: 12 },
  calendarMonth: { fontSize: 16, fontWeight: '600', color: '#333D4B' },
  calendarWeek: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', placeItems: 'center', marginBottom: 4 },
  calendarDay: {
    width: 32, height: 32, borderRadius: 16, display: 'flex',
    justifyContent: 'center', alignItems: 'center', color: '#6B778D', fontSize: 14
  },
  dayName: { fontWeight: '600', color: '#6B778D', fontSize: 12 },
  currentDay: { backgroundColor: '#8DB5EE', color: '#FFFFFF' },
  moduleContent: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(107, 119, 141, 0.15)' },
  moduleTitle: { fontSize: 20, fontWeight: 'bold', color: '#333D4B', marginBottom: 16 },
  moduleText: { fontSize: 16, color: '#333D4B', lineHeight: 1.6 },
};
