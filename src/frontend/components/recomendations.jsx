import React from "react"
import "./styles/recomendations.scss";
function recomendations({ data, title }) {
    const names = ['Juan Diego Vásques', 'Gerardo Huertas', 'Jose Luis        Paniza']
    return (
        <section className="recomendations" di='3'>
            <h2 className="recomendations-title">{`<${title}>`}</h2>
            <div className="recomendations-card__container">
                {data.map((e, idx) => (
                    <article className="recomendations-card">
                        <h4>
                            <b>{names[idx]}</b>
                            <br />
                            {e.chargue}
                        </h4>
                        <p>“{e.text}”</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default recomendations;
