import * as React from "react"

const SvgComponent = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 17.57h4.25l-1.32 3.97H0zm0-7.56h6.75L5.43 14H0zm0-7.55h9.25L7.94 6.43H0zm13.44 0H24v3.97H12.12zM9.62 13.99 10.94 10H24v4zm-1.18 3.58H24v3.98H7.12Z"
      stroke="none"
    />
  </svg>
)

export default SvgComponent
