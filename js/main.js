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
              $("#poke-data").append(
                `<ul class="test" data-pokeId="${pokemon.id}"><li class="d-none poke-list">${p.pokemon_species.name.toUpperCase()} ID # ${pokemon.id}<img src=${
                  pokemon.sprites.front_default
                }></li></ul>`
                );
              },
              error: function () {},
            }
            );
          } )
  },
  error: function () {},
});

$(".poke-list").not(":nth-child(4)").css("display", "block");
