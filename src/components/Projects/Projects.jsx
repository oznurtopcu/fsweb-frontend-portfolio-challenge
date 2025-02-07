export default function Projects(props) {
    const {projectsData} = props;
    console.log("projectsData:::::::::::::::::",projectsData);
    return(
        <div className="projects-section flex flex-col justify-center items-center bg-[#CBF281] max-w-[1440px] h-auto dark:bg-[#1A210B]">
            <div className="p-4 m-4 w-[955px] flex flex-col gap-8">
                {projectsData?.map((item, index) => {
                    return(
                        <div key={index} className="project-card flex flex-row items-center bg-white gap-12 dark:bg-[#2B2727] rounded-r-xl">
                            <img className="w-76 h-76 object-cover rounded-l-xl" src="../../../images/projects/pizza-project.png" alt="pizza-project" />
                            <div className="flex flex-col gap-6 ">
                                <p className="text-[#4731D3] text-2xl font-bold dark:text-[#C1BAED]">{item?.title}</p>
                                <p className="dark:text-white">{item?.description}</p>
                                <div className="flex gap-4">
                                    {item.technologies.map((tech, index) => {
                                        return <a key={index} className="py-1 px-2 text-white bg-[#4731D3] rounded-3xl dark:bg-[#8173DA] text-sm" href="">{tech}</a>
                                    })}    
                                </div>
                                <div className="flex gap-4">
                                {item.links.map((link, index) => {
                                        return <a key={index} className="underline dark:text-[#CBF281]" href={link.link}>{link.name}</a>
                                    })}  
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}