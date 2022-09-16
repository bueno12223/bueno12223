import * as React from 'react'

const SvgComponent = (props) => (
  <svg
    stroke='currentColor'
    fill='none'
    strokeWidth={2}
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M0 0h24v24H0z' stroke='none' />
    <path d='M9 15V9l7.7 10.7a9 9 0 1 1 2.3-2M15 12V9' />
  </svg>
)

export default SvgComponent
