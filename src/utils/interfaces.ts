export interface SceneI {
  verse: string;
  ref: string;
}

export interface DecadeI {
  id: number;
  name: string;
  number: string;
  fruits: string;
  scenes: SceneI[]
}

export interface MysteryI {
  id: string;
  name: string;
  decades: DecadeI[];
}

export const initialState: DecadeI = {
  id: 0,
  name: '',
  number: '',
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
