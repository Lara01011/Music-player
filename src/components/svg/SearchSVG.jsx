import * as React from "react"
import {memo } from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
       viewBox="0 0 20 20" 
       width={'1em'}
       height={'1em'}
  
  {...props}>
    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo