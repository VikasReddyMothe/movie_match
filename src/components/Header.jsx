import React, { useState, useEffect } from 'react';

function Header() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString(); // Format the date as mm/dd/yyyy
      const formattedTime = date.toLocaleTimeString(); // Format the time as hh:mm:ss AM/PM
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1>Movie Finder</h1>
        <div className="date-time">
          <span>{currentDate}</span> | <span>{currentTime}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
