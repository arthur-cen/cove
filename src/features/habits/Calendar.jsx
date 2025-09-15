import React from 'react';

const Calendar = ({ styles }) => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const firstDayOfWeek = startOfMonth.getDay(); 
    
    let dates = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
        dates.push(null);
    }
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        dates.push(i);
    }

    return (
        <div style={styles.calendarContainer}>
            <div style={styles.calendarHeader}>
                <p style={styles.calendarMonth}>{currentMonth} {today.getFullYear()}</p>
            </div>
            <div style={styles.calendarWeek}>
                {days.map((day, index) => <div key={`${day}-${index}`} style={{...styles.calendarDay, ...styles.dayName}}>{day}</div>)}
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', rowGap: '4px', placeItems: 'center'}}>
                 {dates.map((date, index) => (
                    <div key={index} style={{
                        ...styles.calendarDay, 
                        ...(date === currentDay ? styles.currentDay : {})
                    }}>
                        {date}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Calendar;
