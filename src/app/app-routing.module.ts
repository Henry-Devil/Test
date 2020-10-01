import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsPageComponent } from './abouts-page/abouts-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
{
  path: 'homepage',
  component: HomePageComponent
},
{
  path: 'aboutus',
  component: AboutsPageComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
