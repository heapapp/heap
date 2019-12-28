import React from 'react'

const ArrowLeft = ({ size = 18, color = '#fff' }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path d="M15 18l-6-6 6-6" />
   </svg>
)

export default ArrowLeft
