import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglePayButtonComponent } from '@google-pay/button-angular';
import { AboutComponent } from './about/about.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthSignComponent } from './auth-sign/auth-sign.component';
import { AuthGuard } from './auth.guard';
import { CaptchaComponent } from './captcha/captcha.component';
import { CardComponent } from './card/card.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Cart2Component } from './components/cart2/cart2.component';
import { ProductsComponent } from './components/products/products.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackMaterialComponent } from './feedback-material/feedback-material.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FirebaseFetchComponent } from './firebase-fetch/firebase-fetch.component';
import { Auth1Guard } from './gaurds/auth1.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { LoginChoiceComponent } from './login-choice/login-choice.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MenTrouserComponent } from './men-trouser/men-trouser.component';
import { MenComponent } from './men/men.component';
import { MensShirtsComponent } from './mens-shirts/mens-shirts.component';
import { MensSuitsComponent } from './mens-suits/mens-suits.component';
import { MensWalletComponent } from './mens-wallet/mens-wallet.component';
import { NewsComponent } from './news/news.component';
import { PaypalComponent } from './paypal/paypal.component';
import { PlacedComponent } from './placed/placed.component';
import { PostsComponent } from './posts/posts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { StripeComponent } from './stripe/stripe.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { UpiComponent } from './upi/upi.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WomenAccessoriesComponent } from './women-accessories/women-accessories.component';
import { WomenDressesComponent } from './women-dresses/women-dresses.component';
import { WomenFootwearComponent } from './women-footwear/women-footwear.component';
import { WomenSareeComponent } from './women-saree/women-saree.component';
import { FeedbackMongoComponent } from './feedback-mongo/feedback-mongo.component';
const routes: Routes = [

  { path: 'admin_login', component: AdminLoginComponent },
  {path:'mongo_feed', component: FeedbackMongoComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [Auth1Guard] },
  { path: 'access-denied', component: AccessDeniedComponent },
  {path: 'stripe', component:StripeComponent},
  {path:'',component:HomepageComponent},
  {path:'mens-suit', component:MensSuitsComponent},
  {path:'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path:'mens-shirt', component: MensShirtsComponent},
  {path:'women-dresses', component:WomenDressesComponent},
  {path: 'women-saree', component:WomenSareeComponent},
  {path: 'women-footwear', component: WomenFootwearComponent},
  {path: 'women-accessories', component: WomenAccessoriesComponent},
  {path:'men', component:MenComponent},
  {path:'news', component:NewsComponent},
  {path:'feedback', component:FeedbackComponent},
  {path:'about', component:AboutComponent},
  {
    path: 'feed', component: FeedbackMaterialComponent
  },
  // {path:'cart', redirectTo:"products",pathMatch:"full"},
  {path:'products', component: ProductsComponent},
  {path:'cart2', component:Cart2Component },
  {path: 'contact', component:ContactComponent},
  {path:'test', component: TestComponent},
  {path:'test2', component: Test2Component},
  {path:'google', component:GooglePayButtonComponent},
  {path: 'local', component:LocalStorageComponent},
  {
    path:'captcha',
    component: CaptchaComponent
  },
  {
    path:'customer_signup',
    component: CustomerSignupComponent
  },
  {
    path:'customer_login',
    component: CustomerLoginComponent
  },
  {
    path:'login_choice',
    component: LoginChoiceComponent
  },
  {
    path:'confirm',
    component: ConfirmationComponent
  },
  {
    path:'paypal',
    component:PaypalComponent
  },
  {
    path:'auth',
    component:AuthSignComponent
  },
  {
    component: ProductDetailsComponent,
    path: 'details/:productId'
  },
  {
    component: CheckoutComponent,
    path:'checkout'
  },
  {
    path:'wallet',
    component:MensWalletComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    component: MenTrouserComponent,
    path:'trouser'
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  {
    path: 'loginForm', component: LoginformComponent
  },
  {
    path: 'post', component: PostsComponent
  },
  {
    path:'card', component: CardComponent
  },
  {
    path: 'placed', component: PlacedComponent
  },
  {
    path: 'meme', component: UpiComponent
  },
  {
    path: 'firebase',
    component: FirebaseFetchComponent
  },
  {
    path: "profile",
    component: UserprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
