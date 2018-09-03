/*公共行为类*/

/*选项卡*/
function tabBar(aBtn,aDiv){
	aBtn.on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).children($('i')).addClass('active').parent().siblings().children($('i')).removeClass('active');
		aDiv.eq($(this).index()).addClass('active').siblings().removeClass('active');
	});
}
/*轮播图*/
function swiper(aBtn,aDiv){
	var iNow = 0;
	var timer = null;
	aBtn.on('mouseover',function(){
		var index = $(this).index();
		iNow = index;
		tab(iNow);
	});
	function tab(iNow){
		aBtn.eq(iNow).addClass('active').siblings().removeClass('active');
		aDiv.eq(iNow).fadeIn().siblings().hide();
		aDiv.eq(iNow).addClass('active').siblings().removeClass('active');
	}
	function fnnext(){
		iNow++;
		if (iNow == aBtn.length) {
			iNow = 0;
		}
		tab(iNow);
	}
	clearInterval(timer);
	timer = setInterval(fnnext,3000);
	$('#banner').on('mouseover',function(){
		clearInterval(timer);
	});
	$('#banner').on('mouseout',function(){
		timer = setInterval(fnnext,3000);
	});
}
swiper($('#banner ol li'),$('#banner ul li'));

/*回到顶部*/
function returntop(obj){
	$(document).on('scroll',function(){
		if ($(this).scrollTop() >= $(window).height()-400) {
			obj.fadeIn();
		} else{
			obj.fadeOut();
		}
	});
	obj.on('click',function(){
		$('body,html').animate({
			scrollTop: 0
		},200);
	});
}
returntop($('.returntop'));
/*折线图*/
function getChart(id,date,data1,data2,data3,data4,name,name1,name2,name3,table) {
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
                //str.replace(/a/g, 'o')
            }
        },
        title: {
            left: 'center',
            text: table,
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '0.0001%']
        },
        dataZoom: [{
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:name,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data1
            },
            {
                name:name1,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(43, 163, 240)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data2
            },
            {
                name:name2,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(203, 62, 252)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data:  data3
            },
            {
                name:name3,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(229, 223, 121)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data4
            },

        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}

function getChart2(id,date,data1,data2,data3,data4,data5,name,name1,name2,name3,name4,table) {
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
                //str.replace(/a/g, 'o')
            }
        },
        title: {
            left: 'center',
            text: table,
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '0.0001%']
        },
        dataZoom: [{
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:name,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data1
            },
            {
                name:name1,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(43, 163, 240)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data2
            },
            {
                name:name2,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(203, 62, 252)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data:  data3
            },
            {
                name:name3,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(229, 223, 121)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data4
            },
            {
                name:name4,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(229, 223, 121)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data5
            },

        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}
function getChart3(id,date,data,data1,data2,data3,data4,data5,name,name1,name2,name3,name4,name5,table) {
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
                //str.replace(/a/g, 'o')
            }
        },
        title: {
            left: 'center',
            text: table,
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '0.0001%']
        },
        dataZoom: [{
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:name,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data
            },
            {
                name:name1,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(43, 163, 240)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data1
            },
            {
                name:name2,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(203, 62, 252)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data:  data2
            },
            {
                name:name3,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(229, 223, 121)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data3
            },
            {
                name:name4,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(229, 223, 121)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data4
            },
            {
                name:name5,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(229, 223, 121)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'white'
                        }, {
                            offset: 1,
                            color: 'white'
                        }])
                    }
                },
                data: data5
            },

        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}
$(document).ready(function(){
	$('body,html').animate({
		scrollTop: 0
	});
});
