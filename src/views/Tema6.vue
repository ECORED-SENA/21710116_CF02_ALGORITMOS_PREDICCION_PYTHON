<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Informe final con Python

    p.mb-5 Anaconda es una suite compleja para la ciencia de datos, las aplicaciones de aprendizaje automático, el procesamiento de datos y las predicciones, etc., es de código abierto y abarca gran cantidad de librerías para el desarrollo con Python. Una de las principales utilidades de Python aparte de ser un lenguaje de programación interesante es que proporciona todas las herramientas necesarias para realizar las tareas de programación, estadística, comunicación y transmisión de conocimiento.

    .d-flex.flex-wrap.mb-5
      img.mx-auto.mb-4.mb-lg-auto.col-lg-3(src="@/assets/curso/temas/tema6/img-1.png" style="max-width: 400px" data-aos="fade-left")
      .col-lg-9.ps-lg-4.me-xl-auto
        .p-md-4.p-3.mb-0.tarjeta(style="background-color: #E2F8F0" data-aos="fade-right")
          p Entre los paquetes de Anaconda existe <b style="background-color: #E1E2FC"><em>JupyterLab</em></b> que es un editor basado en la Web con el que se crean notebooks, permite documentar los proyectos de la ciencia de datos, puesto que integra código fuente, ecuaciones, gráficos estadísticos, y de esta forma complementa proyectos de investigación, proyectos estadísticos y análisis exploratorio de datos.
          p Los informes finales de la ciencia de datos con Python se pueden generar usando esta herramienta y de una vez ir mostrando los resultados a los usuarios de un algoritmo de <b><em>Machine Learning</em></b>.
          p.fw-bold.mb-0 Es realmente sencillo mostrar un gráfico producto del análisis exploratorio de datos como, por ejemplo, la regresión lineal que se muestra en la figura
    
    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 2.
        span Regresión lineal
      img(src="@/assets/curso/temas/tema6/img-2.png" style="max-width: 820px" alt="Gráfico de regresión lineal como ejemplo de un análisis exploratorio" data-aos="fade-left")
    
    p.mb-5 Observe el siguiente video en el que se explica cómo configurar el entorno de trabajo de JupyterLab:

    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema3',
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
