import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/autho/authenticate.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private _autho:AuthenticateService) {
    _autho.CheckAuthentication();
   }

  ngOnInit(): void {
  }

}
