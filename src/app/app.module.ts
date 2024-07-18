import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { GraphqlModule } from './graphql/graphql.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpCallsInterceptor } from './http-calls.interceptor';
import { StoreModule } from '@ngrx/store';
import { repoReducer } from './nrgx-store/repo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphqlModule,
    StoreModule.forRoot({
      repos: repoReducer
    }),
  ],
  providers: [provideHttpClient(withInterceptors([httpCallsInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
