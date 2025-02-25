import { useLightMode } from "@/Utils/ThemeContextProvider";
import Link from "next/link";

export default function Header({personalInfo}: any) {
    const { isDarkMode, setDarkMode } = useLightMode(); 
    const [ firstName, lastName ] = personalInfo.name.split(" ");

    return (
        <header className={`${!isDarkMode ? 'bg-[#F2F5F9]' : 'bg-[#1A202C]'} w-full p-4 flex items-center justify-between rounded-lg`}>
            <div className="text-2xl font-semibold">
                <Link href="/">
                    <span className={`${isDarkMode ? 'text-[#F7FAFC]' : 'text-[#444444]'}`}>{firstName}</span> <span className={'text-[#FF9C1A]'}>{lastName}</span>
                </Link>
            </div>
            <button onClick={() => setDarkMode(!isDarkMode)}>{isDarkMode ? <img src="/images/moon-light.png" className="h-8 w-8" /> : <img src="/images/moon-dark.png" className="h-8 w-8"/>}</button>
        </header>
    )
};