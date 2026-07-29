// Burger's Mir - Interacciones

document.addEventListener("DOMContentLoaded", function(){


    // Aparición de productos al bajar

    const productos = document.querySelectorAll(".producto");


    const mostrarProductos = () => {

        productos.forEach(producto => {

            const posicion = producto.getBoundingClientRect().top;

            const pantalla = window.innerHeight;


            if(posicion < pantalla - 80){

                producto.style.opacity = "1";
                producto.style.transform = "translateY(0)";

            }

        });

    };



    productos.forEach(producto => {

        producto.style.opacity = "0";
        producto.style.transform = "translateY(40px)";
        producto.style.transition = "0.6s ease";

    });



    window.addEventListener(
        "scroll",
        mostrarProductos
    );


    mostrarProductos();



    // Scroll suave para los botones del menú

    document.querySelectorAll('a[href^="#"]').forEach(enlace => {


        enlace.addEventListener("click", function(e){

            e.preventDefault();


            document.querySelector(
                this.getAttribute("href")
            ).scrollIntoView({

                behavior:"smooth"

            });


        });


    });



});
