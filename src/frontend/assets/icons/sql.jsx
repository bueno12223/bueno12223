import * as React from "react"

function SvgComponent(props) {
  return (
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
        fillRule="evenodd"
        d="M5.46 4.04c-.27 0-.46.03-.67.07v.04h.04c.13.27.36.44.52.67l.37.78.04-.03c.23-.17.34-.43.33-.82-.09-.1-.1-.22-.18-.34-.1-.15-.31-.24-.45-.37zm18.02 19.1c.17.13.3.33.52.4v-.03c-.12-.15-.15-.36-.26-.52l-.48-.49a7.94 7.94 0 00-1.72-1.63c-.5-.37-1.65-.86-1.86-1.46l-.04-.03c.37-.04.79-.17 1.12-.26.56-.15 1.06-.11 1.64-.26l.78-.23v-.15c-.3-.3-.5-.7-.82-.96-.83-.71-1.74-1.42-2.68-2.01-.52-.33-1.16-.55-1.71-.82-.19-.1-.51-.15-.63-.3-.3-.37-.45-.84-.67-1.27-.47-.9-.93-1.88-1.34-2.83-.29-.64-.47-1.28-.82-1.86a16.44 16.44 0 00-6.33-6.1c-.6-.35-1.32-.5-2.09-.67l-1.22-.08c-.25-.1-.51-.4-.75-.56C3.2.43.8-.85.1.84c-.44 1.06.65 2.1 1.04 2.64.28.38.63.8.82 1.23.13.28.15.56.26.86.27.73.5 1.52.86 2.2.18.33.37.7.6 1 .13.18.37.27.4.56-.23.32-.24.82-.37 1.22-.58 1.84-.36 4.12.49 5.48.26.41.87 1.3 1.7.96.74-.3.58-1.22.79-2.04.05-.19.02-.33.11-.45v.04l.67 1.34c.5.8 1.38 1.63 2.12 2.2.39.29.7.8 1.2.96V19h-.04c-.1-.15-.25-.2-.37-.33-.3-.29-.62-.64-.86-.97a22.61 22.61 0 01-1.82-2.98c-.27-.5-.5-1.05-.71-1.56-.09-.2-.09-.5-.26-.6-.24.38-.6.68-.78 1.12-.3.7-.34 1.57-.45 2.46-.07.02-.04 0-.08.04-.51-.13-.7-.66-.89-1.12a7.04 7.04 0 01-.15-4.36c.11-.34.61-1.43.41-1.75-.1-.31-.41-.5-.6-.74-.22-.3-.44-.7-.59-1.04-.4-.9-.58-1.92-1-2.83-.2-.44-.54-.88-.82-1.27-.31-.43-.66-.74-.9-1.26-.08-.19-.2-.48-.07-.67C.85 1 .9.95 1.03.9c.22-.16.82.06 1.04.15.6.25 1.1.49 1.6.82.25.16.5.47.79.56h.33c.53.12 1.11.04 1.6.19.87.26 1.64.67 2.35 1.11a14.52 14.52 0 015.1 5.59c.19.37.27.72.44 1.11.35.8.78 1.61 1.12 2.39.34.77.67 1.55 1.15 2.2.26.33 1.24.51 1.68.7.31.13.82.27 1.12.45.56.34 1.1.74 1.63 1.11.27.19 1.08.6 1.12.93a7.5 7.5 0 00-3.16.45c-.25.1-.63.1-.67.4.13.15.15.36.26.53.2.33.55.77.85 1 .34.26.69.53 1.05.75.64.4 1.35.61 1.97 1 .36.24.72.53 1.08.79z"
        stroke="none"
      />
    </svg>
  )
}

export default SvgComponent
