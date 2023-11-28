import { fetchCards } from "./actions/fetch-cards";
import Card from "./components/card";
import LoadMore from "./components/loadMore";

export default async function Home() {
  const data = await fetchCards(1);

  const { cards } = data;

  return (
    <>
      <div className=" pt-8 flex flex-wrap gap-3 w-11/12 my-0 mx-auto justify-around">
        {cards &&
          cards.map((item, index) => {
            return (
              <div className="w-1/5">
                <Card key={index} data={item} />
              </div>
            );
          })}
      </div>
      <LoadMore />
    </>
  );
}
