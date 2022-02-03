import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
	providedIn: "root",
})
export class RequestsService {
	private rate_limit: string = "htpps://api.github.com/rate_limit";
	private user: string = "https://api.github.com/users/";
	private polygot = null;
	constructor(private http: HttpClient) {}

	get_repos(user: string) {
		const url = `${this.user}${user}/repos?per_page=100`;
		return this.http.get<any>(url);
	}
	get_user(user: string) {
		const url = `${this.user}${user}`;
		return this.http.get<any>(url);
	}
	user_exists(): boolean {
		return localStorage.getItem("user") != null;
	}
}
