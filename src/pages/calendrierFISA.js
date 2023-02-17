import React, { useEffect } from 'react';

export default function calendrierFISA() {
    useEffect(() => {
        window.location.href = 'http://localhost:28000/file/fisaCalendar';
    }, []);

    return (
        <div>
            <h1>File Downloading...</h1>
        </div>
    );
}