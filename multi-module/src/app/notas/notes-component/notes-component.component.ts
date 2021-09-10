import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';

import { NotesServicesService } from '../notes-services.service';

@Component({
  selector: 'app-notes-component',
  templateUrl: './notes-component.component.html',
  styleUrls: ['./notes-component.component.css'],
})
export class NotesComponentComponent implements OnInit {
  constructor(private noteService: NotesServicesService) {}
  notes: Note[] = [];
  title: string = '';
  noteId: string = '';
  content: string;
  flag = false;

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNotes().subscribe((result) => (this.notes = result));
    // me suscribo
  }

  addNote() {
    let newNote = new Note(this.title, this.content);

    this.noteService
      .addNote(newNote)
      .subscribe((result) => this.notes.push(result));
  }

  editNote(id: string) {
    this.flag = true;
    this.noteId = id;
  }
  updateNote() {
    let updatedNote = new Note(this.title, this.content);
    updatedNote.id = this.noteId;

    this.noteService
      .updateNote(updatedNote)
      .subscribe((result) => this.notes.push(result));
  }

  deleteNote(id: string) {
    this.noteId = id;
    alert('Deseas eliminar la nota :' + id);
    this.noteService.deleteNote(this.noteId).subscribe((result) => {
      alert(JSON.stringify(result));
      this.getNotes();
    });
  }
}
