export class Event2  {
  id?: string;
  title: string;
  description: string;

  constructor(data : Event2) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
  }
}
