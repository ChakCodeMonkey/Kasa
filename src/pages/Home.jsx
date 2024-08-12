import Banner from "../components/Banner";
import imgBanner from "../assets/images/banner/homeBanner.png";

const Home = () => {
  return (
   <Banner texte="Chez vous, partout et ailleurs" image={imgBanner}/>
  );
};

export default Home;
