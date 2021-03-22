// $.ajax({
//     url: "https://pokeapi.co/api/v2/ability/1",
//     context: document.body
//   }).done(function() {
//   });
// https://pokeapi.co/api/v2/pokemon/

  $.ajax("https://pokeapi.co/api/v2/pokedex/26/", {
  // $.ajax("https://pokeapi.co/api/v2/region/1", {
    success: function(data) {
      // NEED TO LOOP TO GET INDIVIDUAL POKEMON
    $.ajax(`https://pokeapi.co/api/v2/pokemon/${data.pokemon_entries[0].pokemon_species.name}`, {
    success: function(pokemon) {
     console.log(pokemon)
     $("#poke-data").html(`<h4>${data.pokemon_entries[0].pokemon_species.name.toUpperCase()}</h4><img src=${pokemon.sprites.front_default}>`)
},
    error: function() {
    }
  });
},
    error: function() {
    }
  });