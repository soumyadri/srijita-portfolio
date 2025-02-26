import { useLightMode } from "@/Utils/ThemeContextProvider";
import ColorBar from "./ColorBar";

export default function ResumeSection({ resumeSection, skills }: any) {
  const { isDarkMode } = useLightMode();

  return (
    <div className={`w-full p-8 ${isDarkMode ? 'bg-[#000]' : 'bg-[#ffffff]'} rounded-lg shadow-md mt-2 lg:h-[700px] h-full`}>
      <div className="flex">
        <h2 className="font-poppins text-2xl font-semibold mb-6">RESUME</h2>
        <ColorBar />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 max-h-fit lg:max-h-[420px] overflow-y-auto">
        {Object.keys(resumeSection).map((key: any, index: number) => (
          <div key={index} className="mb-4 flex-1">
            <h3 className="font-poppins text-xl font-semibold mb-2 capitalize">{key}</h3>
            {resumeSection[key].map((item: any, index: number) => (
              <div key={item.id} className={`${isDarkMode ? index % 3 === 0 ? 'bg-[#0e2f39]' : 'bg-[#3b4314]' : index % 3 === 0 ? 'bg-[#d8f8ff]' : 'bg-[#fbffe7]'} p-4 rounded shadow-md my-4 mr-2`}>
                <h3 className="font-poppins text-xl font-semibold mb-1">{item.title}</h3>
                <div className={`${isDarkMode ? 'text-[#e0dddd]' : 'text-[#2a2929]'} overflow-ellipsis overflow-hidden line-clamp-4 text-justify my-0`}>{item.location}</div>
                <div className={`${isDarkMode ? 'text-[#c6bdbd]' : 'text-[#4f4a4a]'} text-[12px] overflow-ellipsis overflow-hidden line-clamp-4 text-justify my-1`}>{item.duration}</div>
                <div className={`${isDarkMode ? 'text-[#ccc8c8]' : 'text-[#444242]'} text-[14px] overflow-ellipsis overflow-hidden line-clamp-4 text-justify`}>{item.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex">
        <h2 className="font-poppins text-2xl font-semibold mb-6">SKILLS</h2>
        <ColorBar />
      </div>

      <div className="flex gap-4 max-h-[120px] overflow-y-auto">
        {skills.map((key: any, index: number) => (
          <div className={`${isDarkMode ? index % 3 === 0 ? 'bg-[#0e2f39]' : 'bg-[#3b4314]' : index % 3 === 0 ? 'bg-[#d8f8ff]' : 'bg-[#fbffe7]'} py-2 px-4 rounded shadow-md my-4 mr-2 w-fit`} key={index}>
            <h3 className="font-poppins font-semibold mb-1 w-fit whitespace-pre h-5 text-sm">{key}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}