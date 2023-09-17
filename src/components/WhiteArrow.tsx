import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 1920 1080"
    {...props}
  >
    <path
      d="M1091.226 896.349c13.278 13.278 13.278 34.805 0 48.083l-107.184 107.185c-13.278 13.278-34.806 13.278-48.084 0L828.774 944.432c-13.278-13.278-13.278-34.805 0-48.083l2.904-2.905h4.656l94.273 93.53V52.969c0-19.077 11.7-34.543 26.133-34.543h6.52c14.433 0 26.133 15.466 26.133 34.543v934.006l94.273-93.53h5.21l2.35 2.905Z"
    />
  </svg>
  )
}
export default SvgComponent;