import * as React from "react"
import {memo } from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={'1em'}
    height={'1em'}
    viewBox="0 0 20 20"
    {...props}
  >
    
    <path
      fill="#212121"
      d="M5.75 4a.75.75 0 0 1 .535.22l3.008 3.008a.75.75 0 0 1-1.06 1.06L6.5 6.557v8.694a.75.75 0 0 1-1.5 0V6.566L3.282 8.284a.75.75 0 1 1-1.06-1.06l2.945-2.946A.749.749 0 0 1 5.75 4zm8.502 0a.75.75 0 0 1 .75.75v8.684l1.718-1.718a.75.75 0 1 1 1.06 1.06l-2.945 2.946a.748.748 0 0 1-.583.278.75.75 0 0 1-.535-.22l-3.009-3.008a.75.75 0 0 1 1.061-1.06l1.733 1.732V4.75a.75.75 0 0 1 .75-.75z"
    />
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
