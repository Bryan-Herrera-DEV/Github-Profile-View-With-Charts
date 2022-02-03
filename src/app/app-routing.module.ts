import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserProfleComponent } from "./user-profle/user-profle.component";
import { GuardGuard } from "./guard/guard.guard";
const routes: Routes = [
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "user",
		component: UserProfleComponent,
		canActivate: [GuardGuard],
	},
	{ path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
