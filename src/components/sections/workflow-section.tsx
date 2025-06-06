"use client"

import { ArrowRight, CheckCircle, File, Mail, Send, ShieldCheck, ThumbsUp, UserCheck, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StepCard = ({ step, title, description, benefits, children, isLast = false }: { step: string, title: string, description: string, benefits: { icon: React.ElementType, text: string }[], children: React.ReactNode, isLast?: boolean }) => (
  <div className="relative grid md:grid-cols-2 gap-16 items-center">
    {/* Finalized Connecting Line */}
    {!isLast && (
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-full mt-10 bg-gradient-to-b from-slate-200 via-indigo-200/50 to-transparent"></div>
    )}
    
    <div className="md:order-last">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/40 via-white to-slate-100/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-3xl shadow-2xl shadow-slate-300/20 transition-all duration-300 group-hover:scale-105">
          <div className="transition-transform duration-300 group-hover:scale-95">
            {children}
          </div>
        </div>
      </div>
    </div>
    <div className="space-y-6 md:order-first">
      <span className="text-sm font-bold text-indigo-700 bg-indigo-100/80 border border-indigo-200/60 px-4 py-2 rounded-full shadow-lg shadow-indigo-100/60">{step}</span>
      <h3 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">{title}</h3>
      <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
      <div className="space-y-3 pt-3 border-t border-slate-200/80">
        {benefits.map((benefit, i) => {
          const Icon = benefit.icon;
          return (
             <div key={i} className="flex items-center gap-3 group/benefit">
              <div className="w-7 h-7 flex items-center justify-center bg-whatsapp/10 text-whatsapp rounded-full border border-whatsapp/20 transition-all duration-300 group-hover/benefit:bg-whatsapp/20 group-hover/benefit:scale-110">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-slate-700 font-medium transition-colors duration-300 group-hover/benefit:text-slate-900">{benefit.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  </div>
);

const WhatsAppMessage = ({ from, message, time }: { from: string, message: string, time: string }) => (
  <div className={`p-3.5 rounded-xl max-w-[85%] shadow-lg border ${from === 'Tú' ? 'bg-indigo-50/80 border-indigo-200/60 shadow-indigo-100/70 ml-auto' : 'bg-white/80 border-slate-200/60 shadow-slate-200/50'}`}>
    <div className={`font-bold text-sm mb-1.5 ${from === 'Tú' ? 'text-indigo-700' : 'text-whatsapp'}`}>{from}</div>
    <p className="text-slate-800 text-sm leading-snug">{message}</p>
    <div className="text-right text-[11px] font-medium text-slate-400 mt-2">{time}</div>
  </div>
);

const ApprovalUI = () => (
    <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200/80">
        <h4 className="font-bold text-slate-900 text-xl text-center mb-6">¿Apruebas este documento?</h4>
        <div className="grid grid-cols-2 gap-4">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/40 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-base transition-all duration-300 hover:scale-[1.03]">
                Aprobar <CheckCircle className="w-5 h-5" />
            </Button>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/40 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-base transition-all duration-300 hover:scale-[1.03]">
                Rechazar <XCircle className="w-5 h-5" />
            </Button>
        </div>
    </div>
);

const AuditTrail = () => (
  <div className="bg-slate-50/80 p-6 rounded-2xl">
    <div className="flex items-center gap-4 mb-5">
       <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center border-2 border-emerald-200 shadow-xl shadow-emerald-100/80">
        <CheckCircle className="w-7 h-7 text-emerald-600" />
      </div>
      <div>
        <div className="font-bold text-slate-800 text-lg">Solicitud Aprobada</div>
        <div className="text-sm text-slate-500">Registro de auditoría finalizado</div>
      </div>
    </div>
    <div className="border-l-2 border-slate-300/60 ml-7 pl-10 space-y-6 py-4 relative">
      <div className="absolute -left-[9px] top-4 w-4 h-4 bg-white border-2 border-slate-300/60 rounded-full"></div>
      <div className="absolute -left-[9px] bottom-4 w-4 h-4 bg-white border-2 border-slate-300/60 rounded-full"></div>
       <div className="flex items-center gap-3 text-sm">
        <div className="w-8 h-8 rounded-full bg-slate-200/80 flex items-center justify-center border border-slate-300/60"><UserCheck className="w-4 h-4 text-slate-600" /></div>
        <div><span className="font-semibold text-slate-800">Carlos Vera (Finanzas)</span> aprobó.</div>
        <div className="text-xs font-medium text-slate-400 ml-auto">4:08 PM</div>
      </div>
       <div className="flex items-center gap-3 text-sm">
        <div className="w-8 h-8 rounded-full bg-slate-200/80 flex items-center justify-center border border-slate-300/60"><Mail className="w-4 h-4 text-slate-600" /></div>
        <div>Notificación enviada a Contabilidad.</div>
         <div className="text-xs font-medium text-slate-400 ml-auto">4:09 PM</div>
      </div>
    </div>
  </div>
);


export function WorkflowSection() {
  return (
    <section className="py-32" id="workflow">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-4xl mx-auto mb-28">
          <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-5">Un flujo de trabajo diseñado para la velocidad.</h2>
          <p className="text-xl text-slate-600 leading-relaxed">Sin instalaciones, sin apps complicadas. Solo la eficiencia de las herramientas que ya usas, ahora supercargada para una productividad sin precedentes.</p>
        </div>
        
        <div className="space-y-32">
          <StepCard
            step="Paso 1: Iniciar"
            title="Envía la solicitud desde donde estés."
            description="Crea una solicitud de aprobación en segundos y envíala a través de WhatsApp o correo electrónico directamente a las personas responsables."
            benefits={[
              { icon: Send, text: "Integración nativa con WhatsApp y Email" },
              { icon: CheckCircle, text: "Confirmación de envío instantánea" }
            ]}
          >
            <div className="p-8 space-y-4">
              <WhatsAppMessage from="Tú" message="Por favor revisar y aprobar esta solicitud de compra urgente. Gracias!" time="4:05 PM" />
              <WhatsAppMessage from="Aprov Bot" message="¡Entendido! Enviando a Carlos Vera (Finanzas) para su aprobación." time="4:06 PM"/>
            </div>
          </StepCard>

          <StepCard
            step="Paso 2: Decidir"
            title="Decisiones rápidas, sin fricción alguna."
            description="Los responsables reciben un enlace único y seguro. Abren, revisan y aprueban (o rechazan) con un solo clic desde cualquier dispositivo."
            benefits={[
              { icon: CheckCircle, text: "Aprobación con un solo clic" },
              { icon: ShieldCheck, text: "Enlaces únicos y seguros por solicitud" }
            ]}
          >
            <ApprovalUI />
          </StepCard>

          <StepCard
            step="Paso 3: Documentar"
            title="Todo queda registrado, al instante."
            description="Una vez tomada la decisión, Aprov notifica a todos los involucrados y genera un registro de auditoría completo y auditable."
            benefits={[
              { icon: File, text: "Registro de auditoría automático" },
              { icon: Mail, text: "Notificaciones de estado a todos los interesados" }
            ]}
            isLast={true}
          >
            <AuditTrail />
          </StepCard>
        </div>

      </div>
    </section>
  );
} 