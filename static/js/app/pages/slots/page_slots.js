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

            var customers1 = ['Miss Elena Bulanadi','Claudine Andria Murphy','Sok Ting Tok','Mr Zhan You He','Lakeesha Malick','Salley Disandro','Willodean Ellithorpe','Tawny London','Wilford Chaffins','Percy Denson','Danae Voelker','Loris Coatney','Mariella Port','Apolonia Mcdougald','Brittney Willilams','Suzanna Meszaros','Justa Shelly','Selina Bourget','Mellisa Pennel','Barbar Berti','Amalia Koons','Risa Likens','Antionette Holton','Leonel Cassity','Delois Cade','Megan Mcanulty','Louise Mcentire','Louann Angeles','Kirstie Furst','Chelsea Macaluso','Almeda Zaccaria','Amado Swanner','Delphia Ragusa','Vashti Stroop','Brittany Tackett','Lita Mongeau','Veola Mulvey','Anamaria Ciancio','Jack Caraveo','Kristeen Fitzgibbon','Willard Walck','Elicia Farrington','Katy Hilley','Damon Weatherly','Coralee Janey','Artie Hollomon','Shaquana Loucks','Margurite Kinne','Prudence Jenning','Elza Mccain','Lourdes Cianciolo','Yolande Opperman','Claud Gettings','Dagmar Hepworth'];
            var customerNumber1=['73136','77618','18529','156330'];
            var machineNumber1=['97','77','34','56','78','90'];
            var hostName1=['Alicja','Beata','Lee','Gosia'];



            var customers = new Bloodhound({
              datumTokenizer: Bloodhound.tokenizers.whitespace,
              queryTokenizer: Bloodhound.tokenizers.whitespace,
              // `customers` is an array of state names defined in "The Basics"
              local: customers1
            });
            var customerNumber = new Bloodhound({
              datumTokenizer: Bloodhound.tokenizers.whitespace,
              queryTokenizer: Bloodhound.tokenizers.whitespace,
              // `customers` is an array of state names defined in "The Basics"
              local: customerNumber1
            });
            var machineNumber = new Bloodhound({
              datumTokenizer: Bloodhound.tokenizers.whitespace,
              queryTokenizer: Bloodhound.tokenizers.whitespace,
              // `customers` is an array of state names defined in "The Basics"
              local: machineNumber1
            });
            var hostName = new Bloodhound({
              datumTokenizer: Bloodhound.tokenizers.whitespace,
              queryTokenizer: Bloodhound.tokenizers.whitespace,
              // `customers` is an array of state names defined in "The Basics"
              local: hostName1
            });
  
            $('#customer-name.typeahead').typeahead({
              hint: true,
              highlight: true,
              minLength: 1,
              limit: 10 /* Specify maximum number of suggestions to be displayed */
            },
            {
                name: 'customers',
                source: customers
            });

            $('#customer-number.typeahead').typeahead({
              hint: true,
              highlight: true,
              minLength: 1,
              limit: 10 /* Specify maximum number of suggestions to be displayed */
            },
            {
                name: 'customerNumber',
                source: customerNumber
            });

            $('#machine-number.typeahead').typeahead({
              hint: true,
              highlight: true,
              minLength: 1,
              limit: 10 /* Specify maximum number of suggestions to be displayed */
            },
            {
                name: 'machineNumber',
                source: machineNumber
            });

             $('#host-name.typeahead').typeahead({
              hint: true,
              highlight: true,
              minLength: 1,
              limit: 10 /* Specify maximum number of suggestions to be displayed */
            },
            {
                name: 'hostName',
                source: hostName
            });


             $('#date-insert').datetimepicker({
                format: 'L', ignoreReadonly: true, defaultDate: moment(), format: 'DD/MM/YYYY', useCurrent: true,allowInputToggle: true
            });
        },

        initTemplates: function () {

        },

        initPage: function () { 

            self = obj;
            $('#bs-canvas-mobile-menu li').removeClass('active');
            $('#menu-slots').addClass('active');
            
            const queryString = window.location.search;
            if(queryString.length>0){
                const urlParams = new URLSearchParams(queryString);
                const id = urlParams.get('id');
              

               
                 
                var LstCustomers=[];
                var obj1={};
                obj1.Id=1;
                obj1.Date=new Date("02-07-2019");
                obj1.CustomerName="Claudine Andria Murphy";
                obj1.CustomerNumber="73136";
                obj1.Prize=12073;
                obj1.MachineNumber="97";
                obj1.HostName="Alicja";
                obj1.Notes="";
                LstCustomers.push(obj1);

                var obj2={};
                obj2.Id=2;
                obj2.Date=new Date("02-09-2019");
                obj2.CustomerName="Miss Elena Bulanadi";
                obj2.CustomerNumber="77618";
                obj2.Prize=14778;
                obj2.MachineNumber="77"
                obj2.HostName="Beata";
                obj2.Notes="";
                LstCustomers.push(obj2);

                
                var obj3={};
                obj3.Id=3;
                obj3.Date=new Date("11-27-2019");
                obj3.CustomerName="Sok Ting Tok";
                obj3.CustomerNumber="18529";
                obj3.Prize=19077;
                obj3.MachineNumber="202";
                obj3.HostName="Lee";
                obj3.Notes="";
                LstCustomers.push(obj3);

                var obj4={};
                obj4.Id=4;
                obj4.Date=new Date("01-20-2020");
                obj4.CustomerName="Mr Zhan You He";
                obj4.CustomerNumber="156330";
                obj4.Prize=1432;
                obj4.MachineNumber="49";
                obj4.HostName="Gosia";
                obj4.Notes="teste";
                LstCustomers.push(obj4);


                for (var i = 0; i < LstCustomers.length; i++) {
                  if(LstCustomers[i].Id==id){

                    $('#customer-name').val(LstCustomers[i].CustomerName);
                    $('#customer-number').val(LstCustomers[i].CustomerNumber);
                    $('#customer-amount-won').val(LstCustomers[i].Prize);
                    $('#machine-number').val(LstCustomers[i].MachineNumber);
                    $('#date-insert').data("DateTimePicker").date( LstCustomers[i].Date);
                    $('#host-name').val(LstCustomers[i].HostName);
                    $('#new-employee-notes').val(LstCustomers[i].Notes);
                    break;

                  }
                }

            }
            
        },


       
    };


    context.App.Pageslots = obj;

})(this, jQuery); 
 