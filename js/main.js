// $.ajax({
//     url: "https://pokeapi.co/api/v2/ability/1",
//     context: document.body
//   }).done(function() {
//   });
// https://pokeapi.co/api/v2/pokemon/

$.ajax("https://pokeapi.co/api/v2/pokedex/26/", {
  // $.ajax("https://pokeapi.co/api/v2/region/1", {
  success: function (data) {
    // console.log(data.pokemon_entries.length)
    // NEED TO LOOP TO GET INDIVIDUAL POKEMON
      
      data.pokemon_entries.forEach((p) => {
        $.ajax(
          `https://pokeapi.co/api/v2/pokemon/${p.pokemon_species.name}`,
          {
            success: function (pokemon) {
              // console.log(pokemon.id)
              // console.log("ppppp ", pokemon);
              // $("#poke-data").append(
              //   `<ul class="poke-ul" data-pokeId="${pokemon.id}"><li class="d-none poke-list">${p.pokemon_species.name.toUpperCase()}<br> ID # ${pokemon.id}<img class="pokemon" src=${
              //     pokemon.sprites.front_default
              //   } alt="Pokemon list"></li></ul>`
              //   );
              $("#poke-data").append(
                `<div class="card" style="width: 10rem; text-align: center; float: left;">
                <ul class="list-group list-group-flush poke-ul">
                <li class="poke-list">${p.pokemon_species.name.toUpperCase()}<br> ID # ${pokemon.id}<img class="pokemon" src=${pokemon.sprites.front_default} alt="Pokemon list"></li></ul></div>`
                );
              },
              error: function () {},
            }
            );
          } )
  },
  error: function () {},
});

$(".pokemon").css({"height": "50px!important", "width": "50px!important"});
