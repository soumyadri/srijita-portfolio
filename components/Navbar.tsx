import { useLightMode } from "@/Utils/ThemeContextProvider";

export const Navbar = ({ sections, activeTab, setActiveTab }: any) => {
    const { isDarkMode } = useLightMode();
    return (
            <div className={`flex items-center justify-center ${isDarkMode ? 'bg-[#000]' : 'bg-[#ffffff]'} w-min text-right ml-auto border-2 ${isDarkMode ? 'border-[#323131]' : 'border-[#e8e6e6]'} rounded-lg p-4 mt-16`}>
                {sections.map((section: any) => (
                    <div key={section.key} onClick={() => setActiveTab(section.key)} className={`flex flex-col gap-2 items-center p-2 w-16 cursor-pointer ${activeTab === section.key ? 'bg-gradient-to-r from-[#ff9c1acc] to-[#FF9C1A]' : 'bg-[#F2F5F9]'} text-slate-800  rounded-lg mx-4`}>
                        <img src={section.icon} alt={section.name} className="w-4 h-4" />
                        <span className="text-[10px] font-bold text-center ml-0">{section.name}</span>
                    </div>
                ))}
            </div>
    )
}