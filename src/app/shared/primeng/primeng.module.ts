import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports: [
    MessagesModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class PrimengModule { }
