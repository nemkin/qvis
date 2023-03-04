import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DisplayComponent } from './components/display/display.component';
import { FileSelectorComponent } from './components/file-selector/file-selector.component';
import { HighlightService } from './services/highlight.service';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectorComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
