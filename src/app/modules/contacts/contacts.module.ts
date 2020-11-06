import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactsContainerComponent } from './contacts-container/contacts-container.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactCardComponent,
    ContactsContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  exports: [
    ContactCardComponent,
    ContactsContainerComponent
  ]
})
export class ContactsModule { }
