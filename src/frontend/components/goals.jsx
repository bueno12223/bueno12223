import React from "react";
import goalCN from "../assets/images/goalNC.jpg";
import goalOF from "../assets/images/goalOF.jpg";
import goalTDU from "../assets/images/goalTDU.jpg";
import "./styles/goals.scss";
function goals(props) {
    const {title} = props
    const {data} = props
    const img = [goalOF, goalCN, goalTDU]
    return (
        <section className="goals" id='1'>
            <h2>{title}</h2>
            {data.map((e, idx) => (
                <article key={e.title} className="goals-section">
                    <img src={img[idx]} alt="olimpiada de informatica" />
                    <div className="goals-section__desc">
                        <h3>{e.title}</h3>
                        <p>{e.text}</p>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default goals;
