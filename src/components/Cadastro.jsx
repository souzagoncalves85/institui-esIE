import { Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import useInstituicao from "../context/useInstituicao";
import { toast, ToastContainer } from "react-toastify";
import PropTypes from "prop-types";

const Cadastro = ({ fetchData }) => {
    const {
        show,
        handleShow,
        valoresIniciais,
        esquemaValidacao,
        addInstituicao,
    } = useInstituicao();

    const handleSubmit = async (values, actions) => {
        try {
            await addInstituicao(values); // função do contexto
            toast.success("Instituição cadastrada com sucesso!");
            actions.resetForm(); // limpa os campos do formulário
            fetchData(); // atualiza a listagem
            handleShow(); // fecha o modal
        } catch (error) {
            toast.error("Erro ao cadastrar instituição!");
            console.error(error);
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Nova Instituição</Modal.Title>
                </Modal.Header>
                <Formik
                    initialValues={valoresIniciais}
                    validationSchema={esquemaValidacao}
                    onSubmit={handleSubmit}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        touched,
                        isSubmitting,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Modal.Body>
                                {Object.entries(valoresIniciais).map(([key]) => (
                                    <Form.Group key={key} className="mb-2">
                                        <Form.Label>{key.replace(/_/g, " ")}</Form.Label>
                                        <Form.Control
                                            name={key}
                                            value={values[key]}
                                            onChange={handleChange}
                                            className={
                                                errors[key] && touched[key] ? "is-invalid" : ""
                                            }
                                        />
                                        {errors[key] && touched[key] && (
                                            <div className="text-danger">{errors[key]}</div>
                                        )}
                                    </Form.Group>
                                ))}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleShow}>
                                    Fechar
                                </Button>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Enviando..." : "Cadastrar"}
                                </Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal>
            <ToastContainer />
        </>
    );
};

// Garantir que fetchData seja obrigatório
Cadastro.propTypes = {
    fetchData: PropTypes.func.isRequired,
};

export default Cadastro;
