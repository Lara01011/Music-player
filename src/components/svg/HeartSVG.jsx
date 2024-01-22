import * as React from "react"
import { memo } from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
  width={'1em'}
  height={'1em'}
  viewBox="0 0 20 20" {...props}>
    <path d="m10 3.22-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
