interface PortfolioItemProps {
    title: string;
    image: string;
    link: string;
    code: string;
    tools: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, image, link, code, tools }) => {
    return (
        <div className="flex flex-col w-full p-2 m-2">
            <h1 className="text-xl font-bold uppercase mt-2">{title}</h1>
            <div className="flex w-full items-center justify-between mt-2">
                {tools.map((tool) => (
                    <p className="text-sm uppercase">{tool}</p>
                ))}
            </div>
            <img className="my-4" src={image} />
            <div className="flex items-center justify-between my-4">
                <a href={link}><p className="text-sm uppercase">View Project</p></a>
                <a href={code}><p className="text-sm uppercase">View Code</p></a>
            </div>
        </div>
    )
};

export default PortfolioItem;