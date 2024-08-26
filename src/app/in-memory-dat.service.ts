import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { POKEMONS } from './pokemon/mock.pockemon';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDatService implements InMemoryDbService {

  createDb(){
    return {POKEMONS};
  }
}
