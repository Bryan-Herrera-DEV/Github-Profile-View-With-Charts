import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	active_class: string = "";
	toggle(): void {
		this.active_class = this.active_class == "nav-active" ? "" : "nav-active";
	}
	ngOnInit() {
		localStorage.setItem("theme", "theme-1");
	}
	li_1: string = "active-nav";
	li_2: string = "";
	li_3: string = "";
	li_4: string = "";
	li_5: string = "";
	theme: string = "theme-1";
	toggle_theme(id: number) {
		if (id == 1) {
			this.li_1 = "active-nav";
			this.li_2 = "";
			this.li_3 = "";
			this.li_4 = "";
			this.li_5 = "";
			this.theme = "theme-1";
			localStorage.setItem("theme", "theme-1");
		} else if (id == 2) {
			this.li_1 = "";
			this.li_2 = "active-nav";
			this.li_3 = "";
			this.li_4 = "";
			this.li_5 = "";
			this.theme = "theme-2";
			localStorage.setItem("theme", "theme-2");
		} else if (id == 3) {
			this.li_1 = "";
			this.li_2 = "";
			this.li_3 = "active-nav";
			this.li_4 = "";
			this.li_5 = "";
			this.theme = "theme-3";
			localStorage.setItem("theme", "theme-3");
		} else if (id == 4) {
			this.li_1 = "";
			this.li_2 = "";
			this.li_3 = "";
			this.li_4 = "active-nav";
			this.li_5 = "";
			this.theme = "theme-4";
			localStorage.setItem("theme", "theme-4");
		} else if (id == 5) {
			this.li_1 = "";
			this.li_2 = "";
			this.li_3 = "";
			this.li_4 = "";
			this.li_5 = "active-nav";
			this.theme = "theme-5";
			localStorage.setItem("theme", "theme-5");
		}
	}
}
