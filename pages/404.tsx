import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { Home } from 'lucide-react';

export default function Custom404() {
    return (
        <Layout>
            <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-5">
                {/* Error Code */}
                <div className="text-[120px] font-bold text-[#141414] leading-none mb-6 max-sm:text-[80px]">
                    404
                </div>

                {/* Error Image */}
                <div className="w-[200px] h-[200px] mb-8 max-sm:w-[150px] max-sm:h-[150px]">
                    <img 
                        src="/404-illustration.png" 
                        alt="404 Error Illustration"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                            // Fallback if image doesn't exist
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>

                {/* Error Message */}
                <h1 className="font-semibold text-[42px] leading-[48px] text-[#141414] mb-4 max-sm:text-[32px] max-sm:leading-[40px]">
                    Página no encontrada
                </h1>

                {/* Error Description */}
                <p className="font-normal text-[20px] text-[#141414] max-w-[600px] mb-8 max-sm:text-lg">
                    Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
                </p>

                {/* Action Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-semibold text-sm text-white cursor-pointer bg-[#141414] px-[26px] py-4 rounded-[50px] border-2 border-solid border-black hover:bg-[#2a2a2a] transition-colors"
                >
                    <Home className="w-4 h-4" />
                    Volver al inicio
                </Link>
            </section>
        </Layout>
    );
} 