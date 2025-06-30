import "./Blog.css"
import FadeWrapper from '../Components/FadeWrapper';

function Blog() {
    return (
        <>
            <div className="blogWrapper">
                <div className="titleWrapper">
                    <FadeWrapper type="scroll" delay={100} direction="up">
                        <h1>Aqui sua intensidade é bem-vinda!</h1>
                    </FadeWrapper>
                    <p className="blogP">lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt<br></br>ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                </div>

                <div className="imagesWrapper">
                    <div>
                        <img src='assets/post.jpg' />
                        <p>Sobre o método</p>
                    </div>

                    <div>
                        <img src='assets/post.jpg' />
                        <p>Sobre o marca</p>
                    </div>

                    <div>
                        <img src='assets/post.jpg' />
                        <p>Alguma outra coisa</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog;