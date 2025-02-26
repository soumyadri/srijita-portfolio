import Image from "next/image";
import '../app/globals.css';
import { useLightMode } from "@/Utils/ThemeContextProvider";

export default function ProfileData(props: any) {
    const { isDarkMode, colors } = useLightMode();
    const { personalInfo } = props;
    return (
        <div className="rounded lg:w-[30%] w-full left-0">
            <div className={`w-full p-8 pb-0 items-center ${isDarkMode ? 'bg-[#000]' : 'bg-[#ffffff]'} rounded-lg shadow-md mt-40 mr-5 text-center h-[700px]`}>
                <div className="relative bottom-[120px] flex flex-col items-center text-center">
                    <Image
                        src={personalInfo.profilePicture}
                        alt={personalInfo.name}
                        width={200}
                        height={200}
                        className="rounded-lg mb-4 w-100 border-cyan-400 border-2"
                    />
                    <h1 className="font-poppins text-3xl font-semibold text-center">{personalInfo.name}</h1>
                    <p className={`text-md text-center text-[${colors.text}]`}>{personalInfo.title}</p>
                    <div className="flex space-x-4 mt-4">
                        {personalInfo?.socialLinks.map((el: any) => {
                            return (
                                <div className={`bg-[${colors.background}] p-4 w-16 rounded-md`} key={el.name}>
                                    <a href={el.url} target="_blank" className={`text-[${colors.primary}]`}>
                                        <img src={el.icon} alt={el.name} className="h-8 w-8" />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <div className={`mt-8 bg-[${colors.background}] rounded-md shadow-md w-full`}>
                        {personalInfo?.additionalInfo.map((el: any) => {
                            return (
                                <div className="p-2 m-2 flex w-[80%] justify-left" key={el.name}>
                                    <img src={el.icon} alt="" className="h-6 w-6 m-2" />
                                    <div className="m-2 text-left">
                                    <p className="text-sm text-left font-semibold">{el.name}</p>
                                    <p className="text-sm text-left">{el.value}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <a href={personalInfo.resumeLink} target="_blank" className={`bg-gradient-to-r from-[${colors.primary}] to-[#FF3D00] text-white py-2 px-4 m-4 rounded mt-4 hover:bg-[#d67f0dd8] flex justify-center`}>
                            <img src="/images/download.png" className="w-6 h-6 mr-2" /> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}