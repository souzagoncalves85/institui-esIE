import { Carousel } from "react-bootstrap";
import escola1 from "../assets/inst1.jpeg";
import escola2 from "../assets/inst2.jpeg";
import escola3 from "../assets/inst3.jpeg";

const Home = () => {
    return (
        <>
            <h2 className="text-center my-3">Bem-vindo ao Sistema Educacional</h2>
            <Carousel>
                {[escola1, escola2, escola3].map((img, idx) => (
                    <Carousel.Item key={idx}>
                        <img className="d-block w-100" src={img} alt={`Slide ${idx}`} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};

export default Home;
