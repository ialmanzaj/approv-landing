import React from 'react';
import Layout from '@/components/Layout';

const TermsPage = () => {
  return (
    <Layout title="Términos y Condiciones">
      <div className="max-w-screen-md mx-auto px-4 py-8 md:py-12">
        <article className="prose prose-indigo lg:prose-lg mx-auto text-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Términos y Condiciones</h1>
          <p className="text-sm text-gray-500 mb-8 text-center">Última actualización: 15 de Mayo de 2025</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">1. Introducción</h2>
          <p>
            ¡Bienvenido/a a Aprov! Estos Términos y Condiciones ("Términos") rigen el uso de nuestro sitio web y servicios
            (colectivamente, el "Servicio") operados por Aprov ("nosotros", "nos" o "nuestro").
          </p>
          <p>
            Por favor, lee estos Términos cuidadosamente antes de usar nuestro Servicio. Tu acceso y uso del Servicio está
            condicionado a tu aceptación y cumplimiento de estos Términos. Estos Términos se aplican a todos los visitantes,
            usuarios y otras personas que accedan o usen el Servicio.
          </p>
          <p>Al acceder o usar el Servicio, aceptas estar sujeto/a a estos Términos. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder al Servicio.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">2. Propiedad Intelectual</h2>
          <p>
            El Servicio y su contenido original, características y funcionalidades son y seguirán siendo propiedad exclusiva
            de Aprov y sus licenciantes. El Servicio está protegido por derechos de autor, marcas registradas
            y otras leyes tanto de [Tu País] como de países extranjeros. Nuestras marcas comerciales e imagen comercial no pueden ser
            utilizadas en conexión con ningún producto o servicio sin el consentimiento previo por escrito de Aprov.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">3. Conducta del Usuario</h2>
          <p>
            Aceptas no usar el Servicio para ningún propósito ilegal o prohibido bajo esta cláusula.
            Aceptas no usar el Servicio de ninguna manera que pueda dañar el Servicio, la reputación de Aprov,
            o el negocio general de Aprov.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">4. Limitación de Responsabilidad</h2>
          <p>
            En ningún caso Aprov, ni sus directores, empleados, socios, agentes, proveedores o
            afiliados, serán responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo
            sin limitación, pérdida de beneficios, datos, uso, fondo de comercio u otras pérdidas intangibles, resultantes de
            (i) tu acceso o uso o incapacidad para acceder o usar el Servicio; (ii) cualquier conducta o contenido de
            cualquier tercero en el Servicio; (iii) cualquier contenido obtenido del Servicio; y (iv) acceso no autorizado,
            uso o alteración de tus transmisiones o contenido, ya sea basado en garantía, contrato, agravio (incluyendo
            negligencia) o cualquier otra teoría legal, hayamos sido informados o no de la posibilidad de dicho daño,
            e incluso si un remedio establecido aquí se considera que ha fallado en su propósito esencial.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">5. Ley Aplicable</h2>
          <p>
            Estos Términos se regirán e interpretarán de acuerdo con las leyes de [Tu Jurisdicción],
            sin tener en cuenta sus disposiciones sobre conflicto de leyes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">6. Cambios</h2>
          <p>
            Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Términos en cualquier momento.
            Si una revisión es material, intentaremos proporcionar un aviso de al menos 30 días antes de que los nuevos términos
            entren en vigor. Lo que constituye un cambio material será determinado a nuestra entera discreción.
          </p>
          <p>
            Al continuar accediendo o usando nuestro Servicio después de que esas revisiones entren en vigor, aceptas estar
            sujeto/a a los términos revisados. Si no estás de acuerdo con los nuevos términos, por favor deja de usar el Servicio.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">7. Contáctanos</h2>
          <p>Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en [Tu Email/Página de Contacto].</p>
        </article>
      </div>
    </Layout>
  );
};

export default TermsPage; 