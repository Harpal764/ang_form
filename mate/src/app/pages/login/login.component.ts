import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/autho/authenticate.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private _authenticate: AuthenticateService,
    private _router: Router
  ) {
    this.userForm = new FormGroup({
      "email": new FormControl(""),
      "password": new FormControl(""),
    })
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.userForm.value);
    if (this._authenticate.AuthenticateUser(this.userForm.value)) {
      this._authenticate.CheckAuthentication();
      this._router.navigate(["/deshboard"]);
    } else {
      alert("invalid login ")
    }
  }

}
