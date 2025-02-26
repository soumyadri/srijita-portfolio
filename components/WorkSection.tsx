import { useLightMode } from "@/Utils/ThemeContextProvider";
import ColorBar from "./ColorBar";

export default function WorkSection({ aboutMe, whatIDo }: any) {
  const { isDarkMode } = useLightMode();

  return (
    <div className={`w-full p-8 ${isDarkMode ? 'bg-[#000]' : 'bg-[#ffffff]'} rounded-lg shadow-md mt-2`}>
      <div className="flex">
        <h2 className="font-poppins text-2xl font-semibold mb-6">ABOUT ME</h2>
        <ColorBar />
      </div>
      <p className={`${isDarkMode ? 'text-[#e0dddd]' : 'text-[#2a2929]'} mb-6 text-justify h-24 line-clamp-4`}>{aboutMe}</p>

      <h2 className="font-poppins text-2xl font-semibold my-4">What I do!</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {whatIDo.map((item: any, index: number) => (
          <div key={item.id} className={`${isDarkMode ? index % 3 === 0 ? 'bg-[#0e2f39]' : 'bg-[#3b4314]' : index % 3 === 0 ? 'bg-[#d8f8ff]' : 'bg-[#fbffe7]'} p-4 rounded shadow-md my-4 mx-2`}>
            <h3 className="font-poppins text-xl font-semibold mb-2">{item.title}</h3>
            <div className={`${isDarkMode ? 'text-[#e0dddd]' : 'text-[#2a2929]'} overflow-ellipsis overflow-hidden h-24 line-clamp-4 text-justify`}>{item.description} {item.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}