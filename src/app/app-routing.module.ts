import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgMemoryCardComponent } from './pages/pg-memory-card/pg-memory-card.component';
import { PgHomeComponent } from './pages/pg-home/pg-home.component';

const routes: Routes = [
  {
    path: '',
    component: PgHomeComponent,
  },
  {
    path: 'memorycard',
    component: PgMemoryCardComponent,
  },
  { path: '**', component: PgHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
