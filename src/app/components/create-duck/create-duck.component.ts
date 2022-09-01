import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http'
import { IDuck } from '../mainframe/duck';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-duck',
  templateUrl: './create-duck.component.html',
  styleUrls: ['./create-duck.component.css'],
  providers: [HttpClient]
})

export class CreateDuckComponent {

	api_root = "https://rubberduckapi.azurewebsites.net/Duck";

  	constructor(
		private http: HttpClient,
		private router: Router
		) {
	}

	handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(
			`Backend returned code ${error.status}, body was: `, error.error);
		}
			// Return an observable with a user-facing error message.
			return throwError(() => new Error('Something bad happened; please try again later.'));
		}


	onClick(): void {
		const httpOptions = {
			headers: new HttpHeaders({
				'content-type':'application/json'
			})
		}
		var name: string= (<HTMLInputElement>document.getElementById("name")).value;
		var age: number = Number((<HTMLInputElement>document.getElementById("age")).value);
		var alcoholic: boolean = Boolean((<HTMLInputElement>document.getElementById("alcoholic")).checked);
		var color: number = Number((<HTMLInputElement>document.getElementById("color")).value);

		var duck: IDuck = {
			name,
			age,
			alcoholic,
			color
		}
		let r : Observable<any> = this.http.post<any>(this.api_root, duck, httpOptions)
		function validatePostRequestResponse(x: any): number {
			if (x==200) {
				console.log('succesfully created a duck!');
				return 0
			}
			else {
				console.log("s");
				return 1
			}
		}
		r.subscribe({
			next(x) {validatePostRequestResponse(x)},
			error(msg) {
				console.log("Error at request with message: ", msg)
			}
		})


	}
}
