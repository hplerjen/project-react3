import {Event2} from "../model/event2";
import {autorun, makeAutoObservable, observable} from "mobx";
import {RootStore} from "./root-store";

export class EventStore {
    public events: { [key: string]: Event2 } = observable({});

    constructor(private rootStore: RootStore) {
        makeAutoObservable(this);

        autorun(() => {
            rootStore.eventService.getDocs();
        });
    }

    add(events: Event2[]) {
        events.forEach((e) => {
            this.events[e.id!] = e;
        });
    }

    remove(events: Event2[]) {
        events.forEach((e) => {
            delete this.events[e.id!];
        });
    }

    clear() {
        this.events = {};
    }



}
