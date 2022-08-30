import { Component, OnInit } from '@angular/core';
import { IDuck } from './duck';

@Component({
	selector: 'app-mainframe',
	templateUrl: './mainframe.component.html',
	styleUrls: ['./mainframe.component.css']
})
export class MainframeComponent implements OnInit {
	ducks: IDuck[] = [];
	api_root = "https://rubberduckapi.azurewebsites.net/Duck";

	ngOnInit(): void {

		this.ducks = this.getAllDucks()
		//const canvas: HTMLCanvasElement = document.getElementById('mainframe') as HTMLCanvasElement;

		// draw something on canvas

	}
	getAllDucks(): IDuck[] {
		let ducks: IDuck[]  = []

		let response: Promise<Response> = fetch(this.api_root)
			.then((response) => (response.json()))
			.then((response) => response.forEach((r: any) => ducks.push(r)))

		return ducks
	}
}
