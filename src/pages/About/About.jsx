import Banner from "../../components/banner/Banner";
import imgBanner from "../../assets/images/banner/abourBanner.png";
import Collapse from "../../components/collapse/Collapse";
import CollapseData from "../../data/about.json";



export default function About() {
  return (
    <main>
      <Banner image={imgBanner}/>
      <Collapse data={CollapseData} />
    </main>
  );
};