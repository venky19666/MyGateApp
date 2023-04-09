import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Search = (props: SvgProps & {size:number}) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <Path
      d="M6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6ZM6 7.5C3.9975 7.5 0 8.505 0 10.5V11.25C0 11.6625 0.3375 12 0.75 12H11.25C11.6625 12 12 11.6625 12 11.25V10.5C12 8.505 8.0025 7.5 6 7.5Z"
      fill={props.color}
    />
  </Svg>
);
export default Search;
