import HomeComponent from '@/components/Home';
import '../app/globals.css';

export const metadata = {
  title: "Srijita Chakraborty Portfolio",
  description: "Srijita Chakraborty works as a IT professionalist with 3+ years of experience analyzing business processes. I am currently working as a System Engineer at Cognizant.",
  keywords: ["Srijita Chakraborty", "System Engineer", "Sr. Systems Engineer", "Srijita", "Works at Cognizant"],
};


// Function to fetch data (can be replaced with API call later)
async function getData() {
  return {
    personalInfo: {
      name: "Srijita Chakraborty",
      title: "Senior System Engineer",
      profilePicture: "/images/dummy-dp1.jpg",
      phone: "+917980958697",
      email: "chakrabortysrijita72@gmail.com",
      location: "Kolkata, India",
      resumeLink: "resume.pdf",
      socialLinks: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/srijita.chakraborty.180/",
          icon: "/images/facebook.png",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/srijita-chakraborty-615a58174",
          icon: "/images/linkedin.png",
        }
      ],
      additionalInfo: [
        {
          name: 'Phone',
          icon: "/images/mobile.png",
          value: "+917980958697",
        },
        {
          name: 'Email',
          icon: "/images/email.png",
          value: "chakrabortysrijita72@gmail.com",
        },
        {
          name: 'Location',
          icon: "/images/location.png",
          value: "Kolkata, India"
        }
      ]
    },
    resumeSection: {
      education: [
        {
          id: 2,
          title: "Executive MBA Business Administration and Management, General",
          university: "Institute of Management Technology, Ghaziabad",
          location: "Distance Learning",
          duration: "July 2023 - July 2025",
        },
        {
          id: 1,
          title: "Bachelor of computer application",
          university: "Techno India Institute of Technology",
          location: "Kolkata, India",
          duration: "Jun 2018- July 2021",
        }
      ],
      experience: [
        {
          id: 1,
          title: "Senior System Engineer",
          company: "Cognizant",
          location: "Kolkata, India",
          duration: "Nov 2023 - Present",
          description: "Working as a System Engineer at Cognizant. I have been a part of multiple projects and have worked on various technologies.",
        },
        {
          id: 2,
          title: "System Engineer",
          company: "Cognizant",
          location: "Kolkata, India",
          duration: "Oct 2022 - Oct 23",
          description: "Skilled in Active Directory administration, adept at user provisioning, access management, and issue resolution, including change management.",
        },
        {
          id: 3,
          title: "Programmer Trainee",
          company: "Cognizant",
          location: "Kolkata, India",
          duration: "Sep 2021 - Sep 22",
          description: "Developed a plan reducing expenditure by 30%, optimized data collection, and cut turnaround time by 35% with Excel and reporting templates.",
        },
      ],
    },
    skills: [
      'Administration tools : GCP , AZURE , On-prem AD',
      'Database : MY SQL',
      'Web Servers : Apache Tomcat FRAMEWORK',
      'Methodology : Waterfall, Agile (Scrum)',
      'Bug tracking/Documentation : Service Now, Jira/Confluence, Remedy, MS Excel',
      'Programming Languages : Java , C++ , Powershell',
      'Change Management',
      'Risk management',
      'Team management',
    ],
    sections: [
      {
        name: "Home",
        key: "home",
        icon: "/images/home.png",
      },
      {
        name: "Resume",
        key: "resume",
        icon: "/images/list.png",
      }
    ],
    aboutMe: "Result-oriented and motivated Application/Production Support Engineer with 2.7+ years of experience maintaining and troubleshooting applications and supporting various Unix/Windows, client server, mobile and web-based application. Proven experience working with IT support engineers and outside vendors to effectively plan, document and maintain the distributed application and middleware environment's addition and changes.",
    whatIDo: [
      {
        id: 1,
        title: "Senior System Engineer",
        description: "Managed vendor relations encompassing selection, negotiation, and performance assessment, driving cost efficiencies and service enhancements.",
        icon: "/icons/web-dev.svg",
      },
      {
        id: 2,
        title: "System Engineer",
        description: "Skilled in Active Directory administration, adept at user provisioning, access management, and issue resolution, including change management. ",
        icon: "/icons/app-dev.svg",
      },
      {
        id: 3,
        title: "Programmer Trainee",
        description: "Developed a plan reducing expenditure by 30%, optimized data collection, and cut turnaround time by 35% with Excel and reporting templates.",
        icon: "/icons/ui-ux.svg",
      },
      {
        id: 4,
        title: "Mentorship",
        description: "Excelled as a Subject Matter Expert in Client data onboarding, leveraging expertise in reference data strategies and domain-specific knowledge for client reviews. ",
        icon: "/icons/mentorship.svg",
      },
    ],
  };
}

export default async function Home() {
  const data = await getData();

  return (
    <HomeComponent data={data} />
  );
}