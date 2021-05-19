import * as React from 'react'

function SvgComponent () {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 512 512'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M41 25v462h46V71h31c-9-4-15-13-15-23s6-19 15-23H41zm97 0c9 4 15 13 15 23s-6 19-15 23h36a41 41 0 010-46h-36zm70 0c-13 0-23 10-23 23s10 23 23 23 23-10 23-23-10-23-23-23zm34 0a41 41 0 010 46h36c-9-4-15-13-15-23s6-19 15-23h-36zm56 0c9 4 15 13 15 23s-6 19-15 23h31v416h46V25h-77zm174 33l-32 32 12 12 32-32-12-12zm-79 63v46h39c5 0 5-1 6-3l1-4v-32l-1-4c-1-2-1-3-6-3h-39zm69 14v18h32v-18h-32zm-258 13c-17 3-32 22-32 48 0 15 5 27 12 36l9 10-14 3c-9 1-16 6-22 14s-10 20-13 33c-6 23-7 52-8 77h32l8 115c22 5 45 5 66 0l8-115h30c0-25-1-55-6-78-3-13-7-24-13-32s-13-13-24-15l-14-2 9-11c7-8 11-21 11-35 0-27-17-48-35-48h-4zm248 38l-12 12 32 32 12-12-32-32z'
        stroke='none'
      />
    </svg>
  )
}

export default SvgComponent
