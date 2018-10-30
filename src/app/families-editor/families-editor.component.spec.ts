import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliesEditorComponent } from './families-editor.component';

describe('FamiliesEditorComponent', () => {
  let component: FamiliesEditorComponent;
  let fixture: ComponentFixture<FamiliesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliesEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
