"use strict";
(function (context, $) {


    var obj = {
        Elements: {},
        Templates: {},
        Options: {},
        LstUrl: {},
        
         init: function () {
 

            this.Elements.pageGeneric = context.App.PageGeneric;

           
            var self2 = obj;
             


            this.Elements.pageGeneric.init().then(function () {

                self2.cache();
                self2.initVendors();
                self2.bindEvents();
                self2.initTemplates();
                self2.initPage(); 
                self2.Elements.pageGeneric.hidePreLoader();
            });
            this.Elements.pageGeneric.hidePreLoader();



        },


        cache: function () {

            this.Elements.body = $('body'); 
            this.Elements.preloader = $('#preload');


        },

        bindEvents: function () {

        },

        initVendors: function () {
 
        },

        initTemplates: function () {

        },

        initPage: function () { 


            $('#bs-canvas-mobile-menu li').removeClass('active');
            $('#menu-surveys .nav-link.collapsed').collapse({ toggle: true});
            $('#menu-survey-customer-satistaction').addClass('active');
            
        },


       
    };


    context.App.PageSurveyCustomerSatistaction = obj;

})(this, jQuery); 
 