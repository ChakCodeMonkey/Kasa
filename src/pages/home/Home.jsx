import Banner from "../../components/banner/Banner";
import imgBanner from "../../assets/images/banner/homeBanner.png";

export default function Home() {
  return (
    <main>
   <Banner texte="Chez vous, partout et ailleurs" image={imgBanner}/>
   </main>
  );
};
