import { MemeType } from "../types/data";

const Tile = (meme: MemeType) => {
  return (
    <div key={meme.id}>
      <h1>{meme.name}</h1>
      <img src={meme.url} alt={meme.name} />
    </div>
  );
};

export default Tile;
