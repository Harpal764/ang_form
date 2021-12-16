import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/autho/authenticate.service';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css']
})
export class DeshboardComponent implements OnInit {

  constructor(private _autho:AuthenticateService) {
    _autho.CheckAuthentication();
   }

  ngOnInit(): void {
  }

}
