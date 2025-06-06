import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    Twitter,
    Linkedin,
    Mail
} from 'lucide-react';
import { Navbar } from './header';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
    const pageTitle = title ? `${title} - APROV` : 'APROV - Automatiza Aprobaciones';
    const pageDescription = description || "Automatiza cada aprobación, reduce semanas a minutos con Aprov.";

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div className="min-h-screen w-full font-sans flex flex-col bg-white">
                {/* HEADER */}
                <Navbar />

                {/* MAIN CONTENT AREA */}
                <main className="flex-grow w-full">
                    {children}
                </main>

                {/* FOOTER */}
                <Footer />
            </div>
        </>
    );
};

export default Layout; 