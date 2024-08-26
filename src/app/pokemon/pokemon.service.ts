import { Injectable } from '@angular/core';
import { POKEMONS } from './mock.pockemon';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {
  
constructor(private http : HttpClient){}

  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemon').pipe(
      
    )
  }

  getPokemonById(pockemonId:number):Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id === pockemonId);
  }

  getPockemonTypeList(): string[]
  {
    return ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Normal', 'Vol', 'Electrik', 'Fée'];
  }
}
