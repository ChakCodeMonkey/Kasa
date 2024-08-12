import Banner from "../../components/banner/Banner";
import imgBanner from "../../assets/images/banner/homeBanner.png";

const Home = () => {
  return (
    <main>
   <Banner texte="Chez vous, partout et ailleurs" image={imgBanner}/>
   </main>
  );
};

export default Home;
