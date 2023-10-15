import { useQuery } from "@tanstack/react-query";
import { fetchPokemnoCards } from "./api";
import CardItem from "./components/CardItem";
import { PokemonCard } from "./types/pokemonCards";
import { cards } from "./types/utilities/dummyData";

function App() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["getPokemonCards"],
    queryFn: fetchPokemnoCards
  });
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    // TODO: connet whe finished styling: data.data
    content = cards.map((item: PokemonCard) => (
      <CardItem key={item.id} data={item} />
    ));
  }
  return (
    <div className="App bg-slate-800 text-stone-50 w-screen min-h-screen h-full">
      <h1 className="text-8xl p-8">Hello</h1>
      <ul className="flex flex-col items-center">{content}</ul>
    </div>
  );
}

export default App;
