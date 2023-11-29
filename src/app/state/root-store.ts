import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {createContext, useContext} from "react";
import {firebaseConfig} from "../firebase.config";
import {makeAutoObservable} from "mobx";
import {EventStore} from "./event-store";
import { EventService } from "../services/event.service";
import { AuthStore } from "./auth-store";
import { AuthService } from "../services/auth.service";
import { getAuth } from "firebase/auth";

export class RootStore {
  eventStore: EventStore;
  eventService: EventService;
  authStore: AuthStore;
  authService: AuthService;

  get init () {
    return this.authStore.currentUser;
  }

  constructor() {
    makeAutoObservable(this);

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
    const auth = getAuth(app);

    this.eventService = new EventService( this, db );
    this.eventStore = new EventStore(this);

    this.authStore = new AuthStore(this);
    this.authService = new AuthService(auth, this);
  }
}

export const RootContext = createContext<RootStore>({} as RootStore);
export const StoreRootProvider = RootContext.Provider;
export const useRootStore = (): RootStore => useContext(RootContext);
