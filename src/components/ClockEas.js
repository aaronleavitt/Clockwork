import React, {useEffect, useState } from 'react';

function ClockEas() {
    const [clockEasState, setClockEasState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockEasState(date.toLocaleTimeString("en-US", {timeZone: "America/New_York"}));
        }, 1000);
    }, []);

    return <div style={{ fontSize: "40px", margin: "20px" }}>Eastern Time: {clockEasState} </div>;
}

export default ClockEas;
