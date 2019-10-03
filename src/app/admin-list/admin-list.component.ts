import { Component, OnInit } from '@angular/core';
import { AdminDetailsComponent } from '../admin-details/admin-details.component';
import { Observable } from "rxjs";
import { AdminService } from "../admin.service";
import { Admin } from "../admin";
import { Router } from '@angular/router';
import { print } from 'util';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  admins: Observable<Admin[]>;

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.admins = this.adminService.getAdminsList();
    // this.admins = this.admins["response"];
  }

  deleteAdmin(id: number) {
    this.adminService.deleteAdmin(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  adminDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
