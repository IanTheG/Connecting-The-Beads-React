export interface SceneI {
  img: string;
  verse: string | string[];
  ref: string;
}

export interface DecadeI {
  id: number;
  name: string;
  number: string;
  image: string;
  fruits: string;
  scenes: SceneI[]
}

export interface MysteryI {
  _id: string;
  name: string;
  decades: DecadeI[];
}

export const initialState: DecadeI = {
  id: 0,
  name: '',
  number: '',
  image: '',
  fruits: '',
  scenes: [],
}
// interface LocationI {
//   hash: string;
//   key: string;
//   pathname: string;
//   search: string;
//   state: { decade: number }
// }
