import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { POKEMONS } from './pokemon/mock.pockemon';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    let  pokemons =POKEMONS;
    return {pokemons};
  }
}
