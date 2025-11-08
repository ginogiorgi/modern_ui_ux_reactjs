import "./blog.css";
import { Article } from "../../components";

const Blog = () => {
    return (
        <div className="gpt5__blog section__padding" id="blog">
            <div className="gpt5__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt5__blog-container">
                <div className="gpt5__blog-container_groupA">
                    <Article
                        imgUrl="blog01.png"
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
                <div className="gpt5__blog-container_groupB">
                    <Article
                        imgUrl="blog02.png"
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        imgUrl="blog03.png"
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        imgUrl="blog04.png"
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        imgUrl="blog05.png"
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
