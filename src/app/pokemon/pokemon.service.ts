import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {
  
constructor(private http : HttpClient){}

getPokemonById(pokemonId:number):Observable<Pokemon|undefined>{
  return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
    tap((response)=>this.log(response)),
    catchError((error)=>this.handleError(error,undefined))
  )
}

  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,[]))
    )
  }


  private log(response:Pokemon[]|Pokemon|undefined) {
    console.table(response);
  }

  private handleError (error:Error, errorValue:any ){
    console.error(error);
    return of(errorValue);
  }

  getPockemonTypeList(): string[]
  {
    return ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Normal', 'Vol', 'Electrik', 'Fée'];
  }
}
