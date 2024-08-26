import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock.pockemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected:undefined|Pokemon;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPockemon(pokemonid: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonid)
    if (pokemon) {
      console.log(`vous avez cliqué sur le pokemon 
      ${pokemon.name}
      `);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez demandée un pokemon qui n'existe pas `);
      this.pokemonSelected = pokemon;
    }

  }

}