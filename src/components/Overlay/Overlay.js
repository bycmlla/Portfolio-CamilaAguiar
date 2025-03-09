import React, { useState } from "react";
import "./Overlay.css";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import HeaderPurple01 from "../../assets/images/headerPurpleBlackMode.png"
import HeaderPurple02 from "../../assets/images/headerPurpleLightMode.png"
import HeaderPink01 from "../../assets/images/headerPinkBlackMode.png"
import HeaderPink02 from "../../assets/images/headerPinkLightMode.png"
import HeaderBlue01 from "../../assets/images/headerBlueBlackMode.png"
import HeaderBlue02 from "../../assets/images/headerBlueLightMode.png"
import ButterflyPurple from "../../assets/images/2butterfly.png"
import ButterflyPink from "../../assets/images/2pinkbutterfly.png"
import ButterflyBlue from "../../assets/images/2bluebutterfly.png"

const backgroundMapOverlay = {
    "#9747FF": ButterflyPurple,
    "#F10091": ButterflyPink,
    "#2291A4": ButterflyBlue
}

const headerMap = {
    "#9747FF": {
        light: HeaderPurple01,
        dark: HeaderPurple02
    },
    "#F10091": {
        light: HeaderPink01,
        dark: HeaderPink02
    },
    "#2291A4": {
        light: HeaderBlue01,
        dark: HeaderBlue02
    }
}

const Overlay = ({ onClose, selectedColor, isDarkMode }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        description: "",
    });

    const getButterflyImage = () => {
        const colorKey = selectedColor;
        return backgroundMapOverlay[colorKey] || ButterflyPurple;
    }
    const getHeaderImage = () => {
        const colorKey = selectedColor;
        const mode = isDarkMode ? "dark" : "light";
        return headerMap[colorKey][mode] || HeaderPurple02
    }

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
                    <img src={getHeaderImage()} alt="Header Purple 01" className="header-image" />
                    <div className="image-text">Talk with me!</div>
                </div>

                <button onClick={onClose} className="close-button-overlay">
                    <IoMdClose />
                </button>

                <h2 className="send-me-email">Envie um e-mail</h2>
                <div className="form-overlay">
                    <form onSubmit={handleSubmit}>
                        <div className="form-overlay-content">
                            <img src={getButterflyImage()} alt="Butterfly" className="background-image-overlay" />
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