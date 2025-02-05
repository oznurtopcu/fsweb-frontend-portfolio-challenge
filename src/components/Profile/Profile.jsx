export default function Profile(props) {
    const {profileData} = props;
    //console.log(profileData);
    return(
        <div className="profile-section flex flex-col justify-center items-center bg-[#4731D3] max-w-[1440px] h-auto dark:bg-[#171043]">
            <div className="flex flex-col w-[955px] items-start justify-between gap-12 p-4 m-4">
                <p className="font-bold text-3xl text-[#CBF281] w-56">{profileData?.title}</p>
                <div className="profile-detail flex w-full justify-between">
                    <div className="basic-info text-white flex flex-col gap-6">
                        <p className="text-2xl font-bold">{profileData?.information.title}</p >
                        {profileData?.information.info.map((item, index) => {
                            return(
                                <div key={index} className="info-content flex">
                                    <p className="text-[#CBF281] text-left w-20">{item.info}</p>
                                    <p>{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                    {/* <img className="w-76 h-76 m-8 mt-0 rounded-4xl" src={'../../../images/about-me.jpg'} alt="" /> */}
                    <div className="about-me text-white flex flex-col gap-6 w-1/2">
                        <p className="text-2xl font-bold">{profileData?.about.title}</p>
                        <p>{profileData?.about.paragraph}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}