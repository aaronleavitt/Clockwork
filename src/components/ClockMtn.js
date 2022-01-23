import React, {useEffect, useState } from 'react';

function ClockMtn() {
    const [clockMtnState, setClockMtnState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockMtnState(date.toLocaleTimeString("en-US", {timeZone: "America/Denver"}));
        }, 1000);
    }, []);

    return <div style={{ fontSize: "40px", margin: "20px" }}>Mountain Time: {clockMtnState} </div>;
}

export default ClockMtn;
