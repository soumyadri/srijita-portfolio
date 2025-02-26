'use client';
import AboutSection from '@/components/AboutSection';
import Header from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import ProfileData from '@/components/ProfileData';
import { useEffect, useState } from 'react';
import '../app/globals.css';
import { LightModeContext } from '@/Utils/ThemeContextProvider';
import { ColorTheme } from '@/Utils/ColorTheme';
import ResumeSection from './ResumeSection';

export default function Home({ data }: any) {
    const [ isDarkMode, setDarkMode ] = useState(false);
    const [ colors, setColors ] = useState(ColorTheme.light);
    const [ activeTab, setActiveTab ] = useState('home');

    useEffect(() => {
        setColors(isDarkMode ? ColorTheme.dark : ColorTheme.light);
    }, [isDarkMode]);

    const { personalInfo, resumeSection, aboutMe, whatIDo, sections, skills } = data;

    return (
        <LightModeContext.Provider value={{ isDarkMode, setDarkMode, colors }}>
            <div className={`w-full bg-[${colors.background}]`}>
                <div className={`font-raleway antialiased text-[${colors.text}] bg-[${colors.background}] w-[95%] lg:w-[85%] mx-auto pb-4`}>
                    <Header personalInfo={personalInfo} />
                    <div className="min-h-screen flex flex-col lg:flex-row w-full justify-between">
                        <ProfileData personalInfo={personalInfo} />
                        <div className='flex flex-col lg:w-[68%] w-full'>
                            <Navbar sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
                            {activeTab === 'home' && <AboutSection aboutMe={aboutMe} whatIDo={whatIDo} />}
                            {activeTab === 'resume' && <ResumeSection resumeSection={resumeSection} whatIDo={whatIDo} skills={skills}  />}
                        </div>
                    </div>
                </div>
            </div>
        </LightModeContext.Provider>
    )
}