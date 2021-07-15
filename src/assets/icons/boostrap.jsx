import * as React from 'react'

function SvgComponent () {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 16 16'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4zm1 12h3.5c1.8 0 3-1 3-2.4 0-1.1-.8-2-2-2v-.1c.9-.2 1.5-1 1.5-1.8 0-1.3-1-2.2-2.5-2.2H5V12zm1.4-4.9V4.7h1.8c1 0 1.5.4 1.5 1.2 0 .8-.6 1.2-1.8 1.2H6.4zm0 3.8h1.9c1.2 0 1.8-.5 1.8-1.4 0-.9-.7-1.3-1.9-1.3H6.4v2.7z'
        clipRule='evenodd'
        stroke='none'
      />
    </svg>
  )
}

export default SvgComponent
