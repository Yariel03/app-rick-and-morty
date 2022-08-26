import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComHeaderComponent } from './components/com-header/com-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ComHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [ComHeaderComponent],
})
export class SharedModule {}
