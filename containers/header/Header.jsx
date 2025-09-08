import "./header.css";

const Header = () => {
    return (
        <div className="gpt5__header section__padding" id="home">
            <div className="gpt5__header-content">
                <h1 className="gradient__text">
                    Let’s Build Something amazing with GPT-5 OpenAI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <div className="gpt5__header-content__input">
                    <input
                        type="email"
                        placeholder="ginorubengiorgi@gmail.com"
                    />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt5__header-content__people">
                    <img src="people.png" alt="people" />
                    <p>
                        1.6k+ 1,600 people requested access a visit in last 24
                        hours
                    </p>
                </div>
            </div>
            <div className="gpt5__header-image">
                <img src="ai.png" alt="" />
            </div>
        </div>
    );
};

export default Header;
