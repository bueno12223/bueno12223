import * as React from 'react'

function SvgComponent () {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 1024 1024'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M880 112H144c-18 0-32 14-32 32v736c0 18 14 32 32 32h736c18 0 32-14 32-32V144c0-18-14-32-32-32zM349 794H231V412h118v382zm-59-434a69 69 0 1169-69c0 38-31 69-69 69zm504 434H675V608c0-44-1-101-62-101s-71 48-71 98v189H424V412h113v52h2c16-30 55-62 112-62 121 0 143 79 143 182v210z'
        stroke='none'
      />
    </svg>
  )
}

export default SvgComponent
