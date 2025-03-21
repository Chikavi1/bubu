import { Routes } from '@angular/router';
import { LandingClientComponent } from './landing/landing-client/landing-client.component';
import { LandingBusinessComponent } from './landing/landing-business/landing-business.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { UsersComponent } from './admin/business/users/users.component';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';

import { RoleGuard } from './guards/role.guard';
import { DashboardComponent as DashboardClient } from './admin/clients/dashboard/dashboard.component';
import { DashboardComponent as DashboardAdmin} from './admin/business/dashboard/dashboard.component';

import { VisitsComponent } from './admin/business/visits/visits.component';
import { ClientStatsComponent } from './admin/business/client-stats/client-stats.component';

import { GiftCardsComponent } from './admin/business/gift-cards/gift-cards.component';
import { BillingComponent } from './admin/business/billing/billing.component';
import { ProfileComponent } from './admin/business/profile/profile.component';
import { EditComponent } from './admin/business/edit/edit.component';
import { ConfigurationComponent } from './admin/business/configuration/configuration.component';
import { PaymentFormComponent } from './admin/business/payment-form/payment-form.component';



import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CardsComponent } from './admin/clients/cards/cards.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { CreateComponent as UsersCreate } from './admin/business/users/create/create.component';
import { CreateComponent as VisitsCreate } from './admin/business/visits/create/create.component';
import { CreateComponent as GiftsCreate} from './admin/business/gift-cards/create/create.component';
import { RedeemComponent } from './admin/business/gift-cards/redeem/redeem.component';
import { PublicComponent } from './admin/business/gift-cards/public/public.component';
import { CreatePublicComponent } from './admin/business/gift-cards/create-public/create-public.component';
import { IndexComponent } from './admin/business/gift-cards/index/index.component';
import { ShowComponent } from './admin/business/gift-cards/show/show.component';
import { CheckoutComponent } from './public/checkout/checkout.component';
import { PaymentStatusComponent } from './public/payment-status/payment-status.component';
import { ShowComponent as showUser } from './admin/business/users/show/show.component';
import { ExercisesComponent } from './admin/business/users/exercises/exercises.component';
import { DietComponent } from './admin/business/users/diet/diet.component';

export const routes: Routes = [
  
   {
  path: 'admin',
  component: LayoutComponent,
  // canActivate: [AuthGuard], // Asegúrate de que el guardia esté permitiendo la navegación
  children: [
    { path: 'clients', component: DashboardClient },
    
      // canActivate: [RoleGuard],
    { path: 'business', component: DashboardAdmin,  data: { role: 'business' } },
    { path: 'business/clients', component: UsersComponent,  data: { role: 'business' } },
    { path: 'business/clients/create', component: UsersCreate,  data: { role: 'business' } },
    { path: 'business/clients/show/:id', component: showUser,  data: { role: 'business' } },
    { path: 'business/clients/show/:id/exercises', component: ExercisesComponent,  data: { role: 'business' } },
    { path: 'business/clients/show/:id/diet', component: DietComponent,  data: { role: 'business' } },

    { path: 'business/visits/create', component: VisitsCreate,  data: { role: 'business' } }, 
    { path: 'business/visits', component: VisitsComponent,  data: { role: 'business' } },
    { path: 'business/clients-stats', component: ClientStatsComponent,  data: { role: 'business' } },
    { path: 'business/payment-form', component: PaymentFormComponent,  data: { role: 'business' } },
    { path: 'business/gift-cards', component: GiftCardsComponent,  data: { role: 'business' } },
    { path: 'business/gift-cards/create', component: GiftsCreate,  data: { role: 'business' } },
    { path: 'business/gift-cards-redeem', component: RedeemComponent,  data: { role: 'business' } },
    { path: 'business/public-gift-cards', component: PublicComponent,  data: { role: 'business' } },
    { path: 'business/public-gift-cards/create', component: CreatePublicComponent,  data: { role: 'business' } },

    { path: 'business/billing', component: BillingComponent,  data: { role: 'business' } },
    { path: 'business/profile', component: ProfileComponent,  data: { role: 'business' } },
    { path: 'business/:id/edit', component: EditComponent,  data: { role: 'business' } },
    { path: 'business/configuration', component: ConfigurationComponent, data: { role: 'business' } },
    
    { path: 'clients/cards', component: CardsComponent, data: { role: 'business' } }, //cambiar
     

    { path: 'statics', component: ClientStatsComponent,  data: { role: 'business' } },
    
    // { path: 'business/users', component: UsersComponent, canActivate: [RoleGuard], data: { role: 'admin' } }
  ]
},


  { path: 'gift-cards', component: IndexComponent },
  { path: 'gift-cards/:slug', component: ShowComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'payment-status', component: PaymentStatusComponent },

      
  { path: '', redirectTo: '/landing-client', pathMatch: 'full' },
  { path: 'landing-client', component: LandingClientComponent },
  { path: 'landing-business', component: LandingBusinessComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot_password', component: ForgotPasswordComponent },
  




  { path: '**', component: NotFoundComponent }
];
