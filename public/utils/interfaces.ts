export interface SceneI {
  id: string;
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

// interface LocationI {
//   hash: string;
//   key: string;
//   pathname: string;
//   search: string;
//   state: { decade: number }
// }
