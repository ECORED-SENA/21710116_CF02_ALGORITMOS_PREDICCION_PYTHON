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
      img.mx-auto.mx-md-0.col-md-6.col-xl-5.mb-4.mb-md-auto.order-1.order-md-2(src="@/assets/curso/temas/tema3/img-2.png" style="max-width: 492px" data-aos="fade-left")
    
    .tarjeta.p-3.p-md-5(style="background-color: #EBECFF")
      LineaTiempoC.color-acento-contenido(text-small)
        .col-lg-11.mx-auto.d-flex.flex-wrap.align-items-start(titulo="Paso 1")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p(data-aos="fade-right") Lo primero que se debe tener en cuenta es que: 
            p(data-aos="fade-right") linear_model: sirve para entrenar un modelo de Machine Learning de regresión lineal. 
              br            
              |#[b train_test_split:] sirve para dividir los datos en datos de entrenamiento y datos de prueba. 
              br              
              |#[b metrics:] sirve para medir el desempeño del modelo.
            p.fw-bold(data-aos="fade-right") En ese orden de ideas el código a utilizar es:
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
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 290px" data-aos="fade-left")

        .col-lg-11.mx-auto.d-flex.flex-wrap.align-items-start(titulo="Paso 2")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Para entrenar el modelo con esta librería inicialmente se carga el valor de X con los datos de la longitud de la aleta #[b (flipper_length_mm)], y Y con los datos de masa del pingüino #[b (body_mass_g)], posteriormente se obtiene un subconjunto de datos que serán el dataset de entrenamiento y el set de pruebas en las variables #[b X_train, Y_train, X_test, Y_test] en una proporción de 80 % para los datos de entrenamiento y 20 % para los datos de prueba.
            p.fw-bold El código a utilizar es:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;")
                p.mb-0.text-white X = df_pinguinos[“ flipper_length_mm ”].values.reshape(-1,1) 
                  br
                  |Y = df_pinguinos[“body_mass_g”] 
                  br
                  |X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.20, random_state = 42)
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-4.svg" style="max-width: 290px")

        .col-lg-11.mx-auto.d-flex.flex-wrap.align-items-start(titulo="Paso 3")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Posteriormente, se crea una instancia de LinearRegresion y se instruye a la regresión lineal que aprenda de los datos #[b X_train y Y_train], para lo cual se usa el método fit para ajustar los parámetros de la línea de regresión a los datos, es decir, se entrena a la regresión lineal.
            p.fw-bold Para ese fin se utiliza el siguiente código:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;")
                p.mb-0.text-white regresion = LinearRegression() 
                  br
                  |model = reg.fit(X_train, Y_train)
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 290px")

        .col-lg-11.mx-auto.d-flex.flex-wrap.align-items-start(titulo="Paso 4")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Una vez realizado esto ya se pueden observar los parámetros que estima la regresión lineal : 
            p print(‘m = ‘ + str(regresion.coef_) + ‘, b = ‘ 
              br            
              |+ str(regresion.intercept_)) 
              br              
              |m = [50.41798199], b = -5919.258741821233 , 
            p Los parámetros obtenidos m y b se reemplazan en la ecuación de regresión y se obtiene:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;")
                p.mb-0.text-white 𝑦 = 50.417981𝑥 −5919.25874
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-4.svg" style="max-width: 290px")
        
        .col-lg-11.mx-auto.d-flex.flex-wrap.align-items-start(titulo="Paso 5")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Luego de haber realizado este proceso, ya se puede predecir el resultado de la masa de un pingüino con una longitud de una aleta, usando el método predict de la clase LinearRegression. Si se desea saber cuál es la masa aproximada de un pingüino que tiene una longitud de la aleta de unos 200 mm, se usa el siguiente código:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;")
                p.text-white longitudAleta =np.array ([200]) 
                  br
                  |prediccion = regresion.predict( longitudAleta.reshape(-1,1) ) 
                  br
                  |print (‘El valor de la masa de un pingüino que tiene longitud de aleta = ‘ + str(longitudAleta) + ‘ mm es ‘ + str(prediccion )) 

                p.text-white.mb-0 El valor de la masa de un pingüino que tiene longitud de aleta = [200] mm es [4164.3376571]
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 290px")
        
        .col-lg-11.mx-auto.d-flex.flex-wrap.align-items-start(titulo="Paso 6")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p La raíz cuadrada del coeficiente de determinación es R y puede variar entre -1 y 1, conocido como coeficiente de correlación de Pearson. Este coeficiente mide el grado de asociación lineal entre dos variables X y Y, el signo indica la dirección de la correlación y el valor numérico, el grado de correlación.
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-4.svg" style="max-width: 290px")
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Algoritmo de clasificación con Python

    p(data-aos="fade-right") La construcción de los modelos de clasificación es una de las tareas más usadas en el aprendizaje automático, cuando los datos de los cuales se va a aprender cuentan con atributos de entrada y estos se encuentran relacionados con valores discretos, clases o etiquetas.

    .d-flex.flex-wrap.mb-5
      .col-lg-8.order-2.order-lg-1.pe-lg-4.me-xl-auto(data-aos="fade-right")
        .d-flex.flex-wrap.mb-4
          img.mx-auto.d-none.d-md-flex.mb-md-auto(src="@/assets/curso/temas/tema3/img-5.svg" style="max-width: 190px")
          p.ps-md-4.col-md Las tareas para resolver un problema de clasificación involucra un conjunto de datos de entrenamiento, en los cuales se tienen puntos de datos etiquetados con sus categorías o clases correctas. Los modelos de clasificación más usados son la regresión logística, Naive Bayes, los soportes de máquinas vectoriales, los modelos no paramétricos como k vecinos más cercanos, los métodos de clasificación por medio de árboles de decisión y las redes neuronales.
        p.mb-0.p-3(style="background-color: #FFFAE3") Las aplicaciones de los modelos de clasificación son infinitas. Algunos ejemplos son el reconocimiento de imágenes, el reconocimiento de voz, los juegos de computador, los carros autónomos, la predicción de enfermedades, las predicciones financieras como la bolsa de valores, la identificación de defectos de fabricación, la identificación de posibles fraudes bancarios, etc.
      img.mx-auto.mb-4.mb-lg-auto.col-lg-4.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-6.png" style="max-width: 400px" data-aos="fade-left")

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  Árboles de clasificación con Python
    
    .d-flex.flex-wrap.mb-5
      img.mx-auto.mb-4.mb-lg-auto.col-lg-4(src="@/assets/curso/temas/tema3/img-7.svg" style="max-width: 400px" data-aos="fade-left")
      .col-lg-8.ps-lg-4.me-xl-auto(data-aos="fade-right")
        p Son muy usados en la planeación, la estadística y el aprendizaje automático, usa una estructura de árbol de condiciones y las consecuencias para evaluar posibles eventos de un problema en particular.

        p Cada cuadrado es un nodo, los nodos de más abajo se denominan las hojas del árbol, imaginando un árbol al revés. Para iniciar las predicciones se comienza desde la raíz del árbol, es decir, desde el nodo superior; cada nodo es evaluado y saltando al siguiente nodo, según la decisión correcta.

        p Un árbol de decisiones se usa, entonces, para predecir la clase o el valor de la variable dependiente, aprendiendo de las reglas del árbol de decisiones encontradas con los datos de entrenamiento.

        p A continuación se explica cómo aplicar el árbol de decisiones al ejercicio planteado.

    .tarjeta.p-3.p-md-5(style="background-color: #EBECFF")
      LineaTiempoC.color-acento-contenido(text-small)
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Decisiones de clasificación")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p(data-aos="fade-right") Para aplicar el árbol de decisión al ejercicio que se ha venido trabajando, se observa que se podría tomar decisiones de clasificación usando las variables bill_length_mm y bill_depth_mm para clasificar una especie, entonces, se remueve del dataset las demás características. 

            p.fw-bold(data-aos="fade-right") El código que se debe utilizar en este caso es:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;" data-aos="fade-right")
                p.mb-0.text-white datosPicos = df_pinguinos.drop ([‘island’, ‘flipper_length_mm’, ‘body_mass_g’, ‘sex’], axis = 1) pairPlotPicos = sns.pairplot ( datosPicos, hue=‘species’) pairPlotPicos.fig.set_size_inches(9, 6.5)
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/lt-3.svg" style="max-width: 315px" data-aos="fade-left")

        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Gráfico de pares")
          .col-lg-7.pe-lg-4.order-2.order-lg-1
            p El gráfico muestra que la especie Adelie puede ser identificada con la longitud del pico (bill_length_mm) y para distinguir entre chinstrap y gentoo se puede realizar con la característica de profundidad del pico (bill_depth_mm).
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/lt-1.png" style="max-width: 400px")

        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Variables predictoras")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Una vez identificadas las características que más contribuyen a una clasificación de una especie, entonces, se definen las variables predictoras en una variable X y los datos con los resultados o etiquetas en la variable Y.
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;")
                p.mb-0.text-white Donde: 
                  br
                  |X = df_pinguinos[[‘bill_length_mm’, ‘bill_depth_mm’]]
                  br
                  |Y = df_pinguinos[‘species’]
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/lt-2.svg" style="max-width: 315px")
        
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Variables predictoras")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Una vez se tienen separadas las variables predictoras y las variables etiquetadas se procede a separar los datos de entrenamiento y prueba con la instrucción train_test_split, con parámetro X, Y y test_size=0.2, que significa que se tomará el 20 % de los datos para el set de pruebas, por tanto el 80 % se tomarán para el set de entrenamiento.
            p.fw-bold Esto se hace a partir del siguiente código:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;")
                p.mb-0.text-white X_entrenamiento, X_prueba, Y_entrenamiento, Y_prueba = train_test_split(X, Y, test_size = 0.2) print(‘Los datos de entrenamiento son {} y los datos de prueba son {} ‘.format(X_entrenamiento.shape[0], X_prueba.shape[0])) Los datos de entrenamiento son 266 y los datos de prueba son 6
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/lt-3.svg" style="max-width: 315px")
        
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Algoritmo")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Posteriormente, se define el algoritmo de árboles de decisión con la función #[b DecisionTreeClassifier], luego se entrena con los datos de entrenamiento X y Y. Con la función fit se realiza una predicción y se calcula una predicción con los datos de prueba fijados.
            p El código a utilizar es:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;")
                p.text-white from sklearn.tree import DecisionTreeClassifier
                  br
                  |from sklearn import tree algoritmoTree = DecisionTreeClassifier() algoritmoTree.fit (X_entrenamiento, Y_entrenamiento) Y_predTree = algoritmoTree.predict (X_prueba) print(‘La Precisión del algoritmo de árboles de decisión es: {}’.format(algoritmoTree.score( X_entrenamiento, Y_entrenamiento ))) 
                p.text-white La precisión del algoritmo de árboles de decisión es 1.0.
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/lt-3.svg" style="max-width: 315px")
        
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Realizar la predicción")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Se observa que el algoritmo de clasificación con árboles de decisión tiene una precisión del 100 %.
              br
              |Para realizar una predicción con árboles de clasificación con Python, se hace la suposición que se encuentra un pingüino con los siguientes datos:
            .tarjeta.px-4.py-2(style="background-color: #24135A;")
              p.mb-0.text-white bill_length_mm = 50 mm
                br
                |'bill_depth_mm' = 21 mm
                br
                |El código a utilizar es:
                br
                |algoritmoTree.predict([[50,21]])
                br
                |resultado:
                br
                |array(['Chinstrap'], dtype=object)
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/lt-3.svg" style="max-width: 315px")

        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Realizar la predicción")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Si se desea observar el árbol de decisión en pleno se puede hacer de varias formas, una de las cuales es importando la librería #[b export_graphviz], se definen las variables características y las variables label, de esta manera:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;")
                p.mb-0.text-white from sklearn.tree import DecisionTreeClassifier, export_graphviz import graphviz
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/lt-4.svg" style="max-width: 315px")
        
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Dibujo del árbol")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p El código fuente a continuación dibuja el árbol de decisión para mejor entendimiento del investigador y se basa en Scikit learn usando la libreria #[b tree.export.graphviz.]
            p El código es el siguiente:
            .d-flex.pe-md-3.mb-3
              .tarjeta.px-4.py-2(style="background-color: #24135A;")
                p.mb-0.text-white feature_names = [‘bill_length_mm’, ’bill_depth_mm’] class_names = [‘Adelie’, ‘Chinstrap’,’Gentoo’] datos = tree.export_graphviz(algoritmoTree, out_file=None, feature_names=feature_names, class_names = class_names,filled=True, rounded=True, special_characters=True) graph = graphviz.Source(datos) graph
          img.mx-auto.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema3/lt-5.svg" style="max-width: 315px")
        
        .col-lg-11.mx-auto.d-flex.flex-wrap(titulo="Árbol generado")
          .col-lg-8.pe-lg-4.order-2.order-lg-1
            p Se puede observar en el árbol generado una primera comparación inicial de bill_length_mm <= 42.55 o bill_length_mm > 42.55 y una primera rama con bill_depth_mm <= 15.1 si la primera condición es verdadera. Luego, se observa en la rama siguiente un primer resultado. Si cumple las dos condiciones anteriores, la especie se clasificó como gentoo y así sucesivamente. 
            p El algoritmo clasificó en forma automática estas condiciones de la forma más eficiente posible. Se puede observar un árbol resultante bastante complejo pero con #[b scikit-learn] la generación es bastante sencilla.
          .col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2.text-center
            img.mx-auto.mb-2(src="@/assets/curso/temas/tema3/lt-6.svg" style="max-width: 315px")
            a(@click="modal1 = true") Ampliar imagen
    
    ModalA(:abrir-modal.sync="modal1")
      img.mx-auto(src="@/assets/curso/temas/tema3/img-8.svg" data-aos="fade-left")
    
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 K vecinos más cercanos con Python
    
    p Trabaja comparando la distancia de una observación a consultar con otras muestras del conjunto de entrenamiento y seleccionando los k vecinos más cercanos. La mayoría de las clases a las que pertenecen esos vecinos más cercanos será la clase a la que pertenezca la observación a consultar.

    p.fw-bold.mb-5 A continuación  se puede observar cómo hacer uso de dicho algoritmo.

    .container-100.py-5(style="background: linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%);")
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 1
        .col.ps-3
          p Lo primero que se debe hacer es importar las librerías necesarias para trabajar con el algoritmo k-vecinos más cercanos, para ese fin debe usarse el siguiente comando:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              p.mb-0.text-white from sklearn.neighbors import KNeighborsClassifier
      
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 2
        .col.ps-3(style="max-width: calc(100% - 42px);")
          p Una vez importada la librería se define el algoritmo #[b KNeighborsClassifier(n_neighbors=5)], con un k escogido en este caso inicie con k=5 vecinos, luego se entrena usando la función fit y se realiza una predicción usando los datos de #[b X_prueba]. Una forma de medir la precisión del algoritmo es usar la función score. 
          p El código fuente muestra la predicción con k-vecinos más cercanos.
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4.w-100(style="background-color: #24135A; overflow: auto" data-aos="fade-right")
              p.mb-0.text-white algoritmoKnn = KNeighborsClassifier(n_neighbors=5)
                br
                |algoritmoKnn.fit(X_entrenamiento, Y_entrenamiento)
                br
                |Y_predKnn = algoritmoKnn.predict(X_prueba)
                br
                |print(‘Precisión Vecinos más Cercanos: {}’.format(algoritmoKnn.score(X_entrenamiento, Y_entrenamiento)))
                br
                |Resultado: Precisión vecinos más cercanos: 0.9699248120300752

      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 3
        .col.ps-3
          p Para realizar una predicción k vecinos más cercanos con Python se hace la suposición que se encuentra un pingüino con los siguientes datos: bill_length_mm = 50 mm ‘bill_depth_mm’ = 21 mm
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              p.mb-0.text-white res=algoritmoKnn.predict([[50,21]])
                br
                |print(“La especie puede ser : “)
                br
                |if res==‘Adelie’: print(“Adelie”)
                br
                |elif res==‘Gentoo’: print(“Gentoo”)
                br
                |elif res==‘Chinstrap’: print(“Chinstrap”)
                br
                |Resultado: La especie puede ser Chinstrap
    
      .d-flex.align-items-start.mb-4
        .id-circular.mb-2.mx-auto(style="background: linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%);" data-aos="fade-right")
          span 4
        .col.ps-3
          p El resultado de una predicción con estos datos es:
          .d-flex.pe-md-3.mb-3
            .tarjeta.px-4.py-4(style="background-color: #24135A;" data-aos="fade-right")
              p.mb-0.text-white bill_length_mm = 50 y bill_depth_mm = 21, es decir, que el pingüino es de tipo Chinstrap


    Separador
    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5 Redes neuronales con Python
    
    p.mb-5(data-aos="fade-right") Son una técnica de inteligencia artificial basada en la forma como funcionan las neuronas en el cerebro. Consiste en unidades llamadas neuronas, las cuales tienen algunas características particulares, las cuales se muestran a continuación.

    ImagenInfografica.color-acento-botones.mb-5.col-xl-8.col-lg-10.mx-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img-9.svg' alt='')

      .tarjeta.color-acento-botones.p-4(x="9%" y="6.5%" numero="" style='background-color: #EFF0FE; border: 1px solid #9697F8')
        p Cada neurona puede realizar tres operaciones principales:
        ul.mb-0.lista-ul
          li.mb-1
            i.lista-ul__vineta(style="color: #3ECE9B")
            | Tomar la suma ponderada de las entradas.
          li.mb-1
            i.lista-ul__vineta(style="color: #3ECE9B")
            | Agregar un peso constante adicional a esta suma ponderada.
          li.mb-1
            i.lista-ul__vineta(style="color: #3ECE9B")
            | Aplicar una función no lineal a la salida, usando una función de activación predefinida.
      .tarjeta.color-acento-botones.p-4(x="63%" y="4.5%" numero="" style='background-color: #EFF0FE; border: 1px solid #9697F8')
        p.mb-0 Tiene una o más entradas, los datos de entrada son expresados como números de punto flotante.
      .tarjeta.color-acento-botones.p-4(x="4.5%" y="44.5%" numero="" style='background-color: #EFF0FE; border: 1px solid #9697F8')
        p.mb-0 Se separan en capas. Cada capa puede tener una o más neuronas. Una red tiene al menos una capa de entrada, que es donde se reciben los datos y una capa de salida que tiene el resultado calculado.
      .tarjeta.color-acento-botones.p-4(x="86%" y="44.5%" numero="" style='background-color: #EFF0FE; border: 1px solid #9697F8')
        p.mb-0 Retornar un valor de salida que es un número de punto flotante.
      .tarjeta.color-acento-botones.p-4(x="66%" y="85%" numero="" style='background-color: #EFF0FE; border: 1px solid #9697F8')
        p.mb-0 Retornar un valor de salida que es un número de punto flotante.
      .tarjeta.color-acento-botones.p-4(x="41%" y="96%" numero="" style='background-color: #EFF0FE; border: 1px solid #9697F8')
        p.mb-0 Las neuronas se unen a través de diferentes conexiones.


    .tarjeta.p-3.col-xl-10.mx-auto(style="background: linear-gradient(180deg, #0067D5 0%, #550AC3 100%);")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/tema3/img-10.svg").img65
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              h4.mb-1 Ejemplo de redes neuronales
              p.mb-0.text-small Revise el siguiente documento en el que se muestra un ejemplo sencillo con Python, haciendo uso de las redes neuronales.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/CF02_3_5_imagen_interactiva_caracteristicas_redes_neuronales.docx')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
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
