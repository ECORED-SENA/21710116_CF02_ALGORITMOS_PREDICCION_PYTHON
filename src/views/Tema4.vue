<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Algoritmos de aprendizaje no supervisado en acción con Python

    .d-flex.flex-wrap.mb-5
      img.mx-auto.mb-4.mb-lg-auto.col-lg-4(src="@/assets/curso/temas/tema4/img-1.svg" style="max-width: 400px" data-aos="fade-left")
      .col-lg-8.ps-lg-4.me-xl-auto(data-aos="fade-right")
        p.p-md-4.p-3.mb-0.tarjeta(style="background-color: #E2F8F0") En el aprendizaje supervisado el objetivo es mapear una entrada con una salida, con estos datos se puede entrenar un modelo y servir como predictor para datos nuevos. En el aprendizaje no supervisado solo existen datos de entrada, el objetivo es describir similitudes en los datos de entrada y observar patrones que permitan agruparlos en clúster. Todos los patrones, las asociaciones, las relaciones y los clústeres son extraídos de los mismos datos.
    
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 <em>Clustering</em> con Python
    
    p La agrupación de datos es un método de clasificación no supervisado, cuyo principal objetivo es buscar patrones ocultos en los datos y con esto crear grupos específicos llamados clústeres. Uno de los algoritmos más usados es el <b>k-means</b> o <b>k-medias</b> por su fácil implementación, se inicia escogiendo un valor de k que se refiere a la cantidad de clústeres y la inicialización aleatoria de centroides.

    p.fw-bold.mb-5 A continuación se realiza la aplicación del <em>clustering</em> en el ejemplo que se ha venido trabajando:

    .container-100.py-5(style="background: linear-gradient(180deg, rgba(213,213,255,1) 0%, rgba(168,221,255,1) 100%);")
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 1
        .col.ps-3
          p Lo primero que se debe hacer en Python es importar las librerías necesarias para ejecutar el algoritmo no supervisado con <b>k-means</b>. 
            br
            |Para tal fin se utiliza el siguiente comando
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              code.mb-0.text-white from sklearn.cluster import KMeans
      
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 2
        .col.ps-3
          p Para hallar el valor óptimo de k se aplicará el método del codo, calculando el algoritmo de agrupación para diferentes valores de k. El punto en el que se observa un cambio brusco en los datos de las inercias se tomará como el valor de k, la línea forma algo similar a la de un brazo y su codo, el código fuente en <b>k-means</b> se muestra a continuación. El método del codo o método <b>Elbow</b> se construye calculando la inercia después de aplicar el método <b>k-means</b> a 1 , 2 , 3, …, N clústeres, siendo la inercia la suma de las distancias al cuadrado de cada objeto del clúster a su centroide.

          p El código a utilizar es el siguiente:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              code.mb-0.text-white inercia =[] # suma de cuadrados
                br
                |for i in range (1,20):
              .ps-3
                code.mb-0.text-white algoritmo = KMeans (n_clusters = I, max_iter =300).fit(X_entrenamiento)
              .ps-3
                code.text-white inercia.append(algoritmo.inertia_)
      
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 3
        .col.ps-3
          p En la gráfica se observa que el codo se encuentra entre los valores de 2.5 y 5, se usará por tanto K=3. Definido el valor de K ya se puede aplicar el algoritmo de agrupamiento con el siguiente código fuente:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              code.mb-0.text-white algoritmo = KMeans( n_clusters=3, init =‘k-means++’, max_iter=300, n_init =10)
          p n clúster: clústeres definidos 
            br
            |max_iter: número de iteraciones
            br
            |n_init ; veces que se ejecutará con diferentes centroides.
            br
            |k-means++: mejora el agrupamiento a través de una inicialización más inteligente de los centros de agrupamiento. 
        
          img(src="@/assets/curso/temas/tema4/img-2.png" style="max-width: 448px" alt="Fórmula para calcular el coeficiente de determinación R cuadrado." data-aos="fade-left")

      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 4
        .col.ps-3
          p Una vez definido el algoritmo y sus parámetros, se entrena junto con los datos de la variable #[b X_entrenamiento], para realizar esto se usa el comando #[b fit]:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              code.mb-0.text-white algoritmo.fit(X_entrenamiento)
      
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 5
        .col.ps-3
          p Una vez entrenado el algoritmo se deben revisar los datos de los centroides y las etiquetas obtenidas, estas etiquetas no son más que la identificación del clúster en donde queda la especie del pingüino. 
          p Para tal fin se utiliza el siguiente comando:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              code.mb-0.text-white centroides, etiquetas = algoritmo.cluster_centers_, algoritmo.labels_
      
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 6
        .col.ps-3
          p Para realizar una predicción k means con Python se hace la suposición que se encuentra un pingüino con los siguientes datos:
          p
            code(style="color: black") bill_length_mm = 50 mm
            br
            |‘bill_depth_mm’ = 21 mm
          p Para tal fin se utiliza el siguiente comando:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              code.mb-0.text-white res=algoritmo.predict([[50,21]])
    
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 7
        .col.ps-3
          p El siguiente código dibuja la disposición de las observaciones en los clústeres identificados en el <em>dataset</em> de entrenamiento y dibuja los centroides:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A; max-width: 610px" data-aos="fade-right")
              code.mb-0.text-white def doDecorate(**opciones): “””Decora los ejes actuales. Llama a la funcion decorate con parametros decorate(title=‘Title’, xlabel=‘x’, ylabel=‘y’) “”” ax = plt.gca() ax.set(**opciones) handles, labels = ax.get_legend_handles_labels() if handles: ax.legend(handles, labels) plt.tight_layout()ef drawPlotCenters(centroides, color=‘C1’): “””Dibuja centroides . centroide: Arreglo con coordenadas x y y color: Especificacion de color””” XS, ys = np.transpose(centroides)options = dict(color=color, ls=‘none’, mfc=‘none’) plt.plot(XS, ys, marker=‘o’, ms=25, **options) plt.plot(XS, ys, marker=‘x’, ms=20, **options) def drawScatterplot(df, var1, var2, by): “””Dibuja un scatterPlot. df: DataFrame var1: nombre de columna, eje x var2: nombre de columna eje y by: nombre de columna , groupby “”” grouped = df.groupby(by) for name, group in grouped: plt.plot(group[var1], group[var2], ‘o’, alpha=0.75, label=name) doDecorate(xlabel=var1, ylabel=var2)
      
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 8
        .col.ps-3
          p Por último, se hace uso de las funciones anteriores para dibujar los k = 3 clústeres identificados y sus respectivos centroides. 
          p A través del siguiente comando:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A; max-width: 610px" data-aos="fade-right")
              code.mb-0.text-white plt.figure(figsize =[10,6])
                br
                |drawScatterplot(X_entrenamiento, ‘bill_length_mm’, ‘bill_depth_mm’, etiquetas)
                br
                |drawPlotCenters(centroides)
      
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 9
        .col.ps-3
          p Por último, se hace uso de las funciones anteriores para dibujar los k = 3 clústeres identificados y sus respectivos centroides. 
          p A través del siguiente comando:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A; max-width: 610px" data-aos="fade-right")
              code.mb-0.text-white plt.figure(figsize =[10,6])
                br
                |drawScatterplot(X_entrenamiento, ‘bill_length_mm’, ‘bill_depth_mm’, etiquetas)
                br
                |drawPlotCenters(centroides)
          img(src="@/assets/curso/temas/tema4/img-3.png" style="max-width: 715px" data-aos="fade-left")

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Reducción de componentes con Python
    
    .d-flex.flex-wrap.mb-5
      img.mx-auto.mb-4.mb-lg-auto.col-lg-4(src="@/assets/curso/temas/tema4/img-5.svg" style="max-width: 400px" data-aos="fade-left")
      .col-lg-8.ps-lg-4.me-xl-auto(data-aos="fade-right")
        p La reducción de dimensiones y básicamente el análisis de componentes principales es un procedimiento estadístico para convertir un conjunto de observaciones de variables, posiblemente correlacionadas, en un conjunto reducido de variables no correlacionadas.
        p Cada uno de los nuevos componentes principales son elegidos de tal manera que describa la mayor parte de la varianza del modelo y todos estos componentes principales sean ortogonales entre sí. Las nuevas variables o componentes principales obtenidos tendrán un máximo aporte para explicar el resultado final.
        .d-flex.flex-wrap.p-3.tarjeta(style="background-color: #E2F8F0")
          img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema4/img-6.svg" style="max-width: 61px")
          p.mb-0.ps-md-4.col-md En resumen, el principal objetivo del análisis de componentes principales es reducir un gran número de variables a un mínimo número de variables que expliquen de forma significativa un modelo.
    
    p.mb-5 A pesar de que el análisis de los componentes principales es bastante complejo, las librerías construidas en Python lo hacen muy sencillo. A través del siguiente recurso se puede percibir cómo implementar la reducción al ejercicio que se ha venido trabajando:

    .tarjeta.p-3.p-md-5(style="background-color: #EBECFF")
      LineaTiempoC.color-acento-contenido(text-small)
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 1")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p(data-aos="fade-right") Para reducir el componente, inicialmente se debe importar las librerías necesarias usando sklearn, para ese fin se utiliza el siguiente comando:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                code.mb-0.text-white from sklearn.decomposition import PCA import pandas as pd
          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema4/img-7.svg" style="max-width: 290px" data-aos="fade-left")

        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 2")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Posteriormente, se crea un subconjunto de variables del <em>dataset</em> original sobre el cual se realizará el análisis de los componentes principales.
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                code.mb-0.text-white X_datos_pinguinos = df_pinguinos[[‘bill_length_mm’, ‘bill_depth_mm’, ‘flipper_length_mm’, ‘body_mass_g’]] Y_datos_pinguinos = df_pinguinos[‘species’]
          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema4/img-8.svg" style="max-width: 290px")

        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 3")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Debido a que los componentes principales capturan variaciones entre las variables existentes, la mejor práctica es estandarizar todas las variables antes de implementar PCA, así todas queden en la misma escala, por ejemplo, en este caso <b>body_mass_g</b> contiene números muy grandes comparados con las otras medidas.
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                code.text-white pca = PCA(n_components = 2) componentes = pca.fit(X_datos_pinguinos).components_ x_pca = pca.transform(X_datos_pinguinos) componentes = pd.DataFrame(componentes).transpose()

                code.mb-0.text-white componentes.columns = [‘Comp1’, ‘Comp2’] componentes.index = X_datos_pinguinos.columns print(componentes)
            p Generando
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                 table.text-white.table-1-edit
                  tbody
                    tr
                      td Comp1
                      td Comp2
                    tr
                      td bill_length_mm
                      td 0.004003 -0.319278
                    tr
                      td bill_depth_mm
                      td  -0.001154 0.086848
                    tr
                      td flipper_length_mm
                      td 0.015195 -0.943542
                    tr
                      td body_mass_g
                      td 0.999876 0.015717           

          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema4/img-9.svg" style="max-width: 290px")

        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 4")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p La salida dice que el primer componente principal, por ejemplo, puede ser calculado como:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                code.mb-0.text-white 0.999876*body_mass_g +0.015195*flipper_lengfth_mm - 0.001154*bill_depth_mm +0.004003*bill_length_mm
            p También dice que la variable que más aporta en el primer componente principal es #[b body_mass_g] y en el segundo componente principal es #[b flipper_length_mm]
          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema4/img-10.svg" style="max-width: 290px")
        
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Paso 5")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Para decidir qué componente usar en un análisis se debe mirar la variancia explicada para cada uno:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-left")
                code.text-white var_ratio = pca.explained_variance_ratio_ 
                  br                
                  |var_ratio= pd.DataFrame(var_ratio).transpose() var_ratio.columns = [‘Comp1’, ‘Comp2’] 
                  br                  
                  |var_ratio.index = [‘Proporcion of Varianza’] print(var_ratio)
                table.text-white.table-1-edit
                  tbody
                    tr
                      td Comp1
                      td Comp2
                    tr
                      td Proportion of Variance
                      td 0.999893 0.000078       
            p Esto quiere decir que el primer componente principal aporta el 99 % de la variación en los datos, mientras que el segundo aporta muy poco.
          img.mx-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema4/img-11.svg" style="max-width: 290px")
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
