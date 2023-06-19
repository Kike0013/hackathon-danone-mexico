import React from 'react'

const ProgressCircle = ({ radius, stroke, progress }) => {

    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress / 100 * circumference;

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
        >
            <circle
                stroke="#324BAA"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                stroke-width={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
        </svg>
    )
}

export default ProgressCircle