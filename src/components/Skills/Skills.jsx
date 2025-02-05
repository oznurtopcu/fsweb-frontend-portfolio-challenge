export default function Skills(props) {
    const {skillsData} = props;
    //console.log("skillsData::::::::", skillsData);
    //console.log(skillsData.skills);
    return(
        <div className="skills-section flex flex-col justify-center items-center max-w-[1440px] h-auto dark:bg-[#252128]">
            <div className="flex w-[955px] items-start justify-between gap-12 p-4 m-4">
                <div>
                    <p className="font-bold text-3xl text-[#4832D3] w-48 dark:text-[#CBF281]">{skillsData?.title}</p>
                </div>
                <div className="skills-list flex flex-wrap ">
                    {skillsData?.skills.map((item,index) => {
                        return (
                            <div key={index} className="flex items-center gap-4 mb-12 w-1/2">
                                <img className="w-24" src={"../../../images/skills/"+(item.icon)} alt={item.name} />
                                <p className="text-bold text-xl text-[#777777] dark:text-white">{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
}