import { Table, Button } from "react-bootstrap";

const PropriedadesTable = ({ instituicoes = [], onRemover }) => {
    if (!Array.isArray(instituicoes) || instituicoes.length === 0) {
        return <p className="text-center text-muted">Nenhuma instituição encontrada.</p>;
    }

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Instituição</th>
                    <th>Região</th>
                    <th>UF</th>
                    <th>Município</th>
                    <th>Mesorregião</th>
                    <th>Microrregião</th>
                    <th>Matrículas</th>
                </tr>
            </thead>
            <tbody>
                {instituicoes.map((ie, index) => (
                    <tr key={index}>
                        <td>{ie.escola}</td>
                        <td>{ie.regiao}</td>
                        <td>{ie.uf}</td>
                        <td>{ie.municipio}</td>
                        <td>{ie.mesorregiao}</td>
                        <td>{ie.microrregiao}</td>
                        <td>{ie.quantidade}</td>
                        <td>
                            <Button
                                variant="warning"
                                size="sm"
                                className="me-2"
                                onClick={() => alert("Função de edição ainda não implementada")}
                            >
                                Editar
                            </Button>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => onRemover(ie.id)}
                            >
                                Excluir
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table >
    );
};

export default PropriedadesTable;
