import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MensSuitsComponent } from './mens-suits/mens-suits.component';
import { CartComponent } from './cart/cart.component';
import { MensShirtsComponent } from './mens-shirts/mens-shirts.component';
import { WomenDressesComponent } from './women-dresses/women-dresses.component';
import { WomenSareeComponent } from './women-saree/women-saree.component';
import { WomenFootwearComponent } from './women-footwear/women-footwear.component';
import { WomenAccessoriesComponent } from './women-accessories/women-accessories.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactService } from './contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenComponent } from './men/men.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { MultiBannerComponent } from './multi-banner/multi-banner.component';
import { FancyboxComponent } from './fancybox/fancybox.component';
import { OwlComponent } from './owl/owl.component';
import { CounterComponent } from './counter/counter.component';
import { CounterAngularComponent } from './counter-angular/counter-angular.component';
import { HeaaderComponent } from './components/heaader/heaader.component';
import { ProductsComponent } from './components/products/products.component';
import { Cart2Component } from './components/cart2/cart2.component';
import { ContactComponent } from './contact/contact.component';
import { MensAccessoriesComponent } from './mens-accessories/mens-accessories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { Test2Component } from './test2/test2.component';
import { FaqComponent } from './faq/faq.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfettiComponent } from './confetti/confetti.component';
import { WeatherComponent } from './weather/weather.component';
import { DateComponent } from './date/date.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PostsComponent } from './posts/posts.component';
import { RedDirective } from './directive/red.directive';
import { CardComponent } from './card/card.component';
import { PlacedComponent } from './placed/placed.component';
import { UpiComponent } from './upi/upi.component';
import { FirebaseFetchComponent } from './firebase-fetch/firebase-fetch.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { GooglepayComponent } from './googlepay/googlepay.component';
import { StripeComponent } from './stripe/stripe.component';
import { AngularFireModule} from '@angular/fire/compat';

import { FirebaseService } from './services/firebase.service';
import { AuthSignComponent } from './auth-sign/auth-sign.component';
import { HomeComponent } from './home/home.component';
import { PaypalComponent } from './paypal/paypal.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { InstockPipe } from './pipes/instock.pipe';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { FeedbackMaterialComponent } from './feedback-material/feedback-material.component';
import { CommentsComponent } from './comments/comments.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { MessagesComponent } from './messages/messages.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { LoginChoiceComponent } from './login-choice/login-choice.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { SignupResComponent } from './signup-res/signup-res.component';
import { MenTrouserComponent } from './men-trouser/men-trouser.component';
import { MensWalletComponent } from './mens-wallet/mens-wallet.component';
import { SearchComponent } from './search/search.component';
import { FeedbackMongoComponent } from './feedback-mongo/feedback-mongo.component';




@NgModule({
  
  declarations: [
    AppComponent,
    RedDirective,
    NavbarComponent,
    BannerComponent,
    FeaturedComponent,
    FooterComponent,
    HomepageComponent,
    MensSuitsComponent,
    CartComponent,
    MensShirtsComponent,
    WomenDressesComponent,
    WomenSareeComponent,
    WomenFootwearComponent,
    WomenAccessoriesComponent,
    ContactUsComponent,
    MenComponent,
    NewsComponent,
    FeedbackComponent,
    AboutComponent,
    MultiBannerComponent,
    FancyboxComponent,
    OwlComponent,
    CounterComponent,
    CounterAngularComponent,
    HeaaderComponent,
    ProductsComponent,
    Cart2Component,
    ContactComponent,
    MensAccessoriesComponent,
    ProductDetailsComponent,
    TestComponent,
    Test2Component,
    FaqComponent,
    CheckoutComponent,
    ConfettiComponent,
    WeatherComponent,
    DateComponent,
    LoginformComponent,
    PostsComponent,
    RedDirective,
    CardComponent,
    PlacedComponent,
    UpiComponent,
    FirebaseFetchComponent,
    UserprofileComponent,
    StripeComponent,
    AuthSignComponent,
    HomeComponent,
    PaypalComponent,
    ConfirmationComponent,
    InstockPipe,
    LocalStorageComponent,
    CaptchaComponent,
    DashboardComponent,
    DisplayComponent,
    FeedbackMaterialComponent,
    CommentsComponent,
    TicketsComponent,
    NewContactComponent,
    MessagesComponent,
    AdminLoginComponent,
    AccessDeniedComponent,
    LoginChoiceComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
    SignupResComponent,
    MenTrouserComponent,
    MensWalletComponent,
    SearchComponent,
    FeedbackMongoComponent,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyDw8vVJvrg6QAAKN6SV46ItHQbPf7E-640",
      authDomain: "crud-733ca.firebaseapp.com",
      projectId: "crud-733ca",
      storageBucket: "crud-733ca.appspot.com",
      messagingSenderId: "739541375293",
      appId: "1:739541375293:web:93aac261b4618866000d54",
      measurementId: "G-LCF6W4PN7C"
    })
  ],
  providers: [ContactService,
  AuthGuard,
  FirebaseService,
  ProductDetailsComponent
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
