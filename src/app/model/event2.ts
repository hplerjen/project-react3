export class Event2  {
  id?: string;
  title: string;
  description: string;

  constructor(event : Event2) {
    this.id = event.id;
    this.title = event.title;
    this.description = event.description;
  }
}
