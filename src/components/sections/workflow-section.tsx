"use client"

import { ArrowRight, CheckCircle, Mail, Send, ThumbsUp, UserCheck, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StepCard = ({ step, title, description, children }: { step: string, title: string, description: string, children: React.ReactNode }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className="md:order-last">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/80 via-white to-slate-100/80 rounded-3xl blur-xl opacity-50"></div>
        <div className="relative bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-200/80">
          {children}
        </div>
      </div>
    </div>
    <div className="space-y-4 md:order-first">
      <span className="text-sm font-bold text-indigo-600 bg-indigo-100/80 border border-indigo-200/80 px-4 py-1.5 rounded-full">{step}</span>
      <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h3>
      <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhatsAppMessage = ({ from, message }: { from: string, message: string }) => (
  <div className="bg-white p-3 rounded-xl max-w-[80%] shadow-md border border-slate-100">
    <div className="font-bold text-sm text-indigo-500 mb-1">{from}</div>
    <p className="text-slate-700 text-sm">{message}</p>
  </div>
);

const ApprovalUI = () => (
  <div className="bg-slate-50 p-6">
    <h4 className="font-bold text-slate-800 mb-2">Revisar Solicitud de Compra #AB-123</h4>
    <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-3 mb-4">
      <div className="flex justify-between text-sm"><span className="text-slate-500">Solicitante:</span><span className="font-medium text-slate-800">Ana Lopez</span></div>
      <div className="flex justify-between text-sm"><span className="text-slate-500">Total:</span><span className="font-medium text-slate-800">$4,500.00</span></div>
      <div className="flex justify-between text-sm"><span className="text-slate-500">Proveedor:</span><span className="font-medium text-slate-800">Tech Solutions Inc.</span></div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <Button variant="outline" className="w-full bg-red-50 text-red-600 hover:bg-red-100 border-red-200"><XCircle className="w-4 h-4 mr-2" /> Rechazar</Button>
      <Button className="w-full bg-emerald-500 hover:bg-emerald-600"><ThumbsUp className="w-4 h-4 mr-2" /> Aprobar</Button>
    </div>
  </div>
);

const AuditTrail = () => (
  <div className="bg-slate-50 p-6 space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border-2 border-emerald-200">
        <CheckCircle className="w-5 h-5 text-emerald-600" />
      </div>
      <div>
        <div className="font-semibold text-slate-800">Solicitud Aprobada</div>
        <div className="text-xs text-slate-500">Hace 2 minutos</div>
      </div>
    </div>
    <div className="border-l-2 border-slate-200 ml-5 pl-8 space-y-4 py-2">
       <div className="flex items-center gap-3 text-sm">
        <UserCheck className="w-4 h-4 text-slate-500" />
        <div><span className="font-medium text-slate-700">Carlos Vera (Finanzas)</span> aprobó.</div>
      </div>
       <div className="flex items-center gap-3 text-sm">
        <Mail className="w-4 h-4 text-slate-500" />
        <div>Notificación enviada a Contabilidad.</div>
      </div>
    </div>
  </div>
);


export function WorkflowSection() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">Un flujo de trabajo simple y poderoso.</h2>
          <p className="text-xl text-slate-600 leading-relaxed">Sin instalaciones, sin apps complicadas. Solo la eficiencia de WhatsApp y el email que ya conoces, ahora supercargada.</p>
        </div>

        {/* Step 1 */}
        <StepCard
          step="Paso 1: Envía la Solicitud"
          title="Inicia la aprobación desde donde estés."
          description="Crea una solicitud de aprobación en segundos y envíala a través de WhatsApp o correo electrónico directamente a las personas responsables. Se acabó perseguir gente."
        >
          <div className="p-6 space-y-4">
            <WhatsAppMessage from="Tú" message="Por favor revisar y aprobar esta solicitud de compra urgente. Gracias!" />
            <div className="flex justify-end">
              <WhatsAppMessage from="Aprov Bot" message="¡Entendido! Enviando a Carlos Vera para su aprobación." />
            </div>
          </div>
        </StepCard>

        {/* Step 2 */}
        <StepCard
          step="Paso 2: Aprueba con un Clic"
          title="Decisiones rápidas, sin fricción."
          description="Los responsables reciben un enlace único y seguro. Abren, revisan y aprueban (o rechazan) con un solo clic desde su celular o computadora. Sin logins, sin complicaciones."
        >
          <ApprovalUI />
        </StepCard>

        {/* Step 3 */}
        <StepCard
          step="Paso 3: Registro y Notificación"
          title="Todo queda documentado, al instante."
          description="Una vez tomada la decisión, Aprov notifica a todos los involucrados y genera un registro de auditoría completo y auditable. Transparencia total, cero esfuerzo."
        >
          <AuditTrail />
        </StepCard>

      </div>
    </section>
  );
} 