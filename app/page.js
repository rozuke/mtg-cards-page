import { fetchCards } from "./actions/fetch-cards";
import Card from "./components/card";
import CardBack from "./components/cardBack";

export default function Home() {
  // const cards = await fetchCards(1);

  return (
    <div className="flex flex-wrap gap-3 w-11/12 my-0 mx-auto justify-between">
      <div className="w-1/5">
        <Card />
      </div>
      <div className="w-1/5">
        <Card />
      </div>
      <div className="w-1/5">
        <Card />
      </div>
      <div className="w-1/5">
        <Card />
      </div>
      <div className="w-1/5">
        <Card />
      </div>
      <div className="w-1/5">
        <Card />
      </div>
      <div className="w-1/5">
        <Card />
      </div>
    </div>
  );
}
