const Navlist = () => {
    return (
        <div className="flex w-1/2 md:w-1/4 items-center justify-between h-12 mx-2 px-2">
            <div className="flex items-center">
                <img src="/icon-github.svg"/>
            </div>
            <div className="flex items-center">
                <img src="/icon-linkedin.svg" />
            </div>
            <div className="flex items-center">
                <img src="/icon-twitter.svg" />
            </div>
        </div>
    );
}

export default Navlist;