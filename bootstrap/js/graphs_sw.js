$(function () { 
    Highcharts.setOptions({
         colors: ['#e50000', '#e50000', '#e50000', '#656363', '#8331e8', '#FF9655', '#FFF263', '#6AF9C4']
        });
    
   // Service revenue
    Highcharts.chart('serviceRevenue', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Mapato ya huduma'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Tzs ( Bn. )'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> Tzs. Bn.<br/>'
        },

        series: [{
            name: 'Mwaka',
            colorByPoint: true,
            data: [{
                name: 'FY 2014',
                y: 900,
                drilldown: 'FY 2014'
            }, {
                name: 'FY 2015',
                y: 900,
                drilldown: 'FY 2015'
            }, {
                name: 'FY 2016',
                y: 916,
                drilldown: 'FY 2016'
            }]
        }],
        drilldown: {
            series: [{
                name: 'FY 2014',
                id: 'FY 2014',
                data: [
                    [
                        'Mapato',
                        900
                    ]
                ]
            }, {
                name: 'FY 2015',
                id: 'FY 2015',
                data: [
                    [
                        'Mapato',
                        900
                    ]
                ]
            }, {
                name: 'FY 2016',
                id: 'FY 2016',
                data: [
                    [
                        'Mapato',
                        916
                    ]
                ]
            }]
        }
    });
    //End service revenue
    
    
    
    
    //Voice and data pricing
    
    Highcharts.chart('voiceData', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Bei za Dakika na MB'
        },
        xAxis: {
            categories: [
                'Jan 2014',
                'Jan 2015',
                'Jan 2016'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Tzs'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{point.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} Tzs</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'PPM',
            data: [35.9, 23.7, 24.6]

        }, {
            name: 'PPMB',
            data: [10.7, 5.2, 4.8],
            color: Highcharts.getOptions().colors[3]

        }]
    });
    //End Voice and data pricing
        
        
    
    //Monthly Service Revenue
        Highcharts.chart('monthlyserviceRevenue', {
        title: {
            text: 'Mapato ya huduma kwa mwezi'
        },
        xAxis: {
            categories: ['Apr-15', 'Mei-15', 'Jun-15', 'Jul-15', 'Ago-15', 'Sept-15', 'Okt-15', 'Nov-15', 'Des-15', 'Jan-16', 'Feb-16', 'Mar-16','Apr-16', 'Mei-16', 'Jun-16', 'Jul-16', 'Ago-16', 'Sept-16', 'Okt-16', 'Nov-16', 'Des-16']
        },
        series: [{
            type: 'column',
            name: 'Mapato ya huduma kwa mwezi',
            data: [72, 74, 76, 80, 80, 78, 79, 75, 78, 74, 69, 81, 71, 75, 74, 76, 78, 78, 81, 77, 81]
        },
        {
            type: 'spline',
            name: 'Ukuaji wa kila mwaka',
            data: [8, 3, 5, 2, 2, 0, 1, 0, 0, 1, 3, 0, 2, 1, 2, 5, 2, 1, 2, 3, 4],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[4],
                fillColor: Highcharts.getOptions().colors[4]
            }
        }]
    });
    //End Monthly Service Revenue
    
    
    
    
    
    // Mpesa revenue
    Highcharts.chart('mpesaRevenue', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Mapato ya MPesa'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Tzs ( Milioni )'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> Tzs. Million<br/>'
        },

        series: [{
            name: 'Mwaka',
            colorByPoint: true,
            data: [{
                name: 'FY 2014',
                y: 169396,
                drilldown: 'FY 2014'
            }, {
                name: 'FY 2015',
                y: 202615,
                drilldown: 'FY 2015'
            }, {
                name: 'FY 2016',
                y: 224269,
                drilldown: 'FY 2016'
            }]
        }],
        drilldown: {
            series: [{
                name: 'FY 2014',
                id: 'FY 2014',
                data: [
                    [
                        'Mapato',
                        169,396
                    ]
                ]
            }, {
                name: 'FY 2015',
                id: 'FY 2015',
                data: [
                    [
                        'Mapato',
                        202,615
                    ]
                ]
            }, {
                name: 'FY 2016',
                id: 'FY 2016',
                data: [
                    [
                        'Mapato',
                        224,269
                    ]
                ]
            }]
        }
    });
    //End Mpesa revenue
    
    
    //Data Traffic
    Highcharts.chart('dataTraffic', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Mlolongo wa data (MBs)'
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Milioni MBs'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Mlolongo wa data',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
    }]
});
    
    //End Data traffic
});