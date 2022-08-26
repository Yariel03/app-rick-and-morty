import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComHeaderComponent } from './components/com-header/com-header.component';
import { RouterModule } from '@angular/router';
import { ComMemeryCardComponent } from './components/com-memery-card/com-memery-card.component';

@NgModule({
  declarations: [ComHeaderComponent, ComMemeryCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [ComHeaderComponent, ComMemeryCardComponent],
})
export class SharedModule {}
