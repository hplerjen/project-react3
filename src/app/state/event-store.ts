import {EventDto} from "../model/eventDto";
import {autorun, makeAutoObservable, observable} from "mobx";
import {RootStore} from "./root-store";

export class EventStore {
    public events: { [key: string]: EventDto } = observable({});

    constructor(private rootStore: RootStore) {
        makeAutoObservable(this);

        autorun(() => {
            rootStore.eventService.getDocs();
        });
    }

    add(events: EventDto[]) {
        events.forEach((e) => {
            this.events[e.id!] = e;
        });
    }

    remove(events: EventDto[]) {
        events.forEach((e) => {
            delete this.events[e.id!];
        });
    }

    clear() {
        this.events = {};
    }

}
