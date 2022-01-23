import React, {useEffect, useState } from 'react';

function ClockPac() {
    const [clockPacState, setClockPacState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockPacState(date.toLocaleTimeString("en-US", {timeZone: "America/Los_Angeles"}));
        }, 1000);
    }, []);

    return <div style={{ fontSize: "40px", margin: "20px" }}>Pacific Time: {clockPacState} </div>;
}

export default ClockPac;
