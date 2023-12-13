(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{"044a":function(e,a,t){e.exports=t.p+"img/img-3.cdb9bbf2.svg"},3060:function(e,a,t){e.exports=t.p+"img/img-8.2ed12b9c.svg"},"36b6":function(e,a,t){e.exports=t.p+"img/lt-3.9c3ec406.svg"},"68b4":function(e,a,t){e.exports=t.p+"img/lt-5.04e61096.svg"},"6bd9":function(e,a,t){e.exports=t.p+"img/img-6.abea2cab.png"},"6e1e":function(e,a,t){e.exports=t.p+"img/lt-1.9a4b3a6c.png"},"7be8":function(e,a,t){e.exports=t.p+"img/img-1.cded00ff.png"},"7c30":function(e,a,t){e.exports=t.p+"img/lt-4.63920613.svg"},9144:function(e,a,t){e.exports=t.p+"img/lt-6.c9aa24cc.svg"},9324:function(e,a,t){e.exports=t.p+"img/img-9.2f4949c7.svg"},"941e":function(e,a,t){e.exports=t.p+"img/img-5.cb61bf35.svg"},af90:function(e,a,t){e.exports=t.p+"img/lt-2.65990cfa.svg"},b420:function(e,a,t){},d260:function(e,a,t){e.exports=t.p+"img/img-2.0b13e4fe.png"},d66d:function(e,a,t){e.exports=t.p+"img/img-4.053f7554.svg"},e688:function(e,a,t){e.exports=t.p+"img/img-7.4bd4834c.svg"},eb46:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"curso-main-container pb-3"},[s("BannerInterno"),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[e._m(0),s("p",{attrs:{"data-aos":"fade-right"}},[e._v("Incluyen algoritmos que toman una muestra de datos y sus respectivas salidas, el objetivo principal es que el algoritmo aprenda cómo se relacionan los datos de entrada X y sus correspondientes salidas Y, a partir de un conjunto de entrenamiento escogido para tal fin.")]),s("p",{staticClass:"mb-5 fw-bold",attrs:{"data-aos":"fade-right"}},[e._v("Con el conocimiento adquirido se puede predecir nuevas salidas a través de nuevos datos X")]),s("div",{staticClass:"bloque-texto-g bloque-texto-g-edit color-primario p-3 p-sm-4 p-md-5 col-xl-10 mx-auto",attrs:{"data-aos":"fade-right"}},[s("div",{staticClass:"bloque-texto-g__img",style:{"background-image":"url("+t("7be8")+")"}}),e._m(1)]),s("Separador"),e._m(2),e._m(3),e._m(4),s("div",{staticClass:"tarjeta p-3 p-md-5",staticStyle:{"background-color":"#EBECFF"}},[s("LineaTiempoC",{staticClass:"color-acento-contenido",attrs:{"text-small":""}},[s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap align-items-start",attrs:{titulo:"Paso 1"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",{attrs:{"data-aos":"fade-right"}},[e._v("Lo primero que se debe tener en cuenta es que: ")]),s("p",{attrs:{"data-aos":"fade-right"}},[s("b",[e._v("linear_model:")]),e._v(" sirve para entrenar un modelo de "),s("em",[e._v("Machine Learning")]),e._v(" de regresión lineal. "),s("br"),s("b",[e._v("train_test_split:")]),e._v(" sirve para dividir los datos en datos de entrenamiento y datos de prueba. "),s("br"),s("b",[e._v("metrics:")]),e._v(" sirve para medir el desempeño del modelo.")]),s("p",{staticClass:"fw-bold",attrs:{"data-aos":"fade-right"}},[e._v("En ese orden de ideas el código a utilizar es:")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"},attrs:{"data-aos":"fade-left"}},[s("code",{staticClass:"mb-0 text-white"},[e._v("import seaborn as sns "),s("br"),e._v("import matplotlib.pyplot as plt "),s("br"),e._v("from sklearn.linear_model import LinearRegression "),s("br"),e._v("from sklearn.model_selection import train_test_split "),s("br"),e._v("from sklearn.metrics import mean_squared_error, r2_score")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"290px"},attrs:{src:t("044a"),"data-aos":"fade-left"}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap align-items-start",attrs:{titulo:"Paso 2"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("Para entrenar el modelo con esta librería inicialmente se carga el valor de X con los datos de la longitud de la aleta "),s("b",[e._v("(flipper_length_mm)")]),e._v(", y Y con los datos de masa del pingüino "),s("b",[e._v("(body_mass_g)")]),e._v(", posteriormente se obtiene un subconjunto de datos que serán el "),s("em",[e._v("dataset")]),e._v(" de entrenamiento y el set de pruebas en las variables "),s("b",[e._v("X_train, Y_train, X_test, Y_test")]),e._v(" en una proporción de 80 % para los datos de entrenamiento y 20 % para los datos de prueba.")]),s("p",{staticClass:"fw-bold"},[e._v("El código a utilizar es:")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"}},[s("code",{staticClass:"mb-0 text-white"},[e._v("X = df_pinguinos[“ flipper_length_mm ”].values.reshape(-1,1) "),s("br"),e._v("Y = df_pinguinos[“body_mass_g”] "),s("br"),e._v("X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.20, random_state = 42)")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"290px"},attrs:{src:t("d66d")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap align-items-start",attrs:{titulo:"Paso 3"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("Posteriormente, se crea una instancia de "),s("b",[e._v("LinearRegression")]),e._v(" y se instruye a la regresión lineal que aprenda de los datos "),s("b",[e._v("X_train y Y_train")]),e._v(", para lo cual se usa el método "),s("b",[e._v("fit")]),e._v(" para ajustar los parámetros de la línea de regresión a los datos, es decir, se entrena a la regresión lineal.")]),s("p",{staticClass:"fw-bold"},[e._v("Para ese fin se utiliza el siguiente código:")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"}},[s("code",{staticClass:"mb-0 text-white"},[e._v("regresion = LinearRegression() "),s("br"),e._v("model = reg.fit(X_train, Y_train)")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"290px"},attrs:{src:t("044a")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap align-items-start",attrs:{titulo:"Paso 4"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("Una vez realizado esto ya se pueden observar los parámetros que estima la regresión lineal : ")]),s("code",{staticStyle:{color:"black"}},[e._v("print(‘m = ‘ + str(regresion.coef_) + ‘, b = ‘ "),s("br"),e._v("+ str(regresion.intercept_)) "),s("br"),e._v("m = [50.41798199], b = -5919.258741821233 , ")]),s("p",[e._v("Los parámetros obtenidos m y b se reemplazan en la ecuación de regresión y se obtiene:")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"}},[s("code",{staticClass:"mb-0 text-white"},[e._v("𝑦 = 50.417981𝑥 −5919.25874")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"290px"},attrs:{src:t("d66d")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap align-items-start",attrs:{titulo:"Paso 5"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("Luego de haber realizado este proceso, ya se puede predecir el resultado de la masa de un pingüino con una longitud de una aleta, usando el método predict de la clase "),s("b",[e._v("LinearRegression")]),e._v(". Si se desea saber cuál es la masa aproximada de un pingüino que tiene una longitud de la aleta de unos 200 mm, se usa el siguiente código:")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"}},[s("code",{staticClass:"text-white"},[e._v("longitudAleta = np.array ([200]) "),s("br"),e._v("prediccion = regresion.predict( longitudAleta.reshape(-1,1) ) "),s("br"),e._v("print (‘El valor de la masa de un pingüino que tiene longitud de aleta = ‘ + str(longitudAleta) + ‘ mm es ‘ + str(prediccion )) ")]),s("p",{staticClass:"text-white mb-0"},[e._v("El valor de la masa de un pingüino que tiene longitud de aleta = [200] mm es [4164.3376571]")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"290px"},attrs:{src:t("044a")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap align-items-start",attrs:{titulo:"Paso 6"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("La raíz cuadrada del coeficiente de determinación es R y puede variar entre -1 y 1, conocido como coeficiente de correlación de Pearson. Este coeficiente mide el grado de asociación lineal entre dos variables X y Y, el signo indica la dirección de la correlación y el valor numérico, el grado de correlación.")])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"290px"},attrs:{src:t("d66d")}})])])],1),s("Separador"),e._m(5),s("p",{attrs:{"data-aos":"fade-right"}},[e._v("La construcción de los modelos de clasificación es una de las tareas más usadas en el aprendizaje automático, cuando los datos de los cuales se va a aprender cuentan con atributos de entrada y estos se encuentran relacionados con valores discretos, clases o etiquetas.")]),e._m(6),s("Separador"),e._m(7),e._m(8),s("div",{staticClass:"tarjeta p-3 p-md-5",staticStyle:{"background-color":"#EBECFF"}},[s("LineaTiempoC",{staticClass:"color-acento-contenido",attrs:{"text-small":""}},[s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap",attrs:{titulo:"Decisiones de clasificación"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",{attrs:{"data-aos":"fade-right"}},[e._v("Para aplicar el árbol de decisión al ejercicio que se ha venido trabajando, se observa que se podría tomar decisiones de clasificación usando las variables "),s("b",[e._v("bill_length_mm")]),e._v(" y "),s("b",[e._v("bill_depth_mm")]),e._v(" para clasificar una especie, entonces, se remueve del "),s("em",[e._v("dataset")]),e._v(" las demás características. ")]),s("p",{staticClass:"fw-bold",attrs:{"data-aos":"fade-right"}},[e._v("El código que se debe utilizar en este caso es:")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"},attrs:{"data-aos":"fade-right"}},[s("code",{staticClass:"mb-0 text-white"},[e._v("datosPicos = df_pinguinos.drop ([‘island’, ‘flipper_length_mm’, ‘body_mass_g’, ‘sex’], axis = 1) pairPlotPicos = sns.pairplot ( datosPicos, hue=‘species’) pairPlotPicos.fig.set_size_inches(9, 6.5)")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"315px"},attrs:{src:t("36b6"),"data-aos":"fade-left"}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap",attrs:{titulo:"Gráfico de pares"}},[s("div",{staticClass:"col-lg-7 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("El gráfico muestra que la especie Adelie puede ser identificada con la longitud del pico ("),s("b",[e._v("bill_length_mm")]),e._v(") y para distinguir entre chinstrap y gentoo se puede realizar con la característica de profundidad del pico ("),s("b",[e._v("bill_depth_mm")]),e._v(").")])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"400px"},attrs:{src:t("6e1e")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap",attrs:{titulo:"Variables predictoras"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("Una vez identificadas las características que más contribuyen a una clasificación de una especie, entonces, se definen las variables predictoras en una variable X y los datos con los resultados o etiquetas en la variable Y.")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"}},[s("p",{staticClass:"mb-0 text-white"},[e._v("Donde: "),s("br")]),s("code",{staticClass:"text-white"},[e._v("X = df_pinguinos[[‘bill_length_mm’, ‘bill_depth_mm’]]"),s("br"),e._v("Y = df_pinguinos[‘species’]")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"315px"},attrs:{src:t("af90")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap",attrs:{titulo:"Variables predictivas"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("Una vez se tienen separadas las variables predictoras y las variables etiquetadas se procede a separar los datos de entrenamiento y prueba con la instrucción "),s("b",[e._v("train_test_split")]),e._v(", con parámetro X, Y y "),s("b",[e._v("test_size=0.2")]),e._v(", que significa que se tomará el 20 % de los datos para el set de pruebas, por tanto el 80 % se tomarán para el set de entrenamiento.")]),s("p",{staticClass:"fw-bold"},[e._v("Esto se hace a partir del siguiente código:")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"}},[s("code",{staticClass:"mb-0 text-white"},[e._v("X_entrenamiento, X_prueba, Y_entrenamiento, Y_prueba = train_test_split(X, Y, test_size = 0.2) print(‘Los datos de entrenamiento son {} y los datos de prueba son {} ‘.format(X_entrenamiento.shape[0], X_prueba.shape[0])) Los datos de entrenamiento son 266 y los datos de prueba son 6")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"315px"},attrs:{src:t("36b6")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap",attrs:{titulo:"Algoritmo"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("Posteriormente, se define el algoritmo de árboles de decisión con la función "),s("b",[e._v("DecisionTreeClassifier")]),e._v(", luego se entrena con los datos de entrenamiento X y Y. Con la función fit se realiza una predicción y se calcula una predicción con los datos de prueba fijados.")]),s("p",[e._v("El código a utilizar es:")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"}},[s("code",{staticClass:"text-white"},[e._v("from sklearn.tree import DecisionTreeClassifier"),s("br"),e._v("from sklearn import tree algoritmoTree = DecisionTreeClassifier() algoritmoTree.fit (X_entrenamiento, Y_entrenamiento) Y_predTree = algoritmoTree.predict (X_prueba) print(‘La Precisión del algoritmo de árboles de decisión es: {}’.format(algoritmoTree.score( X_entrenamiento, Y_entrenamiento ))) ")]),s("p",{staticClass:"text-white"},[e._v("La precisión del algoritmo de árboles de decisión es 1.0.")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"315px"},attrs:{src:t("36b6")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap",attrs:{titulo:"Realizar la predicción"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("Se observa que el algoritmo de clasificación con árboles de decisión tiene una precisión del 100 %."),s("br"),e._v("Para realizar una predicción con árboles de clasificación con Python, se hace la suposición que se encuentra un pingüino con los siguientes datos:")]),s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"}},[s("code",{staticClass:"mb-0 text-white"},[e._v("bill_length_mm = 50 mm"),s("br"),e._v("'bill_depth_mm' = 21 mm"),s("br")]),s("p",{staticClass:"mb-0 text-white"},[e._v("El código a utilizar es:")]),s("code",{staticClass:"text-white"},[e._v("algoritmoTree.predict([[50,21]])")]),s("p",{staticClass:"mb-0 text-white"},[e._v("resultado:")]),s("code",{staticClass:"text-white"},[e._v("array(['Chinstrap'], dtype=object)")])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"315px"},attrs:{src:t("36b6")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap",attrs:{titulo:"Observar el árbol"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("Si se desea observar el árbol de decisión en pleno se puede hacer de varias formas, una de las cuales es importando la librería "),s("b",[e._v("export_graphviz")]),e._v(", se definen las variables características y las variables label, de esta manera:")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"}},[s("code",{staticClass:"mb-0 text-white"},[e._v("from sklearn.tree import DecisionTreeClassifier, export_graphviz import graphviz")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"315px"},attrs:{src:t("7c30")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap",attrs:{titulo:"Dibujo del árbol"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("El código fuente a continuación dibuja el árbol de decisión para mejor entendimiento del investigador y se basa en Scikit learn usando la libreria "),s("b",[e._v("tree.export.graphviz.")])]),s("p",[e._v("El código es el siguiente:")]),s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta px-4 py-2",staticStyle:{"background-color":"#24135A"}},[s("code",{staticClass:"mb-0 text-white"},[e._v("feature_names = [‘bill_length_mm’, ’bill_depth_mm’] class_names = [‘Adelie’, ‘Chinstrap’,’Gentoo’] datos = tree.export_graphviz(algoritmoTree, out_file=None, feature_names=feature_names, class_names = class_names,filled=True, rounded=True, special_characters=True) graph = graphviz.Source(datos) graph")])])])]),s("img",{staticClass:"mx-auto col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2",staticStyle:{"max-width":"315px"},attrs:{src:t("68b4")}})]),s("div",{staticClass:"col-lg-11 mx-auto d-flex flex-wrap",attrs:{titulo:"Árbol generado"}},[s("div",{staticClass:"col-lg-8 pe-lg-4 order-2 order-lg-1"},[s("p",[e._v("Se puede observar en el árbol generado una primera comparación inicial de "),s("b",[e._v("bill_length_mm <= 42.55 o bill_length_mm 42.55")]),e._v(" y una primera rama con "),s("b",[e._v("bill_depth_mm <= 15.1")]),e._v(" si la primera condición es verdadera. Luego, se observa en la rama siguiente un primer resultado. Si cumple las dos condiciones anteriores, la especie se clasificó como gentoo y así sucesivamente. ")]),s("p",[e._v("El algoritmo clasificó en forma automática estas condiciones de la forma más eficiente posible. Se puede observar un árbol resultante bastante complejo pero con "),s("b",[e._v("scikit-learn")]),e._v(" la generación es bastante sencilla.")])]),s("div",{staticClass:"col-lg-4 mb-4 mb-lg-auto order-1 order-lg-2 text-center"},[s("img",{staticClass:"mx-auto mb-2",staticStyle:{"max-width":"315px"},attrs:{src:t("9144")}}),s("a",{on:{click:function(a){e.modal1=!0}}},[e._v("Ampliar imagen")])])])])],1),s("ModalA",{attrs:{"abrir-modal":e.modal1},on:{"update:abrirModal":function(a){e.modal1=a},"update:abrir-modal":function(a){e.modal1=a}}},[s("img",{staticClass:"mx-auto",attrs:{src:t("3060"),"data-aos":"fade-left"}})]),s("Separador"),e._m(9),s("p",[e._v("Trabaja comparando la distancia de una observación a consultar con otras muestras del conjunto de entrenamiento y seleccionando los k vecinos más cercanos. La mayoría de las clases a las que pertenecen esos vecinos más cercanos será la clase a la que pertenezca la observación a consultar.")]),s("p",{staticClass:"fw-bold mb-5"},[e._v("A continuación se puede observar cómo hacer uso de dicho algoritmo.")]),e._m(10),s("Separador"),e._m(11),s("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-right"}},[e._v("Son una técnica de inteligencia artificial basada en la forma como funcionan las neuronas en el cerebro. Consiste en unidades llamadas neuronas, las cuales tienen algunas características particulares, las cuales se muestran a continuación.")]),s("ImagenInfografica",{staticClass:"color-acento-botones mb-5 col-xl-8 col-lg-10 mx-auto",scopedSlots:e._u([{key:"imagen",fn:function(){return[s("figure",[s("img",{attrs:{src:t("9324"),alt:""}})])]},proxy:!0}])},[s("div",{staticClass:"tarjeta color-acento-botones p-4",staticStyle:{"background-color":"#EFF0FE",border:"1px solid #9697F8"},attrs:{x:"9%",y:"6.5%",numero:""}},[s("p",[e._v("Cada neurona puede realizar tres operaciones principales:")]),s("ul",{staticClass:"mb-0 lista-ul"},[s("li",{staticClass:"mb-1"},[s("i",{staticClass:"lista-ul__vineta",staticStyle:{color:"#3ECE9B"}}),e._v("Tomar la suma ponderada de las entradas.")]),s("li",{staticClass:"mb-1"},[s("i",{staticClass:"lista-ul__vineta",staticStyle:{color:"#3ECE9B"}}),e._v("Agregar un peso constante adicional a esta suma ponderada.")]),s("li",{staticClass:"mb-1"},[s("i",{staticClass:"lista-ul__vineta",staticStyle:{color:"#3ECE9B"}}),e._v("Aplicar una función no lineal a la salida, usando una función de activación predefinida.")])])]),s("div",{staticClass:"tarjeta color-acento-botones p-4",staticStyle:{"background-color":"#EFF0FE",border:"1px solid #9697F8"},attrs:{x:"63%",y:"4.5%",numero:""}},[s("p",{staticClass:"mb-0"},[e._v("Tiene una o más entradas, los datos de entrada son expresados como números de punto flotante.")])]),s("div",{staticClass:"tarjeta color-acento-botones p-4",staticStyle:{"background-color":"#EFF0FE",border:"1px solid #9697F8"},attrs:{x:"4.5%",y:"44.5%",numero:""}},[s("p",{staticClass:"mb-0"},[e._v("Se separan en capas. Cada capa puede tener una o más neuronas. Una red tiene al menos una capa de entrada, que es donde se reciben los datos y una capa de salida que tiene el resultado calculado.")])]),s("div",{staticClass:"tarjeta color-acento-botones p-4",staticStyle:{"background-color":"#EFF0FE",border:"1px solid #9697F8"},attrs:{x:"86%",y:"44.5%",numero:""}},[s("p",{staticClass:"mb-0"},[e._v("Retornar un valor de salida que es un número de punto flotante.")])]),s("div",{staticClass:"tarjeta color-acento-botones p-4",staticStyle:{"background-color":"#EFF0FE",border:"1px solid #9697F8"},attrs:{x:"66%",y:"85%",numero:""}},[s("p",{staticClass:"mb-0"},[e._v("En redes más complejas se pueden tener unas capas intermedias llamadas capas ocultas. ")])]),s("div",{staticClass:"tarjeta color-acento-botones p-4",staticStyle:{"background-color":"#EFF0FE",border:"1px solid #9697F8"},attrs:{x:"41%",y:"96%",numero:""}},[s("p",{staticClass:"mb-0"},[e._v("Las neuronas se unen a través de diferentes conexiones.")])])]),s("div",{staticClass:"tarjeta p-3 col-xl-10 mx-auto",staticStyle:{background:"linear-gradient(180deg, #0067D5 0%, #550AC3 100%)"}},[s("div",{staticClass:"row justify-content-around align-items-center"},[e._m(12),s("div",{staticClass:"col"},[s("div",{staticClass:"row justify-content-between align-items-center"},[e._m(13),s("div",{staticClass:"col-sm-auto"},[s("a",{staticClass:"boton color-acento-botones",attrs:{href:e.obtenerLink("/downloads/EjemploRedesNeuronales.pdf"),target:"_blank"}},[s("span",[e._v("Descargar")]),s("i",{staticClass:"fas fa-file-download"})])])])])])])],1)],1)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo-principal color-acento-contenido"},[t("div",{staticClass:"titulo-principal__numero"},[t("span",[e._v("3")])]),t("h1",[e._v("Algoritmos de aprendizaje supervisado en acción con Python")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bloque-texto-g__texto p-4"},[t("p",{staticClass:"mb-0"},[e._v("Estos algoritmos se llaman supervisados porque el modelo aprendió de respuestas y etiquetas conocidas de antemano en la fase de entrenamiento. Los métodos de aprendizaje supervisado son de dos tipos principales, esto depende del problema que se desea resolver y pueden ser: algoritmos de regresión y algoritmos de clasificación.")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_1"}},[t("h2",[e._v("3.1 Algoritmo de regresión con Python")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-right"}},[e._v("La regresión lineal se utiliza para estimar valores reales como ventas, costos, cantidad de llamadas en una central, gastos, etc., en función de unas variables predictoras de tipo continuo. "),t("b",[e._v("La mejor ecuación que se ajusta se llama línea de regresión y la ecuación utilizada es:")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"d-flex flex-wrap mb-5"},[s("div",{staticClass:"col-md-6 d-flex flex-wrap order-2 order-md-1"},[s("div",{staticClass:"d-flex pe-md-3 mb-3"},[s("div",{staticClass:"tarjeta p-3 p-md-4 mb-auto",staticStyle:{"background-color":"#24135A"},attrs:{"data-aos":"fade-left"}},[s("p",{staticClass:"mb-0",staticStyle:{color:"#FFD945"}},[e._v("𝑌 = 𝑚𝑋+𝑏")])])]),s("div",{staticClass:"d-flex pe-md-4 mb-4 col-12 col-lg"},[s("div",{staticClass:"tarjeta p-3 p-md-4 w-100",staticStyle:{"background-color":"#E2F8F0"},attrs:{"data-aos":"fade-left"}},[s("p",{staticClass:"fw-bold"},[e._v("Donde:")]),s("p",{staticClass:"mb-0"},[e._v("𝑌: es la variable dependiente."),s("br"),e._v("𝑚: es la pendiente de la línea de regresión."),s("br"),e._v("𝑏: es la intersección con el eje Y.")])])]),s("p",{staticClass:"pe-md-4",attrs:{"data-aos":"fade-right"}},[e._v("La regresión lineal puede ser simple o múltiple, la primera se caracteriza por tener una variable independiente, contrario a la regresión múltiple que se caracteriza por tener más de una variable independiente.")]),s("p",{staticClass:"mb-0 pe-lg-4",attrs:{"data-aos":"fade-right"}},[e._v("Volviendo al ejemplo propuesto se utilizará la librería "),s("em",[s("b",{staticStyle:{"background-color":"#E1E2FC"}},[e._v("scikit-learn,")])]),e._v(" que es una librería para el aprendizaje automático. En el siguiente recurso se pueden identificar los módulos a implementar y los pasos a seguir:")])]),s("img",{staticClass:"mx-auto mx-md-0 col-md-6 col-xl-5 mb-4 mb-md-auto order-1 order-md-2",staticStyle:{"max-width":"492px"},attrs:{src:t("d260"),"data-aos":"fade-left"}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_2"}},[t("h2",[e._v("3.2 Algoritmo de clasificación con Python")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"d-flex flex-wrap mb-5"},[s("div",{staticClass:"col-lg-8 order-2 order-lg-1 pe-lg-4 me-xl-auto",attrs:{"data-aos":"fade-right"}},[s("div",{staticClass:"d-flex flex-wrap mb-4"},[s("img",{staticClass:"mx-auto d-none d-md-flex mb-md-auto",staticStyle:{"max-width":"190px"},attrs:{src:t("941e")}}),s("p",{staticClass:"ps-md-4 col-md"},[e._v("Las tareas para resolver un problema de clasificación involucra un conjunto de datos de entrenamiento, en los cuales se tienen puntos de datos etiquetados con sus categorías o clases correctas. Los modelos de clasificación más usados son la regresión logística, Naive Bayes, los soportes de máquinas vectoriales, los modelos no paramétricos como k vecinos más cercanos, los métodos de clasificación por medio de árboles de decisión y las redes neuronales.")])]),s("p",{staticClass:"mb-0 p-3",staticStyle:{"background-color":"#FFFAE3"}},[e._v("Las aplicaciones de los modelos de clasificación son infinitas. Algunos ejemplos son el reconocimiento de imágenes, el reconocimiento de voz, los juegos de computador, los carros autónomos, la predicción de enfermedades, las predicciones financieras como la bolsa de valores, la identificación de defectos de fabricación, la identificación de posibles fraudes bancarios, etc.")])]),s("img",{staticClass:"mx-auto mb-4 mb-lg-auto col-lg-4 order-1 order-lg-2",staticStyle:{"max-width":"400px"},attrs:{src:t("6bd9"),"data-aos":"fade-left"}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_3"}},[t("h2",[e._v("3.3 Árboles de clasificación con Python")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"d-flex flex-wrap mb-5"},[s("img",{staticClass:"mx-auto mb-4 mb-lg-auto col-lg-4",staticStyle:{"max-width":"400px"},attrs:{src:t("e688"),"data-aos":"fade-left"}}),s("div",{staticClass:"col-lg-8 ps-lg-4 me-xl-auto",attrs:{"data-aos":"fade-right"}},[s("p",[e._v("Son muy usados en la planeación, la estadística y el aprendizaje automático, usa una estructura de árbol de condiciones y las consecuencias para evaluar posibles eventos de un problema en particular.")]),s("p",[e._v("Cada cuadrado es un nodo, los nodos de más abajo se denominan las hojas del árbol, imaginando un árbol al revés. Para iniciar las predicciones se comienza desde la raíz del árbol, es decir, desde el nodo superior; cada nodo es evaluado y saltando al siguiente nodo, según la decisión correcta.")]),s("p",[e._v("Un árbol de decisiones se usa, entonces, para predecir la clase o el valor de la variable dependiente, aprendiendo de las reglas del árbol de decisiones encontradas con los datos de entrenamiento.")]),s("p",[e._v("A continuación se explica cómo aplicar el árbol de decisiones al ejercicio planteado.")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_4"}},[t("h2",[e._v("3.4 K vecinos más cercanos con Python")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container-100 py-5",staticStyle:{background:"linear-gradient(180deg, rgba(168,221,255,1) 0%, rgba(213,213,255,1) 100%)"}},[t("div",{staticClass:"d-flex align-items-start mb-4"},[t("div",{staticClass:"id-circular mb-2 mx-auto",staticStyle:{background:"linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%)"},attrs:{"data-aos":"fade-right"}},[t("span",[e._v("1")])]),t("div",{staticClass:"col ps-3"},[t("p",[e._v("Lo primero que se debe hacer es importar las librerías necesarias para trabajar con el algoritmo k-vecinos más cercanos, para ese fin debe usarse el siguiente comando:")]),t("div",{staticClass:"d-flex pe-md-3 mb-3"},[t("div",{staticClass:"tarjeta px-4 py-4",staticStyle:{"background-color":"#24135A"},attrs:{"data-aos":"fade-right"}},[t("code",{staticClass:"mb-0 text-white"},[e._v("from sklearn.neighbors import KNeighborsClassifier")])])])])]),t("div",{staticClass:"d-flex align-items-start mb-4"},[t("div",{staticClass:"id-circular mb-2 mx-auto",staticStyle:{background:"linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%)"},attrs:{"data-aos":"fade-right"}},[t("span",[e._v("2")])]),t("div",{staticClass:"col ps-3",staticStyle:{"max-width":"calc(100% - 42px)"}},[t("p",[e._v("Una vez importada la librería se define el algoritmo "),t("b",[e._v("KNeighborsClassifier(n_neighbors=5)")]),e._v(", con un k escogido en este caso inicie con k=5 vecinos, luego se entrena usando la función fit y se realiza una predicción usando los datos de "),t("b",[e._v("X_prueba")]),e._v(". Una forma de medir la precisión del algoritmo es usar la función score. ")]),t("p",[e._v("El código fuente muestra la predicción con k-vecinos más cercanos.")]),t("div",{staticClass:"d-flex pe-md-3 mb-3"},[t("div",{staticClass:"tarjeta px-4 py-4 w-100",staticStyle:{"background-color":"#24135A",overflow:"auto"},attrs:{"data-aos":"fade-right"}},[t("code",{staticClass:"mb-0 text-white"},[e._v("algoritmoKnn = KNeighborsClassifier(n_neighbors=5)"),t("br"),e._v("algoritmoKnn.fit(X_entrenamiento, Y_entrenamiento)"),t("br"),e._v("Y_predKnn = algoritmoKnn.predict(X_prueba)"),t("br"),e._v("print(‘Precisión Vecinos más Cercanos: {}’.format(algoritmoKnn.score(X_entrenamiento, Y_entrenamiento)))"),t("br"),e._v("Resultado: Precisión vecinos más cercanos: 0.9699248120300752")])])])])]),t("div",{staticClass:"d-flex align-items-start mb-4"},[t("div",{staticClass:"id-circular mb-2 mx-auto",staticStyle:{background:"linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%)"},attrs:{"data-aos":"fade-right"}},[t("span",[e._v("3")])]),t("div",{staticClass:"col ps-3"},[t("p",[e._v("Para realizar una predicción k vecinos más cercanos con Python se hace la suposición que se encuentra un pingüino con los siguientes datos: "),t("b",[e._v("bill_length_mm")]),e._v(" = 50 mm ‘"),t("b",[e._v("bill_depth_mm’")]),e._v(" = 21 mm")]),t("div",{staticClass:"d-flex pe-md-3 mb-3"},[t("div",{staticClass:"tarjeta px-4 py-4",staticStyle:{"background-color":"#24135A"},attrs:{"data-aos":"fade-right"}},[t("code",{staticClass:"mb-0 text-white"},[e._v("res=algoritmoKnn.predict([[50,21]])"),t("br"),e._v("print(“La especie puede ser : “)"),t("br"),e._v("if res==‘Adelie’: print(“Adelie”)"),t("br"),e._v("elif res==‘Gentoo’: print(“Gentoo”)"),t("br"),e._v("elif res==‘Chinstrap’: print(“Chinstrap”)"),t("br"),e._v("Resultado: La especie puede ser Chinstrap")])])])])]),t("div",{staticClass:"d-flex align-items-start mb-4"},[t("div",{staticClass:"id-circular mb-2 mx-auto",staticStyle:{background:"linear-gradient(180deg, rgba(179,26,143,1) 0%, rgba(254,17,126,1) 100%)"},attrs:{"data-aos":"fade-right"}},[t("span",[e._v("4")])]),t("div",{staticClass:"col ps-3"},[t("p",[e._v("El resultado de una predicción con estos datos es:")]),t("div",{staticClass:"d-flex pe-md-3 mb-3"},[t("div",{staticClass:"tarjeta px-4 py-4",staticStyle:{"background-color":"#24135A"},attrs:{"data-aos":"fade-right"}},[t("p",{staticClass:"mb-0 text-white"},[t("code",[e._v("bill_length_mm = 50 y bill_depth_mm = 21")]),e._v(", es decir, que el pingüino es de tipo Chinstrap")])])])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_5"}},[t("h2",[e._v("3.5 Redes neuronales con Python")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"col-auto"},[s("img",{staticClass:"img65",attrs:{src:t("ff51")}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col mb-3 mb-sm-0 text-white"},[t("h4",{staticClass:"mb-1"},[e._v("Ejemplo de redes neuronales")]),t("p",{staticClass:"mb-0 text-small"},[e._v("Revise el siguiente documento en el que se muestra un ejemplo sencillo con Python, haciendo uso de las redes neuronales.")])])}],o={name:"Tema3",data:function(){return{modal1:!1}},mounted:function(){var e=this;this.$nextTick((function(){e.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},r=o,l=(t("fe2b"),t("2877")),n=Object(l["a"])(r,s,i,!1,null,null,null);a["default"]=n.exports},fe2b:function(e,a,t){"use strict";t("b420")},ff51:function(e,a,t){e.exports=t.p+"img/img-10.1f6261fa.svg"}}]);
//# sourceMappingURL=tema3.35a83b3a.js.map