"use strict";
(function (context, $) {


    var obj = {
        Elements: {},
        Templates: {},
        Options: {},
        LstUrl: {},
        FlagPreLoader: true,
        
        init: function () {
            
            //inicialize cache

            var deferred = $.Deferred();
         

            this.cache();
            this.bindEvents();
            this.initTemplates();
            this.initVendors();

            this.initPage().done(function(){
 
                deferred.resolve();

            });
 
            return deferred.promise();
            
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


            var deferred = $.Deferred();
            var self5=obj;

            this.Options.MaxSecondsPreLoader = 15; //indica o tempo maximo que o preload fica ativo
            deferred.resolve();
             
            //this.hidePreLoader();
             return deferred.promise();
          
        },


        //mostrar o preload
        showPreLoader: function () {


            var self5 = obj;



            self5.Elements.preloader.show();
            self5.FlagPreLoader = true;


            var time = self5.Options.MaxSecondsPreLoader * 10000;

            setTimeout(
              function () {

                  self5.hidePreLoader();


              }, time);



        },

        //esconder o preload
        hidePreLoader: function () {


            var self5 = obj;
            if (self5.FlagPreLoader == true) {

                self5.Elements.preloader.fadeOut("slow");
                self5.FlagPreLoader = false;

            }


        },

    };


    context.App.PageGeneric = obj;

})(this, jQuery);




























