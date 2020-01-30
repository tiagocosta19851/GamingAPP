"use strict";
(function (context, $) {


    var obj = {
        Elements: {},
        Templates: {},
        Options: {},
        LstUrl: {},
        LstCustomers:[],
        
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
              this.Templates.templateRenderTableRows = _.template(TemplateSlots.renderTableRows);
          
        },

        initPage: function () { 

            self = obj;
            var LstCustomers=[];
            var obj1={};
            obj1.Id=1;
            obj1.Date=new Date("02-07-2019");
            obj1.CustomerName="Claudine Andria Murphy";
            obj1.CustomerNumber="73136";
            obj1.Prize=12073;
            obj1.MachineNumber="97";
            obj1.HostName="Alicja";
            LstCustomers.push(obj1);

            var obj2={};
            obj2.Id=2;
            obj2.Date=new Date("02-09-2019");
            obj2.CustomerName="Miss Elena Bulanadi";
            obj2.CustomerNumber="77618";
            obj2.Prize=14778;
            obj2.MachineNumber="77"
            obj2.HostName="Beata";
            LstCustomers.push(obj2);

            
            var obj3={};
            obj3.Id=3;
            obj3.Date=new Date("11-27-2019");
            obj3.CustomerName="Sok Ting Tok";
            obj3.CustomerNumber="18529";
            obj3.Prize=19077;
            obj3.MachineNumber="202";
            obj3.HostName="Lee";
            LstCustomers.push(obj3);

            var obj4={};
            obj4.Id=4;
            obj4.Date=new Date("01-20-2020");
            obj4.CustomerName="Mr Zhan You He";
            obj4.CustomerNumber="156330";
            obj4.Prize=1432;
            obj4.MachineNumber="49";
            obj4.HostName="Gosia";
            LstCustomers.push(obj4);



            var html_table = self.Templates.templateRenderTableRows({ items: LstCustomers });

            $('#table-list-slots tbody').html(html_table);











            $('#bs-canvas-mobile-menu li').removeClass('active');
            $('#menu-slots').addClass('active');
            
            

        },


       
    };


    context.App.PageListSlots = obj;

})(this, jQuery); 
 