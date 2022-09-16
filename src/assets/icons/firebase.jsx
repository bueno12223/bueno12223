import * as React from 'react'

const SvgComponent = (props) => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth={0}
    viewBox='0 0 512 512'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m93 329 48-304c1-10 15-13 20-3l51 95zm339 71-47-277a11 11 0 0 0-18-6L80 400l159 92a33 33 0 0 0 32 0zM302 159l-36-70a11 11 0 0 0-20 0L86 376z'
      stroke='none'
    />
  </svg>
)

export default SvgComponent
