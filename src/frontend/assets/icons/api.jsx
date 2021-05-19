import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 122.9 91.3' {...props}
      stroke='currentColor'
      fill='currentColor'
      height='1em'
      width='1em'
    >
      <path
        d='M8.3 0h106.3c4.5 0 8.3 3.7 8.3 8.3V83c0 4.6-3.8 8.4-8.3 8.4H8.3A8.3 8.3 0 010 82.9V8.3C0 3.7 3.7 0 8.3 0zm35.4 64.7H32.8L31.2 70h-9.8l11.7-31.2h10.6L55.3 70h-10l-1.6-5.2zm-2-6.7l-3.4-11.2L34.9 58h6.8zM59 38.7h16c3.6 0 6.2.8 8 2.5 1.6 1.7 2.5 4 2.5 7.1 0 3.1-1 5.6-2.8 7.4-2 1.8-4.8 2.6-8.7 2.6h-5.3V70h-9.6V38.7zM68.8 52h2.4c1.9 0 3.2-.3 4-1 .7-.6 1-1.4 1-2.4s-.3-1.8-1-2.5c-.6-.7-1.8-1-3.6-1h-2.8v7zm23-13.3h9.7V70h-9.7V38.7zM118 23.3H5.3v60.5A2.3 2.3 0 007.6 86h108a2.3 2.3 0 002.3-2.3V23.3zm-11.4-14a4.1 4.1 0 110 8.3 4.1 4.1 0 010-8.3zm-27.8 0a4.1 4.1 0 110 8.3 4.1 4.1 0 010-8.3zm14 0a4.1 4.1 0 110 8.3 4.1 4.1 0 010-8.3z'
        fillRule='evenodd'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default SvgComponent
