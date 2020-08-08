import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() showDialog = false;
  @Input() heading = '[DIALOG_HEADING]';
  @Input() subheading = '[DIALOG_SUBHEADING]';
  @Input() showFooter = true;
  @Output() toggleDialog = new EventEmitter();
  @Output() saveChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClickSave(e: any) {
    this.toggleDialog.emit(e);
    this.saveChange.emit(e);
  }

}
