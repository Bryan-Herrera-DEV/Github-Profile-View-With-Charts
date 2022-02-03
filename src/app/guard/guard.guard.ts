import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { RequestsService } from "../services/requests.service";

@Injectable({
	providedIn: "root",
})
export class GuardGuard implements CanActivate {
	constructor(
		private RequestsService: RequestsService,
		private router: Router
	) {}

	canActivate(): boolean | any {
		if (this.RequestsService.user_exists()) {
			return true;
		}
		alert("No tienes permisos para acceder a esta página");
		this.router.navigate(["/home"]);
	}
}
