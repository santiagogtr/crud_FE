import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {


  admin: Admin = new Admin();
  submitted = false;

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
  }

  newAdmin(): void {
    this.submitted = false;
    this.admin = new Admin();
  }

  save() {
    this.adminService.createAdmin(this.admin)
      .subscribe(data => console.log(data), error => console.log(error));
    this.admin = new Admin();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/admins']);
  }

}
