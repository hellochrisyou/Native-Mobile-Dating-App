import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserOptions } from '../../interfaces/user-options';
import { AuthService } from '../../core/service/auth.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {

  submitted = false;

  login: UserOptions = { email: '', password: '' };

  constructor(
    public authService: AuthService,
    private navCtrl: NavController,
    public router: Router,
    public afAuth: AngularFireAuth,
  ) {
    console.log("InboxComponent -> ngOnInit -> this.authService.isAuthenticated", this.authService.isAuthenticated)
  }

  public ngOnInit(): void {
    if (this.authService.isAuthenticated !== false) {
      this.router.navigateByUrl('/people');
    } else {
      this.afAuth.auth.signOut();
    }
  }

  public onLogin(form: NgForm): void {
    this.submitted = true;

    if (form.valid) {
      this.authService.signinEmail(this.login.email, this.login.password);
    }
  }
  public loginGoogle(): void {
    this.authService.signinGoogle();
  }
  public onSignup(): void {
    this.navCtrl.navigateForward('/signup');
  }
}
