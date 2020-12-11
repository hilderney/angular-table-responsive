import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatExpansionModule,
  ],
  exports: [
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    ScrollingModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  declarations: []
})

export class MaterialModule { }
