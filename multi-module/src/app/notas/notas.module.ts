import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotesComponentComponent } from './notes-component/notes-component.component';
@NgModule({
  declarations: [NotesComponentComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [NotesComponentComponent],
})
export class NotasModule {}
