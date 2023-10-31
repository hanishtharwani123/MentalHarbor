import React, { useEffect } from 'react';
import styles from "@/app/styles/articles.module.css";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Add AOS styles

const Articles = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
    }, []);

    return (
        <>
            <div className={styles.art} data-aos="fade-up" id="Articles">
                <h1 className={styles.art_name}>Articles</h1>

                <div className={styles.grid}>
                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/depress.jpg" alt="main image" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://pubmed.ncbi.nlm.nih.gov/25963497/" className={styles.head_name}>Stress, anxiety and depression among medical undergraduate students and their socio-demographic correlates
                            </Link>
                            <p className={styles.para_men}>Although several studies have demonstrated the health benefits of regular physical exercise, few epidemiological studies have investigated the nature of the association between different aspects of physical exercise and mental health, and little is known regarding the possible li …</p>
                        </div>
                    </div>

                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/sucide.jpg" alt="main image" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://pubmed.ncbi.nlm.nih.gov/32299418/" className={styles.head_name}>Physical exercise, mental health problems, and suicide attempts in university students
                            </Link>
                            <p className={styles.para_men}>We analyse the direct and indirect effects of past mental health on present physical health and past physical health on present mental health using lifestyle choices and social capital in a mediation framework. ...Health policies a …</p>
                        </div>
                    </div>

                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/medi.jpg" alt="main image" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://pubmed.ncbi.nlm.nih.gov/29132081/" className={styles.head_name}>The relationship between physical and mental health: A mediation analysis
                            </Link>
                            <p className={styles.para_men}>RESULTS: More than half of the respondents were affected by depression (51.3%), anxiety (66.9%) and stress (53%). Morbidity was found to be more in 5th-semester students rather than students of the 2nd semester. ...CONCLUSIONS: A substantial proportion of medic …</p>
                        </div>
                    </div>

                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/covid.jpg" alt="main image" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://pubmed.ncbi.nlm.nih.gov/34214386/" className={styles.head_name}>An overview of mental health during the COVID-19 pandemic.
                            </Link>
                            <p className={styles.para_men}>Since its initial outbreak in late 2019, the COVID-19 pandemic has profoundly affected the global community. In addition to the negative health consequences of contracting COVID-19, the implementation of strict quarantine and lockdown measures h …</p>
                        </div>
                    </div>

                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/youth.jpg" alt="main image" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://pubmed.ncbi.nlm.nih.gov/32132255/" className={styles.head_name}>The Impact of Social Media on Youth Mental Health: Challenges and Opportunities.
                            </Link>
                            <p className={styles.para_men}>The technology landscape has rapidly evolved in recent years, with social media now playing a central role in the lives of youth. Social media has created both significant new challenges and exciting opportunities. Research is beginning to uncover how specific social media …
                            </p>
                        </div>
                    </div>

                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/DigitalStress.jpg" alt="main image" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://pubmed.ncbi.nlm.nih.gov/29093037/" className={styles.head_name}>Digital Media, Anxiety, and Depression in Children.
                            </Link>
                            <p className={styles.para_men}>There are growing concerns about the impact of digital technologies on children's emotional well-being, particularly regarding fear, anxiety, and depression. ...Early research has explored the impact of traditional media (eg, television, movies) on children's …</p>
                        </div>
                    </div>

                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/Main-stress.jpg" alt="main image" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://pubmed.ncbi.nlm.nih.gov/15527535/" className={styles.head_name}>The relation of depression and anxiety to life-stress and achievement in students
                            </Link>
                            <p className={styles.para_men}>
                                OBJECTIVES: An apparent increase in seriously disturbed students consulting student health services in the UK has led to concern that increasing financial difficulties and other outside pressures may affect student mental health and academic performanc …</p>
                        </div>
                    </div>

                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/future.jpg" alt="main image" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://pubmed.ncbi.nlm.nih.gov/35660923/" className={styles.head_name}>Characteristics of episodic future thinking in anxiety: A systematic review and meta-analysis
                            </Link>
                            <p className={styles.para_men}>Deficits in episodic future thinking (EFT) characteristics such as detail/vividness, specificity and the use of mental imagery are associated with psychopathology. ...This finding is consistent with the
                                Attentional Control and Contrast Avoidance Theories of anxiety, …</p>
                        </div>
                    </div>

                </div>

                <Link href="https://pubmed.ncbi.nlm.nih.gov/?term=mental+health" className={styles.btn_more}><button className={styles.bt}>For More Articles</button></Link>
            </div>

            <hr className={styles.line}/>

        </>
    );
};

export default Articles;