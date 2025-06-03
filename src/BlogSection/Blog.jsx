import Carrousel from "../Components/Carrousell";
import "./Blog.css"
import Esteira from "../Components/Esteira" 
import FadeWrapper from '../Components/FadeWrapper';

function Blog() {
    return (
        <>
            <Esteira />
            
            <div className="blogWrapper">
                <FadeWrapper type="scroll" delay={100} direction="up">
                <h1>Aqui sua intensidade é bem-vinda!</h1>
                </FadeWrapper>
                <p className="blogP">lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt<br></br>ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
            </div>
            <Carrousel />
        </>
    )
}

export default Blog;