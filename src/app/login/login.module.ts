import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GabaritsPagesModule } from '../gabarits-pages/gabarits-pages.module';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { PageForgotComponent } from './pages/page-forgot/page-forgot.component';
import { PageResetComponent } from './pages/page-reset/page-reset.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

@NgModule({
  declarations: [
    PageSignInComponent,
    PageSignUpComponent,
    PageResetComponent,
    PageForgotComponent,
    SignInFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    GabaritsPagesModule,
  ],
})
export class LoginModule {}
