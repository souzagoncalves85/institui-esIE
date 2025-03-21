import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { MDBInput, MDBTooltip } from "mdb-react-ui-kit";
import Cadastro from "../components/Cadastro";
import PropriedadesTable from "../components/PropriedadesTable";
import useInstituicao from "../context/useInstituicao";

const Instituicoes = () => {
    const { handleShow } = useInstituicao(); // do contexto
    const [ies, setIes] = useState([]);
    const [nomeBusca, setNomeBusca] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/instituicoes");
            const json = await response.json();
            setIes(json);
        } catch (error) {
            console.error("Erro ao buscar instituições:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRemover = async (id) => {
        try {
            await fetch(`http://localhost:3000/instituicoes/${id}`, {
                method: "DELETE",
            });
            fetchData(); // atualizar lista
        } catch (error) {
            console.error("Erro ao remover:", error);
        }
    };

    const listaFiltrada = ies.filter((ie) =>
        ie.escola?.toLowerCase().includes(nomeBusca.toLowerCase())
    );

    return (
        <>
            <h2 className="text-center my-3">Instituições de Ensino</h2>

            <Row className="mb-3">
                <Col>
                    <MDBInput
                        value={nomeBusca}
                        onChange={(e) => setNomeBusca(e.target.value)}
                        label="Buscar por Nome"
                        type="text"
                        size="sm"
                    />
                </Col>

                <Col className="d-flex justify-content-end align-items-end">
                    <MDBTooltip tag="span" wrapperProps={{ className: "d-inline-block" }} title="Cadastrar Nova IE">
                        <Button variant="success" onClick={handleShow}>
                            Nova IE
                        </Button>
                    </MDBTooltip>
                </Col>
            </Row>

            <PropriedadesTable instituicoes={listaFiltrada} onRemover={handleRemover} />

            {/* Formulário de cadastro (usando Contexto) */}
            <Cadastro fetchData={fetchData} />
        </>
    );
};

export default Instituicoes;
