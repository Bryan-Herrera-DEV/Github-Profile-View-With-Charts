import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestsService } from "../services/requests.service";
@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	registerForm: FormGroup | any;
	submitted = false;
	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private auth: RequestsService
	) {}
	get form() {
		return this.registerForm.controls;
	}
	data_atuh = {
		email: "",

		password: "",
	};
	p_error: string = "";
	p_v: string = "displayed";
	onSubmit(): void {
		this.submitted = true;
		if (this.registerForm.invalid) {
			return;
		}
		let user = this.registerForm.value.user;
		this.auth.get_user(user).subscribe(
			(res: any) => {
				console.log(res);
				localStorage.setItem("user", user);
				this.router.navigate(["/user"]);
			},
			(err) => {
				console.log(err);
				this.p_v = "";
				setTimeout(() => {
					this.p_error = "error";
					setTimeout(() => {
						this.p_error = "";
					}, 200);
				}, 150);
			}
		);
	}

	ngOnInit(): void {
		this.registerForm = this.formBuilder.group({
			user: ["", [Validators.required]],
		});
	}
}
