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
                    <h1 className={styles.head_dep}>ANXIETY</h1>
                    <p className={styles.para_dep}>Anxiety is a common emotional response to stress, characterized by feelings of unease, fear, and apprehension. While it's a natural reaction to life's challenges, excessive or prolonged anxiety can become a mental health concern. Symptoms may include restlessness, rapid heart rate, and racing thoughts. Anxiety disorders, such as generalized anxiety disorder and social anxiety disorder, are more severe and require professional intervention. Effective treatments, including therapy and medication, can help individuals manage anxiety and improve their quality of life.</p>
                </div>
                <div className={styles.two} data-aos="fade-left">
                    <Image src="/main5.jpg" alt="mai image" width={440} height={560} className={styles.main_img} priority />
                </div>
            </div>
            <div className={styles.causes} id="Cause">
                <h1 className={styles.cause_name} data-aos="fade-up">Causes of Anxiety</h1>
                <div className={styles.para_cause} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Stress:</span> Excessive stress from various life pressures.</li>
                        <li><span className={styles.spn}>Genetics:</span> A family history of anxiety can contribute to its development.</li>
                        <li><span className={styles.spn}>Trauma:</span> Past traumatic experiences may lead to anxiety disorders.</li>
                        <li><span className={styles.spn}>Brain Chemistry:</span> Imbalances in brain chemicals can play a role.</li>
                        <li><span className={styles.spn}>Health Conditions:</span> Chronic illnesses or chronic pain can trigger anxiety.</li>
                        <li><span className={styles.spn}>Substance Abuse:</span> Drug or alcohol misuse can exacerbate anxiety.</li>
                        <li><span className={styles.spn}>Environmental Factors:</span> Factors like work environment or living conditions.</li>
                        <li><span className={styles.spn}>Hormonal Changes:</span> Hormonal shifts, such as during pregnancy or menopause.</li>
                        <li><span className={styles.spn}>Life Transitions:</span> Major life changes can trigger anxiety.</li>
                        <li><span className={styles.spn}>Phobias:</span> Specific phobias may lead to anxiety in certain situations.</li>

                    </ul>
                </div>
            </div>
            <div className={styles.symptoms} id="Symptom">
                <div className={styles.para_cause1} data-aos="fade-up">
                    <ul>
                        <li>Excessive Worry: Persistent, uncontrollable worrying.</li>
                        <li>Restlessness: Feeling on edge or unable to relax.</li>
                        <li>Rapid Heartbeat: Heart palpitations or increased heart rate.</li>
                        <li>Shortness of Breath: Difficulty breathing or feeling suffocated.</li>
                        <li>Muscle Tension: Physical tension, often in the neck and shoulders.</li>
                        <li>Sweating: Profuse sweating, even in non-stressful situations.</li>
                        <li>Shaking: Trembling or shivering, especially in the hands.</li>
                        <li>Digestive Issues: Stomachaches, nausea, or diarrhea.</li>
                        <li>Irritability: Heightened irritability and edginess.</li>
                        <li>Sleep Disturbances: Trouble falling asleep or staying asleep.</li>
                        <li>Difficulty Concentrating: Inability to focus and racing thoughts.</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name1} data-aos="fade-up">Symptoms of Anxiety</h1>
            </div>

            <div className={styles.causes} id="Effect">
                <h1 className={styles.cause_name2} data-aos="fade-up">Effects on Mental Health</h1>
                <div className={styles.para_cause2} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Increased Stress:</span> Anxiety amplifies stress, affecting mental well-being.</li>
                        <li><span className={styles.spn}>Depression:</span> Prolonged anxiety can lead to or exacerbate depression.</li>
                        <li><span className={styles.spn}>Impaired Concentration:</span> Racing thoughts hinder focus and decision-making.</li>
                        <li><span className={styles.spn}>Irritability:</span> Heightened irritability and mood swings.</li>
                        <li><span className={styles.spn}>Social Isolation:</span> Avoiding social situations due to anxiety.</li>
                        <li><span className={styles.spn}>Negative Self-Image:</span> Low self-esteem and self-doubt often accompany anxiety.</li>
                        <li><span className={styles.spn}>Panic Attacks:</span> Intense anxiety may trigger panic attacks.</li>
                        <li><span className={styles.spn}>Substance Abuse:</span> Some turn to substances to cope with anxiety.</li>
                        <li><span className={styles.spn}>Risk of Other Disorders:</span> Increases the risk of other mental health conditions.</li>
                        <li><span className={styles.spn}>Impact on Relationships:</span> Strains relationships due to anxiety-related behaviors.</li>
                    </ul>
                </div>
            </div>

            <div className={styles.treatment} id="Treatment">
                <div className={styles.para_cause3} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Therapy:</span> Counseling, especially cognitive-behavioral therapy (CBT).</li>
                        <li><span className={styles.spn}>Medication:</span> In some cases, medication is prescribed to manage symptoms.</li>
                        <li><span className={styles.spn}>Lifestyle Changes:</span> Healthy diet, regular exercise, and adequate sleep.</li>
                        <li><span className={styles.spn}>Relaxation Techniques:</span> Breathing exercises and mindfulness practices.</li>
                        <li><span className={styles.spn}>Support Groups:</span> Sharing experiences and coping strategies with others.</li>
                        <li><span className={styles.spn}>Stress Management:</span> Learning to handle stress effectively.</li>
                        <li><span className={styles.spn}>Mindfulness Practices:</span> Techniques for staying present and reducing anxiety.</li>
                        <li><span className={styles.spn}>Hobbies and Recreation:</span> Engaging in enjoyable, anxiety-reducing activities.</li>
                        <li><span className={styles.spn}>Self-Care:</span> Prioritizing self-care for physical and mental well-being.</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name3} data-aos="fade-up">Treatment and Support</h1>

            </div>

            <div className={styles.res} id="Resources">
                <h1 className={styles.name_res} data-aos="fade-up">Resources</h1>
                <div className={styles.videos} data-aos="fade-up">
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/WWloIAQpMcQ?si=tDfLJyZRGsnEgZ6a" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/lDEkOzvysm0?si=fLeJ0HGUYAaDLfkx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/R6MasOctLkY?si=020YqV5EM1dtTDYv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>                </div>
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
