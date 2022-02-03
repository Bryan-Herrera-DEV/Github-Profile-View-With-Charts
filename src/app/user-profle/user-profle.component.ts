import { Component, ViewChild, OnInit } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import {
	ApexNonAxisChartSeries,
	ApexResponsive,
	ApexChart,
	ApexAxisChartSeries,
	ApexDataLabels,
	ApexPlotOptions,
	ApexYAxis,
	ApexLegend,
	ApexGrid,
} from "ng-apexcharts";
import { RequestsService } from "../services/requests.service";
export type ChartOptions = {
	series: ApexNonAxisChartSeries | any;
	colors: any;
	chart: ApexChart | any;
	responsive: ApexResponsive[] | any;
	labels: any;
	legend: ApexLegend | any;
	dataLabels: any;
};
export type ChartOptionsMost = {
	series: ApexAxisChartSeries | any;
	chart: ApexChart | any;
	dataLabels: ApexDataLabels | any;
	plotOptions: ApexPlotOptions | any;
	yaxis: ApexYAxis | any;
	xaxis: ApexXAxis | any;
	grid: ApexGrid | any;
	colors: string[] | any;
	legend: ApexLegend | any;
};
type ApexXAxis = {
	type?: "category" | "datetime" | "numeric";
	categories?: any;
	labels?: {
		style?: {
			colors?: string | string[];
			fontSize?: string;
		};
	};
};
export type perLengauge = {
	series: ApexNonAxisChartSeries | any;
	chart: ApexChart | any;
	responsive: ApexResponsive[] | any;
	legend: ApexLegend | any;
	labels: any;
	color: string[] | any;
};

@Component({
	selector: "app-user-profle",
	templateUrl: "./user-profle.component.html",
	styleUrls: ["./user-profle.component.scss"],
})
export class UserProfleComponent implements OnInit {
	public chartOptions: Partial<ChartOptions>;
	public MostStarre: Partial<ChartOptionsMost> | any;
	public perLenguage: Partial<perLengauge> | any;
	animation_variable: string = "";
	langColors: object | any = {
		Mercury: "#ff2b2b",
		TypeScript: "#2b7489",
		PureBasic: "#5a6986",
		"Objective-C++": "#6866fb",
		Self: "#0579aa",
		edn: "#db5855",
		NewLisp: "#87AED7",
		"Jupyter Notebook": "#DA5B0B",
		Rebol: "#358a5b",
		Frege: "#00cafe",
		Dart: "#00B4AB",
		AspectJ: "#a957b0",
		Shell: "#89e051",
		"Web Ontology Language": "#9cc9dd",
		xBase: "#403a40",
		Eiffel: "#946d57",
		Nix: "#7e7eff",
		RAML: "#77d9fb",
		MTML: "#b7e1f4",
		Racket: "#22228f",
		Elixir: "#6e4a7e",
		SAS: "#B34936",
		Agda: "#315665",
		wisp: "#7582D1",
		D: "#ba595e",
		Kotlin: "#F18E33",
		Opal: "#f7ede0",
		Crystal: "#776791",
		"Objective-C": "#438eff",
		"ColdFusion CFC": "#ed2cd6",
		Oz: "#fab738",
		Mirah: "#c7a938",
		"Objective-J": "#ff0c5a",
		Gosu: "#82937f",
		FreeMarker: "#0050b2",
		Ruby: "#701516",
		"Component Pascal": "#b0ce4e",
		Arc: "#aa2afe",
		Brainfuck: "#2F2530",
		Nit: "#009917",
		APL: "#5A8164",
		Go: "#375eab",
		"Visual Basic": "#945db7",
		PHP: "#4F5D95",
		Cirru: "#ccccff",
		SQF: "#3F3F3F",
		Glyph: "#e4cc98",
		Java: "#b07219",
		MAXScript: "#00a6a6",
		Scala: "#DC322F",
		Makefile: "#427819",
		ColdFusion: "#ed2cd6",
		Perl: "#0298c3",
		Lua: "#000080",
		Vue: "#2c3e50",
		Verilog: "#b2b7f8",
		Factor: "#636746",
		Haxe: "#df7900",
		"Pure Data": "#91de79",
		Forth: "#341708",
		Red: "#ee0000",
		Hy: "#7790B2",
		Volt: "#1F1F1F",
		LSL: "#3d9970",
		eC: "#913960",
		CoffeeScript: "#244776",
		HTML: "#e44b23",
		Lex: "#DBCA00",
		"API Blueprint": "#2ACCA8",
		Swift: "#ffac45",
		C: "#555555",
		AutoHotkey: "#6594b9",
		Isabelle: "#FEFE00",
		Metal: "#8f14e9",
		Clarion: "#db901e",
		JSONiq: "#40d47e",
		Boo: "#d4bec1",
		AutoIt: "#1C3552",
		Clojure: "#db5855",
		Rust: "#dea584",
		Prolog: "#74283c",
		SourcePawn: "#5c7611",
		AMPL: "#E6EFBB",
		FORTRAN: "#4d41b1",
		ANTLR: "#9DC3FF",
		Harbour: "#0e60e3",
		Tcl: "#e4cc98",
		BlitzMax: "#cd6400",
		PigLatin: "#fcd7de",
		Lasso: "#999999",
		ECL: "#8a1267",
		VHDL: "#adb2cb",
		Elm: "#60B5CC",
		"Propeller Spin": "#7fa2a7",
		X10: "#4B6BEF",
		IDL: "#a3522f",
		ATS: "#1ac620",
		Ada: "#02f88c",
		"Unity3D Asset": "#ab69a1",
		Nu: "#c9df40",
		LFE: "#004200",
		SuperCollider: "#46390b",
		Oxygene: "#cdd0e3",
		ASP: "#6a40fd",
		Assembly: "#6E4C13",
		Gnuplot: "#f0a9f0",
		JFlex: "#DBCA00",
		NetLinx: "#0aa0ff",
		Turing: "#45f715",
		Vala: "#fbe5cd",
		Processing: "#0096D8",
		Arduino: "#bd79d1",
		FLUX: "#88ccff",
		NetLogo: "#ff6375",
		"C Sharp": "#178600",
		CSS: "#563d7c",
		"Emacs Lisp": "#c065db",
		Stan: "#b2011d",
		SaltStack: "#646464",
		QML: "#44a51c",
		Pike: "#005390",
		LOLCODE: "#cc9900",
		ooc: "#b0b77e",
		Handlebars: "#01a9d6",
		J: "#9EEDFF",
		Mask: "#f97732",
		EmberScript: "#FFF4F3",
		TeX: "#3D6117",
		Nemerle: "#3d3c6e",
		KRL: "#28431f",
		"Ren'Py": "#ff7f7f",
		"Unified Parallel C": "#4e3617",
		Golo: "#88562A",
		Fancy: "#7b9db4",
		OCaml: "#3be133",
		Shen: "#120F14",
		Pascal: "#b0ce4e",
		"F#": "#b845fc",
		Puppet: "#302B6D",
		ActionScript: "#882B0F",
		Diff: "#88dddd",
		"Ragel in Ruby Host": "#9d5200",
		Fantom: "#dbded5",
		Zephir: "#118f9e",
		Click: "#E4E6F3",
		Smalltalk: "#596706",
		DM: "#447265",
		Ioke: "#078193",
		PogoScript: "#d80074",
		LiveScript: "#499886",
		JavaScript: "#f1e05a",
		VimL: "#199f4b",
		PureScript: "#1D222D",
		ABAP: "#E8274B",
		Matlab: "#bb92ac",
		Slash: "#007eff",
		R: "#198ce7",
		Erlang: "#B83998",
		Pan: "#cc0000",
		LookML: "#652B81",
		Eagle: "#814C05",
		Scheme: "#1e4aec",
		PLSQL: "#dad8d8",
		Python: "#3572A5",
		Max: "#c4a79c",
		"Common Lisp": "#3fb68b",
		Latte: "#A8FF97",
		XQuery: "#5232e7",
		Omgrofl: "#cabbff",
		XC: "#99DA07",
		Nimrod: "#37775b",
		SystemVerilog: "#DAE1C2",
		Chapel: "#8dc63f",
		Groovy: "#e69f56",
		Dylan: "#6c616e",
		E: "#ccce35",
		Parrot: "#f3ca0a",
		"Grammatical Framework": "#79aa7a",
		"Game Maker Language": "#8fb200",
		Papyrus: "#6600cc",
		"NetLinx+ERB": "#747faa",
		Clean: "#3F85AF",
		Alloy: "#64C800",
		Squirrel: "#800000",
		PAWN: "#dbb284",
		UnrealScript: "#a54c4d",
		"Standard ML": "#dc566d",
		Slim: "#ff8f77",
		Perl6: "#0000fb",
		Julia: "#a270ba",
		Haskell: "#29b544",
		NCL: "#28431f",
		Io: "#a9188d",
		Rouge: "#cc0088",
		"C++": "#f34b7d",
		"AGS Script": "#B9D9FF",
		Dogescript: "#cca760",
		nesC: "#94B0C7",
	};

	change_priority(value: Event | any) {
		console.log(value.target.value);
		this.animation_variable = "scale-out-center";
		setTimeout(() => {
			this.animation_variable = "scale-in-center";
			if (value.target.value == "stars") {
				this.libraries = this.libraries.sort((a: any, b: any) => {
					return b.stargazers_count - a.stargazers_count;
				});
			} else if (value.target.value == "forks") {
				this.libraries = this.libraries.sort((a: any, b: any) => {
					return b.forks_count - a.forks_count;
				});
			} else if (value.target.value == "size") {
				this.libraries = this.libraries.sort((a: any, b: any) => {
					return b.size - a.size;
				});
			}
		}, 300);
	}
	colors: object | any = {
		theme_1: ["#673ab7", "#03a9f4", "#f55d3e", "#f7cb15", "#8daa91"],
		theme_2: ["#ffcc67", "#ff9557", "#75b9be", "#a8ccc9", "#734b5e"],
		theme_3: ["#3ad858", "#a05793", "#ceb5a7", "#3c887e", "#2978a0"],
		theme_4: ["#38bfa7", "#367bc3", "#824c71", "#ff8600", "#cebacf"],
		theme_5: ["#323da5", "#f95794", "#a2c7e5", "#58fcec", "#fcba04"],
	};
	categories: any = [];
	data: any = [];
	constructor(private request: RequestsService) {
		this.chartOptions = {
			series: [44, 55, 13, 43, 22],
			chart: {
				width: 270,
				type: "pie",
			},
			colors: this.colors["theme_5"],
			legend: {
				position: "bottom",
			},
			labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
		};
	}
	username: string = "";
	name: string = "";
	company: string = "";
	link_profile: string = "";
	avatar_url: string = "";
	location: string = "";
	created_at: string = "";
	public_repos: number = 0;
	followers: number = 0;
	following: number = 0;
	libraries: any;
	most_used_languages: any = [
		["Python", 0],
		["Otro", 0],
	];
	series_per: any = [];
	labels_per: any = [];
	ngOnInit(): void {
		this.username = `${localStorage.getItem("user")}`;
		this.request.get_user(this.username).subscribe((res) => {
			this.company = res.company;
			this.name = res.name;
			this.link_profile = res.html_url;
			this.avatar_url = res.avatar_url;
			this.location = res.location;
			this.created_at = res.created_at;
			this.public_repos = res.public_repos;
			this.followers = res.followers;
			this.following = res.following;
		});
		this.request.get_repos(this.username).subscribe((res) => {
			this.libraries = res.sort((a: any, b: any) => {
				return b.stargazers_count - a.stargazers_count;
			});
			// for para categorias del line chart de los repositorios
			for (let index = 0; index < 5; index++) {
				this.categories.push(this.libraries[index].name);
				this.data.push(this.libraries[index].stargazers_count);
			}
			this.MostStarre = {
				series: [
					{
						name: "distibuted",
						data: this.data,
					},
				],
				chart: {
					height: 270,
					type: "bar",
				},
				colors: this.colors["theme_5"],
				plotOptions: {
					bar: {
						columnWidth: "45%",
						distributed: true,
					},
				},
				dataLabels: {
					enabled: false,
				},
				legend: {
					show: false,
				},
				grid: {
					show: false,
				},
				xaxis: {
					categories: this.categories,
					labels: {
						style: {
							colors: this.colors["theme_5"],
							fontSize: "12px",
						},
					},
				},
			};
			// 5 lenguajes mas usados en los repositorios
			for (let index = 0; index < this.libraries.length; index++) {
				if (this.libraries[index].language == null) {
					this.most_used_languages[1][1]++;
				}
				for (let i = 0; i < this.most_used_languages.length; i++) {
					if (this.libraries[index].language == this.most_used_languages[i][0]) {
						this.most_used_languages[i][1]++;
						break;
					} else if (
						i == this.most_used_languages.length - 1 &&
						this.libraries[index].language != null
					) {
						this.most_used_languages.push([this.libraries[index].language, 1]);
						break;
					}
				}
			}
			// agregando los 5 lenguajes mas usados en los repositorios
			for (let index = 0; index < 5; index++) {
				this.series_per.push(this.most_used_languages[index][1]);
				this.labels_per.push(this.most_used_languages[index][0]);
			}
			this.perLenguage = {
				series: this.series_per,
				chart: {
					type: "donut",
					width: 270,
				},
				colors: this.colors["theme_5"],
				labels: this.labels_per,
				legend: {
					position: "bottom",
				},
			};
		});
	}
}
