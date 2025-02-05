export default function Profile(props) {
    const {profileData} = props;
    console.log(profileData);
    return(
        <div className="profile-section flex flex-col justify-center items-center bg-[#4731D3] max-w-[1440px] h-auto dark:bg-[#171043]">
            <div className="flex flex-col w-[955px] items-start justify-between gap-12 p-4 m-4">
                <p>Profile Section</p>
                <div className="profile-detail flex w-full">
                    <div className="basic-info">
                        <h3>Basic Information</h3>
                        <div className="info-content">
                            <p>Doğum Tarihi</p>
                            <p>01.11.1999</p>
                        </div>
                    </div>
                    <img src="" alt="" />
                    <div className="about-me">

                    </div>
                </div>
            </div>
        </div>

    );
}