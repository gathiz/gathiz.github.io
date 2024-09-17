import Navlist from "./nav/Navlist";
import Navname from "./nav/Navname";

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row w-full lg:w-1/2 items-center justify-center text-beige my-4 h-24">
            <Navname/>
            <Navlist/>
        </header>
    );
}

export default Header;