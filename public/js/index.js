$(window).on('load', function () {
    gsap.to('#loader', 1, {y: "-100%"});
    gsap.to('#loader', 1, {opacity: 0});
    gsap.to('#loader', 0, {display: "none", delay: 1});
    gsap.to('#header', 0, {display: "block", delay: 1})
    gsap.to('#navigation-content', 0, {display: "none"});
    gsap.to('#navigation-content', 0, {display: "flex", delay: 1});
})
$(function () {
    $('.color-panel').on("click", function (e) {
        e.preventDefault();
        $('.color-changer').toggleClass('color-changer-active');
    });
    $('.colors a').on("click", function (e) {
        e.preventDefault();
        var attr = $(this).attr("title");
        console.log(attr);
        $('head').append('<link rel="stylesheet" href="/public/css/' + attr + '.css">');
    });
});
$(function () {
    $('.menubar').on('click', function () {
        gsap.to('#navigation-content', .6, {y: 0});
    })
    $('.navigation-close').on('click', function () {
        gsap.to('#navigation-content', .6, {y: "-100%"});
    });
});

$(function () {
    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 100;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
    };
})
$(function () {

    $('#about-link').on('click', function () {
        gsap.to('#navigation-content', 0, {display: "none", delay: .7});
        gsap.to('#navigation-content', 0, {y: '-100%', delay: .7});
        gsap.to('#header', 0, {display: "none"});

        gsap.to('#portfolio', 0, {display: "none"});
        gsap.to('#breaker', 0, {display: "block"});
        gsap.to('#breaker-two', 0, {display: "block", delay: .1});
        gsap.to('#contact', 0, {display: "none"});
        gsap.to('#breaker', 0, {display: "none", delay: 2});
        gsap.to('#breaker-two', 0, {display: "none", delay: 2});
        gsap.to('#about', 0, {display: "block", delay: .7});
        gsap.to('#navigation-content', 0, {display: 'flex', delay: 2});
    })
    $('#contact-link').on('click', function () {
        gsap.to('#navigation-content', 0, {display: "none", delay: .7});
        gsap.to('#navigation-content', 0, {y: '-100%', delay: .7});
        gsap.to('#header', 0, {display: "none"});
        gsap.to('#about', 0, {display: "none"});

        gsap.to('#portfolio', 0, {display: "none"});
        gsap.to('#breaker', 0, {display: "block"});
        gsap.to('#breaker-two', 0, {display: "block", delay: .1});
        gsap.to('#breaker', 0, {display: "none", delay: 2});
        gsap.to('#breaker-two', 0, {display: "none", delay: 2});
        gsap.to('#contact', 0, {display: "block", delay: .7});
        gsap.to('#navigation-content', 0, {display: 'flex', delay: 2});
    })
    $('#portfolio-link').on('click', function () {
        gsap.to('#navigation-content', 0, {display: "none", delay: .7});
        gsap.to('#navigation-content', 0, {y: '-100%', delay: .7});
        gsap.to('#header', 0, {display: "none"});
        gsap.to('#about', 0, {display: "none"});
        gsap.to('#contact', 0, {display: "none"});

        gsap.to('#breaker', 0, {display: "block"});
        gsap.to('#breaker-two', 0, {display: "block", delay: .1});
        gsap.to('#breaker', 0, {display: "none", delay: 2});
        gsap.to('#breaker-two', 0, {display: "none", delay: 2});
        gsap.to('#portfolio', 0, {display: "block", delay: .7});
        gsap.to('#navigation-content', 0, {display: 'flex', delay: 2});
    })

    $('#home-link').on('click', function () {
        gsap.to('#navigation-content', 0, {display: "none", delay: .7});
        gsap.to('#navigation-content', 0, {y: '-100%', delay: .7});
        gsap.to('#header', 0, {display: "none"});
        gsap.to('#about', 0, {display: "none"});
        gsap.to('#portfolio', 0, {display: "none"});
        gsap.to('#contact', 0, {display: "none"});

        gsap.to('#breaker', 0, {display: "block"});
        gsap.to('#breaker-two', 0, {display: "block", delay: .1});
        gsap.to('#breaker', 0, {display: "none", delay: 2});
        gsap.to('#breaker-two', 0, {display: "none", delay: 2});
        gsap.to('#header', 0, {display: "block", delay: .7});
        gsap.to('#navigation-content', 0, {display: 'flex', delay: 2});
    })

})
$(function () {
    var body = document.querySelector('body');
    var $cursor = $('.cursor')

    function cursormover(e) {

        gsap.to($cursor, {
            x: e.clientX,
            y: e.clientY,
            stagger: .002
        })
    }

    function cursorhover(e) {
        gsap.to($cursor, {
            scale: 1.4,
            opacity: 1
        })

    }

    function cursor(e) {
        gsap.to($cursor, {
            scale: 1,
            opacity: .6
        })
    }

    $(window).on('mousemove', cursormover);
    $('.menubar').hover(cursorhover, cursor);
    $('a').hover(cursorhover, cursor);
    $('.navigation-close').hover(cursorhover, cursor);

    //oaw
    setTimeout(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });


    }, 2000)

    // Datos para las colaboraciones
    var collaborations = [
        {
            image: '/public/images/logo_colorado_cafe.png'
        },
        {
            image: '/public/images/leganux.png'
        },
        {
            image: '/public/images/sevendental.png'
        },
        {
            image: '/public/images/logo_abba_fondo.png'
        },
        {
            image: '/public/images/logo_concatur.png'
        },


        {
            image: '/public/images/fuego_mex.png'
        },
        {
            image: '/public/images/cultura_jesus.png'
        }
        // Agrega más objetos según sea necesario
    ];


    // Añadir colaboraciones al carousel
    collaborations.forEach(function (collaboration) {
        var card = $('<div>').addClass('text-center')
            .append($('<div>').addClass('card text-center border-0')
                .css({
                    'background-color': '#350D18',
                    'width': '400px',
                    'height': '230px'
                })
                .append($('<div>').addClass('card-body border-0 text-center')
                    .css({
                        'display': 'flex',
                        'justify-content': 'center',
                        'align-items': 'center',
                        'height': 'calc(100% - 10px)'
                    })
                    .append($('<img>').addClass('img-fluid')
                        .attr('src', collaboration.image)
                        .attr('alt', 'portfolio-fourth')
                        .css({
                            'max-width': '150px',
                            'max-height': '150px',
                            'margin': '0 auto'
                        })
                    )
                )
                .append($('<div>').addClass('card-footer border-0 text-center')
                    .css('background-color', 'transparent')
                    // Sin enlace en el botón
                    .append($('<button>').addClass('btn text-white')
                        .append($('<i>').addClass('gg-arrow-right'))
                    )
                )
            );

        $('#brands.owl-carousel').append(card);
    });


    // Datos para los proyectos
    var projects = [
        {
            title: 'Desarrollo de Plataforma para Ventas Digitales del Congreso DDLV',
            image: '/public/images/captura_ddlv_digital.png',
            description: 'Este proyecto involucró la creación de una plataforma de ventas digitales para el Congreso DDLV. Mi responsabilidad fue desarrollar una solución completa que incluyera la gestión de ventas en línea, la integración de métodos de pago y la automatización de procesos administrativos. La plataforma fue diseñada para ser intuitiva y fácil de usar, garantizando una experiencia fluida para los usuarios.',
            link: 'https://ddlvdigital.culturadejesus.com'
        }, {
            title: 'Desarrollo de Sitio Web para CONCATUR',
            image: '/public/images/concatur_web.png',
            description: 'Este proyecto consistió en el desarrollo integral de un sitio web para CONCATUR. Empresa dedicada a la consultoría y capacitación en comercio,turismo e inocuidad.',
            link: 'https://concatur.com.mx'
        },
        /* {
             title: 'Desarrollo de Sitio Web para Real State Inmobiliaria GM',
             image: '/public/images/realstategm.png',
             description: 'En este proyecto, desarrollé un sitio web completo para Real State Inmobiliaria GM, una empresa inmobiliaria. El sitio incluye un panel de administración donde los usuarios pueden gestionar propiedades y contactos de clientes de manera eficiente. Mi enfoque fue crear una herramienta funcional y fácil de usar, que reflejara la profesionalidad de la empresa y facilitara la gestión interna de la inmobiliaria.',
             link: 'https://www.realstategm.com'
         },*/
        {
            title: 'Desarrollo de Sitio Web para Café El Colorado',
            image: '/public/images/web_colorado_cafe.png',
            description: 'Este proyecto consistió en el desarrollo integral de un sitio web para Café El Colorado, un café 100% mexicano ubicado en Guerrero. Me encargué de implementar partes dinámicas del sitio, formularios de contacto y un sistema para gestionar distribuidores. Mi enfoque fue asegurar que el sitio web reflejara la identidad y valores del café, proporcionando una plataforma funcional y atractiva para sus clientes.',
            link: 'https://cafeelcolorado.com.mx'
        },
        {
            title: 'Plataforma MyScentJourney',
            image: '/public/images/msj.png',
            description: 'En este proyecto colaboré tanto en backend como en frontend. El proyecto es un e-commerce de perfumes en el cual se puede comprar por botella o decantación. Además, cuenta con un cotizador y también ofrece venta por preventa y lista de espera. En la parte de la lógica del negocio también ayudé en la gestión de lotes de las botellas, registro de stock y muchas otras tareas más.',
            link: 'https://myscentjourney.com'
        },
        {
            title: 'E-commerce y web Fuego Mexicano',
            image: '/public/images/fuegomex.png',
            description: 'Diseñé y desarrollé una página web completa para el Pastor Héctor Andrade, ofreciendo venta de merchandising, blog, agenda de eventos y peticiones de invitaciones.',
            link: 'https://fuegomexicano.com'
        },
        {
            title: 'Web Cultura de Jesús',
            image: '/public/images/cj.png',
            description: 'Diseñé y desarrollé una página web completa para la Iglesia Cultura de Jesús, ofreciendo información sobre áreas, congresos, horarios, ubicaciones y peticiones de oración.',
            link: 'https://culturadejesus.com'
        },
        {
            title: 'Web Mike Rosas Dev',
            image: '/public/images/mike_web.png',
            description: 'Diseñé y desarrollé mi sitio web personal, un portafolio que ofrece información acerca de mí, mis proyectos y experiencia profesional.',
            link: 'https://mikerosasdev.com'
        },
        {
            title: 'Abba Items Store',
            image: '/public/images/abba_web.png',
            description: 'Diseñé y desarrollé la landing page para Abba Items Store, una empresa 100% mexicana que ofrece lo último en moda y bisutería, incluyendo aretes, anillos y artículos de moda de temporada.',
            link: 'https://abbaitemsstore.mikerosasdev.com'
        },
        {
            title: 'ToothLabMX',
            image: '/public/images/toothlabmx_logo.jpeg',
            description: 'Software para gestionar laboratorios dentales con funciones como crear órdenes, administrar dentistas y productos, historial de órdenes, estadísticas y más.',
            link: 'https://github.com/Miguel98R/ToothLabMX_2'
        },
        {
            title: 'Project2Pug',
            image: '/public/images/project2pug.png',
            description: 'Transformador de plantillas HTML a Pug js para optimizar como motor de vista web.',
            link: 'https://github.com/Miguel98R/project2Pug'
        },
        {
            title: 'WaveModulator',
            image: '/public/images/wave_logo.jpeg',
            description: 'Proyecto en Python que ejemplifica técnicas de modulación digital con ondas sinusoidales, incluyendo ASK, FSK, PSK y QAM con distintos órdenes de modulación.',
            link: 'https://github.com/Miguel98R/WaveModulator'
        },
        {
            title: 'OffCanva Mike',
            image: '/public/images/offcanva_mike.png',
            description: 'OffCanva Mike es un complemento de jQuery para crear fácilmente menús fuera del lienzo en diferentes direcciones (izquierda, derecha, arriba, abajo).',
            link: 'https://mikeleganux1998.github.io/offcanva_mike/'
        }
        // Agrega más objetos según sea necesario
    ];


    // Añadir proyectos al contenido
    projects.forEach(function (project) {
        var card = $('<div>').addClass('col-12 col-sm-12 col-md-6 col-lg-6')
            .append($('<div>').addClass('card bg-black')
                .css('height', '100%')
                .append($('<div>').addClass('card-img-top')
                    .append($('<img>').addClass('m-2 img-fluid')
                        .attr('src', project.image)
                        .attr('style', 'max-height:310px;')
                        .attr('alt', 'portfolio-fourth')
                    )
                )
                .append($('<div>').addClass('card-body')
                    .append($('<h2>').addClass('text-danger').text(project.title))
                    .append($('<p>').addClass('text-white').text(project.description))
                )
                .append($('<div>').addClass('card-footer')
                    .append($('<div>').addClass('button_portfolies')
                        .append($('<a>').attr('href', project.link).attr('target', '_blank')
                            .append($('<button>').addClass('btn text-white')
                                .append($('<span>').addClass('index').text('Ver Página'))
                                .append($('<i>').addClass('gg-arrow-right'))
                            )
                        )
                    )
                )
            );

        $('#portfolio-content .container .row').append(card);
    });


})