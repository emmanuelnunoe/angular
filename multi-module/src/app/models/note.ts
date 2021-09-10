export class Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  constructor(title: string, content: string) {
    (this.title = title), (this.content = content);
  }
}
