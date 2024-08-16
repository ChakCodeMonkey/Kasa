import Banner from "../../components/banner/Banner";
import imgBanner from "../../assets/images/banner/homeBanner.png";
import Card from "../../components/cards/Cards";
import logements from "../../data/logements.json"

export default function Home() {
  return (
    <main>
   <Banner texte="Chez vous, partout et ailleurs" image={imgBanner}/>
   <section className="cardsContainer">
    {logements.map((location, index) => (
      <Card location={location} key={index}/>
    ))}
   </section>
   </main>
  );
};
