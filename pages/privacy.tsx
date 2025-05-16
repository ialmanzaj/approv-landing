import React from 'react';
import Layout from '@/components/Layout';

const PrivacyPolicyPage = () => {
  return (
    <Layout title="Política de Privacidad">
      <div className="max-w-screen-md mx-auto px-4 py-8 md:py-12">
        <article className="prose prose-indigo lg:prose-lg mx-auto text-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Política de Privacidad</h1>
          <p className="text-sm text-gray-500 mb-8 text-center">Fecha de Entrada en Vigor: 16/05/2025</p>

          <p className="mb-4">
            Fibbonacci Labs LLC ("nosotros", "nos", o "nuestro") se compromete a proteger su privacidad y sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos su información cuando interactúa con nuestra plataforma Aprov y nuestras funciones de mensajería de WhatsApp Business.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">1. Información que Recopilamos</h2>
          <p>Podemos recopilar y procesar los siguientes tipos de datos personales:</p>
          <ul className="list-disc list-inside my-2 pl-4">
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono (incluido el número de WhatsApp)</li>
            <li>Decisiones de aprobación y marcas de tiempo</li>
            <li>Preferencias de comunicación</li>
            <li>Metadatos como la dirección IP y datos del navegador (si aplica)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">2. Cómo Usamos Su Información</h2>
          <p>Usamos su información para:</p>
          <ul className="list-disc list-inside my-2 pl-4">
            <li>Enviar solicitudes de aprobación, actualizaciones y recordatorios a través de WhatsApp y correo electrónico</li>
            <li>Rastrear y auditar las decisiones de aprobación</li>
            <li>Responder a consultas de servicio al cliente</li>
            <li>Mejorar y personalizar nuestros servicios</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">3. Base Legal para el Procesamiento (GDPR)</h2>
          <p>Procesamos sus datos personales bajo las siguientes bases legales:</p>
          <ul className="list-disc list-inside my-2 pl-4">
            <li>Consentimiento – Para enviarle mensajes de WhatsApp y notificaciones por correo electrónico.</li>
            <li>Necesidad contractual – Cuando el procesamiento es necesario para prestar los servicios que ha solicitado (por ejemplo, gestionar aprobaciones).</li>
            <li>Intereses legítimos – Para mantener registros de auditoría y mejorar nuestra plataforma de manera que no anulen sus derechos de privacidad.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">4. Mensajería de WhatsApp y Consentimiento</h2>
          <p>Al optar por participar, acepta recibir mensajes relacionados con aprobaciones a través de WhatsApp de Fibbonacci Labs LLC. Estos mensajes pueden incluir:</p>
          <ul className="list-disc list-inside my-2 pl-4">
            <li>Solicitudes de aprobación</li>
            <li>Recordatorios o escalaciones</li>
            <li>Confirmaciones de decisiones enviadas</li>
          </ul>
          <p className="mt-2">
            Puede retirar su consentimiento en cualquier momento respondiendo STOP en WhatsApp o contactándonos en support@aprov.tech.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">5. Retención de Datos</h2>
          <p>
            Retenemos los datos personales solo durante el tiempo necesario para cumplir con los fines descritos anteriormente. Los datos pueden conservarse por más tiempo si así lo exigen las obligaciones legales, los requisitos de auditoría o los procesos de resolución de disputas. Cuando ya no sean necesarios, sus datos se eliminarán o anonimizarán de forma segura.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">6. Transferencias Internacionales de Datos</h2>
          <p>
            Su información puede almacenarse y procesarse en servidores ubicados fuera de su país de residencia, incluidos los Estados Unidos. Al transferir datos internacionalmente, nos aseguramos de que existan las salvaguardas adecuadas, tales como:
          </p>
          <ul className="list-disc list-inside my-2 pl-4">
            <li>Cláusulas Contractuales Tipo (CCT) aprobadas por la Comisión Europea</li>
            <li>Otros mecanismos legales según las regulaciones aplicables</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">7. Seguridad de los Datos</h2>
          <p>Utilizamos medidas de seguridad técnicas y organizativas para proteger sus datos personales, que incluyen:</p>
          <ul className="list-disc list-inside my-2 pl-4">
            <li>Cifrado de datos en tránsito y en reposo</li>
            <li>Controles de acceso y mecanismos de autenticación</li>
            <li>Auditorías de seguridad periódicas y gestión de vulnerabilidades</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">8. Sus Derechos Bajo el GDPR y las Leyes Locales</h2>
          <p>Dependiendo de su jurisdicción, tiene derecho a:</p>
          <ul className="list-disc list-inside my-2 pl-4">
            <li>Acceder a sus datos personales</li>
            <li>Solicitar la corrección o eliminación</li>
            <li>Retirar el consentimiento</li>
            <li>Oponerse o restringir cierto procesamiento</li>
            <li>Portabilidad de datos</li>
          </ul>
          <p className="mt-2">Para ejercer cualquiera de estos derechos, envíenos un correo electrónico a support@aprov.tech.</p>
          <p className="mt-2">Si es residente de la UE, también puede presentar una queja ante su Autoridad de Protección de Datos (APD) local.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">9. Información de Contacto</h2>
          <p>Para preguntas o inquietudes relacionadas con esta Política de Privacidad o nuestras prácticas de datos, contáctenos en:</p>
          <p className="mt-2">
            <strong>Fibbonacci Labs LLC</strong><br />
            Correo electrónico: support@aprov.tech<br />
            Sitio web: <a href="https://www.aprov.tech" target="_blank" rel="noopener noreferrer">https://www.aprov.tech</a>
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage; 