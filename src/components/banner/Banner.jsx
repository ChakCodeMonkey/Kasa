

export default function Banner({ image, texte }) {
    return (
      <div className="banner">
        <img className="banner__img" src={image} alt="Bannière" />
        <div className="banner__sombre"></div>
        <span className="banner__txt">{texte}</span>
      </div>
    );
  }
