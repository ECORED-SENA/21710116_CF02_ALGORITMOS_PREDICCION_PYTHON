<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Midiendo el error de un modelo predictivo con Python
    
    p Tanto los modelos de predicción como los modelos de clasificación o <em><b>clustering</b></em> requieren ser medidos de una u otra forma para conocer si el modelo aprendió o no aprendió; tal como se mide una calificación de unos estudiantes sobre una materia en particular, de esta forma lo que se hace es cuantificar la calidad, la precisión y el rendimiento de las predicciones que se están ofreciendo.
    p.mb-0 <b style="background-color: #E1E2FC">Estas mediciones se denominan métricas de evaluación.</b> En algoritmos de clasificación existen medidas como la matriz de confusión y en los modelos de regresión existen el error medio absoluto, el error cuadrático medio y el R cuadrado, que se detallan a continuación.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Error en modelos de regresión
    
    .container-100.py-4(style="background: linear-gradient(0deg, #FFFFFF 50%, #B8DAFF 50%, #F5EEFF 100%);")
      .d-flex.flex-wrap.mb-5
        img.mx-auto.mb-4.mb-lg-auto.col-lg-4(src="@/assets/curso/temas/tema5/img-1.svg" style="max-width: 400px" data-aos="fade-left")
        .col-lg-8.ps-lg-4.me-xl-auto(data-aos="fade-right")
          p.p-md-4.p-3 En un modelo de regresión se estima el valor numérico de una cantidad no conocida de acuerdo con unas variables características, la diferencia entre el valor predicho y el valor real es el error.
          .d-flex.flex-wrap.p-3.tarjeta(style="background-color: #FFFFFF")
            img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 61px")
            p.mb-0.ps-md-4.col-md Existen varios tipos de métricas para evaluar el error, los más conocidos son el error cuadrático medio o root mean squared error (RMSE), el error absoluto medio o mean absolute error (MAE) y el R cuadrado.
      p.fw-bold.mb-4 En el siguiente recurso educativo se puede conocer en qué consiste cada uno:
      .d-flex.flex-wrap.mb-5
        .col-lg-8.col-xl-7.order-2.order-lg-1.pe-lg-4.me-xl-auto(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--edit-ac")
            .row(titulo="Error cuadrático medio (RMSE )")
              p Se calcula como la raíz cuadrada de las distancias cuadradas promedio entre el valor real y el valor pronosticado:
              img.mb-4(src="@/assets/curso/temas/tema5/img-4.svg" alt="Fórmula para calcular el error cuadrático medio." style="max-width: 220px")
              p Mide es qué tan cercanas están las observaciones de los valores predichos, entre más bajo sea el RMSE mejor es el modelo. En Python se calcula de la siguiente forma, usando sklearn o numpy.  Primero se obtienen los valores predichos para el set de datos de prueba en el ejercicio de regresión realizado.
              .d-flex.pe-md-3.mb-3
                .tarjeta.px-4.py-4(style="background-color: #24135A;")
                  p.mb-0.text-white Ypredicho = regresion.predict (X_test) 
              p Con scikit-learn o numpy se realiza de la siguiente forma
              .d-flex.pe-md-3.mb-3
                .tarjeta.px-4.py-4(style="background-color: #24135A;")
                  p.mb-0.text-white mean_squared_error(Y_test, Ypredicho,squared=True) #
                    br
                    |con scikit learn mse = np.sqrt((np.square(Y_test - Ypredicho)).
                    br
                    |mean()) # con numpy mse 
            .row(titulo="Error absoluto medio (MAE )")
              p Se calcula con el promedio del valor absoluto entre datos observados y datos predichos.
              img.mb-4(src="@/assets/curso/temas/tema5/img-5.svg" style="max-width: 166px")
              .d-flex.pe-md-3.mb-3
                .tarjeta.px-4.py-4(style="background-color: #24135A;")
                  p.mb-0.text-white rom sklearn.metrics import mean_absolute_error 
                    br
                    |mean_absolute_error(Y_test ,Ypredicho) # con scikit learn
              p.mb-0 El resultado es MAE = 290.13043318730985 para el ejercicio propuesto.
            .row(titulo="R cuadrado")
              p Indica qué tanto de las observaciones independientes que se seleccionan en el modelo de regresión explican el cálculo de las variables dependientes. A diferencia de las anteriores mediciones, el cálculo oscila entre 0 y 1; los valores cercanos a 0 indican que el modelo no es bueno para predecir valores dependientes con los valores independientes y un valor cercano a 1 indica que con el modelo se pueden predecir en forma más precisa los valores dependientes, de acuerdo con los valores independientes seleccionados.
              img.mb-4(src="@/assets/curso/temas/tema5/img-6.svg" alt="Fórmula para calcular el error absoluto medio." style="max-width: 146px")
              .d-flex.pe-md-3.mb-3
                .tarjeta.px-4.py-4(style="background-color: #24135A;")
                  p.mb-0.text-white r2=regresion.score (X_train, Y_train) 
                    br
                    |print(‘Coeficiente de Determinación R2 = ‘ + str(r2))
              p El resultado obtenido es Coeficiente de Determinación R2 = 0.7541483336256305
              
        img.mx-auto.mb-4.mb-lg-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema5/img-3.png" style="max-width: 400px" data-aos="fade-left")

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Evaluación de modelos de clasificación
    
    p.mb-5 Una matriz de confusión es una herramienta de evaluación supervisada de aprendizaje automático que proporciona más información sobre la precisión general de un algoritmo de clasificación de aprendizaje automático. A diferencia de una métrica de precisión simple, que se calcula dividiendo el número de registros predichos correctamente por el número total de registros, las matrices de confusión devuelven cuatro métricas únicas con las que se puede trabajar.

    .col-xl-10.mx-auto.mb-5
      .d-flex.flex-wrap.p-3.tarjeta.mb-4(style="background-color: #FFFAE3")
        img.mx-auto.mx-md-4.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 82px")
        p.mb-0.ps-md-4.col-md #[b TP = verdaderos positivos] – son aquellos casos correctamente predichos, es decir, el valor real es positivo y la predicción también lo es.
          br        
          |#[b FP = falso positivo] – el valor real es negativo y el valor predicho es positivo.
          br          
          |#[b FN = falso negativo] – en este caso el valor real es positivo y el valor predicho es negativo.
          br          
          |#[b TN = verdadero negativo] – en este caso el valor real es negativo, igual que el valor predicho
      .d-flex.pe-md-3.mb-3
        .tarjeta.px-4.py-4(style="background-color: #24135A;")
          p.mb-0.text-white from sklearn.metrics import accuracy_score 
            br
            |from sklearn.metrics import confusion_matrix
    p.mb-5 En Python se resume acá cómo calcular las métricas de arriba, usando el ejercicio de regresión logística con el dataset seleccionado.
      br
      |#[b A continuación se puede identificar el proceso para calcular cada una de las métricas establecidas:]
    
    .container-100.py-5(style="background: linear-gradient(180deg, #F5EEFF 0%, #B8DAFF 100%);")
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 1
        .col.ps-3
          p.fw-bold Calculo de matriz de confusión
          p Es importante tener en cuenta que para realizar el cálculo de la matriz de confusión se debe ingresar el siguiente código:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              p.mb-0.text-white confusion_matrix (Y_prueba, Y_predRL)
          p La matriz de confusión del ejercicio compara los totales de clasificación de las especies del set de prueba con los resultados totales de la cantidad de especies predichas, dando como resultado:
          p.mb-0 array ( [ [ 31, 2, 0 ] , 
          p.mb-0.ps-5 [ 0, 10, 1], 
          p.mb-0.ps-5 [ 0, 2, 21] ], dtype =i nt64 )

      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 2
        .col.ps-3
          p.fw-bold Cálculo de la exactitud y recall del modelo
          p El cálculo de exactitud es una de las medidas más populares del performance de un clasificador, se define como la proporción de predicciones correctas del modelo:
          img.mb-4(src="@/assets/curso/temas/tema5/img-8.svg" style="max-width: 230px" alt="Fórmula para medir la exactitud." data-aos="fade-left")
          p Recall o sensitividad es una medida del modelo para identificar el porcentaje de puntos de datos relevantes, se define como el número de observaciones de clase positiva que fueron correctamente predichas.
          img.mb-4(src="@/assets/curso/temas/tema5/img-9.svg" style="max-width: 315px" alt="Fórmula para medir la sensitividad o recall y así identificar el porcentaje de datos relevantes." data-aos="fade-left")
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              p.mb-0.text-white from sklearn.metrics import accuracy_score from
                br
                |sklearn.metrics import recall_score accuracy_score
                br
                |(Y_prueba, Y_predRL) recall_score(Y_prueba, Y_predRL, average=None)
          p #[b El resultado frente a la exactitud del modelo es]
            br          
            |0.9253731343283582 
            br            
            |array( [ 0.93939394, 0.90909091, 0.91304348 ] )

      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 3
        .col.ps-3
          p.fw-bold Cálculo de precisión
          p El cálculo de precisión también se conoce como valor predictivo positivo y se define como el número de predicciones hechas que son correctas de todas las predicciones positivas. La fórmula para llevar a cabo este tipo de cálculo es:
          img.mb-4(src="@/assets/curso/temas/tema5/img-10.svg" style="max-width: 180px" alt="Fórmula para medir el cálculo de precisión o valor predictivo positivo." data-aos="fade-left")
          p.fw-bold El código que se debe aplicar es:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              p.mb-0.text-white from sklearn.metrics import precision_score
                br
                |precision_score(Y_prueba, Y_predRL, average=None)
          p El resultado frente a la precisión del modelo es:
          p array ( [1. , 0.71428571, 0.95454545 ] )
      
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 4
        .col.ps-3(style="width: calc(100% - 37px)")
          p.fw-bold Cálculo de puntuación F1
          p Este cálculo combina la precisión y la sensitividad o recall, es la media armónica de la precisión y la sensitividad y, ayuda a optimizar un clasificador para la precisión balanceada y la sensitividad.
          p.fw-bold La fórmula para llevar a cabo este tipo de cálculo es:
          img.mb-4(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 352px" alt="Fórmula para medir el cálculo de puntuación F1" data-aos="fade-left")
          p.fw-bold El código que se debe aplicar es:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              p.mb-0.text-white from sklearn.metrics import classification_report
                br
                |print(classification_report( Y_prueba, Y_predRL ))
          p.fw-bold El resultado frente a la puntuación F1 del modelo es:
          .w-100(style="overflow-x: auto")
            table.W-100.table-1-edit(style="max-width: 505px; min-width: 505px;")
              tbody
                tr
                  td precision
                  td recall
                  td f1-score
                  td support
                  td 
                tr
                  td Adelie
                  td 1.00
                  td 0.94
                  td 0.97
                  td 33
                tr
                  td Chinstrap
                  td 0.71
                  td 0.91
                  td 0.80
                  td 11
                tr
                  td Gentoo
                  td 0.95
                  td 0.91
                  td 0.93
                  td 23
                tr
                  td accuracy
                  td 
                  td 
                  td 0.93
                  td 67
                tr
                  td macro avg
                  td 0.89
                  td 0.92
                  td 0.90
                  td 67
                tr
                  td weighted avg
                  td 0.94
                  td 0.93
                  td 0.93
                  td 
          p.mb-0.ps-md-4.col-md Con estas métricas se puede evaluar cualquier modelo de clasificación en aprendizaje automático y revisar si son apropiadas para tomar decisiones y retroalimentar el algoritmo de aprendizaje automático.
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
.tarjeta--edit-ac
  background-color: #F0F1F3
  &.acordion__activo
    background-color: #D8FAEF
</style>
