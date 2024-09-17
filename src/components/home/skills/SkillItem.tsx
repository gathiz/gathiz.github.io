interface Props {
    icon: string;
    title: string;
}

const SkillItem: React.FC<Props> = ({icon,title}) => {
    return(
        <div className="flex flex-col items-center justify-between">
            <img className="w-[100px] m-4 p-4" src={icon}/>
            <p className="mt-2">{title}</p>
        </div>
    );
}

export default SkillItem; 