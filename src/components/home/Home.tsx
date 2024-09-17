import Header from "../header/Header";
import Portfolio from "../portfolio/Portfolio";
import Hero from "./Hero";
import TechStack from "./skills/Skills";

const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center text-beige rounded-lg m-4 p-4 min-h-screen">
            <Header/>
            <Hero/>
            <TechStack/>
            <Portfolio/>
            <Header/>
        </main>
    );
}

export default Home;