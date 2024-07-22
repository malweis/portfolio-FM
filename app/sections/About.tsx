import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Web developer."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="I am a front-end developer with a focus on creating robust and user-friendly web applications. My core expertise lies in React.js, with extensive experience leveraging Next.js as a framework. I've also successfully built large-scale financial applications using cutting-edge technologies, primarily employing Vite and Tailwind CSS." />

                        <AnimatedBody
                            delay={0.1}
                            text="My approach involves utilizing modern frameworks and libraries to craft responsive and interactive websites that deliver exceptional user experiences. I'm passionate about continuous learning and constantly expanding my skill set to stay at the forefront of web development."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="One of my primary motivations for becoming a developer is to ensure that the applications I build are accessible to everyone. This commitment drives me to explore and adopt new technologies that prioritize accessibility as a standard feature."
                        />
                        <AnimatedBody
                            delay={0.3}
                            text="While I currently work in the financial industry, I'm always open to new opportunities that allow me to grow, learn, and apply my skills in diverse fields."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
