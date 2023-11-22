import {addDoc, collection, deleteDoc, doc, DocumentData, Firestore, getDocs, query, QueryConstraint, QuerySnapshot, updateDoc,} from "firebase/firestore";
import { Event2 } from "../model/event2";
import { RootStore } from "../state/root-store";

export class EventService {
  private collectionName = "events2";

  public constructor(private rootStore: RootStore, protected db: Firestore) {
    
  }
  
  get collection() {
    return collection(this.db, this.collectionName) ; 
  }

  async collectionQuery(...queryConstraints: QueryConstraint[]) {
    const baseCollection = this.collection;
    return await query(
        baseCollection,
        ...queryConstraints
    );
  }

  async getDoc(id: string) {
    return await doc(this.collection, `${id}`);
  }

  async add(event: Event2) {
    return await addDoc(this.collection, event as DocumentData);
  }

  async update(event: Event2) {
    const doc = await this.getDoc(event.id!);
    return await updateDoc(doc, event as DocumentData);
  }

  async remove(id: string) {
    await deleteDoc(await this.getDoc(id));
  }

  async getDocs(){
    const q = query(this.collection);
    const querySnapshot = await getDocs(q);
    const data = this.wrapReturnKeyMap(querySnapshot);
    //this.rootStore.eventStore.add(data);
    return data;
}  
  //REM code from Michael 
  private wrapReturnKeyMap(querySnapshot: QuerySnapshot<unknown>) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as  {}) }));
  }
}