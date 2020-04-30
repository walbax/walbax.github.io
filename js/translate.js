
$(function () {
    var dictionary = {
        'About': {
            'pt-BR': 'Sobre',
            'en': 'About',
            'fr': 'À Propos',
        },
        'Services': {
            'pt-BR': 'Serviços',
            'en': 'Services',
            'fr': '',
        },
        'Portfolio': {
            'pt-BR': 'Portfólio',
            'en': 'Portfolio',
            'fr': '',
        },
        'Contact': {
            'pt-BR': 'Contato',
            'en': 'Contact',
            'fr': '',
        },
        'we_are_here': {
            'pt-BR': 'Estamos aqui para ajudá-lo a projetar, construir e operar serviços web inovadores.',
            'en': 'We are here to help you design, build, and operate innovative web services.',
            'fr': '',
        },
        'find_out_more': {
            'pt-BR': 'Descubra mais',
            'en': 'Find Out More',
            'fr': '',
        },
        'we_ve_got_what_you_need': {
            'pt-BR': 'Temos o que você precisa!',
            'en': 'We\'ve got what you need!',
            'fr': '',
        },
        'we_have_experience': {
            'pt-BR': 'Temos experiência e entregamos resultados em tecnologia. Especificamos, desenvolvemos, gerenciamos, implantamos e mantemos os sistemas de nossos clientes em funcionamento.',
            'en': 'We have experience and deliver results in technology. We specify, develop, manage, deploy and keep our customers\' systems up and running.',
            'fr': '',
        },
        'get_started': {
            'pt-BR': 'Começar!',
            'en': 'Get Started!',
            'fr': '',
        },
        'at_your_service': {
            'pt-BR': 'Ao Seu Serviço',
            'en': 'At Your Service',
            'fr': '',
        },
        'definition_of_needs': {
            'pt-BR': 'Definição de necessidades',
            'en': 'Definition of needs',
            'fr': '',
        },
        'we_help_you': {
            'pt-BR': 'Ajudamos você a selecionar as funcionalidades essenciais do seu produto e depois enriquecê-las gradualmente.',
            'en': 'We help you to select the essential functionalities of your product, then to enrich them gradually.',
            'fr': '',
        },
        'quick_start': {
            'pt-BR': 'Começo rápido',
            'en': 'Quick Start',
            'fr': '',
        },
        'we_offer_you': {
            'pt-BR': 'Nós le propomos as fundações para gerenciar seu conteúdo e sua negócio online: a sua aplicação operacional rapidamente.',
            'en': 'We offer you foundations to manage your content and your online sale: your application is operational quickly.',
            'fr': '',
        },
        'production': {
            'pt-BR': 'Realização',
            'en': 'Production',
            'fr': '',
        },
        'we_develop': {
            'pt-BR': 'Desenvolvemos seu aplicativo da Web em constante colaboração com você para melhorar continuamente o produto',
            'en': 'We develop your web application in constant collaboration with you to continuously improve the product.',
            'fr': '',
        },
        'maintenance': {
            'pt-BR': 'Sustentação',
            'en': 'Maintenance',
            'fr': '',
        },
        'we_are_committed': {
            'pt-BR': 'Estamos comprometidos com a sustentabilidade de sua aplicação e sua acessibilidade o tempo todo.',
            'en': 'We are committed to the sustainability of your application, and its accessibility at all times.',
            'fr': '',
        },
        'e_commerce': {
            'pt-BR': 'E-commerce',
            'en': 'E-commerce',
            'fr': '',
        },
        'data_analysis': {
            'pt-BR': 'Análise de dados',
            'en': 'Data Analysis',
            'fr': '',
        },
        'health_and_telemedicine': {
            'pt-BR': 'Saúde e Telemedicina',
            'en': 'Health and Telemedicine',
            'fr': '',
        },
        'online_business': {
            'pt-BR': 'Negócio online',
            'en': 'Online business',
            'fr': '',
        },
        'embbeded_systems': {
            'pt-BR': 'Sistemas Embarcados',
            'en': 'Embbeded Systems',
            'fr': '',
        },
        'trainning_and_courses': {
            'pt-BR': 'Treinamento e Cursos',
            'en': 'Trainning and Courses',
            'fr': '',
        },
        'lets_get_in_touch': {
            'pt-BR': 'Entre em Contato!',
            'en': 'Let\'s Get In Touch!',
            'fr': '',
        },
        'ready_to_start_your_next': {
            'pt-BR': 'Pronto para começar seu próximo projeto conosco? Ligue para nós ou envie um e-mail e entraremos em contato com você o mais breve possível!',
            'en': 'Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!',
            'fr': '',
        },
    };
    var langs = ['pt-BR', 'en', 'fr'];
    var current_lang = langs[0];

    $("#id-select-language-pt").click(function (event) {
        event.preventDefault(); 
        $("#id-select-language-pt").addClass("current-language");
        $("#id-select-language-en").removeClass("current-language");
        $("#id-select-language-fr").removeClass("current-language");
        current_lang = langs[0];
        translate();
        return false;
    });

    $("#id-select-language-en").click(function (event) {
        event.preventDefault(); 
        $("#id-select-language-pt").removeClass("current-language");
        $("#id-select-language-en").addClass("current-language");
        $("#id-select-language-fr").removeClass("current-language");
        current_lang = langs[1];
        translate();
        return false;
    });

    $("#id-select-language-fr").click(function (event) {
        event.preventDefault(); 
        $("#id-select-language-pt").removeClass("current-language");
        $("#id-select-language-en").removeClass("current-language");
        $("#id-select-language-fr").addClass("current-language");
        current_lang = langs[2];
        translate();
        return false;
    });

    function translate() {
        $("[data-translate]").each(function () {
            var key = $(this).data('translate');
            $(this).html(dictionary[key][current_lang] || "N/A");
        });
    }
});