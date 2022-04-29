import * as React from "react"

const SvgComponent = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m256 144-55-96h-80l135 234L391 48h-80l-55 96z" stroke="none" />
    <path d="M409 48 256 314 103 48H16l240 416L496 48h-87z" stroke="none" />
  </svg>
)

export default SvgComponent
