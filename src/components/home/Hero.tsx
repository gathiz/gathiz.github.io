import mobileProfile from "/image-profile-mobile.webp";
import tabletProfile from "/image-profile-tablet.webp";
import desktopProfile from "/image-profile-desktop.webp";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row w-full lg:w-1/2 items-center">
            <div className="flex items-center justify-center h-full w-1/2">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={desktopProfile} />
                    <source media="(min-width: 768)" srcSet={tabletProfile} />
                    <img src={mobileProfile} alt="Responsive Image"></img>
                </picture>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl tracking lg:text-4xl">
                    Nice to meet you! My name is <span className="border-b-4 border-light-green">Gathiz.</span>
                </h1>
                <p className="mt-8 md:mx-4">I am a skilled Fullstack Engineer with experience in modern frontend and
                    backend technologies.
                    I have a proven track record of building efficient, scalable applications.
                    I am proficient in React.js, Next.js, Angular, and Tailwind CSS on the frontend,
                    and leverage Node.js for backend development.</p>
                <p className="border-b-4 border-light-green text-xl uppercase py-1 mt-4">Contact Me</p>
            </div>
        </div>
    );
}

export default Hero;