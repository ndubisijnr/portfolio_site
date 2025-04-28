import  { useState, useEffect } from 'react';
import { GitBranch, Mail, Linkedin, ExternalLink, ArrowRight, Sun, Moon } from 'lucide-react';

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');
    const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);
    const [darkMode, setDarkMode] = useState(true);

    console.log(activeSection)

    const experiences =  [
        {
            id: 1,
            company: "SoftGem GLOBAL TECHNOLOGIES",
            positions: [
                { title: "Frontend Developer SaaS (web)", period: "September 2024 - Present (8 months)" },
                { title: "POS Device Development (Javascript - vue.js)", period: "April 2024 - Present (1 year 1 month)" },
                { title: "Mobile Development With React Native And Expo", period: "February 2023 - Present (2 years 3 months)" },
                { title: "Frontend Developer", period: "January 2022 - Present (3 years 4 months)" }
            ]
        },
        {
            id: 2,
            company: "8figures",
            positions: [
                { title: "Back End Developer", period: "December 2024 - March 2025 (4 months)" }
            ]
        },
        {
            id: 3,
            company: "Tiqwa",
            positions: [
                { title: "Frontend Web Developer", period: "June 2023 - June 2024 (1 year 1 month)" }
            ],
            technologies: "Vue.js and Vite / Vuex / Pinia / Next js / nuxt js/REST API"
        },
        {
            id: 4,
            company: "CoralPay Technology (Nig) Limited",
            positions: [
                { title: "Frontend Developer", period: "July 2022 - August 2022 (2 months)" }
            ],
            technologies: "Frontend Developer (contract) / React js/ react router/ tailwind css / html"
        },
        {
            id: 5,
            company: "Ridera",
            positions: [
                { title: "Frontend Web Developer", period: "April 2022 - May 2022 (2 months)" }
            ],
            description: "Developed the Ridera logistic company website."
        }
    ];

    const skills = [
        "JavaScript", "React.js", "Vue.js", "React Native", "Expo",
        "Next.js", "Tailwind CSS",
        "REST API", "Cloud Services(AWS)",
        "Cloud Infrastructure"
    ];

    const education = {
        school: "National Open University of Nigeria",
        degree: "Bachelor's degree, Information Technology",
        period: "September 2020 - July 2023"
    };

    const certifications = [
        "AWS Technical Essentials",
        "Udemy Search Engine Optimization",
        "AWS Technical Partner"
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        setActiveSection(sectionId);

                        if (sectionId === 'experience') {
                            // Gradually show experience items
                            const showExperiencesWithDelay = async () => {
                                for (let i = 0; i < experiences.length; i++) {
                                    await new Promise(resolve => setTimeout(resolve, 200));
                                    setVisibleExperiences(prev=> [...prev, experiences[i].id]);
                                }
                            };

                            showExperiencesWithDelay();
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        return () => {
            document.querySelectorAll('section').forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    // Generate theme classes based on current mode
    const getThemeClasses = {
        body: darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900',
        nav: darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-80 border-b border-gray-200',
        sectionAlt: darkMode ? 'bg-gray-800' : 'bg-white border-t border-b border-gray-200',
        card: darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200',
        input: darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300',
        skillBadge: darkMode ? 'bg-gray-700 hover:bg-blue-500' : 'bg-gray-100 hover:bg-blue-500 text-gray-800 hover:text-white',
        highlight: darkMode ? 'text-blue-400' : 'text-blue-600',
        button: darkMode ? 'bg-gray-600 hover:bg-gray-700 text-white hover:text-green-400' : 'bg-gray-500 hover:bg-gray-600 text-white hover:text-green-400',
        secondaryButton: darkMode ? 'border-gray-700 hover:border-gray-500 text-white hover:text-green-400' : 'border-gray-300 hover:border-gray-400  text-black hover:text-black',
        muted: darkMode ? 'text-gray-400' : 'text-gray-500',
        timeline: darkMode ? 'border-blue-500' : 'border-blue-400',
        footer: darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100 border-t border-gray-200'
    };
    return (
        <div className={`${getThemeClasses.body} min-h-screen font-sans transition-colors duration-300 w-full`}>
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 ${getThemeClasses.nav} backdrop-blur-sm z-50 transition-colors duration-300`}>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold">Ndubuisi Ukonu</div>
                        <div className="flex items-center">
                            {/*<div className="hidden md:flex space-x-8 mr-6">*/}
                            {/*    {['home', 'about', 'experience', 'skills', 'education', 'contact'].map(section => (*/}
                            {/*        <a*/}
                            {/*            key={section}*/}
                            {/*            href={`#${section}`}*/}
                            {/*            className={`hover:${getThemeClasses.highlight} transition-colors ${activeSection === section ? getThemeClasses.highlight : ''}`}*/}
                            {/*        >*/}
                            {/*            {section.charAt(0).toUpperCase() + section.slice(1)}*/}
                            {/*        </a>*/}
                            {/*    ))}*/}
                            {/*</div>*/}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                                aria-label="Toggle theme"
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col items-start">
                        <div className={`inline-block px-3 py-1 rounded-full ${darkMode ? 'bg-blue-500 bg-opacity-20 text-blue-400' : 'bg-blue-100 text-blue-600'} text-sm mb-4 transition-colors`}>
                            Software Engineer
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Ndubuisi Ukonu
                        </h1>
                        <p className={`text-xl ${getThemeClasses.muted} max-w-2xl mb-8`}>
                            I am a Software Engineer, My Experience spans across Frontend Engineering (Vue.js, React.js, Mobile Development(React Native), Backend Engineering (Django, Django Rest Framework, FastAPI), Nextjs and Cloud Engineering (AWS).
                        </p>
                        <div className="flex lg:space-x-4 md:space-x-4 gap-3 flex-col lg:flex-row md:flex-row w-full lg:max-w">
                            <a href="#contact" className={`px-6 py-3 text-center ${getThemeClasses.button} rounded-[10px] transition-colors`}>
                                Contact Me
                            </a>
                            <a href="#experience" className={`px-6 py-3 text-center border ${getThemeClasses.secondaryButton} rounded-[10px] transition-colors`}>
                                View Experience
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={`py-20 px-6 ${getThemeClasses.sectionAlt} transition-colors duration-300`}>
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 relative">
                        About Me
                        <span className={`absolute bottom-0 left-0 w-20 h-1 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} -mb-4 transition-colors`}></span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6 transition-colors`}>
                                I'm a skilled Software Engineer based in Lagos, Nigeria with over {new Date().getFullYear() - 2021} years of experience in frontend and mobile development. I specialize in creating responsive web applications and cross-platform mobile solutions, .
                            </p>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed transition-colors`}>
                                My expertise spans Frontend Engineering (Vue.js, React.js, Mobile Development(React Native), Backend Engineering (Django, Django Rest Framework, FastAPI), Nextjs and Cloud Engineering (AWS), and React Native. I'm passionate about building user-friendly interfaces and delivering high-quality, scalable solutions.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail size={18} className={getThemeClasses.highlight} />
                                <span>ndubisijnr@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Linkedin size={18} className={getThemeClasses.highlight} />
                                <span>www.linkedin.com/in/ndubisijnr</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <GitBranch size={18} className={getThemeClasses.highlight} />
                                <span>Frontend, Mobile Development and Backend Engineering</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <ExternalLink size={18} className={getThemeClasses.highlight} />
                                <span>Lagos, Lagos State, Nigeria</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-6 transition-colors duration-300">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 relative">
                        Work Experience
                        <span className={`absolute bottom-0 left-0 w-20 h-1 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} -mb-4 transition-colors`}></span>
                    </h2>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`transform transition-all duration-500 ${
                                    visibleExperiences.includes(exp.id)
                                        ? 'translate-x-0 opacity-100'
                                        : 'translate-x-16 opacity-0'
                                }`}
                            >
                                <div className={`border-l-2 ${getThemeClasses.timeline} pl-6 relative transition-colors`}>
                                    <div className={`absolute w-4 h-4 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} rounded-full -left-2 top-0 transition-colors`}></div>
                                    <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                                    <div className="space-y-4">
                                        {exp.positions.map((position, posIndex) => (
                                            <div key={posIndex} className="mb-2">
                                                <h4 className={`text-lg font-semibold ${getThemeClasses.highlight}`}>{position.title}</h4>
                                                <p className={getThemeClasses.muted}>{position.period}</p>
                                            </div>
                                        ))}
                                        {exp.technologies && (
                                            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{exp.technologies}</p>
                                        )}
                                        {exp.description && (
                                            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{exp.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className={`py-20 px-6 ${getThemeClasses.sectionAlt} transition-colors duration-300`}>
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 relative">
                        Skills & Expertise
                        <span className={`absolute bottom-0 left-0 w-20 h-1 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} -mb-4 transition-colors`}></span>
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`${getThemeClasses.skillBadge} px-4 py-2 rounded-full transition-colors duration-300`}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education & Certifications */}
            <section id="education" className="py-20 px-6 transition-colors duration-300">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 relative">
                        Education & Certifications
                        <span className={`absolute bottom-0 left-0 w-20 h-1 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} -mb-4 transition-colors`}></span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Education</h3>
                            <div className={`border-l-2 ${getThemeClasses.timeline} pl-6 relative transition-colors`}>
                                <div className={`absolute w-4 h-4 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} rounded-full -left-2 top-0 transition-colors`}></div>
                                <h4 className="text-xl font-bold">{education.school}</h4>
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{education.degree}</p>
                                <p className={getThemeClasses.muted}>{education.period}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                            <ul className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <li key={index} className="flex items-center">
                                        <ArrowRight size={16} className={getThemeClasses.highlight} />
                                        <span className="ml-2">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-20 px-6 ${getThemeClasses.sectionAlt} transition-colors duration-300`}>
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 relative">
                        Contact Me
                        <span className={`absolute bottom-0 left-0 w-20 h-1 ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} -mb-4 transition-colors`}></span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <p className={darkMode ? 'text-gray-300 mb-6' : 'text-gray-600 mb-6'}>
                                Interested in working together? Feel free to reach out to me via email or LinkedIn.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail size={18} className={getThemeClasses.highlight} />
                                    <a href="mailto:ndubisijnr@gmail.com" className={`hover:${getThemeClasses.highlight} transition-colors`}>ndubisijnr@gmail.com</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Linkedin size={18} className={getThemeClasses.highlight} />
                                    <a href="https://www.linkedin.com/in/ndubisijnr" target="_blank" rel="noopener noreferrer" className={`hover:${getThemeClasses.highlight} transition-colors`}>
                                        www.linkedin.com/in/ndubisijnr
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <form className="space-y-4">*/}
                        {/*        <div>*/}
                        {/*            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>*/}
                        {/*            <input*/}
                        {/*                type="text"*/}
                        {/*                id="name"*/}
                        {/*                className={`w-full px-4 py-2 ${getThemeClasses.input} rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors`}*/}
                        {/*                placeholder="John Doe"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>*/}
                        {/*            <input*/}
                        {/*                type="email"*/}
                        {/*                id="email"*/}
                        {/*                className={`w-full px-4 py-2 ${getThemeClasses.input} rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors`}*/}
                        {/*                placeholder="john@example.com"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>*/}
                        {/*            <textarea*/}
                        {/*                id="message"*/}
                        {/*                rows="4"*/}
                        {/*                className={`w-full px-4 py-2 ${getThemeClasses.input} rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors`}*/}
                        {/*                placeholder="Your message..."*/}
                        {/*            ></textarea>*/}
                        {/*        </div>*/}
                        {/*        <button*/}
                        {/*            type="submit"*/}
                        {/*            className={`px-6 py-3 ${getThemeClasses.button} text-white font-medium rounded-lg w-full transition-colors`}*/}
                        {/*        >*/}
                        {/*            Send Message*/}
                        {/*        </button>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-8 px-6 ${getThemeClasses.footer} transition-colors duration-300`}>
                <div className="container mx-auto max-w-4xl text-center">
                    <p className={getThemeClasses.muted}>
                        © {new Date().getFullYear()} Ndubuisi Ukonu. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}