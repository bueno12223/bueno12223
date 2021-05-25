import React from "react";
import "./styles/recomendations.scss";
function recomendations({ data }) {
    console.log(data);
    return (
        <section className="recomendations">
            <h2 className="recomendations-title">References</h2>
            <div className="recomendations-card_container">
                {data.map((e) => (
                    <article className="recomendations-card">
                        <h4>
                            <b>Juan Diego Vásques</b>
                            <br />
                            {e.chargue}
                        </h4>
                        <p>{e.text} </p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default recomendations;
