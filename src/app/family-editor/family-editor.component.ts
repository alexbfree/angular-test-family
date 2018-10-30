import { Component, Input, Output, OnInit, OnChanges, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Family } from '../family';
import { Person } from '../person';

@Component({
  selector: 'app-family-editor',
  templateUrl: './family-editor.component.html',
  styleUrls: ['./family-editor.component.css']
})
export class FamilyEditorComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('surname') surname: ElementRef;

  @Input()
  public familyToEdit: Family;

  @Input()
  public editing: any = false;

  @Output()
  public newFamilySaver: EventEmitter<Family> = new EventEmitter<Family>();

  @Output()
  public editedFamilySaver: EventEmitter<Family> = new EventEmitter<Family>();

  public currentlyEditingPerson: Person;
  private indexOfCurrentlyEditingPerson: number = -1;
  private isCurrentPersonNew() {
    return (this.indexOfCurrentlyEditingPerson==-1);
  }

  private testFirstnames: string[] = ['Jeff','Gary','Sally','Laura','Belinda','Mary','Tina','Robin','Steve'];
  private nextTestFirstname: number = 0;

  private isFirstnameInUse(firstName) {
    let found = false;
    for (let member in this.familyToEdit.members ) {
      if (((Person)member).name==firstName) {
        found = true;
        break;
      }
    }
    return found;
  }

  private getNextFirstname() {
    let nextFirstname = this.testFirstnames[this.nextTestFirstname];
    this.nextTestFirstname++;
    if (this.nextTestFirstname > (this.testFirstnames.length-1)) {
      this.nextTestFirstname = 0;
    }
    while (this.isFirstnameInUse(nextFirstname)) {
      nextFirstname = this.getNextFirstname();
      // warning if there are more in family than the test length list, this will go forever.
    }
    return nextFirstname;
  }

  constructor() { }

  public addPerson() {
    let newPerson = new Person(this.getNextFirstname());
    this.currentlyEditingPerson = newPerson;
  }

  public editPerson(event) {
    let index = parseInt(event.target.dataset['index']);
    this.currentlyEditingPerson = this.familyToEdit.members[index];
    this.indexOfCurrentlyEditingPerson = index;
  }

  public saveFamily(event) {
    if (this.editing) {
      this.saveEditedFamily(event);
    }
    else {
      this.saveNewFamily(event);
    }
  }

  public saveNewFamily(event) {
    let surname = this.surname.nativeElement.value;
    let newFamily = new Family(surname,JSON.parse(JSON.stringify(this.familyToEdit.members)));
    this.newFamilySaver.emit(newFamily);
  }

  public saveEditedFamily(event) {
    let surname = this.surname.nativeElement.value;
    let editedFamily = new Family(surname,JSON.parse(JSON.stringify(this.familyToEdit.members)));
    this.editedFamilySaver.emit(editedFamily);
  }

  public newPersonSaved(person) {
    this.currentlyEditingPerson = null;
    this.familyToEdit.members.push(person);
  }

  public editedPersonSaved(person) {
    this.currentlyEditingPerson = null;
    this.familyToEdit.members[this.indexOfCurrentlyEditingPerson]=person;
    this.indexOfCurrentlyEditingPerson=-1;
  }

  ngOnInit() { }

  ngOnChanges() { }

  ngAfterViewInit() {
    if (this.familyToEdit && this.familyToEdit.surname) {
      this.surname.nativeElement.value = this.familyToEdit.surname;
    }
    if (this.familyToEdit && this.familyToEdit.members.length>0) {
      console.dir(this.familyToEdit.members);
    }
  }




}
