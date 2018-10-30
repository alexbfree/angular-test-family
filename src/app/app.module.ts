import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FamiliesEditorComponent } from './families-editor/families-editor.component';

import { MatToolbarModule }     from '@angular/material/toolbar';
import { MatCheckboxModule }    from '@angular/material/checkbox';
import { MatSidenavModule }     from '@angular/material/sidenav';
import { MatDialogModule }      from '@angular/material/dialog';
import { MatTabsModule }        from '@angular/material/tabs';
import { MatTableModule }       from '@angular/material/table'
import { MatPaginatorModule }   from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule }   from '@angular/material/expansion';
import { MatFormFieldModule }   from '@angular/material/form-field';
import { MatInputModule }       from '@angular/material';
import { MatButtonModule }      from '@angular/material/button';
import { MatMenuModule }       from '@angular/material/menu';
import { MatRadioModule }       from '@angular/material/radio';
import { MatIconModule }        from '@angular/material/icon';
import { MatCardModule }        from '@angular/material/card';
import { MatListModule }        from '@angular/material/list';
import { MatChipsModule }       from '@angular/material/chips';
import { FamilyEditorComponent } from './family-editor/family-editor.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    FamiliesEditorComponent,
    FamilyEditorComponent,
    PersonEditorComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
