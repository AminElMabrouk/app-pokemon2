import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  updatePokemon(pokemon:Pokemon):Observable<null>{
    const httpOptions={
      headers:new  HttpHeaders({'content-Type' :'application/json'})
    }
        
    return this.http.put('api/pokemons',pokemon,httpOptions).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,null))
    )
  }


  addPokemon(pokemon : Pokemon ): Observable<Pokemon> {
    const httpOptions={
      headers:new  HttpHeaders({'content-Type' :'application/json'})
    }
    return this.http.post<Pokemon>('api/pokemons',pokemon,httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }
  
  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }
  
  private log(response:any) {
    console.table(response);
  }


  private handleError (error:Error, errorValue:any ){
    console.error(error);
    return of(errorValue);
  }


  getPockemonTypeList(): string[]
  {
    return ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Normal', 'Vol', 'Electrik', 'Fée','Combat'];
  }
}
