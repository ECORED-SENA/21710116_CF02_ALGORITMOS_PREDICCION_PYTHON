<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .d-flex.flex-wrap.mb-5
      .col-lg-8.order-2.order-lg-1.pe-lg-4(data-aos="fade-right")
        p <b style="background-color: #E1E2FC">¿Sabías que a través de los años se ha ido aumentando el interés y la utilización del <em>Machine Learning</em>?</b> Así es, su implementación cada vez es más constante; puede decirse que esta se ha posicionado como una de las disciplinas que se están aplicando casi en todas las áreas de investigación académica e industrial.
        p <em>Machine Learning</em> hace referencia a un grupo de algoritmos que permiten realizar la identificación de patrones presentados en colección de datos, a partir de los cuales se pueden generar diversas estructuras y modelos que permiten la predicción de información que no había podido ser analizada.
        p.mb-0 Es por ello que se han generado una serie de herramientas mediante las cuales se pueden acceder a métodos predictivos muy poderosos. Un ejemplo claro de ello es el lenguaje de programación Python. El siguiente video presenta, de modo introductorio, un poco más sobre este concepto y el lenguaje a trabajar para realizar algoritmos de inteligencia artificial.
      img.mx-auto.mb-4.mb-lg-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/img-1.svg" style="max-width: 400px" data-aos="fade-left")
    
    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aB_4x9uOhgA?si=ck68peWWVljDGvy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
