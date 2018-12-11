import {
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule
    ],
})
export class MaterialModule { }