import {
    Footer,
    Blog,
    Possibility,
    Features,
    WhatGPT5,
    Header,
} from "../containers";
import { Cta, Brand, Navbar } from "../components";

export default function Home() {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT5 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    );
}
