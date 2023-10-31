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
                        <Link href="#Main" className={styles.links}><li className={styles.list_sty}>Home</li></Link>
                        <Link href="#Cause" className={styles.links}><li className={styles.list_sty}>Causes</li></Link>
                        <Link href="#Symptom" className={styles.links}><li className={styles.list_sty}>Symptoms</li></Link>
                        <Link href="#Effect" className={styles.links}><li className={styles.list_sty}>Effects</li></Link>
                        <Link href="#Treatment" className={styles.links}><li className={styles.list_sty}>Treatment</li></Link>
                        <Link href="#Resources" className={styles.links}><li className={styles.list_sty}>Resources</li></Link>
                    </ul>
                </nav>
            </header>

            <div className={styles.depress} id="Main">
                <div className={styles.one} data-aos="fade-right">
                    <h1 className={styles.head_dep}>SUICIDE</h1>
                    <p className={styles.para_dep}>Suicide is a deeply distressing and complex issue. It is the tragic act of intentionally taking one's own life, often stemming from an overwhelming sense of despair, hopelessness, and emotional pain. It affects people of all ages, backgrounds, and walks of life, and its impact reverberates throughout families and communities.

                        While discussing suicide can be difficult, it is crucial to address this issue openly and honestly to raise awareness, reduce stigma, and, most importantly, save lives. </p>
                </div>
                <div className={styles.two} data-aos="fade-left">
                    <Image src="/main3.jpg" alt="mai image" width={500} height={580} className={styles.main_img} priority />
                </div>
            </div>
            <div className={styles.causes} id="Cause">
                <h1 className={styles.cause_name} data-aos="fade-up">Causes of Suicide</h1>
                <div className={styles.para_cause} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Bullying:</span> Prolonged bullying can lead to thoughts of self-harm.</li>
                        <li><span className={styles.spn}>Isolation:</span> Social isolation and feeling alone increase suicide risk.</li>
                        <li><span className={styles.spn}>Body Image Issues: </span> Negative body image can contribute to suicidal ideation.</li>
                        <li><span className={styles.spn}>Childhood Trauma:</span> Early trauma may affect mental health later in life.</li>
                        <li><span className={styles.spn}>Military Service:</span> Military personnel may be at risk due to combat-related stress.</li>
                        <li><span className={styles.spn}>Self-esteem Issues:</span> Low self-esteem can make individuals vulnerable.</li>
                        <li><span className={styles.spn}>Failed Relationships:</span> Breakups and divorces can lead to despair.</li>
                        <li><span className={styles.spn}>Social Media Pressure:</span> Online pressures and comparison can affect mental health.</li>
                        <li><span className={styles.spn}>Chronic Hopelessness:</span> A persistent feeling of hopelessness can increase risk.</li>
                        <li><span className={styles.spn}>Impulsive Behavior:</span> Impulsivity can lead to sudden self-harm attempts.</li>
                        <li><span className={styles.spn}>Loss of Identity:</span> Major life changes can disrupt one's sense of self.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.symptoms} id="Symptom">
                <div className={styles.para_cause1} data-aos="fade-up">
                    <ul>
                        <li>Expressing a desire to die or talking about suicide.</li>
                        <li>Social withdrawal and isolation.</li>
                        <li>Drastic and sudden mood swings.</li>
                        <li>A calm demeanor after intense emotional turmoil.</li>
                        <li>Obsessively discussing death, dying, or suicide.</li>
                        <li>Giving away personal possessions.</li>
                        <li>Evidence of self-harm like cuts or burns.</li>
                        <li>Engaging in reckless, high-risk behaviors.</li>
                        <li>Significant changes in sleep patterns.</li>
                        <li>Making final goodbyes or farewell statements.</li>
                        <li>Sudden improvement after severe depression.</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name1} data-aos="fade-up">Symptoms of Suicide</h1>
            </div>

            <div className={styles.causes} id="Effect">
                <h1 className={styles.cause_name2} data-aos="fade-up">Effects on Mental Health</h1>
                <div className={styles.para_cause2} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Intense Emotional Pain:</span> Talking about wanting to die or suicide.</li>
                        <li><span className={styles.spn}>Depression and Anxiety:</span> Often co-occur with clinical depression and anxiety disorders.</li>
                        <li><span className={styles.spn}>Isolation:</span> Leads to social withdrawal, increasing loneliness.</li>
                        <li><span className={styles.spn}>Impaired Decision-Making:</span> Makes it hard to focus and make choices.</li>
                        <li><span className={styles.spn}>Loss of Hope:</span> A deep sense of hopelessness and despair.</li>
                        <li><span className={styles.spn}>Self-Harm Risk:</span> Suicidal thoughts can escalate to self-harm.</li>
                        <li><span className={styles.spn}>Strained Relationships:</span> Secrecy and emotional pain impact relationships.</li>
                        <li><span className={styles.spn}>Physical Symptoms:</span> Can manifest as headaches and sleep disturbances.</li>
                        <li><span className={styles.spn}>Worsening of Conditions:</span> Exacerbates preexisting mental health issues.</li>
                        <li><span className={styles.spn}>Substance Abuse:</span> Some turn to substances as a coping mechanism.</li>
                    </ul>
                </div>
            </div>

            <div className={styles.treatment} id="Treatment">
                <div className={styles.para_cause3} data-aos="fade-up">
                    <ul>
                        <li><span className={styles.spn}>Crisis Helplines:</span> Immediate assistance from suicide hotlines or text services.</li>
                        <li><span className={styles.spn}>Therapy:</span> Counseling like CBT and DBT.</li>
                        <li><span className={styles.spn}>Medication:</span> Prescribed antidepressants or anti-anxiety drugs.</li>
                        <li><span className={styles.spn}>Inpatient Care:</span> Hospitalization for severe cases.</li>
                        <li><span className={styles.spn}>Outpatient Programs:</span> Partial hospitalization or intensive support.</li>
                        <li><span className={styles.spn}>Peer Support:</span> Involvement in support groups.</li>
                        <li><span className={styles.spn}>Safety Planning:</span> Creating a personal safety plan.</li>
                        <li><span className={styles.spn}>Family Involvement:</span> Family engagement in therapy.</li>
                        <li><span className={styles.spn}>Addressing Underlying Issues:</span> Treating contributing factors.</li>
                        <li><span className={styles.spn}>Follow-up Care:</span> Ongoing monitoring and therapy.</li>
                        <li><span className={styles.spn}>Lifestyle Changes:</span> Promoting a healthy lifestyle.</li>
                    </ul>
                </div>
                <h1 className={styles.cause_name3} data-aos="fade-up">Treatment and Support</h1>

            </div>

            <div className={styles.res} id="Resources">
                <h1 className={styles.name_res} data-aos="fade-up">Resources</h1>
                <div className={styles.videos} data-aos="fade-up">
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/b21zDVCyKWk?si=FbXAefJ4mcQ1o1Z8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/PW7Cx3iYYLk?si=RVekTh212bskXsno" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/0cwtNOq_k4w?si=Gm7rqOsEwbolbfKW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.frame}></iframe>
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
