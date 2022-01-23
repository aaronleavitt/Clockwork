import React, {useEffect, useState } from 'react';

function ClockCen() {
    const [clockCenState, setClockCenState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockCenState(date.toLocaleTimeString("en-US", {timeZone: "America/Mexico_City"}));
        }, 1000);
    }, []);

    return <div style={{ fontSize: "40px", margin: "20px" }}>Central Time: {clockCenState} </div>;
}

export default ClockCen;
