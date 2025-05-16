import React from 'react';
import Layout from '@/components/Layout';

const TermsPage = () => {
  return (
    <Layout title="Términos y Condiciones">
      <div className="max-w-screen-md mx-auto px-4 py-8 md:py-12">
        <article className="prose prose-indigo lg:prose-lg mx-auto text-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Términos y Condiciones</h1>
          <p className="text-sm text-gray-500 mb-8 text-center">Última actualización: 15 de mayo de 2025</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">1. Introducción</h2>
          <p>
            ¡Bienvenido/a a Aprov! Estos Términos y Condiciones ("Términos") rigen el uso de nuestro sitio web y servicios
            (colectivamente, el "Servicio") operados por Fibbonacci Labs LLC ("nosotros", "nos" o "nuestro").
          </p>
          <p>
            Por favor, lee estos Términos cuidadosamente antes de usar nuestro Servicio. Tu acceso y uso del Servicio está
            condicionado a tu aceptación y cumplimiento de estos Términos. Estos Términos se aplican a todos los visitantes,
            usuarios y otras personas que accedan o usen el Servicio.
          </p>
          <p>Al acceder o usar el Servicio, aceptas estar sujeto/a a estos Términos. Si no estás de acuerdo con alguna parte, no podrás acceder al Servicio.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">2. Propiedad Intelectual</h2>
          <p>
            El Servicio y su contenido original, características y funcionalidades son y seguirán siendo propiedad exclusiva
            de Fibbonacci Labs LLC y sus licenciantes. El Servicio está protegido por derechos de autor, marcas registradas
            y otras leyes tanto de Panamá como de otros países. Nuestras marcas comerciales e imagen comercial no pueden ser
            utilizadas en conexión con ningún producto o servicio sin nuestro consentimiento previo por escrito.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">3. Conducta del Usuario</h2>
          <p>
            Aceptas no usar el Servicio para ningún propósito ilegal o prohibido por estos Términos.
            También aceptas no usar el Servicio de manera que pueda dañar, desactivar o perjudicar su funcionamiento,
            o afectar negativamente a otros usuarios o a la reputación de Aprov.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">4. Limitación de Responsabilidad</h2>
          <p>
            En ningún caso Aprov, ni sus directores, empleados, socios, agentes, proveedores o
            afiliados, serán responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo
            sin limitación, pérdida de beneficios, datos, uso, fondo de comercio u otras pérdidas intangibles, resultantes de:
          </p>
          <p>(i) tu acceso o uso o incapacidad para acceder o usar el Servicio;</p>
          <p>(ii) cualquier conducta o contenido de cualquier tercero en el Servicio;</p>
          <p>(iii) cualquier contenido obtenido del Servicio; y</p>
          <p>(iv) acceso no autorizado, uso o alteración de tus transmisiones o contenido.</p>
          <p>Esto aplica incluso si hemos sido informados de la posibilidad de dichos daños.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">5. Ley Aplicable</h2>
          <p>
            Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República de Panamá,
            sin tener en cuenta sus disposiciones sobre conflicto de leyes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">6. Cambios</h2>
          <p>
            Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Términos en cualquier momento.
            Si una revisión es material, intentaremos notificarlo con al menos 30 días de anticipación antes de que los nuevos términos
            entren en vigor.
          </p>
          <p>
            Al continuar usando el Servicio después de que las revisiones entren en vigor, aceptas estar sujeto/a a los términos
            actualizados. Si no estás de acuerdo con los nuevos términos, por favor deja de usar el Servicio.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">7. Contáctanos</h2>
          <p>Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en:</p>
          <p>
            Fibbonacci Labs LLC<br />
            📧 support@aprov.tech<br />
            🌐 https://aprov.tech
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default TermsPage; 