import {addDoc, collection, deleteDoc, doc, DocumentData, Firestore, Unsubscribe, updateDoc,} from "firebase/firestore";
import { Event2 } from "../model/event2";
export abstract class EventService {
  private collectionName = "events2";

  protected constructor(protected db: Firestore) {
  }
  
  get collection() {
    return collection(this.db, this.collectionName) ; 
  }

  getDoc(id: string) {
    return doc(this.collection, `${id}`);
  }

  async add(Event2: Event2) {
    return addDoc(this.collection, Event2 as DocumentData);
  }

  update(Event2: Event2) {
    const doc = this.getDoc(Event2.id!);
    return updateDoc(doc, Event2 as DocumentData);
  }

  remove(id: string) {
    return deleteDoc(this.getDoc(id));
  }
}