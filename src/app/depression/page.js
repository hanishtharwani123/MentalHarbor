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
                <h1 className={styles.head_dep} >DEPRESSION</h1>
                <p className={styles.para_dep}>Depression is a common and serious mental health condition that affects millions of individuals worldwide. It goes beyond occasional feelings of sadness and can significantly impact a person's daily life, relationships, and overall well-being. Understanding the nature of depression, its symptoms, and available support is crucial in fostering empathy and promoting mental health awareness. In this section, we delve into the complexities of depression, its effects, and strategies for coping and recovery.</p>
            </div>
            <div className={styles.two} data-aos="fade-left">
                <Image src="/main2.jpg" alt="mai image" width={460} height={570} className={styles.main_img} priority />
            </div>
        </div>
        <div className={styles.causes} id="Cause">
            <h1 className={styles.cause_name} data-aos="fade-up">Causes of Depression</h1>
            <div className={styles.para_cause} data-aos="fade-up">
                <ul>
                    <li><span className={styles.spn}>Genetics:</span> Family history of depression can increase the risk.</li>
                    <li><span className={styles.spn}>Brain Chemistry:</span> Imbalances in neurotransmitters like serotonin and dopamine.</li>
                    <li><span className={styles.spn}>Hormonal Changes:</span> Hormonal fluctuations, particularly in women.</li>
                    <li><span className={styles.spn}>Trauma and Stress:</span> Significant life events, trauma, or chronic stress.</li>
                    <li><span className={styles.spn}>Chronic Illness:</span> Some medical conditions can trigger depression.</li>
                    <li><span className={styles.spn}>Substance Abuse:</span> Alcohol or drug abuse can contribute to depression.</li>
                    <li><span className={styles.spn}>Medications:</span> Certain medications may have depressive side effects.</li>
                    <li><span className={styles.spn}>Personal History:</span> Past episodes of depression increase susceptibility.</li>
                    <li><span className={styles.spn}>Loneliness and Lack of Support:</span> Social isolation and lack of a support system.</li>
                    <li><span className={styles.spn}>Environmental Factors:</span> Living in a challenging or abusive environment.</li>
                    <li><span className={styles.spn}>Childhood Adversity:</span> Childhood abuse, neglect, or family dysfunction.</li>
                    <li><span className={styles.spn}>Personality Traits:</span> Certain personality traits may increase vulnerability.</li>

                </ul>
            </div>
        </div>
            <div className={styles.symptoms} id="Symptom">
                <div className={styles.para_cause1} data-aos="fade-up">
                    <ul>
                        <li>Persistent sadness and low mood.</li>
                        <li>Loss of interest in once-enjoyable activities (anhedonia).</li>
                        <li>Changes in sleep patterns (insomnia or hypersomnia).</li>
                        <li>Changes in appetite, leading to weight loss or gain.</li>
                        <li>Chronic fatigue and lack of energy.</li>
                        <li>Feelings of guilt and worthlessness.</li>
                        <li>Difficulty concentrating and memory problems.</li>
                        <li>Physical aches and unexplained pains.</li>
                        <li>Social withdrawal and isolation.</li>
                        <li>Social withdrawal and isolation.</li>
                        <li>Suicidal thoughts or self-harm ideation (seek immediate help).</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name1} data-aos="fade-up">Symptoms of Depression</h1>
            </div>

            <div className={styles.causes} id="Effect">
                <h1 className={styles.cause_name2} data-aos="fade-up">Effects on Mental Health</h1>
                <div className={styles.para_cause2} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Persistent Sadness:</span> Depression leads to ongoing feelings of sadness and hopelessness.</li>
                        <li><span className={styles.spn}>Loss of Interest:</span> Anhedonia causes a lack of interest in activities once enjoyed.</li>
                        <li><span className={styles.spn}>Fatigue:</span> Extreme tiredness and low energy are common symptoms.</li>
                        <li><span className={styles.spn}>Feelings of Guilt: </span>  Overwhelming guilt and worthlessness.</li>
                        <li><span className={styles.spn}>Sleep Issues:</span> Trouble sleeping or oversleeping.</li>
                        <li><span className={styles.spn}>Appetite Changes:</span> Significant changes in appetite and weight.</li>
                        <li><span className={styles.spn}>Physical Symptoms:</span> Headaches, stomachaches, and muscle pain.</li>
                        <li><span className={styles.spn}>Social Withdrawal:</span> Isolation from social interactions and increased loneliness.</li>
                        <li><span className={styles.spn}>Suicidal Thoughts:</span> Social isolation and lack of a support system.</li>
                        <li><span className={styles.spn}>Anxiety:</span> Often co-occurs with depression, increasing anxiety levels.</li>
                        <li><span className={styles.spn}>Physical Health Impact:</span> May increase the risk of chronic physical conditions.</li>

                    </ul>
                </div>
            </div>

            <div className={styles.treatment} id="Treatment">
                <div className={styles.para_cause3} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Psychotherapy (Talk Therapy):</span> Cognitive-Behavioral Therapy (CBT) helps change thought patterns; Interpersonal Therapy (IPT) improves relationships.</li>
                        <li><span className={styles.spn}>Medication:</span> Antidepressants (e.g., SSRIs) regulate brain chemicals; consult a psychiatrist for guidance.</li>
                        <li><span className={styles.spn}>Self-Help Strategies:</span> Maintain a healthy lifestyle with exercise and a balanced diet.</li>
                        <li><span className={styles.spn}>Mindfulness and Meditation: </span>Practice to reduce symptoms and enhance mental well-being.</li>
                        <li><span className={styles.spn}>Social Support:</span> Reach out to friends and family for emotional help and understanding.</li>
                        <li><span className={styles.spn}>Support Groups:</span> Join to share experiences and coping strategies.</li>
                        <li><span className={styles.spn}>Online Resources and Apps </span> Use digital tools for mood tracking and relaxation.</li>
                        <li><span className={styles.spn}>Hospitalization or Intensive Treatment: </span> Consider for severe cases or intensive support.</li>
                        <li><span className={styles.spn}>Hospitalization or Intensive Treatment: </span>Regularly see healthcare providers for ongoing management.</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name3} data-aos="fade-up">Treatment and Support</h1>

            </div>

            <div className={styles.res} id="Resources">
                <h1 className={styles.name_res} data-aos="fade-up">Resources</h1>
                <div className={styles.videos} data-aos="fade-up">
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/VlDgowUAyx4?si=otICsK8D6IF6SGd2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/1I9ADpXbD6c?si=M6V5525FsTIn8zkC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/d96akWDnx0w?si=Y-bwd70j_G8g2nsH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                </div>
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
