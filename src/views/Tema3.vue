<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Algoritmos de aprendizaje supervisado en acción con Python
    
    p(data-aos="fade-right") Incluyen algoritmos que toman una muestra de datos y sus respectivas salidas, el objetivo principal es que el algoritmo aprenda cómo se relacionan los datos de entrada X y sus correspondientes salidas Y, a partir de un conjunto de entrenamiento escogido para tal fin.

    p.mb-5.fw-bold(data-aos="fade-right") Con el conocimiento adquirido se puede predecir nuevas salidas a través de nuevos datos X

    .bloque-texto-g.bloque-texto-g-edit.color-primario.p-3.p-sm-4.p-md-5.col-xl-10.mx-auto(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estos algoritmos se llaman supervisados porque el modelo aprendió de respuestas y etiquetas conocidas de antemano en la fase de entrenamiento. Los métodos de aprendizaje supervisado son de dos tipos principales, esto depende del problema que se desea resolver y pueden ser: algoritmos de regresión y algoritmos de clasificación.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Algoritmo de regresión con Python
    
    p(data-aos="fade-right") La regresión lineal se utiliza para estimar valores reales como ventas, costos, cantidad de llamadas en una central, gastos, etc., en función de unas variables predictoras de tipo continuo. <b>La mejor ecuación que se ajusta se llama línea de regresión y la ecuación utilizada es:</b>

    .d-flex.flex-wrap.mb-5
      .col-md-6.d-flex.flex-wrap.order-2.order-md-1
        .d-flex.pe-md-3.mb-3
          .tarjeta.p-3.p-md-4.mb-auto(style="background-color: #24135A;" data-aos="fade-left")
            p.mb-0(style="color: #FFD945") 𝑌 = 𝑚𝑋+𝑏
        .d-flex.pe-md-4.mb-4.col-12.col-lg
          .tarjeta.p-3.p-md-4.w-100(style="background-color: #E2F8F0;" data-aos="fade-left")
            p.fw-bold Donde:
            p.mb-0 𝑌: es la variable dependiente.
              br            
              |𝑚: es la pendiente de la línea de regresión.
              br              
              |𝑏: es la intersección con el eje Y.
        p.pe-md-4(data-aos="fade-right") La regresión lineal puede ser simple o múltiple, la primera se caracteriza por tener una variable independiente, contrario a la regresión múltiple que se caracteriza por tener más de una variable independiente.
        p.mb-0.pe-lg-4(data-aos="fade-right") Volviendo al ejemplo propuesto se utilizará la librería <em><b style="background-color: #E1E2FC">scikit-learn,</b></em> que es una librería para el aprendizaje automático. En el siguiente recurso se pueden identificar los módulos a implementar y los pasos a seguir:
      img.mx-auto.mx-md-0.col-md-6.col-xl-5.mb-4.mb-md-auto.order-1.order-md-2(src="@/assets/curso/temas/tema3/img-2.png" style="max-width: 492px")
    
    .tarjeta.p-5(style="background-color: #EBECFF")
      LineaTiempoC.color-acento-contenido(text-small)
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 1")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Lo primero que se debe tener en cuenta es que: 
            p linear_model: sirve para entrenar un modelo de Machine Learning de regresión lineal. 
              br            
              |#[b train_test_split:] sirve para dividir los datos en datos de entrenamiento y datos de prueba. 
              br              
              |#[b metrics:] sirve para medir el desempeño del modelo.
            p.fw-bold En ese orden de ideas el código a utilizar es:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                p.mb-0.text-white import seaborn as sns 
                  br                
                  |import matplotlib.pyplot as plt 
                  br                  
                  |from sklearn.linear_model import LinearRegression 
                  br                  
                  |from sklearn.model_selection import train_test_split 
                  br                  
                  |from sklearn.metrics import mean_squared_error, r2_score
          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 290px")

        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 2")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Para entrenar el modelo con esta librería inicialmente se carga el valor de X con los datos de la longitud de la aleta #[b (flipper_length_mm)], y Y con los datos de masa del pingüino #[b (body_mass_g)], posteriormente se obtiene un subconjunto de datos que serán el dataset de entrenamiento y el set de pruebas en las variables #[b X_train, Y_train, X_test, Y_test] en una proporción de 80 % para los datos de entrenamiento y 20 % para los datos de prueba.
            p.fw-bold El código a utilizar es:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                p.mb-0.text-white X = df_pinguinos[“flipper_length_mm”].values.reshape(-1,1) 
                  br
                  |Y = df_pinguinos[“body_mass_g”] 
                  br
                  |X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.20, random_state = 42)
          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-4.svg" style="max-width: 290px")

        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 3")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Posteriormente, se crea una instancia de LinearRegresion y se instruye a la regresión lineal que aprenda de los datos #[b X_train y Y_train], para lo cual se usa el método fit para ajustar los parámetros de la línea de regresión a los datos, es decir, se entrena a la regresión lineal.
            p.fw-bold Para ese fin se utiliza el siguiente código:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                p.mb-0.text-white regresion = LinearRegression() 
                  br
                  |model = reg.fit(X_train, Y_train)
          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 290px")

        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 4")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Una vez realizado esto ya se pueden observar los parámetros que estima la regresión lineal : 
            p print(‘m = ‘ + str(regresion.coef_) + ‘, b = ‘ 
              br            
              |+ str(regresion.intercept_)) 
              br              
              |m = [50.41798199], b = -5919.258741821233 , 
            p Los parámetros obtenidos m y b se reemplazan en la ecuación de regresión y se obtiene:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                p.mb-0.text-white 𝑦 = 50.417981𝑥 −5919.25874
          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-4.svg" style="max-width: 290px")
        
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 5")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Luego de haber realizado este proceso, ya se puede predecir el resultado de la masa de un pingüino con una longitud de una aleta, usando el método predict de la clase LinearRegression. Si se desea saber cuál es la masa aproximada de un pingüino que tiene una longitud de la aleta de unos 200 mm, se usa el siguiente código:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                p.text-white longitudAleta =np.array ([200]) 
                  br
                  |prediccion = regresion.predict(longitudAleta.reshape(-1,1)) 
                  br
                  |print (‘El valor de la masa de un pingüino que tiene longitud de aleta = ‘ + str(longitudAleta) + ‘ mm es ‘ + str(prediccion )) 

                p.text-white.mb-0 El valor de la masa de un pingüino que tiene longitud de aleta = [200] mm es [4164.3376571]
          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 290px")
        
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 6")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p La raíz cuadrada del coeficiente de determinación es R y puede variar entre -1 y 1, conocido como coeficiente de correlación de Pearson. Este coeficiente mide el grado de asociación lineal entre dos variables X y Y, el signo indica la dirección de la correlación y el valor numérico, el grado de correlación.
          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-4.svg" style="max-width: 290px")
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

<style lang="sass">
.bloque-texto-g-edit
  .bloque-texto-g__img
    width: 404px
  .bloque-texto-g__texto
    width: 75%
  @media (max-width: 991px)
    .bloque-texto-g__img
      width: 100%
    .bloque-texto-g__texto
      width: 100%
</style>
