import { Component } from '@angular/core';
import { Http, Response}  from '@angular/http';
import {ServerService } from './server.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	
  	inputField = '';
  	display = {};
  	arrByColor = [];
  	errorMessage: boolean;
  	constructor(private serverService: ServerService) {}

  	onClick(){
  		this.errorMessage = false;
  		this.serverService.pokemonByName(this.inputField)
  		.subscribe(
  			(response: Response) => {
  				this.display = response;
  				console.log(response);},
  			(error: Error) => {this.onErr();}
  			);
  	}

  	onErr() {
  		this.serverService.pokemonByColor(this.inputField)
  		.subscribe(
  			(response: Response) => {
  				this.display = response;
  				console.log(response);},
  			(error: Error) => {this.errorMessage = true;}
  			);

  	};

  	

  	

  	
}
