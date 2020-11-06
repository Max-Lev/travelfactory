import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactModel } from '../../db/contacts-list';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit, OnChanges {

  @Input() id: number;

  @Input() contact: ContactModel;

  @Output() deleteEmitter: EventEmitter<{ contact: ContactModel, id: number }> = new EventEmitter();

  @Input() formGroup: FormGroup;

  isEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  deleteContact(contact: ContactModel) {
    this.deleteEmitter.emit({ contact, id: this.id });
  }

  edit() {
    this.isEdit = !this.isEdit;

  }

}
