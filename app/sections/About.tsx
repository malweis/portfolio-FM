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
                        <AnimatedBody text="Front-end developer that focuses on web applications.My main expertise is in React.js with a lot of experience using Next.js as a framework, I've also built large scale financial applications using other technologies mainly with Vite and tailwind." />

                        <AnimatedBody
                            delay={0.1}
                            text="I use modern frameworks and libraries to create responsive and interactive websites. I’m always learning new technologies and expanding my skill set. The reason i always try to use new technologies is that most of them have accessibility as a standard and my main reason to become a developer if that everyone can use the things i build."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Currently working in financial industry but always looking for new opportunities to grow and learn in other fields"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
