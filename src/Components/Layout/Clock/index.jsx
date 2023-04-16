import React, { useState, useEffect } from 'react';

function Clock(props) {
    const { onClose } = props;
    const [time, setTime] = useState(new Date());
    const [closing, setClosing] = useState(false);

    useEffect(() => {
      const intervalID = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalID);
    }, []);

    useEffect(() => {
        if (closing) {
            const clockContainer = document.querySelector('.clock-container');
            clockContainer.classList.add('closing');
            setTimeout(() => {
                clockContainer.classList.remove('closing');
                setClosing(false);
                onClose();
            }, 1000);
        }
    }, [closing, onClose]);

  
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  
    const hourDeg = hours * 30 + minutes / 2;
    const minuteDeg = minutes * 6 + seconds / 10;
    const secondDeg = seconds * 6;

    const handleClockClose = () => {
        setClosing(true);
    };
    
      
    return ( 
            <div className="clock-layout">
                <button className='btn-close' onClick={handleClockClose}>X</button>
                <div className="layout-clock-container clock-container">
                    <div className="clock-content">
                        <div className="numbers">
                            <span className="number-clock"><b>12</b></span>
                            <span className="number-clock"><b>3</b></span>
                            <span className="number-clock"><b>6</b></span>
                            <span className="number-clock"><b>9</b></span>

                            <div className="circle" id="hr" style={{ transform: `rotate(${hourDeg}deg)` }}>
                                <i></i>
                            </div>
                            <div className="circle" id="mm" style={{ transform: `rotate(${minuteDeg}deg)` }}>
                                <i></i>
                            </div>
                            <div className="circle" id="sc" style={{ transform: `rotate(${secondDeg}deg)` }}>
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Clock;


