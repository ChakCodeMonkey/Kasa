import React from "react";

export default function Note({ rating }) {
    // On crée un tableau avec un nombre d'éléments égal au rating
    const stars = Array.from({ length: 5 }, (v, i) => (
        <span key={i} className={i < rating ? "filled-star" : "empty-star"}>
            ★
        </span>
    ));

    return (
        <div className="rating">
            <div className="stars">{stars}</div>
        </div>
    );
}
