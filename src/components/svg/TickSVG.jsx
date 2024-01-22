import * as React from "react"
import {  memo } from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg"  
  width={'1em'}
  height={'1em'} 
  viewBox="0 0 20 20" 
  {...props}>
    <path d="m0 11 2-2 5 5L18 3l2 2L7 18z" />
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
