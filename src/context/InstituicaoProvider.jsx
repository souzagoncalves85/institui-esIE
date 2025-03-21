// src/context/InstituicaoProvider.jsx
import { useState, useEffect } from "react";
import { InstituicaoContext } from "./InstituicaoContext";
import * as Yup from "yup";

export const InstituicaoProvider = ({ children }) => {
    const [instituicoes, setInstituicoes] = useState([]);
    const [show, setShow] = useState(false);

    const valoresIniciais = {
        escola: "",
        regiao: "",
        uf: "",
        municipio: "",
        mesorregiao: "",
        microrregiao: "",
        quantidade: "",
    };

    const esquemaValidacao = Yup.object().shape({
        escola: Yup.string().required("Obrigatório"),
        regiao: Yup.string().required("Obrigatório"),
        uf: Yup.string().required("Obrigatório"),
        municipio: Yup.string().required("Obrigatório"),
        mesorregiao: Yup.string().required("Obrigatório"),
        microrregiao: Yup.string().required("Obrigatório"),
        quantidade: Yup.number().required("Obrigatório").typeError("Deve ser número"),
    });

    const handleShow = () => setShow((prev) => !prev);

    const fetchInstituicoes = async () => {
        try {
            const res = await fetch("http://localhost:3000/instituicoes");
            const data = await res.json();
            setInstituicoes(data);
        } catch (error) {
            console.error("Erro ao buscar instituições:", error);
        }
    };

    const addInstituicao = async (novaIE) => {
        try {
            const res = await fetch("http://localhost:3000/instituicoes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(novaIE),
            });
            if (res.ok) {
                fetchInstituicoes();
            }
        } catch (error) {
            console.error("Erro ao adicionar instituição:", error);
        }
    };

    useEffect(() => {
        fetchInstituicoes();
    }, []);

    return (
        <InstituicaoContext.Provider
            value={{
                instituicoes,
                setInstituicoes,
                show,
                handleShow,
                valoresIniciais,
                esquemaValidacao,
                addInstituicao,
                fetchInstituicoes,
            }}
        >
            {children}
        </InstituicaoContext.Provider>
    );
};
