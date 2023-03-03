import { RouterModule, Routes } from '@angular/router';

import { DisplayComponent } from './components/display/display.component';
import { FileSelectorComponent } from './components/file-selector/file-selector.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: FileSelectorComponent },
  { path: 'display', component: DisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
