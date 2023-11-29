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

    .container-100.py-5(style="background: linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%);")
      p.mb-5.fw-bold El siguiente recurso expone las principales librerías de Python:
      SlyderF.slider-f-offset.mb-5(columnas="col-md-6 col-xl-4")
        .tarjeta.p-4(style="background-color: #F3F9FF")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 177px; margin-top: -4.7rem")
          h4.text-center SciPy
          p.mb-0 Es una biblioteca libre y de código abierto para Python. Se compone de herramientas y algoritmos matemáticos. Contiene módulos para optimización, álgebra lineal, integración, interpolación, funciones especiales, FFT, procesamiento de señales y de imagen, resolución de ODE y otras tareas para la ciencia e ingeniería.
        .tarjeta.p-4(style="background-color: #F3F9FF")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 177px; margin-top: -4.7rem")
          h4.text-center NumPy
          p.mb-0 (Pronunciado /<em>'nʌmpaɪ</em>/ (numpai) o, a veces /<em>'nʌmpi</em>/ (numpi)) es una biblioteca para el lenguaje de programación Python que da soporte para crear vectores y matrices grandes multidimensionales, junto con una gran colección de funciones matemáticas de alto nivel para operar con ellas.
        .tarjeta.p-4(style="background-color: #F3F9FF")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 177px; margin-top: -4.7rem")
          h4.text-center Pandas
          p.mb-0 Es una librería de Python para manipular, procesar y analizar los datos, permite la creación de data frames que puede contener datos heterogéneos en forma tabular parecidos a las tablas SQL, hablar de Pandas es hablar de la ciencia de datos.
        .tarjeta.p-4(style="background-color: #F3F9FF")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 177px; margin-top: -4.7rem")
          h4.text-center Matplotlib
          p.mb-0 Es una librería para gráficos en 2D, provee una rápida forma de visualizar datos y gráficos de calidad desde Python, tales como diagramas de barras, histograma, diagramas de sectores, diagramas de caja y bigotes, diagramas de violín, diagramas de dispersión o puntos, diagramas de líneas, diagramas de áreas, diagramas de contorno y mapas de color.
        .tarjeta.p-4(style="background-color: #F3F9FF")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-6.svg" style="max-width: 177px; margin-top: -4.7rem")
          h4.text-center Seaborn
          p.mb-0 Son librerías para Python que permiten generar diagramas o gráficos elegantes y de alto nivel, muy útiles en la ciencia de datos.
        .tarjeta.p-4(style="background-color: #F3F9FF")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-7.svg" style="max-width: 177px; margin-top: -4.7rem")
          h4.text-center Scikit-learn
          p.mb-0 Son librerías que cuentan con algoritmos para la clasificación, clustering como k-means, la reducción de dimensiones usando componentes principales y la regresión, y es compatible con las demás librerías de Python.
        .tarjeta.p-4(style="background-color: #F3F9FF")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-8.svg" style="max-width: 177px; margin-top: -4.7rem")
          h4.text-center Tensorflow
          p.mb-0 Es una librería liberada por Google usada principalmente en redes neuronales y aprendizaje profundo, con un fuerte enfoque el prototipo rápido.

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

<style lang="sass">
.slider-f-offset
  .slyder-f__btn
    min-width: 55px
    max-height: 55px
    width: 55px
    height: 55px
    margin: auto
    background-color: #FFD945
    border-radius: 50%
    padding: 0 !important
    border: 1px solid #707070
    .fa-chevron-left, .fa-chevron-right
      font-size: 28px
  .slyder-f__main
    .horizontal-scroll__wrapper
      padding-top: 3.5rem !important
</style>
