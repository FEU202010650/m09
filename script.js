function Pokemon(name, level, health) {
  this.name = name;
  this.level = level;
  this.health = health;
  this.attack = level * 2;
  this.trainer = null;
}

Pokemon.prototype.attackPokemon = function(target) {
  target.health -= this.attack;
  console.log(
    this.name + " attacked " + target.name + "! " +
    target.name + "'s health reduced to " + target.health + "."
  );
  if (target.health <= 0) {
    this.victory(target);
  }
};

Pokemon.prototype.victory = function(target) {
  console.log(this.name + " wins the battle against " + target.name + "!");
};

function Trainer(name) {
  this.name = name;
  this.pokemon = [];
}

Trainer.prototype.catchPokemon = function(pokemon) {
  pokemon.trainer = this;
  this.pokemon.push(pokemon);
  console.log(this.name + " caught " + pokemon.name + "!");
};

Trainer.prototype.sendOutPokemon = function(index) {
  const pokemon = this.pokemon[index];
  console.log(this.name + " sent out " + pokemon.name + "!");
  return pokemon;
};

const pikachu = new Pokemon("Pikachu", 5, 25);
const charmander = new Pokemon("Charmander", 3, 15);
const squirtle = new Pokemon("Squirtle", 7, 35);

const ash = new Trainer("Player 1");
const misty = new Trainer("Player 2");

ash.catchPokemon(pikachu);
misty.catchPokemon(charmander);
misty.catchPokemon(squirtle);

let round = 1;
while (pikachu.health > 0 && (charmander.health > 0 || squirtle.health > 0)) {
  console.log("----- Round " + round + " -----");
  const ashPokemon = ash.sendOutPokemon(0);
  const mistyPokemon = misty.sendOutPokemon(Math.floor(Math.random() * misty.pokemon.length));

  ashPokemon.attackPokemon(mistyPokemon);

  if (mistyPokemon.health > 0) {
    mistyPokemon.attackPokemon(ashPokemon);
  }

  round++;
}
