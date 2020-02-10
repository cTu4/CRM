Ext.onReady(function () {
    var categories = [2011,2012,2013,2014];
    var series = [{
        label: 'Гражданка',
        name: 'Наука',
        data: [-30, -10, -20, -12]
    }, {
        label: 'Гражданка',
        name: 'Остальное',
        data: [-10, -10, -15, -8]
    }, {
        label: 'Военка',
        name: 'Наука',
        data: [50, 50, 45, 50]
    },
        {
            label: 'Военка',
            name: 'Остальное',
            data: [10, 30, 20, 30]
        }];

    Ext.create('Ext.panel.Panel', {
        width: Ext.getBody().getWidth(),
        height: 700,
        title: 'Border Layout',
        layout: 'border',

        defaults: {
            collapsible: true,
            split: true,
        },
        items: [{
            title: 'West Region is collapsible',
            region:'west',
            xtype: 'panel',
            width: 200,
        },{
            title: 'Center Region',
            region: 'center',
            xtype: 'panel',
            layout: 'fit',
            collapsible: false,
            html: '<div id="main"></div>'
        }],
        renderTo: Ext.getBody()
    });

    Highcharts.chart('main',{
        chart: {
            type: 'column'
        },
        width: '100%',
        title: {
            text: 'Динамика военной и гражданской промышленности'
        },
        xAxis: {
            categories: categories
        },
        legend:{
            enabled:false
        },
        yAxis:[
            {
                title: false,
                reversed: false,
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + '%';
                    }
                },


            }
        ],



        tooltip: {
           formatter: function(){
               return '<b>'+this.point.series.userOptions.label+'</b><br/>'+this.series.name+':'+Math.abs(this.point.y)+'%<br/>Сумма:'+Math.abs(this.point.stackTotal)+'%';
           },
        },
        plotOptions: {
            column: {
                stacking: 'normal',
            }
        },
        series: series
    });









    /*
    Ext.create('Ext.panel.Panel', {
        width: 500,
        height: 300,
        margin: 50,
        title: 'Border Layout',
        items: {
            xtype: 'button',
            text: 'Vk auth',
            margin: 50,
            width: 100,
            handler: function () {
                var key = 'a9Mqx2Xf1KJ4K6RKTmP9';
                var id ='7279137';


            }

        },
        renderTo: Ext.getBody()
    });*/
});
