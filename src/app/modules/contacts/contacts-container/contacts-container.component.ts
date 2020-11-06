import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ContactModel, ContactsList } from '../db/contacts-list';

@Component({
  selector: 'app-contacts-container',
  templateUrl: './contacts-container.component.html',
  styleUrls: ['./contacts-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsContainerComponent implements OnInit {

  contactsList: ContactModel[] = ContactsList;

  form: FormGroup;

  constructor(private detector: ChangeDetectorRef, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({ contacts: this.formBuilder.array([]) });

    this.setContacts();

    this.detector.markForCheck();
  }

  ngOnInit(): void {

    this.form.controls.contacts.valueChanges.subscribe(v => {

    });

  }

  deleteAction(card: { contact: ContactModel, id: number }) {

    this.contactsList = this.contactsList.filter((item, index) => {
      if (card.id !== index) {
        return card.contact;
      }
    });
    this.detector.detectChanges();
  }

  setContacts() {

    const contacts = this.form.controls.contacts as FormArray;

    this.contactsList.map(contactItem => {
      contacts.push(this.formBuilder.group({
        username: contactItem.fullName,
        address: contactItem.personalAddress.address
      }));

    });

  }

}
