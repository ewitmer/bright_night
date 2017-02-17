import React from 'react';

export default function ProgressBar(props) {
  const base = parseInt(props.base, 10);
  const circleSize = base / 2;
  const borderWidth = 3;
  const radius = (base - borderWidth * 2) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = (1 - props.percent) * circumference

  return <svg className="progress" width={base} height={base}>
  <circle cx={circleSize} cy={circleSize} r={radius} fill="none" stroke="#e6e6e6" strokeWidth={borderWidth} />
  <circle cx={circleSize} cy={circleSize} r={radius} fill="none" stroke={props.hex} strokeWidth={borderWidth} strokeDasharray={circumference} strokeDashoffset={circumference}>
    <animate attributeType="XML" attributeName="stroke-dashoffset" from={circumference} to={offset} dur="1s" fill="freeze" />
  </circle>
  <text className="progress-text" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" stroke={props.hex}>
      {(props.percent * 100)}%
    </text>
</svg>
}
