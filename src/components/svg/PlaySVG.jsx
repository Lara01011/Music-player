import * as React from "react"
import { memo } from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
  width={'1em'}
  height={'1em'}
  viewBox="0 0 20 20" {...props}>
    <path d="m4 4 12 6-12 6z" />
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo