
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { NgModule } from '@angular/core';





@NgModule({
  exports: [
    TableModule,
    InputTextModule,
    ProgressSpinnerModule,
    MessagesModule,
  ],
  providers: [],
})

export class PrimengModule { }
