// $.ajax({
//     url: "https://pokeapi.co/api/v2/ability/1",
//     context: document.body
//   }).done(function() {
//   });
// https://pokeapi.co/api/v2/pokemon/

$.ajax("https://pokeapi.co/api/v2/pokedex/26/", {
  // $.ajax("https://pokeapi.co/api/v2/region/1", {
  success: function (data) {
    // NEED TO LOOP TO GET INDIVIDUAL POKEMON
      
      data.pokemon_entries.forEach((p) => {
        $.ajax(
          `https://pokeapi.co/api/v2/pokemon/${p.pokemon_species.name}`,
          {
            success: function (pokemon) {
              // console.log(pokemon.id)
              // console.log("ppppp ", pokemon);
              $("#poke-data").append(
                `<div class="test" data-poke-id="${pokemon.id}"><h4>${p.pokemon_species.name.toUpperCase()}</h4> <h4 class="poke-id">${pokemon.id}</h4><img src=${
                  pokemon.sprites.front_default
                }></div>`
                );
              },
              error: function () {},
            }
            );
          } )
  },
  error: function () {},
});

var divList = $(".test");
console.log(divList)
divList.sort(function(a, b){
  console.log('aaaaa ', a)
    return $(a).data("poke-id")-$(b).data("poke-id")
});
$("#poke-data").html(divList);

