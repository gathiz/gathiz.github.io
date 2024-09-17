import SkillItem from "./SkillItem";

const Skills = () => {
    const items = [
        { title: "Angular", icon: "angular.svg" },
        { title: "React.js", icon: "react.svg" },
        { title: "Next.js", icon: "next.svg" },
        { title: "Tailwind", icon: "tailwind.svg" },
        { title: "JavaScript", icon: "javascript.svg" },
        { title: "TypeScript", icon: "typescript.svg" },
        { title: "Node.js", icon: "nodejs.svg" },
        { title: "NestJS", icon: "nestjs.svg" }
    ];


    return (
        <div className="grid grid-cols-2 md:grid-cols-4 md:border-2 md:border-light-green rounded-lg items-center justify-between w-full m-4 py-4 md:w-1/2">
            {items.map((item) => (
                <SkillItem icon={item.icon} title={item.title} />
            ))}
        </div>
    );
}

export default Skills;