"use client"
import React from 'react';
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Header from "@/app/components/header";
import Contact from "@/app/components/contact"
import Articles from "@/app/components/articles"
import Footer from "@/app/components/footer"
import Issues from "@/app/components/issues";

const Page = () => {
    return (
        <>
            <Header/>
           <Hero />
            <About />
            <Issues/>
            <Articles/>
            <Contact />
            <Footer />
        </>
    );
};

export default Page;