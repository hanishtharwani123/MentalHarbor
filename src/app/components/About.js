import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Add AOS styles
import styles from "@/app/styles/about.module.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
    }, []);

    return (
        <>
            <div className={styles.about} id="About">
                <h1 className={styles.head} data-aos="fade-up">Why We Care</h1>
                <div className={styles.grid}>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Meet the Founder</h1>
                        <p className={styles.paras}>
                            Hello, I'm Hanish Tharwani, a dedicated college student pursuing a degree in Computer Science. In this fast-paced and competitive world, I've witnessed firsthand the growing concerns around mental health. It's not just a prevalent issue; it's a pressing one, affecting countless individuals around us, including students like me.
                        </p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Why Mental Health Matters to Us</h1>
                        <p className={styles.paras}>
                            In today's society, the demands and expectations placed on us can sometimes become overwhelming. The relentless pursuit of success, the constant comparison on social media, and the stressors of academic and personal life can take a toll on our mental well-being. It's no surprise that many of us find ourselves battling feelings of stress, anxiety, and depression.
                        </p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Our Vision and Mission</h1>
                        <p className={styles.paras}>
                            Driven by the belief that mental health is a cornerstone of overall well-being, I decided to channel my skills in full-stack development to create something meaningful. That's how this website came into existence. Our mission is simple yet profound: to provide a safe haven where anyone, regardless of their background or age, can find support, resources, and solace.
                        </p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Our Commitment</h1>
                        <p className={styles.paras}>
                            We're committed to breaking the stigma surrounding mental health. We want to create a space where you can openly discuss your feelings, fears, and triumphs. Here, you'll discover a community that listens, understands, and supports you on your journey to better mental health.
                        </p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Our Approach</h1>
                        <p className={styles.paras}>
                            This website isn't just about technology; it's about empathy and understanding. We're here to offer a wealth of resources, from informative articles to interactive forums, all designed to help you better understand and manage your mental health. We've also collaborated with mental health professionals to provide accurate, evidence-based information.
                        </p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Join Our Mission</h1>
                        <p className={styles.paras}>
                            Mental health is a shared responsibility, and together, we can make a difference. I invite you to join us on this journey. Explore our content, engage with our community, and reach out if you need assistance or just want to connect.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
