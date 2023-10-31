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
                    <h1 className={styles.head_dep}>BIPOLAR</h1>
                    <p className={styles.para_dep}>Bipolar disorder, often referred to as manic-depressive illness, is a mental health condition characterized by extreme mood swings. Individuals with bipolar disorder experience episodes of mania, which involve elevated mood, increased energy, and impulsive behavior, followed by depressive episodes marked by profound sadness, loss of interest, and low energy. These mood swings can vary in intensity and duration, and the disorder can significantly impact a person's daily life and relationships.</p>
                </div>
                <div className={styles.two} data-aos="fade-left">
                    <Image src="/main6.jpg" alt="mai image" width={450} height={570} className={styles.main_img} priority />
                </div>
            </div>
            <div className={styles.causes} id="Cause">
                <h1 className={styles.cause_name} data-aos="fade-up">Causes of Bipolar</h1>
                <div className={styles.para_cause} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Genetic Factors:</span> Bipolar disorder tends to run in families, suggesting a genetic predisposition.</li>
                        <li><span className={styles.spn}>Chemical Imbalance:</span> Imbalances in brain chemicals, like neurotransmitters, may contribute to the disorder.</li>
                        <li><span className={styles.spn}>Environmental Triggers:</span> Stressful life events, trauma, or major life changes can play a role.</li>
                        <li><span className={styles.spn}>Neurological Factors:</span> Abnormalities in brain structure or function may contribute.</li>
                        <li><span className={styles.spn}>Substance Abuse:</span> Drug or alcohol abuse can increase the risk of bipolar disorder.</li>
                        <li><span className={styles.spn}>Sleep Patterns:</span> Disrupted sleep or irregular sleep cycles can impact mood.</li>
                        <li><span className={styles.spn}>Medical Conditions:</span> Some physical illnesses and infections may increase the risk.</li>
                        <li><span className={styles.spn}>Brain Structure Abnormalities:</span> Structural differences in the brain can be a factor.</li>
                        <li><span className={styles.spn}>Hormonal Changes:</span> Hormonal fluctuations, especially in women, may contribute to the condition.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.symptoms} id="Symptom">
                <div className={styles.para_cause1} data-aos="fade-up">
                    <ul>
                        <li>Intense mood swings</li>
                        <li>Periods of elevated energy</li>
                        <li>Depressive episodes</li>
                        <li>Racing thoughts</li>
                        <li>Reduced need for sleep</li>
                        <li>Feelings of hopelessness</li>
                        <li>Loss of interest in activities</li>
                        <li>Changes in appetite</li>
                        <li>Fatigue</li>
                        <li>Difficulty concentrating</li>
                        <li>Suicidal thoughts</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name1} data-aos="fade-up">Symptoms of Bipolar</h1>
            </div>

            <div className={styles.causes} id="Effect">
                <h1 className={styles.cause_name2} data-aos="fade-up">Effects on Mental Health</h1>
                <div className={styles.para_cause2} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Emotional Turmoil:</span> Extreme mood swings affect emotional stability.</li>
                        <li><span className={styles.spn}>Increased Stress and Anxiety:</span> High levels of stress and anxiety.</li>
                        <li><span className={styles.spn}>Disrupted Daily Functioning:</span> Impacts daily life and relationships.</li>
                        <li><span className={styles.spn}>Risk of Substance Abuse:</span> Elevated risk of substance abuse.</li>
                        <li><span className={styles.spn}>Challenges to Self-Esteem:</span> Struggles with self-esteem and self-worth.</li>
                        <li><span className={styles.spn}>Need for Treatment and Support:</span> Requires treatment and support.</li>
                        <li><span className={styles.spn}>Suicidal Thoughts:</span> Elevated risk of experiencing suicidal thoughts.</li>
                        <li><span className={styles.spn}>Social Isolation:</span> Tendency to isolate oneself from social interactions.</li>
                        <li><span className={styles.spn}>Sleep Disturbances:</span> Disrupted sleep patterns and insomnia.</li>
                        <li><span className={styles.spn}>AImpulsive Behavior:</span> Increased impulsivity in actions and decisions.</li>
                    </ul>
                </div>
            </div>

            <div className={styles.treatment} id="Treatment">
                <div className={styles.para_cause3} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Medication:</span> Often involves mood stabilizers, antipsychotic drugs, and antidepressants.</li>
                        <li><span className={styles.spn}>Lifestyle Management:</span> Includes regular exercise, a balanced diet, and sufficient sleep.</li>
                        <li><span className={styles.spn}>Supportive Therapies:</span> Family-focused therapy and support groups can be beneficial.</li>
                        <li><span className={styles.spn}>Hospitalization:</span> In severe cases, hospitalization for safety and stabilization.</li>
                        <li><span className={styles.spn}>ECT (Electroconvulsive Therapy):</span> Used in resistant or severe cases of bipolar disorder.</li>
                        <li><span className={styles.spn}>Self-Care:</span> Learning stress management and mood tracking techniques.</li>
                        <li><span className={styles.spn}>Crisis Plan:</span> Developing a crisis plan for managing episodes.</li>
                        <li><span className={styles.spn}>Medication Adherence:</span> Consistent adherence to prescribed medications.</li>
                        <li><span className={styles.spn}>ECT (Electroconvulsive Therapy):</span> Used in resistant or severe cases of bipolar disorder.</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name3} data-aos="fade-up">Treatment and Support</h1>

            </div>

            <div className={styles.res} id="Resources">
                <h1 className={styles.name_res} data-aos="fade-up">Resources</h1>
                <div className={styles.videos} data-aos="fade-up">
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/awPP5YrVGyY?si=T0o5fWRudeTQlPu8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/gR4-ittuZi8?si=nnuZ5J1qzc32ypyg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/RrWBhVlD1H8?si=cp8MfvFuAeE-SdD-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>                </div>
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
