import React from 'react';
import spinner from './Ripple-1.5s-200px.gif';

export default function Spinner() {
    return (
        <div>
            <img src={spinner}
                style={{ width: '100px', margin: 'auto', display: 'block' }}
                alt="Laden..." />
        </div>
    )
}
