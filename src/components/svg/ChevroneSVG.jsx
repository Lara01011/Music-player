import * as React from "react"
import {  memo } from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg"  width={'1em'}
  height={'1em'} viewBox="0 0 20 20" {...props}>
    <path d="m9.293 12.95.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
