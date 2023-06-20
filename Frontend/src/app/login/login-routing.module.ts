import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
const routes: Routes = [{ path: '', component: LoginComponent },
{path: 'profile', component: UserprofileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
