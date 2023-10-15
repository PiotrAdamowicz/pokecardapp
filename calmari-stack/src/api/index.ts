export async function fetchPokemnoCards() {
  const response = await fetch("https://api.pokemontcg.io/v2/cards");
  const data = response.json();
  return data;
}
export async function getSpecificCard(id: number) {
  const response = await fetch(`https://api.pokemontcg.io/v2/cards/${name}`);
  const data = await response.json();
  return data;
}
