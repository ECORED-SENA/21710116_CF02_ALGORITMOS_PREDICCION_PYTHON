<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a los modelos de predicción
    .d-flex.flex-wrap.mb-5
      .col-lg-9.order-2.order-lg-1.pe-lg-4(data-aos="fade-right")
        p Para comenzar es importante hacer un recorrido por el origen de Python, uno de los lenguajes de programación más usados en la actualidad, el cual fue creado en 1991 en el Instituto Nacional de Matemáticas de Holanda por Guido van Rossum, quien lo llamó Python, por un grupo de comedia denominado así.
        .cajon-b.cajon-b-edit.color-primario.p-3.mb-5
          p.mb-0 Es uno de los lenguajes más populares que existen en el mundo, ya que sobrepasa en popularidad a R, y es idóneo para la ciencia de datos. <b>El siguiente recurso da a conocer las características más representativas de la herramienta.</b>
      img.mx-auto.mb-4.mb-lg-auto.col-lg-3.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 295px" data-aos="fade-left")

    .d-flex.flex-wrap.mb-5
      .col-lg-9.order-2.order-lg-1.pe-lg-4(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4(titulo="Orientado a objetos" style="background-color: #E2F8F0")
            h4 Orientado a objetos
            p.mb-0 Es decir que agrupa propiedades y comportamientos relacionados en objetos individuales.
          .tarjeta.p-4(titulo="Multiplataforma" style="background-color: #E2F8F0")
            h4 Multiplataforma
            p.mb-0 Python está disponible en los principales sistemas operativos como Linux, Windows, UNIX, Mac OS, etc., es decir, este lenguaje puede ser ejecutado en casi cualquier sistema operativo siempre que se cuente con un intérprete adecuado para ello.
          .tarjeta.p-4(titulo="Código abierto" style="background-color: #E2F8F0")
            h4 Código abierto
            p.mb-0 Es decir que no se requieren licencias de pago para comenzar a trabajar con él.
          .tarjeta.p-4(titulo="Comunidad de usuarios" style="background-color: #E2F8F0")
            h4 Comunidad de usuarios
            p.mb-0 Python ha generado una comunidad de usuarios muy grande a su alrededor, que puede ser de utilidad cuando se quiere encontrar información o pedir ayuda para desarrollar cualquier tipo de programa o algoritmo.
          .tarjeta.p-4(titulo="Multiproyectos" style="background-color: #E2F8F0")
            h4 Multiproyectos
            p.mb-0 Python se utiliza para infinidad de proyectos y aplicaciones diferentes. Actualmente se destacan los siguientes:
            ul.lista-ul.mb-5
              li.mb-1
                i.lista-ul__vineta
                | Aprendizaje automático (<em>Machine Learning</em>).
              li.mb-1
                i.lista-ul__vineta
                | Inteligencia artificial (IA).
              li.mb-1
                i.lista-ul__vineta
                | <em>Big data</em> y análisis de datos.
              li.mb-1
                i.lista-ul__vineta
                | Operaciones matemáticas.
              li.mb-1
                i.lista-ul__vineta
                | Visualización de datos, entre otros.
          .tarjeta.p-4(titulo="Lenguaje común" style="background-color: #E2F8F0")
            h4 Lenguaje común
            p.mb-0 Python es un lenguaje muy común en la construcción de sitios importantes como YouTube, Instagram, etc.
      img.d-none.d-lg-flex.mx-auto.mb-4.mb-lg-auto.col-lg-3.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-4.png" style="max-width: 295px" data-aos="fade-left")
    .container-100.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 18%, rgba(226,248,240,1) 18%, rgba(255,255,255,1) 100%);")
      p.mb-5(data-aos="fade-right") Ahora bien, después de conocer las cualidades de Python, y para empezar a entender el tema de predicciones, se va a trabajar el presente componente en función del siguiente ejercicio práctico denominado <b style="background-color: #E1E2FC">“Entendiendo el crecimiento y la clasificación de los pingüinos del Archipiélago Palmer en la Antártida”,</b> preste mucha atención.

      .tarjeta.col-xl-10.mx-auto.p-3.px-md-5.py-md-4.mb-5(style="background: linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%);" data-aos="fade-left")
        p.mb-0 El biólogo y estadista de la Gran Bretaña Ronsal Fisher ha estudiado los pingüinos encontrados en el Archipiélago Palmer en la Antártida. A partir de ahí, ha generado características de tres diferentes especies de pingüinos, Adelié, Gentoo y Chinstrap en un <em>dataset</em> de 344 filas y 7 columnas.
      .tarjeta.col-xl-10.mx-auto.p-3.p-md-4(style="background-color: #24135A")
        p.fw-bold(style="color: #FFD945") El <em>dataset</em> consta de los siguientes campos:
        .d-flex.flex-wrap
          ul.lista-ul.col-lg-8.pe-lg-4(data-aos="fade-right")
            li.mb-1(style="color: white")
              i.lista-ul__vineta(style="color: #3ECE9B")
              | <b style="color: #3ECE9B"><em>Species:</em></b> especie de pingüino que puede tomar valores Adelié, Gentoo o Chinstrap. 
            li.mb-1(style="color: white")
              i.lista-ul__vineta(style="color: #3ECE9B")
              | <b style="color: #3ECE9B"><em>Island:</em></b> isla de donde proviene el pingüino.
            li.mb-1(style="color: white")
              i.lista-ul__vineta(style="color: #3ECE9B")
              | <b style="color: #3ECE9B"><em>bill_length_mm:</em></b> longitud del pico en mm. 
            li.mb-1(style="color: white")
              i.lista-ul__vineta(style="color: #3ECE9B")
              | <b style="color: #3ECE9B"><em>bill_depth_mm:</em></b> profundidad de del pico en mm.
            li.mb-1(style="color: white")
              i.lista-ul__vineta(style="color: #3ECE9B")
              | <b style="color: #3ECE9B"><em>flipper_length_mm:</em></b> longitud de la aleta del pingüino.
            li.mb-1(style="color: white")
              i.lista-ul__vineta(style="color: #3ECE9B")
              | <b style="color: #3ECE9B"><em>body_mass_g:</em></b> masa del cuerpo en gramos.
            li.mb-1(style="color: white")
              i.lista-ul__vineta(style="color: #3ECE9B")
              | <b style="color: #3ECE9B"><em>sex:</em></b> sexo del pingüino.
          img.mx-auto.mb-auto.col-lg-4.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img-2.svg" style="max-width: 190px" data-aos="fade-left")
    p(data-aos="fade-right") Para estudiar un algoritmo de regresión se tomará una variable independiente para la longitud de la aleta del pingüino <b><em>(flipper_length_mm);</em></b> luego, con esta variable se predecirá la masa y el peso del pingüino <b><em>(body_mass_g)</em></b> y, para estudiar los algoritmos de clasificación y clustering, se usarán las variables necesarias para clasificar un pingüino en cualquiera de las tres especies.

    p.fw-bold.mb-5(data-aos="fade-right") Los pasos mínimos necesarios para implementar un modelo de predicción con Python se describen a continuación:

    .d-flex.flex-wrap.justify-content-center.col-12.col-xl-10.col-xxl-8.mx-auto.mb-5
      .col-11.col-sm-10.col-md-6.col-lg-3.d-flex.px-2
        .tarjeta.w-100.p-3.py-md-4.mb-4(style="background: linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%);")
          .id-circular.mb-2.mx-auto(style="background-color: #24135A" data-aos="fade-right")
            span 1
          p.mb-0.text-center(data-aos="fade-left") Importar los paquetes necesarios.
      .col-11.col-sm-10.col-md-6.col-lg-3.d-flex.px-2
        .tarjeta.w-100.p-3.py-md-4.mb-4(style="background: linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%);")
          .id-circular.mb-2.mx-auto(style="background-color: #24135A" data-aos="fade-right")
            span 2
          p.mb-0.text-center(data-aos="fade-left") Cargar el <em>dataset</em> necesario.
      .col-11.col-sm-10.col-md-6.col-lg-3.d-flex.px-2
        .tarjeta.w-100.p-3.py-md-4.mb-4(style="background: linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%);")
          .id-circular.mb-2.mx-auto(style="background-color: #24135A" data-aos="fade-right")
            span 3
          p.mb-0.text-center(data-aos="fade-left") Realizar la exploración inicial de los datos.
      .col-11.col-sm-10.col-md-6.col-lg-3.d-flex.px-2
        .tarjeta.w-100.p-3.py-md-4.mb-4(style="background: linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%);")
          .id-circular.mb-2.mx-auto(style="background-color: #24135A" data-aos="fade-right")
            span 4
          p.mb-0.text-center(data-aos="fade-left") Realizar las transformaciones necesarias.
      .col-11.col-sm-10.col-md-6.col-lg-3.d-flex.px-2
        .tarjeta.w-100.p-3.py-md-4.mb-4(style="background: linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%);")
          .id-circular.mb-2.mx-auto(style="background-color: #24135A" data-aos="fade-right")
            span 5
          p.mb-0.text-center(data-aos="fade-left") Crear el modelo de regresión y ajustar con los datos existentes.
      .col-11.col-sm-10.col-md-6.col-lg-3.d-flex.px-2
        .tarjeta.w-100.p-3.py-md-4.mb-4(style="background: linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%);")
          .id-circular.mb-2.mx-auto(style="background-color: #24135A" data-aos="fade-right")
            span 6
          p.mb-0.text-center(data-aos="fade-left") Validar el modelo resultante.
      .col-11.col-sm-10.col-md-6.col-lg-3.d-flex.px-2
        .tarjeta.w-100.p-3.py-md-4.mb-4(style="background: linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%);")
          .id-circular.mb-2.mx-auto(style="background-color: #24135A" data-aos="fade-right")
            span 7
          p.mb-0.text-center(data-aos="fade-left") Realizar las predicciones con el modelo.

    p.fw-bold.mb-5(data-aos="fade-right") Los datos se obtienen importando las librerías Python de acuerdo con el código:

    .tarjeta.col-12.col-lg-8.col-xl-6.mx-auto.p-3.p-md-4(style="background-color: #24135A;")
      .col-lg-9.mx-auto
        code.text-white(data-aos="fade-left") import seaborn as sns
          br
          |import numpy as np
          br
          |df_pinguinos = sns.load_dataset("penguins")
          br
          |df_pinguinos.isnull().sum()
          br
          |df_pinguinos.dropna(inplace=True)

    p.mb-5.flw-bold(data-aos="fade-right") Una muestra de estos datos es:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1.
      span Muestra de los datos
    .tabla-a.color-primario.mb-5(data-aos="fade-left")
      table(style="min-width: 1224px")
        thead
          tr
            th.text-center species
            th.text-center island
            th.text-center bill_length_mm
            th.text-center bill_depth_mm
            th.text-center flipper_length_mm
            th.text-center body_mass_g
            th.text-center sex
        tbody
          tr
            td.text-center 0
            td.text-center Adelie
            td.text-center 39.1
            td.text-center 18.7
            td.text-center 181.0
            td.text-center 3750.0
            td.text-center <em>Male</em>
          tr
            td.text-center 1
            td.text-center Adelie
            td.text-center 39.5
            td.text-center 17.4
            td.text-center 186.0
            td.text-center 3800.0
            td.text-center <em>Female</em>
          tr
            td.text-center 2
            td.text-center Adelie
            td.text-center 40.3
            td.text-center 18.0
            td.text-center 195.0
            td.text-center 3250.0
            td.text-center <em>Female</em>
          tr
            td.text-center 4
            td.text-center Adelie
            td.text-center 36.7
            td.text-center 19.3
            td.text-center 193.0
            td.text-center 3450.0
            td.text-center <em>Female</em>
          tr
            td.text-center 5
            td.text-center Adelie
            td.text-center 39.3
            td.text-center 20.6
            td.text-center 190.0
            td.text-center 3650.0
            td.text-center <em>Male</em>
    
    p.mb-4(data-aos="fade-right") <b style="background-color: #E1E2FC">Inicialmente se construye una gráfica pair lot o gráfica de pares,</b> con la cual se pueden observar todas las relaciones de las columnas o valores entre sí. Es importante tener en cuenta que las variables pueden ser continuas o categóricas, las cuales se usan para entender el mejor conjunto de características y explicar la relación entre dos variables o para formar los clústeres más separados, también permiten formar modelos de clasificación simples observando y separando los datos.
    p.fw-bold(data-aos="fade-right") El comando a utilizar es:

    .d-flex.mb-4
      .tarjeta.p-3.p-md-4(style="background-color: #24135A;" data-aos="fade-left")
        code.mb-0.text-white sns.pairplot(df_pinguinos, hue='species', height=2)
    
    p.mb-5.fw-bold(data-aos="fade-right") El gráfico resultante es el que se observa a continuación:

    .col-xl-6.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 1.
        span Gráfico de datos iniciales
      img(src="@/assets/curso/temas/tema1/img-3.png" style="max-width: 657px" alt="Diagramas de dispersión de los datos iniciales por especie" data-aos="fade-left")
    
    p.mb-4.fw-bold(data-aos="fade-right") Analizando la gráfica se pueden determinar los siguientes resultados:

    ul.lista-ul
      li.mb-1(data-aos="fade-right")
        i.lista-ul__vineta(style="color: #3ECE9B")
        | La especie Adelie (naranja) se diferencia de las especies Gentoo (color morado) y Chinstrap (color azul), dependiendo de la longitud del pico. (<b><em>bill_length_mm</em></b>).
      li.mb-1(data-aos="fade-right")
        i.lista-ul__vineta(style="color: #3ECE9B")
        | La especie Gentoo (morado) se diferencia de las especies Adelie (naranja) y Chinstrap (azul), dependiendo de la profundidad del pico.
</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema1',
  components: { TabsA },
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
