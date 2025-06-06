import { MessageSquare, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    const footerNav = [
        {
            title: "Producto",
            items: [
                { name: "Características", href: "#" },
                { name: "Precios", href: "#" },
                { name: "Casos de Éxito", href: "#" },
                { name: "Seguridad", href: "#" }
            ]
        },
        {
            title: "Empresa",
            items: [
                { name: "Sobre Nosotros", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Contacto", href: "mailto:hola@aprov.tech" }
            ]
        },
        {
            title: "Legal",
            items: [
                { name: "Términos de Servicio", href: "#" },
                { name: "Política de Privacidad", href: "#" }
            ]
        }
    ];
    
    const socialLinks = [
        { name: "Twitter", icon: Twitter, href: "#" },
        { name: "LinkedIn", icon: Linkedin, href: "#" },
        { name: "GitHub", icon: Github, href: "#" }
    ];

    return (
        <footer className="bg-white">
            {/* Pre-footer CTA */}
            <div className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative isolate overflow-hidden bg-slate-800 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
                            Simplifica tus aprobaciones hoy mismo
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                            Deja atrás los procesos manuales y descubre una forma más rápida y segura de gestionar las decisiones de tu equipo.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-transform duration-200 hover:scale-105"
                            >
                                Empezar ahora
                            </a>
                            <a href="#" className="text-base font-semibold leading-6 text-white group">
                                Hablar con ventas <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                                    <stop stopColor="#4f46e5" />
                                    <stop offset={1} stopColor="#312e81" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 pb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-12">
                        <Link href="/" className="text-2xl font-bold text-slate-900">
                           Aprov
                        </Link>
                        <p className="text-base leading-relaxed text-slate-600 mt-4 max-w-sm">
                            La forma más rápida de gestionar, auditar y decidir sobre las aprobaciones internas de tu empresa.
                        </p>
                        <div className="mt-6 flex gap-x-4">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.href} className="text-slate-400 hover:text-slate-500">
                                    <span className="sr-only">{link.name}</span>
                                    <link.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerNav.map(nav => (
                        <div key={nav.title}>
                            <h3 className="text-sm font-semibold leading-6 text-slate-900">{nav.title}</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                {nav.items.map(item => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm leading-6 text-slate-600 hover:text-slate-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                {/* Copyright Bar */}
                <div className="mt-16 border-t border-slate-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-slate-500">&copy; {new Date().getFullYear()} Fibbonacci Labs LLC. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
} 