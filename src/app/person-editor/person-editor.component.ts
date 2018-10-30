import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef,AfterViewInit, Output, EventEmitter } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('name') name: ElementRef;

  @Input()
  public editing: any = false;

  @Input()
  public personToEdit: Person;

  @Output()
  public newPersonSaver: EventEmitter<Person> = new EventEmitter<Person>();

  @Output()
  public editedPersonSaver: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() {  }

  ngOnInit() { }

  ngOnChanges() { }

  ngAfterViewInit() {
    if (this.personToEdit && this.personToEdit.name) {
      this.name.nativeElement.value = this.personToEdit.name;
    }
  }

  public savePerson(event) {
    if (this.editing) {
      this.saveEditedPerson(event);
    }
    else {
      this.saveNewPerson(event);
    }
  }

  public saveNewPerson(event) {
    let name = this.name.nativeElement.value;
    let newPerson = new Person(name);
    this.newPersonSaver.emit(newPerson);
  }

  public saveEditedPerson(event) {
    let name = this.name.nativeElement.value;
    let editedPerson = new Person(name);
    this.editedPersonSaver.emit(editedPerson);
  }


}
