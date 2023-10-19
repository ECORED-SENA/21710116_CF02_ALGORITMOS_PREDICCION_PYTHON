<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Librerías Python
    
    .d-flex.flex-wrap.mb-5
      .col-lg-8.col-xl-7.order-2.order-lg-1.pe-lg-4.me-xl-auto(data-aos="fade-right")
        p Es importante destacar que una librería en el contexto de la programación corresponde a un conjunto de funcionalidades que permiten a determinado usuario llevar a cabo diferentes tareas que antes no podía realizar.
        p.fw-bold(style="background-color: #E1E2FC") Las librerías de Python dan respuesta a un conjunto de implementaciones que facilitan codificar dicho lenguaje, con el objetivo de crear interfaces independientes.
        p.mb-0 Cada librería de Python está conformada por diferentes módulos con funciones específicas y que varía dependiendo del sistema operativo en el que se utilizan.
      img.mx-auto.mb-4.mb-lg-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-1.svg" style="max-width: 400px" data-aos="fade-left")

</template>

<script>
export default {
  name: 'Tema2',
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
