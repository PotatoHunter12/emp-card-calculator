import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TarotComponent } from './tarot/tarot.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'app-tarot', component: TarotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
