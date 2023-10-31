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
                    <h1 className={styles.head_dep}>ADDICTION</h1>
                    <p className={styles.para_dep}>Addiction is a complex and chronic condition characterized by the compulsive use of substances or engagement in behaviors despite harmful consequences. It often leads to physical and psychological dependence, making it challenging for individuals to quit. Common forms of addiction include substance abuse (e.g., drugs and alcohol) and behavioral addictions (e.g., gambling and gaming). Addiction can have detrimental effects on physical health, mental well-being, relationships, and overall quality of life.</p>
                </div>
                <div className={styles.two} data-aos="fade-left">
                    <Image src="/main4.jpg" alt="mai image" width={460} height={580} className={styles.main_img} priority />
                </div>
            </div>
            <div className={styles.causes} id="Cause">
                <h1 className={styles.cause_name} data-aos="fade-up">Causes of Addiction</h1>
                <div className={styles.para_cause} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Stressful Life Events:</span> Stressors like work, school, or family problems can trigger anxiety.</li>
                        <li><span className={styles.spn}>Genetic Predisposition:</span> Family history can increase susceptibility to anxiety disorders.</li>
                        <li><span className={styles.spn}>Imbalances in Brain Chemistry:</span> Altered neurotransmitter levels contribute to anxiety.</li>
                        <li><span className={styles.spn}>Brain Chemistry Imbalance:</span> Pre-existing chemical imbalances in the brain can lead to anxiety.</li>
                        <li><span className={styles.spn}>Family History:</span> A family history of mental health issues increases anxiety risk.</li>
                        <li><span className={styles.spn}>Medication Side Effects:</span> Some drugs can lead to anxiety as a side effect.</li>
                        <li><span className={styles.spn}>Health Issues:</span> Chronic illnesses and pain may cause health-related anxiety.</li>
                        <li><span className={styles.spn}>Substance Use:</span> Excessive alcohol or drug consumption can induce or worsen anxiety.</li>
                        <li><span className={styles.spn}>Traumatic Experiences:</span> Past trauma, such as abuse or accidents, can lead to anxiety disorders.</li>
                        <li><span className={styles.spn}>Personality Traits:</span> Traits like perfectionism or negative thinking can make individuals prone to anxiety.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.symptoms} id="Symptom">
                <div className={styles.para_cause1} data-aos="fade-up">
                    <ul>
                        <li>Reduced need for sleep during mania</li>
                        <li>Racing thoughts, rapid speech, and distractibility.</li>
                        <li>Fatigue and low energy levels in depression.</li>
                        <li>Overconfidence and risk-taking in mania.</li>
                        <li>Difficulty concentrating and making decisions.</li>
                        <li>Heightened activity levels and impulsiveness.</li>
                        <li>Feelings of guilt and worthlessness in depression.</li>
                        <li>Social withdrawal during depressive episodes.</li>
                        <li>Seasonal patterns for some individuals.</li>
                        <li>Impact on daily functioning and relationships.</li>
                        <li>Psychosis (hallucinations or delusions in mania).</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name1} data-aos="fade-up">Symptoms of Bipolar Disorder</h1>
            </div>

            <div className={styles.causes} id="Effect">
                <h1 className={styles.cause_name2} data-aos="fade-up">Effects on Mental Health</h1>
                <div className={styles.para_cause2} data-aos="fade-up">
                    <ul>
                        <li>Severe mood swings can lead to emotional turmoil.</li>
                        <li>Increased risk of developing anxiety disorders.</li>
                        <li>Impaired cognitive function during mood episodes.</li>
                        <li>Impulsivity and risk-taking behavior can have consequences.</li>
                        <li>Reduced quality of life during depressive episodes.</li>
                        <li>Disrupted sleep patterns affect overall well-being.</li>
                        <li>Suicidal thoughts or self-harming tendencies.</li>
                        <li>Social and relationship difficulties.</li>
                        <li>Challenges in maintaining employment or education.</li>
                        <li>Stress and stigma can worsen mental health.</li>
                    </ul>
                </div>
            </div>

            <div className={styles.treatment} id="Treatment">
                <div className={styles.para_cause3} data-aos="fade-up">
                    <ul>
                        <li>Medication:

                            Medication is prescribed to stabilize mood swings.</li>
                        <li>Psychotherapy (Talk Therapy):

                            Psychotherapy provides coping strategies and emotional support.</li>
                        <li>Lifestyle Adjustments:

                            Consistent sleep schedule and quality sleep are crucial.</li>
                        <li>Hospitalization:

                            Severe episodes may require hospitalization for stabilization.</li>
                        <li>Self-Help and Support Groups:

                            Support groups provide a sense of community and shared experiences.</li>
                        <li>Stress Reduction Techniques:

                            Stress management strategies, such as relaxation and mindfulness, are beneficial.</li>
                        <li>Medication Management:

                            Monitoring and managing potential side effects of medications are essential.</li>
                        <li>Lifestyle Adjustments:

                            Consistent sleep schedule and quality sleep are crucial.
                        </li>
                    </ul>
                </div>
                <h1 className={styles.cause_name3} data-aos="fade-up">Treatment and Support</h1>

            </div>

            <div className={styles.res} id="Resources">
                <h1 className={styles.name_res} data-aos="fade-up">Resources</h1>
                <div className={styles.videos} data-aos="fade-up">
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/PY9DcIMGxMs?si=605HpW7l0Yedy0d0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/FuooVrSpffk?si=mQB51eRzcEOSU9vw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/TEJqqllAKPE?si=07thAAheIBL-rmcT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>                </div>
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
