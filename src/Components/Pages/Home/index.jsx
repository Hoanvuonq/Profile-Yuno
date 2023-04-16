import React, { useState, useEffect } from 'react';

import Menu  from "../../Layout/Menu";
import Clock from '../../Layout/Clock';


function Home() {
    const [showClock, setShowClock] = useState(false);

    const handleOpenClock = () => {
        setShowClock(true);
      };
    
      const handleCloseClock = () => {
        setShowClock(false);
      };

    return ( 
            <div className="home">
            {/* <Menu/> */}
                <div className="home-container">
                    <div className="home-content-left">
                        <button onClick={handleOpenClock}>Open</button>
                        {showClock && <Clock onClose={() => setShowClock(false)} />}
                    </div>
                    <div className="home-content-right"></div>
                </div>
            </div>
    );
}

export default Home;


