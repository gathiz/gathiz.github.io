import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    const projects = [
        {
            title: "Audiophile", 
            image: "/audiophile.png", 
            link: "gathiz.github.io/audiophile",
            code: "github.com/gathiz/audiophile", 
            tools: ["TypeScript", "React", "Tailwind", "Redux Toolkit"]
        },
        {
            title: "Kanban Board", 
            image: "/kanban-board.png", 
            link: "gathiz.github.io/kanban-board",
            code: "github.com/gathiz/kanban-board", 
            tools: ["TypeScript", "React", "Tailwind", "Redux Toolkit"]
        },
        {
            title: "Personal Finance App", 
            image: "/dashboard.png", 
            link: "gathiz.github.io/personal-finance-app",
            code: "github.com/gathiz/personal-finance-app", 
            tools: ["TypeScript", "React", "Tailwind", "Zustand"]
        }
    ];

    return(
        <div className="grid grid-col-2 justify-center md:grid-col-1 mt-4">
            <hr/>
            <h1 className="font-bold m-4">Projects</h1>
            {projects.map((project) => (
                <PortfolioItem title={project.title} image={project.image} link={project.link} code={project.code} tools={project.tools}/>
            ))}
        </div>
    );
}

export default Portfolio;