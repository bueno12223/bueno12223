import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg
      stroke='#aaa'
      fill='#aaa'
      strokeWidth={0}
      viewBox='0 0 24 24'
      className='prefix__header-icon'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' stroke='none' />
    </svg>
  )
}

export default SvgComponent
