import {
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatInputModule,
      MatFormFieldModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatInputModule,
      MatFormFieldModule
    ],
})
export class MaterialModule { }