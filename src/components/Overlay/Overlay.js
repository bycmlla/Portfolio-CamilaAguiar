import React, { useState } from "react";
import "./Overlay.css";
import axios from "axios";


const Overlay = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:4000/enviarEmail", {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                description: formData.description,
            })
            .then((response) => {
                alert(response.data);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    description: "",
                });
            })
            .catch((error) => {
                console.error("Erro:", error);
                alert("Erro ao enviar o email.");
            });
    };

    return (
        <div className="overlay">
            <div className="overlay-content">
                <button onClick={onClose} className="close-button">
                    Fechar
                </button>
                <h2>Ou me envie um e-mail por aqui mesmo!</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            className="input-subject"
                            name="name"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            className="input-subject"
                            name="email"
                            placeholder="Seu e-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            className="input-subject"
                            name="subject"
                            placeholder="Assunto"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <textarea
                        placeholder="Descrição"
                        name="description"
                        rows="10"
                        className="textarea"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <div>
                        <button type="submit" className="button-send">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Overlay;