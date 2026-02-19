<script setup>
import profile from '~/data/profile.json'

useHead({
  title: 'Aviso de Privacidad',
  meta: [
    { name: 'description', content: 'Aviso de Privacidad de Jose Miguel Rosas Jimenez - MikeRosasDev' }
  ]
})
</script>

<template>
  <main class="bg-tech-black text-white min-h-screen py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-8 text-tech-purple">
        Aviso de Privacidad
      </h1>

      <div class="space-y-6 text-tech-gray leading-relaxed">
        <p>
          Última actualización: {{ new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </p>

        <p>
          En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México,
          <strong>{{ profile.basics.name }}</strong> (en adelante "el Responsable"), con domicilio en
          {{ profile.basics.location }}, pone a su disposición el presente Aviso de Privacidad.
        </p>

        <h2 class="text-xl font-bold text-white mt-8 mb-4">1. Datos Personales Recabados</h2>
        <p>
          El presente sitio web (mikerosasdev.com) es un portafolio profesional informativo.
          Por lo general, no recabamos datos personales de forma automática a través de formularios en el sitio,
          salvo que usted decida contactarnos voluntariamente a través de los enlaces de correo electrónico o mensajería (WhatsApp, LinkedIn) proporcionados.
        </p>
        <p>
          En caso de contactarnos, los datos que podríamos tratar incluyen:
        </p>
        <ul class="list-disc list-inside ml-4 space-y-2">
          <li>Nombre completo.</li>
          <li>Correo electrónico.</li>
          <li>Número de teléfono (si nos contacta por WhatsApp).</li>
          <li>Cualquier otro dato que usted decida compartir en su mensaje.</li>
        </ul>

        <h2 class="text-xl font-bold text-white mt-8 mb-4">2. Finalidad del Tratamiento de Datos</h2>
        <p>
          Los datos personales que nos proporcione serán utilizados exclusivamente para las siguientes finalidades:
        </p>
        <ul class="list-disc list-inside ml-4 space-y-2">
          <li>Responder a sus solicitudes de información, cotizaciones o propuestas de colaboración.</li>
          <li>Mantener comunicación profesional relacionada con servicios de desarrollo de software o consultoría.</li>
        </ul>

        <h2 class="text-xl font-bold text-white mt-8 mb-4">3. Uso de Cookies y Tecnologías de Rastreo</h2>
        <p>
          Este sitio web puede utilizar cookies técnicas necesarias para su correcto funcionamiento.
          No utilizamos cookies publicitarias ni de rastreo invasivo.
          Usted puede configurar su navegador para deshabilitar las cookies, aunque esto podría afectar la navegación en el sitio.
        </p>

        <h2 class="text-xl font-bold text-white mt-8 mb-4">4. Transferencia de Datos</h2>
        <p>
          Sus datos personales no serán transferidos, difundidos, ni distribuidos a terceros, salvo en los casos estipulados por la Ley
          o cuando sea necesario para cumplir con obligaciones legales o contractuales derivadas de nuestra relación profesional.
        </p>

        <h2 class="text-xl font-bold text-white mt-8 mb-4">5. Derechos ARCO</h2>
        <p>
          Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso).
          Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación);
          que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación);
          así como oponerse al uso de sus datos personales para fines específicos (Oposición).
        </p>
        <p>
          Para ejercer sus derechos ARCO, puede enviar una solicitud al correo electrónico:
          <a :href="profile.basics.email" class="text-tech-purple hover:text-tech-red transition-colors">
            {{ profile.basics.email.replace('mailto:', '') }}
          </a>
        </p>

        <h2 class="text-xl font-bold text-white mt-8 mb-4">6. Cambios al Aviso de Privacidad</h2>
        <p>
          El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales;
          de nuestras propias necesidades por los servicios que ofrecemos; de nuestras prácticas de privacidad; o por otras causas.
          Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad a través de este mismo sitio web.
        </p>

        <div class="mt-12 pt-8 border-t border-white/10">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-tech-purple hover:text-white transition-colors">
            <Icon name="mdi:arrow-left" />
            Volver al inicio
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>