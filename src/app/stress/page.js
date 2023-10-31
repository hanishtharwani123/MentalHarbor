"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@/app/styles/depression.module.css';
import Image from "next/image";
import Link from "next/link";

const Page = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
    }, []);

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.comb}>
                        <Link href="/" className={styles.logo_link}>
                            <h1 className={styles.logo}>Mental</h1>
                        </Link>
                        <Link href="/" className={styles.logo_link}>
                            <h1 className={styles.logo1}>Harbor</h1>
                        </Link>
                    </div>
                    <ul className={styles.un_list}>
                        <Link href="" className={styles.links}><li className={styles.list_sty}>Home</li></Link>
                        <Link href="#" className={styles.links}><li className={styles.list_sty}>Causes</li></Link>
                        <Link href="#" className={styles.links}><li className={styles.list_sty}>Symptoms</li></Link>
                        <Link href="" className={styles.links}><li className={styles.list_sty}>Effects</li></Link>
                        <Link href="" className={styles.links}><li className={styles.list_sty}>Treatment</li></Link>
                        <Link href="" className={styles.links}><li className={styles.list_sty}>Resources</li></Link>
                    </ul>
                </nav>
            </header>
            <div className={styles.depress} id="Main">
                <div className={styles.one} data-aos="fade-right">
                    <h1 className={styles.head_dep}>STRESS</h1>
                    <p className={styles.para_dep}>Stress is the body's natural response to challenges and demands in life. It can manifest as a physical, emotional, or mental reaction to various situations, often triggered by a perceived threat or pressure. While some stress can be motivating, chronic or excessive stress can have negative effects on mental and physical health. Understanding stress is essential for finding healthy ways to manage and alleviate its impact on our well-being.</p>
                </div>
                <div className={styles.two} data-aos="fade-left">
                    <Image src="/main7.jpg" alt="mai image" width={470} height={580} className={styles.main_img} priority />
                </div>
            </div>
            <div className={styles.causes} id="Cause">
                <h1 className={styles.cause_name} data-aos="fade-up">Causes of Stress</h1>
                <div className={styles.para_cause} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Work Pressure:</span> Deadlines, heavy workloads, and job-related stressors.</li>
                        <li><span className={styles.spn}>Financial Concerns:</span> Money problems, debts, and financial instability.</li>
                        <li><span className={styles.spn}>Relationship Struggles:</span> Conflicts with family, friends, or romantic partners.</li>
                        <li><span className={styles.spn}>Life Changes:</span> Major life events like moving, divorce, or illness.</li>
                        <li><span className={styles.spn}>Health Issues:</span> Personal or family health problems can be stressful.</li>
                        <li><span className={styles.spn}>Academic Pressure:</span> Exams, academic performance, and educational stress.</li>
                        <li><span className={styles.spn}>Uncertainty:</span> Unknown or unpredictable situations can cause stress.</li>
                        <li><span className={styles.spn}>Social Pressure:</span> Social expectations and peer pressure can be stressful.</li>
                        <li><span className={styles.spn}>Daily Hassles:</span> Minor irritations and inconveniences add up.</li>
                        <li><span className={styles.spn}>Technology Overload:</span> Constant connectivity and information overload.</li>
                        <li><span className={styles.spn}>Environmental Factors:</span> Noise, pollution, and living conditions can contribute to stress.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.symptoms} id="Symptom">
                <div className={styles.para_cause1} data-aos="fade-up">
                    <ul>
                        <li>Physical symptoms like headaches, muscle tension, and fatigue.</li>
                        <li>Emotional signs, including irritability, anxiety, or low mood.</li>
                        <li>Cognitive symptoms like racing thoughts and difficulty concentrating.</li>
                        <li>Sleep disturbances, including insomnia or oversleeping.</li>
                        <li>Increased heart rate, rapid breathing, and chest tightness.</li>
                        <li>Digestive issues, such as stomach pain or nausea.</li>
                        <li>Weakened immune system, leading to frequent illnesses.</li>
                        <li>Skin problems like acne or eczema exacerbated by stress.</li>
                        <li>Behavioral changes, such as overeating or withdrawal from social activities.</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name1} data-aos="fade-up">Symptoms of Stress</h1>
            </div>

            <div className={styles.causes} id="Effect">
                <h1 className={styles.cause_name2} data-aos="fade-up">Effects on Mental Health</h1>
                <div className={styles.para_cause2} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Anxiety:</span> Constant worry and fear.</li>
                        <li><span className={styles.spn}>Depression:</span> Persistent low mood and loss of interest.</li>
                        <li><span className={styles.spn}>Irritability:</span> Mood swings and increased irritability.</li>
                        <li><span className={styles.spn}>Difficulty Concentrating:</span> Hindered focus and decision-making.</li>
                        <li><span className={styles.spn}>Insomnia:</span> Disrupted sleep patterns and chronic insomnia.</li>
                        <li><span className={styles.spn}>Increased Risk of Disorders:</span> Higher risk of developing mental health conditions.</li>
                        <li><span className={styles.spn}>Self-Esteem Impact:</span> Negative influence on self-esteem and self-worth.</li>
                        <li><span className={styles.spn}>Unhealthy Coping:</span> Tendency to resort to harmful coping strategies.</li>
                        <li><span className={styles.spn}>Worsening Existing Conditions:</span> Aggravation of preexisting mental health issues.</li>
                        <li><span className={styles.spn}>Suicidal Thoughts:</span> Severe stress can lead to self-harm and suicidal ideation.</li>
                    </ul>
                </div>
            </div>

            <div className={styles.treatment} id="Treatment">
                <div className={styles.para_cause3} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Therapies:</span> Counseling, like cognitive-behavioral therapy (CBT).</li>
                        <li><span className={styles.spn}>Relaxation Techniques:</span> Breathing exercises, meditation, or yoga.</li>
                        <li><span className={styles.spn}>Lifestyle Changes:</span> Healthy diet, exercise, and sufficient sleep.</li>
                        <li><span className={styles.spn}>Medication:</span> In some cases, medication may be prescribed.</li>
                        <li><span className={styles.spn}>Social Support:</span> Talking to friends and family for emotional support.</li>
                        <li><span className={styles.spn}>Stress Management Workshops:</span> Learning coping strategies.</li>
                        <li><span className={styles.spn}>Time Management:</span> Organizing and prioritizing tasks.</li>
                        <li><span className={styles.spn}>Mindfulness Practices:</span> Techniques for staying present and reducing stress.</li>
                        <li><span className={styles.spn}>Hobbies and Relaxation:</span> Engaging in activities that bring joy and relaxation.</li>
                        <li><span className={styles.spn}>Work-Life Balance:</span> Creating boundaries to prevent work-related stress.</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name3} data-aos="fade-up">Treatment and Support</h1>

            </div>

            <div className={styles.res} id="Resources">
                <h1 className={styles.name_res} data-aos="fade-up">Resources</h1>
                <div className={styles.videos} data-aos="fade-up">
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/BfdvbZFXbNA?si=wcuww9Xihn5pxNBe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/8jPQjjsBbIc?si=zSknd4o7ywmVimo6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/RcGyVTAoXEU?si=QvY-EkXokqh69P3S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.bex1}>
                    <div className={styles.comb1}>
                        <Link href="/"
                              className={styles.logo_link1}>
                            <h1 className={styles.logo2}>Mental</h1>
                        </Link>
                        <Link href="/"
                              className={styles.logo_link1}>
                            <h1 className={styles.logo3}>Harbor</h1>
                        </Link>
                    </div>
                    <h1 className={styles.tags}>Your Source of Strength for Mental Health & Wellness</h1>
                    <div className={styles.social_icons}>
                        <Link href="https://www.linkedin.com/in/hanish-tharwani/"><Image src="/linkedin.png" alt="linkedin" width={45} height={45}  className={styles.social1} /></Link>
                        <Link href="https://github.com/hanishtharwani123"><Image src="/github.png" alt="github" width={45} height={45} className={styles.social}  /></Link>
                        <Link href="https://twitter.com/TharwaniHanish"><Image src="/twitter.png" alt="twitter" width={45} height={45} className={styles.social}  /></Link>
                    </div>
                </div>
                <div className={styles.bex3}>
                    <h1 className={styles.use}>Contact us</h1>
                    <div className={styles.add}>
                        <h1 className={styles.moves}>Sector 11, Udaipur 313002, Rajasthan India</h1>
                        <h1 className={styles.moves}>hanishtharwani283@gmail.com</h1>
                        <h1 className={styles.moves}>+91 9024308901</h1>
                        <Link href="https://my-portfolio-website-three-delta.vercel.app/" className={styles.moves}>My Portfolio</Link>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Page;
