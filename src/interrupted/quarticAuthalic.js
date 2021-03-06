import {hammerRaw} from "../hammer";
import interrupt from "./index";

var lobes = [[ // northern hemisphere
  [[-180,  0],  [-90,  90], [   0,  0]],
  [[   0,  0], [  90,  90], [ 180, 0]]
], [ // southern hemisphere
  [[-180, 0], [-90, -90], [  0, 0]],
  [[   0, 0], [ 90, -90], [180, 0]]
]];

export default function() {
  return interrupt(hammerRaw(Infinity), lobes)
      .rotate([20, 0])
      .scale(152.63);
}
