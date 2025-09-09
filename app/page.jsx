import {
    Footer,
    Blog,
    Possibility,
    Feature,
    WhatGPT5,
    Header,
} from "../containers";
import { Cta, Brand, Navbar } from "../components";
import "./page.css";

export default function Home() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT5 />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    );
}
