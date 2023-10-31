"use client"
import React, { useEffect } from 'react';
import styles from "@/app/styles/issue.module.css";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Add AOS styles

const Issues = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
    }, []);

    return (
        <>
            <div className={styles.issue} data-aos="fade-up" id="Issues">
                <h1 className={styles.find}>Select a Topic and Begin Your Healing</h1>

                <div className={styles.collage}>
                    <div className={styles.img1} data-aos="fade-up">
                        <Image src="/suicide.jpg" alt="main image" width={470} height={600} className={styles.width}/>
                        <div className={styles.layer}>
                            <h1 className={styles.name_met}>Suicide</h1>
                            <div className={styles.arr}>
                                <Link href="/suicide">
                                    <Image src="/arrow.png" alt="main image" width={50} height={50} className={styles.arrow} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.img1} data-aos="fade-up">
                        <Image src="/addiction.jpg" alt="main image" width={470} height={600} className={styles.width}/>
                        <div className={styles.layer}>
                            <h1 className={styles.name_met}>Addiction</h1>
                            <div className={styles.arr}>
                                <Link href="/addiction">
                                    <Image src="/arrow.png" alt="main image" width={50} height={50} className={styles.arrow} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.img1} data-aos="fade-up">
                        <Image src="/anxietys.jpg" alt="main image" width={470} height={600} className={styles.width}/>
                        <div className={styles.layer}>
                            <h1 className={styles.name_met}>Anxiety</h1>
                            <div className={styles.arr}>
                                <Link href="/anxiety">
                                    <Image src="/arrow.png" alt="main image" width={50} height={50} className={styles.arrow} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.img1} data-aos="fade-up">
                        <Image src="/depressions.jpg" alt="main image" width={470} height={600} className={styles.width}/>
                        <div className={styles.layer}>
                            <h1 className={styles.name_met}>Depression</h1>
                            <div className={styles.arr}>
                                <Link href="/depression">
                                    <Image src="/arrow.png" alt="main image" width={50} height={50} className={styles.arrow} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.img1} data-aos="fade-up">
                        <Image src="/stresss.jpg" alt="main image" width={470} height={600} className={styles.width}/>
                        <div className={styles.layer}>
                            <h1 className={styles.name_met}>Stress</h1>
                            <div className={styles.arr}>
                                <Link href="/stress">
                                    <Image src="/arrow.png" alt="main image" width={50} height={50} className={styles.arrow} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.img1} data-aos="fade-up">
                        <Image src="/bipolar.jpg" alt="main image" width={470} height={600} className={styles.width}/>
                        <div className={styles.layer}>
                            <h1 className={styles.name_met}>Bipolar Disorder</h1>
                            <div className={styles.arr}>
                                <Link href="/bipolar">
                                    <Image src="/arrow.png" alt="main image" width={50} height={50} className={styles.arrow} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={styles.line} />
        </>
    );
};

export default Issues;
