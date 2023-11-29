<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p En los últimos años han cobrado gran importancia los datos y más aun con la llegada de las nuevas Tecnologías de la Información y la Comunicación, pues estas permiten de cierta manera el registro y el control de información de forma ágil, sencilla y efectiva.

    p Actualmente, existen muchas herramientas y aplicaciones para analizar y predecir los datos, este componente en particular reconoce algunos algoritmos que permiten dichos procesos. Su correcta aplicación facilita la toma de decisiones acertada en cualquier tipo de contexto.

    p.mb-5.fw-bold Una breve revisión de los temas vistos se encuentra en el siguiente esquema.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
