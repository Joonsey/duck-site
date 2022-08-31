import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent {

	buttonText = "";

	@Input()
	set text(name: string) {
		this.buttonText = name.toUpperCase();
	}

	get name() : string {
		return this.buttonText;
	}

	@Input() color: string = '006884';
	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter();
	@Input() route: string = ""
	// @Input() isDisabled: string = 'button';

	constructor(private router: Router) { }

	routeTo(){
		this.btnClick.emit();
		this.router.navigateByUrl(this.route);
	}
}
