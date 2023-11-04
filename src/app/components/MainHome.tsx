import Card from "./Card";
import Highlight from "./Highlight";
import Topics from "./Topics";
import Menu from "./Menu";

export default function MainHome() {
  return (
    <main className="flex flex-col flex-1 bg-gradient-to-t  from-neutral-950 from-70% via-neufrom-neutral-950 via-60%  to-green-500/50  to-100% rounded-xl px-5">
      <Menu></Menu>
      <Highlight
        title="Popular Metal Songs..."
        subtitle="Listen to the most sucessful Metal songs!"
        img="/Album-covers/Sleeptokenbig.jpg"
      ></Highlight>
      <section className="flex flex-col pt-6">
        <h2 className="text-3xl font-bold">Good Afternoon</h2>
        <Topics></Topics>
      </section>
      {/*Cards Here*/}
      <section className="flex flex-col pt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Made For You</h2>
          <a href="" className="text-base font-semibold text-zinc-400">
            Show all
          </a>
        </div>
        <Card></Card>
      </section>
    </main>
  );
}
