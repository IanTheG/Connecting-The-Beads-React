export interface SceneI {
  _id: string;
  name: string;
  number: string;
  scene1: string;
  scene2: string;
  scene3: string;
  scene4: string;
  scene5: string;
  scene6: string;
  scene7: string;
  scene8: string;
  scene9: string;
  scene10: string;
}

export interface MysteryI {
  id: string;
  name: string;
  decades: SceneI[];
}

export const initialState: SceneI = {
  _id: '',
  name: '',
  number: '',
  scene1: '',
  scene2: '',
  scene3: '',
  scene4: '',
  scene5: '',
  scene6: '',
  scene7: '',
  scene8: '',
  scene9: '',
  scene10: '',
}
// interface LocationI {
//   hash: string;
//   key: string;
//   pathname: string;
//   search: string;
//   state: { decade: number }
// }
