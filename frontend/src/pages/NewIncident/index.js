import React, { useState } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

export default function NewIncident() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const ongid = localStorage.getItem("ongid");
    const history = useHistory();

    async function handleNewIncidente(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        try {
            await api.post("incidents", data, {
                headers: {
                    Authorization: ongid,
                },
            });

            history.push("/profile");
        } catch (err) {
            alert("Erro aocadastrar caso, tente novamente.");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar o herói
                        para fazer isso.
                    </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para cadastros
                    </Link>
                </section>
                <form onSubmit={handleNewIncidente}>
                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em Reais"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">
                        Cdastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
