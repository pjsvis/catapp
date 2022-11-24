import { proxy, useSnapshot } from 'valtio';

interface State {
  id: number;
  stuff: number;
  moreStuff: string;
}

const state: State = {
  id: 0,
  stuff: 0,
  moreStuff: '',
}

var stateProxy = proxy(state);

export const stateApi = {
  setId: (id: number) => {
    stateProxy.id = id;
  },
  setStuff: (stuff: number) => {
    stateProxy.stuff = stuff;
  }

}

export const useStateProxy = () => {
  return useSnapshot(stateProxy);
}

