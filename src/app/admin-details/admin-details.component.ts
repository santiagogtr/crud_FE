import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { AdminListComponent } from '../admin-list/admin-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {



  id: number;
  admin: Admin;

  constructor(private route: ActivatedRoute, private router: Router,
    private adminService: AdminService) { }

  ngOnInit() {
    this.admin = new Admin();

    this.id = this.route.snapshot.params['id'];

    this.adminService.getAdmin(this.id)
      .subscribe(data => {
        console.log(data)
        this.admin = data;
      }, error => console.log(error));
  }
  list() {
    this.router.navigate(['admins']);
  }

}
