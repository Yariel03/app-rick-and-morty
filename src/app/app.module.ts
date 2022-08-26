import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { PgMemoryCardComponent } from './pages/pg-memory-card/pg-memory-card.component';
import { PgHomeComponent } from './pages/pg-home/pg-home.component';

@NgModule({
  declarations: [AppComponent, PgMemoryCardComponent, PgHomeComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
