import Carrousel from "../Components/Carrousell";
import "./Blog.css"

function Blog() {
    return (
        <>
            <div className="blogWrapper">
                <h1>Aqui sua intensidade é bem-vinda!</h1>
                <p>lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt<br></br>ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
            </div>
            <Carrousel />
        </>
    )
}

export default Blog;