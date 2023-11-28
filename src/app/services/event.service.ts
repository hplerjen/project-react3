import {addDoc, collection, CollectionReference, deleteDoc, doc, DocumentData, Firestore, getDocs, query, QueryConstraint, QuerySnapshot, updateDoc,} from "firebase/firestore";
import { EventDto } from "../model/eventDto";
import { RootStore } from "../state/root-store";

export class EventService {
  private collectionName = "events2";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public constructor(private rootStore: RootStore, protected db: Firestore) {
    
  }
  
  get collection() {
    return collection  (this.db, this.collectionName)  as CollectionReference<EventDto, EventDto>; 
  }

  async collectionQuery(...queryConstraints: QueryConstraint[]) {
    const baseCollection = this.collection;
    return await query(
        baseCollection,
        ...queryConstraints
    );
  }

  async getDoc(id: string) {
    return await doc<EventDto, EventDto> (this.collection, `${id}`);
  }

  async add(event: EventDto) {
    return await addDoc(this.collection, event as DocumentData);
  }

  async update(event: EventDto) {
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
    //FIXME this.rootStore.eventStore.add(data);
    return data;
}  
  //REM code from Michael 
  private wrapReturnKeyMap(querySnapshot: QuerySnapshot<EventDto>) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as  {}) }));
  }
}