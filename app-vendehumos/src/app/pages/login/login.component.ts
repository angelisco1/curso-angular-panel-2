import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'vh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credenciales = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    console.log(form.value)
    this.authService.login(form.value)
      .subscribe((data: any) => {
        console.log({ data })
        localStorage.setItem('token', data.jwt)
        this.router.navigateByUrl('/')
      })
  }

}
