import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
	HashLocationStrategy,
	LocationStrategy,
	CommonModule,
} from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UserProfleComponent } from "./user-profle/user-profle.component";
import { GuardGuard } from "./guard/guard.guard";
import { NgApexchartsModule } from "ng-apexcharts";
@NgModule({
	declarations: [AppComponent, HomeComponent, UserProfleComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		NgApexchartsModule,
		HttpClientModule,
	],
	providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		GuardGuard,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
