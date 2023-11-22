import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {createContext, useContext} from "react";
import {firebaseConfig} from "../firebase.config";
import {makeAutoObservable} from "mobx";


export class RootStore {
  
  constructor() {
    makeAutoObservable(this);

    const app = initializeApp(firebaseConfig);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const db = getFirestore(app);

  }
}

export const RootContext = createContext<RootStore>({} as RootStore);
export const StoreRootProvider = RootContext.Provider;
export const useRootStore = (): RootStore => useContext(RootContext);
