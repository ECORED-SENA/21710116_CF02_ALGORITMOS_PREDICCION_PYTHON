export default {
  global: {
    componenteFormativo: 'Modelos de predicción',
    descripcionCurso:
      'Este componente formativo está enfocado en reconocer cómo funcionan los algoritmos de regresión y algoritmos de clasificación para realizar entrenamientos y predicción de datos, que permitan tomar decisiones asertivas en un contexto determinado. Se profundizará en el funcionamiento del modelo <em>Machine Learning</em> y Python, como lenguaje para realizar algoritmos de inteligencia artificial debido a su exploración estadística y librerías gráficas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a los modelos de predicción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Librerías Python',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Algoritmos de aprendizaje supervisado en acción con Python',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Algoritmo de regresión con Python',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Algoritmo de clasificación con Python',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Árboles de clasificación con Python',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'K vecinos más cercanos con Python',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Redes neuronales con Python',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Algoritmos de aprendizaje no supervisado en acción con Python',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '<em>Clustering</em> con Python',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Reducción de componentes con Python',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Midiendo el error de un modelo predictivo con Python',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Error en modelos de regresión',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Evaluación de modelos de clasificación',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informe final con Python',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF02_21710116_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Librerías de Python',
      referencia:
        'Escuela de Bayes. (2021). <em>Las 7 librerías más importantes para el análisis de datos en el lenguaje de programación de Python</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=guADTdAhLtA',
    },
    {
      tema: 'Árboles de clasificación con Python',
      referencia:
        'AMP Tech. (2020). <em>Machine Learning episodio 3. Árboles de decisiones</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=269QJ5joMCc',
    },
    {
      tema: 'Redes neuronales con Python ',
      referencia:
        'Ringa Tech. (2020). <em>Tu primera red neuronal en Python y Tensorflow</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iX_on3VxZzk',
    },
    {
      tema: 'Aprendizaje supervisado y no supervisado',
      referencia:
        'DotCSV. (2020) <em>¿Qué es el aprendizaje supervisado y no supervisado?</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oT3arRRB2Cw&t=27s',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje automático',
      significado:
        'rama de la inteligencia artificial, cuyo objetivo es implementar técnicas que permitan a los computadores aprender mediante un proceso de inducción del conocimiento.',
    },
    {
      termino: 'Aprendizaje automático no supervisado',
      significado:
        'hace referencia al proceso en el cual el algoritmo identifica patrones y saca  conclusiones  de los datos  que se le proporcionan.',
    },
    {
      termino: 'Aprendizaje automático supervisado',
      significado:
        'hace referencia al proceso en el cual el algoritmo recibe datos de entrenamiento  consistente en datos etiquetados.',
    },
    {
      termino: 'Clasificación',
      significado:
        'proceso de predecir con qué etiqueta se puede relacionar una observación.',
    },
    {
      termino: 'Entrenamiento',
      significado:
        'proceso que se realiza para que los modelos aprendan de los datos.',
    },
    {
      termino: 'Evaluación',
      significado:
        'análisis de eficiencia con el que el modelo predice los datos, generalmente se contrasta con una colección de prueba separada previamente.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'sistemas informáticos que pueden aprender como aprende un ser humano.',
    },
    {
      termino: '<em>K-means</em>',
      significado:
        'lenguaje de alto nivel, usado para construir todo tipo de aplicaciones y muy usado en la ciencia de datos.',
    },
    {
      termino: 'K-vecinos más cercanos',
      significado:
        'algoritmo de clasificación básico, cuyo objetivo es detectar patrones usando una cantidad k de observaciones cercanas  a la observación que se quiere clasificar.',
    },
    {
      termino: '<em>Machine Learning</em>',
      significado: 'aprendizaje automático.',
    },
    {
      termino: 'Método del codo',
      significado:
        'método consistente en ejecutar <em>k-means</em> para un <em>clúster</em>  hasta n <em>clúster</em> y graficar la inercia por cada uno, que es la sumatoria de la distancia al cuadrado desde cada observación hasta el centroide, el valor k se toma de la gráfica.',
    },
    {
      termino: 'Predicciones',
      significado:
        'capacidad del modelo para clasificar entradas nuevas, de acuerdo con un entrenamiento previo.',
    },
    {
      termino: 'Preprocesamiento',
      significado:
        'manipulación que se realiza a los datos con el objetivo de entregarlos al modelo como este lo requiera.',
    },
    {
      termino: 'Python',
      significado:
        'proceso criptográfico que proporciona comunicaciones seguras a través de las redes, haciendo que la información  entre extremos se transporte de forma segura mediante el uso de criptografía.',
    },
    {
      termino: 'Redes neuronales',
      significado:
        'está conformado por neuronas interconectadas en capas  imitando el cerebro humano, cada conexión tiene un peso y cada neurona presenta un sesgo.',
    },
    {
      termino: 'Regresión lineal',
      significado:
        'modelo del aprendizaje de tipo supervisado, que consiste en  obtener una relación entre variables de entrada o predictores de tipo numérico con una salida de tipo numérico.',
    },
    {
      termino: 'Regresión logística',
      significado:
        'modelo  que realiza un prejuicio del resultado de una variable categórica a partir de variables predictoras.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anaconda Inc. (2018).  <em>Anaconda distribution</em>. Anaconda Inc.',
      link: 'https://docs.anaconda.com/free/anaconda/',
    },
    {
      referencia:
        'Codificandobits. (2021). <em>¿Se requiere SQL para trabajar en Machine Learning?</em> Codificandobits.',
      link: 'https://www.codificandobits.com/blog/sql-machine-learning/',
    },
    {
      referencia:
        'González, L. (2023). <em>Regresión logística - Teoría</em>. Aprende IA.',
      link:
        'https://aprendeia.com/algoritmo-regresion-logistica-machine-learning-teoria/#Diferencias_entre_Regresion_Lineal_y_Regresion_Logistica',
    },
    {
      referencia:
        'Horst, A., Hill, A. y Gorman, K. (2020). <em>Palmerpenguins</em>. Palmer Penguins.',
      link: 'https://allisonhorst.github.io/palmerpenguins/',
    },
    {
      referencia:
        'Roman, V. (2019). <em>Machine Learning: cómo desarrollar un modelo desde cero</em>. Medium. ',
      link:
        'https://medium.com/datos-y-ciencia/machine-learning-c%C3%B3mo-desarrollar-un-modelo-desde-cero-cc17654f0d48',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Héctor Henry Jurado Soto',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñadora instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
