import React, { useState } from "react";
import "./Overlay.css";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import HeaderPurple01 from "../../assets/images/headerPurpleBlackMode.png"


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
                <div className="image-header">
                    <img src={HeaderPurple01} alt="Header Purple 01" className="header-image" />
                    <div className="image-text">Talk with me</div>
                </div>

                <button onClick={onClose} className="close-button-overlay">
                    <IoMdClose />
                </button>

                <h2>Envie um e-mail</h2>
                <div className="form-overlay">
                    <form onSubmit={handleSubmit}>
                        <div className="form-overlay-content">
                            <div className="input-container">
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
                        </div>
                        <div>
                            <button type="submit" className="button-send">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Overlay;