import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import{ Observable } from 'rxjs/Observable';



@Injectable()
export class ServerService {
	
	constructor(private http: Http){}
	
	pokemonByName(name){
		return this.http.get('http://pokeapi.co/api/v2/pokemon/' + name +'/')
			.map(
					(response: Response) => {
						 return response.json();
					}
			);
	}

	pokemonByColor(color){
		return this.http.get('http://pokeapi.co/api/v2/pokemon-color/' + color + '/')
			.map(
					(response: Response) => {
						 return response.json();
					}
			);
	}
	
	

	
	
	
}