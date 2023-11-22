import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {createContext, useContext} from "react";
import {firebaseConfig} from "../firebase.config";
import {makeAutoObservable} from "mobx";
import {EventStore} from "./event-store";
import { EventService } from "../services/event.service";

export class RootStore {
  eventStore: EventStore;
  eventService: EventService;

  constructor() {
    makeAutoObservable(this);

    const app = initializeApp(firebaseConfig);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const db = getFirestore(app);
    this.eventService = new EventService( this, db );
    this.eventStore = new EventStore(this);
  }
}

export const RootContext = createContext<RootStore>({} as RootStore);
export const StoreRootProvider = RootContext.Provider;
export const useRootStore = (): RootStore => useContext(RootContext);
