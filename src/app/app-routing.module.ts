import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { ProductListComponent } from './product-list/product-list.component';
// import { UpdateAdminComponent } from './update-admin/update-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductListComponent },
  { path: 'admin', component: AdminListComponent },
  { path: 'add', component: CreateAdminComponent },
  // { path: 'update/:id', component: UpdateAdminComponent },
  { path: 'details/:id', component: AdminDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
