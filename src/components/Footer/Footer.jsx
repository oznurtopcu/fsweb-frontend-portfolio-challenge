export default function Footer(props) {
    const {footerData} = props;
    console.log("footerData::::::::::::::::::",footerData);
    return(
        <div className="profile-section flex flex-col justify-center items-center max-w-[1440px] h-auto bg-[#F9F9F9] dark:bg-[#252128]">
            <div className="flex flex-col w-[500px] items-center text-center justify-between gap-8 p-4 m-6 ">
                <p className="text-[#4731D3] font-bold text-3xl dark:text-[#8F88FF]">{footerData?.sendMe}</p>
                <p className="text-m dark:text-white">{footerData?.text}</p>
                <p className="text-[#4731D3] underline text-s dark:text-[#8F88FF]">{footerData?.mail}</p>
            </div>
        </div>
    );
}