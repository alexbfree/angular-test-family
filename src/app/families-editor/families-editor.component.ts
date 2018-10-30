import { Component, OnChanges, OnInit } from '@angular/core';
import { Family } from '../family';
import { Person } from '../person';

@Component({
  selector: 'app-families-editor',
  templateUrl: './families-editor.component.html',
  styleUrls: ['./families-editor.component.css']
})
export class FamiliesEditorComponent implements OnInit, OnChanges {

  public families: Family[];

  private testSurnames: string[] = ['Smith','Jones','Wilson','Anderson','Patel','Bloggs','Robson','Suarez','Johnson','Hobson'];
  private nextTestSurname: number = 0;

  public currentlyEditingFamily: Family;
  private indexOfCurrentlyEditingFamily: number = -1;
  private isCurrentFamilyNew() {
    return (this.indexOfCurrentlyEditingFamily==-1);
  }

  constructor() {
    this.families = [];
    this.currentlyEditingFamily = null;
  }

  private getNextSurname() {
    let nextSurname = this.testSurnames[this.nextTestSurname];
    this.nextTestSurname++;
    if (this.nextTestSurname > (this.testSurnames.length-1)) {
      this.nextTestSurname = 0;
    }
    return nextSurname;
  }

  public addFamily() {
    let members : Person[] = [];
    let newFamily = new Family(this.getNextSurname(), members);
    this.currentlyEditingFamily = newFamily;
  }

  public editFamily(event) {
    let index = parseInt(event.target.dataset['index']);
    this.currentlyEditingFamily = this.families[index];
    this.indexOfCurrentlyEditingFamily = index;
  }

  public newFamilySaved(family) {
    this.currentlyEditingFamily = null;
    this.families.push(family);
  }

  public editedFamilySaved(family) {
    this.currentlyEditingFamily = null;
    this.families[this.indexOfCurrentlyEditingFamily]=family;
    this.indexOfCurrentlyEditingFamily=-1;
  }

  ngOnInit() {  }

  ngOnChanges() { }

}
