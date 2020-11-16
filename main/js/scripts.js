
//importScripts('jquery-3.4.1.min.js');


// MODELO
var ejsMod1 = [
  {
    href: "../Modulo1/materiales_v1/01_mi_primera_pagina_con_imagen.html",
    title: "Características&nbsp;de&nbsp;estilo&nbsp;CSS",
    desc: "Tema 1. Ejercicio opcional. Características de estilo CSS",
  },
  {
    href: "../Modulo1/tema4_ej_opcional/index.html",
    title: "Esquema&nbsp;de&nbsp;página&nbsp;web&nbsp;HTML",
    desc: "Tema 4. Ejercicio opcional. Esquema de página web HTML",
  },
  {
    href: "../Modulo1/entrega_p2p_modulo1/index.html",
    title: "Ejercicio&nbsp;P2P&nbsp;Obligatorio",
    desc: "Ejercicio P2P Obligatorio. Secciones y líneas generales HTML.",
  },
];
var ejsMod2 = [
  {
    href: "../Modulo2/menu_horizontal/index.html",
    title: "Construir&nbsp;menú&nbsp;horizontal",
    desc: "Tema 1. VS Code. Construir menú horizontal con HTML y CSS",
  },
  {
    href: "../Modulo2/tema2_ej_opcional/index.html",
    title: "Estructura&nbsp;CSS",
    desc: "Tema 2. Ejercicio opcional. Estructura CSS",
  },
  {
    href: "../Modulo2/tema3_ej_opcional/index.html",
    title: "Fuentes&nbsp;vinculadas",
    desc: "Tema 3. Ejercicio Opcional. Fuentes vinculadas",
  },

  {
    href: "../Modulo2/entrega_p2p_modulo2/index.html",
    title: "Ejercicio&nbsp;P2P&nbsp;Obligatorio",
    desc: "Ejercicio P2P Obligatorio. Menús y estructuras CSS.",
  },
];
var ejsMod3 = [
  {
    href: "../Modulo3/CORE_03_Mods_3/25-calc_cuadrado-inv-cubo.html",
    title: "Añadir&nbsp;botón&nbsp;que&nbsp;eleve&nbsp;al&nbsp;cubo",
    desc: "Tema 4. Ejercicio opcional. Añadir botón a la calculadora.",
  },
  {
    href: "../Modulo3/MOOC_html_mod3-calculadora_entrega-master/index.html",
    title: "Ejercicio&nbsp;P2P&nbsp;Obligatorio",
    desc: "Ejercicio P2P Obligatorio. Calculadora completa.",
  },
];
var ejsMod4 = [
  {
    href: "../Modulo4/CORE_04_Mods_4_v2/27-calculadora_cubo_evento.htm",
    title: "Eventos&nbsp;y&nbsp;bubbling",
    desc: "Tema 1. Ejercicio opcional. Eventos y bubbling.",
  },
  {
    href: "../Modulo4/CORE_04_Mods_4_v2/33_MVC_pelis_Show.html",
    title:
      "Botones&nbsp;Crear,&nbsp;Editar,&nbsp;Borrar,&nbsp;Mostrar Detalles.",
    desc:
      "Tema 3. Ejercicio opcional. Lista de películas con botón Crear, Editar, Borrar, Mostrar Detalles",
  },
  {
    href: "../Modulo4/CORE_04_Mods_4_v2/52-Array_pelis_localStorage.html",
    title: "Añadir&nbsp;botón&nbsp;reset",
    desc:
      "Tema 6. Ejercicio opcional. Añadir botón Reset a lista de películas.",
  },
  {
    href: "../Modulo4/MOOC_html_mod4-MVC_cliente_entrega-master/index.html",
    title: "Ejercicio&nbsp;P2P&nbsp;Obligatorio",
    desc: "Ejercicio P2P Obligatorio. Aplicación Web de Películas",
  },
];

var ejsMod5 = [
  {
    href: "../Modulo5/CORE_05_MOD_5_ej/51-clock_mod.htm",
    title: "Reloj",
    desc: "Tema 8. Ejercicio opcional. Modificar reloj.",
  },
  {
    href: "../Modulo5/MOOC_html_mod5-juego_entrega-master/index.html",
    title: "Ejercicio&nbsp;P2P&nbsp;Obligatorio",
    desc: "Ejercicio P2P Obligatorio. Juego de disparos",
  },
];

var ejsMod6 = [
  {
    href: "../Modulo6/Ej1_31_MVC_pelis_Array_forEach.html",
    title: "Ejercicios&nbsp;opcionales&nbsp;bucles&nbsp;e&nbsp;iteradores",
    desc: "Tema 2. Ejercicios opcionales. Bucle forEach, map, reduce.",
  },
  {
    href: "../Modulo6/MOOC_html_mod6-strings_iteradores_regex_entrega-master/index.html",
    title: "Ejercicio&nbsp;P2P&nbsp;Obligatorio",
    desc: "Ejercicio P2P Obligatorio. Expresiones Regulares",
  },
];
var ejsMod7 = [  
  {
    href: "../Modulo7/CORE_07_MOD_7_ej/10-Prom_reflejos_async_bucle.html",
    title: "Bucle&nbsp;de&nbsp;test&nbsp;de&nbsp;reflejos",
    desc: "Tema 3. Ejercicio opcional. Test de reflejos.",
  },  {
    href: "../Modulo7/CORE_07_MOD_7_ej/25-pelis_Storage_add_reset_slide.html",
    title: "Botón&nbsp;delete&nbsp;en&nbsp;películas",
    desc: "Tema 6. Ejercicio opcional. Añadir botón delete a películas",
  },  {
    href: "../Modulo7/CORE_07_MOD_7_ej/Tema7_ej_opcional_2.html",
    title: "Cambiar Vanilla JavaScript por jQuery",
    desc: "Tema 7. Ejercicio opcional. Cambiar Vanilla JavaScript por jQuery.",
  },
  {
    href: "../Modulo7/MOOC_html_mod7-AJAX_entrega-master/index.html",
    title: "Ejercicio&nbsp;P2P&nbsp;Obligatorio",
    desc: "Ejercicio P2P Obligatorio. MVC Películas AJAX",
  },
];
var ejsMod8 = [];
var ejsMod9 = [];
var ejsMod10 = [];

var modulos = [
  {
    title: "Módulo 1. Introducción a HTML y CSS, estructura, herencia...",
    ejs: ejsMod1,
  },
  {
    title:
      "Módulo 2. Menús, Estructura CSS, Texto, Fuentes, Imágenes y Multimedia",
    ejs: ejsMod2,
  },
  {
    title:
      "Módulo 3. Introducción a ES6+, let, VS Code, DOM, Boolean, if, bucles...",
    ejs: ejsMod3,
  },
  {
    title:
      "Módulo 4. Eventos, Objetos, Arrays, MVC, JSON, Boolean y Storage API  ",
    ejs: ejsMod4,
  },
  {
    title:
      "Módulo 5. Tipos y clases, herencia, Number, multi-asignación, Spread/rest",
    ejs: ejsMod5,
  },
  {
    title:
      "Módulo 6. Strings, Iteradores Y Bucles, Programación Funcional Y Regexp",
    ejs: ejsMod6,
  },
  {
    title: "Módulo7. Excepciones, Promesas, Async/Await, HTTP, AJAX Y JQuery",
    ejs: ejsMod7,
  },
  {
    title:
      "Módulo 8. Arq. Información, UX, Wireframes, Iconos, SEO, SASS. @Media",
    ejs: ejsMod8,
  },
  {
    title:
      "Módulo 9. Transiciones, Animaciones CSS, SVG, Interacción Gestual...",

    ejs: ejsMod9,
  },
  {
    title:
      "Módulo 10. PWAs. Desarrollando Aplicaciones Para Android/IOS/Escritorio",
    ejs: ejsMod10,
  },
];

// VISTA
function indexView(modulos) {
  var i = 0,
    j = 0,
    html = "";

  while (i < modulos.length) {
    html += `<section class="divModulo"> 
        <h4 class="tituloModulo">${modulos[i].title}</h4>`;
    html += "<ul>";
    j = 0;
    while (j < modulos[i].ejs.length) {
      html += `<a href=${modulos[i].ejs[j].href} 
        class="linkModulo"
        data-toggle="tooltip"
        title=${modulos[i].ejs[j].title}>
        <li>${modulos[i].ejs[j].desc}</li>
        </a>`;
      j++;
    }
    html += "</ul>";
    html += "</section>";
    i++;
  }

  return html;
}



// CONTROLADOR
function indexContr() {
  document.getElementById("main").innerHTML = indexView(modulos);
}

function hideContr(){
  document.getElementById("main").append("asf") ;
  document.getElementById("main").hide();

  //$("#fecha").html(new Date());



}

// EVENTOS
document.addEventListener("DOMContentLoaded", (ev) => indexContr());

      document.addEventListener("click", (ev) => {
        if (ev.target.matches("#hide"))
          hideContr();
      });
