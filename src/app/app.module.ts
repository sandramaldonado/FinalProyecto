import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CarFilterComponent } from './components/car-filter/car-filter.component';


import { ToastrModule } from 'ngx-toastr';
import { CreditCardComponent } from './components/creditcard/creditcard.component';
import { CarAddComponent } from './components/pages/admin-dashboard/cars-dashboard/car-add/car-add.component';

import { BrandAddComponent } from './components/pages/admin-dashboard/brands-dashboard/brand-add/brand-add.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AdminDashboardComponent } from './components/pages/admin-dashboard/admin-dashboard.component';
import { ColorsDashboardComponent } from './components/pages/admin-dashboard/colors-dashboard/colors-dashboard.component';
import { ColorAddComponent } from './components/pages/admin-dashboard/colors-dashboard/color-add/color-add.component';
import { ColorEditComponent } from './components/pages/admin-dashboard/colors-dashboard/color-edit/color-edit.component';
import { BrandsDashboardComponent } from './components/pages/admin-dashboard/brands-dashboard/brands-dashboard.component';
import { BrandEditComponent } from './components/pages/admin-dashboard/brands-dashboard/brand-edit/brand-edit.component';
import { CarsDashboardComponent } from './components/pages/admin-dashboard/cars-dashboard/cars-dashboard.component';
import { CarEditComponent } from './components/pages/admin-dashboard/cars-dashboard/car-edit/car-edit.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HomeComponent } from './components/home/home/home.component';
import { UserComponent } from './components/auth/user-profil/user-profil.component';
import { UsereditComponent } from './components/auth/user-profil/useredit/useredit.component';
import {ReservarDialogComponent} from './components/pages/reservar-dialog/reservar-dialog.component'
//material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';

//firebase

/* import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database'; */
import { environment } from 'src/environments/environment';
import { GenerarCarnetComponent } from './components/pages/admin-dashboard/generar-carnet/generar-carnet.component';
//material

import {MatListModule} from '@angular/material/list';




export function tokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    ColorComponent,
    CarComponent,
    BrandComponent,
    CarDetailComponent,
    ColorFilterPipe,
    BrandFilterPipe,
    CarFilterPipe,
    CarFilterComponent,
    CreditCardComponent,
    CarAddComponent,
    CarEditComponent,
    BrandAddComponent,
    ColorAddComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    ColorsDashboardComponent,
    ColorEditComponent,
    BrandsDashboardComponent,
    BrandEditComponent,
    CarsDashboardComponent,
    HomeComponent,
    UserComponent,
    UsereditComponent,
    ReservarDialogComponent,
    GenerarCarnetComponent,
   
   
    
  
  
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
      }
    }),
    //material
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatListModule
    //firebase
/*     AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
 */

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
