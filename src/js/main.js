var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
            '<div class="fila">'+
            '<div class="columna">'+
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>'+
                    '</a>' +
            
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">'+
                                '<a href="{{url}}" target="_blank">{{title}}</a>'+'<a href="{{url}}" target="_blank">({{file_size}}</a>' + '<a href="{{url}}" target="_blank">{{file_type}})</a>'+
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
           
                '</article>' +
            '</div>'+
            '</div>'+
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);
        
    },

    renderReports: function(reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();