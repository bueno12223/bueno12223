import * as React from 'react'

const SvgComponent = (props) => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth={0}
    viewBox='0 0 24 24'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12.2 2.4A9.3 9.3 0 0 0 3 9.3s-.1 0 0 0a6.7 6.7 0 0 0-.3 11 6.7 6.7 0 0 0 4 1.3h10.5c6.7 0 9.4-8.6 3.8-12.3a9.4 9.4 0 0 0-2.8-4.6 9.3 9.3 0 0 0-6-2.3zm-.4 4.1c1.3 0 2.5.4 3.5 1.2a5.2 5.2 0 0 1 1.9 4v.6c3.5-.1 3.5 5.2 0 5.2H6.8a2.6 2.6 0 0 1-1-.3 2.6 2.6 0 1 1 3.4-3.4l3-3a6.7 6.7 0 0 0-4-2.6 5.2 5.2 0 0 1 3.6-1.7z'
      stroke='none'
    />
  </svg>
)

export default SvgComponent
