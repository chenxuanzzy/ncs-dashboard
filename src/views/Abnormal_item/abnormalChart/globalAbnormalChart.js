var HighcharObj;
let PolylineWarnDate = "",
  Top10abnormalValue = 1,
  OPolylineWarnDate = "",
  OTop10abnormalValue = 1;
let TmpSendObj = {};

function Polyline(divName, data1, titleTxt, setMin, postime) {
  //console.log(data1);
  TmpSendObj["command-type"] = data1["kind"];
  if (data1["vendor"]) TmpSendObj["vendor"] = data1["vendor"];
  if (data1["gametype"]) TmpSendObj["gametype"] = data1["gametype"];
  let tmpRange = $("#DisplayTime").val() * 1;
  let sTime =
    data1.CharData.length >= tmpRange ? data1.CharData[tmpRange - 1].x : 0;
  let eTime = data1.CharData.length ? data1.CharData[0].x : 0;
  if (typeof postime != "undefined") {
    let pos = 0;
    data1.CharData.forEach(function (x, i) {
      if (x.DateTime == postime) {
        pos = i;
        //x.color='#FFF000';
      }
    });
    let tmp = tmpRange / 2;
    let epos = pos - tmp < 0 ? 0 : pos - tmp;
    let spos = epos + tmpRange - 1;
    sTime = data1.CharData[spos].x;
    eTime = data1.CharData[epos].x;
  }
  let ChgData = ChgPolyLineData(data1, sTime, eTime, postime);
  OPolylineWarnDate = "" + PolylineWarnDate;
  OTop10abnormalValue = Top10abnormalValue + 0;
  //console.log(ChgData);
  showGameTypeWarnData(ChgData.show);
  getAbnormalValuePlayerCount(
    data1["kind"],
    data1["vendor"],
    data1["gametype"],
    sTime,
    eTime
  );

  //console.log(copy);
  var ModelBody = [
    {
      name: '<b style="color:#FF0000">異常值</b>',
      type: "bubble",
      //allowPointSelect:true,
      animation: false,
      zIndex: 0,
      color: "#FF0000",
      data: ChgData.wdata,
    },
    {
      //name: '<b style="color:#3AAAFF">'+titleTxt+'</b>',
      name: "",
      linkedTo: ":previous",
      animation: false,
      data: ChgData.data,
      color: "#3AAAFF",
      zIndex: 1, // 控制显示层叠
      events: {
        hide: function (e) {
          //console.log(e);
          this.show();
        },
      },
    },
  ];
  //var TotalModel=[[],[],ModelThreshold,ModelTrend,ModelMaxMin,ModelCompare,ModelMa,ModelMa5];
  var SeriesData = ModelBody;
  var HCObj = {
    chart: {
      backgroundColor: "#26374C",
      animation: false,
      panning: true,
      panKey: "shift",
      zoomType: "x",
      events: {
        selection: function (event) {
          if (event.xAxis) {
            //let min=Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', event.xAxis[0].min);
            //let max=Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', event.xAxis[0].max);
            getAbnormalValuePlayerCount(
              data1["kind"],
              data1["vendor"],
              data1["gametype"],
              event.xAxis[0].min,
              event.xAxis[0].max
            );
            let tmpData = ChgPolyLineData(
              data1,
              event.xAxis[0].min,
              event.xAxis[0].max
            );
            showGameTypeWarnData(tmpData.show);
            //console.log(tmpData);
          } else {
            //console.log('還原了');
            showGameTypeWarnData(ChgData.show);
            PolylineWarnDate = "" + OPolylineWarnDate;
            Top10abnormalValue = OTop10abnormalValue + 0;
            $("#DisplayTime").focus();
          }

          /*
                    let sendObj={};
                    sendObj['command-type']=data1['kind'];
                    if(data1['vendor'])sendObj['vendor']=data1['vendor'];
                    if(data1['gametype'])sendObj['gametype']=data1['gametype'];
                    */
          window.dispatchEvent(
            new CustomEvent("PolyLineDOMEventTop10", {
              detail: TmpSendObj,
            })
          );
        },
        click: function (event) {
          //console.log(event);
          //console.log(HighcharObj);
          PolylineWarnDate = "" + OPolylineWarnDate;
          Top10abnormalValue = OTop10abnormalValue + 0;
          let tmpdata = HighcharObj.series[0].data.map(function (x) {
            x.color = "#FF0000";
            return x;
          });
          HighcharObj.series[0].setData(tmpdata);
          /*
                    let sendObj={};
                    sendObj['command-type']=data1['kind'];
                    if(data1['vendor'])sendObj['vendor']=data1['vendor'];
                    if(data1['gametype'])sendObj['gametype']=data1['gametype'];*/
          window.dispatchEvent(
            new CustomEvent("PolyLineDOMEventTop10", {
              detail: TmpSendObj,
            })
          );
        },
      },
    },

    title: {
      useHTML: true,
      text: "", //'<div align="center"><span style="font-size:18px;color:#FFFFFF;text-align:center">'+titleTxt+'</span><br>'+tmptitle+'</div>',
      //style:{ 'color': '#FFFFFF',"fontSize": "18px" }
    },

    xAxis: {
      type: "datetime",
      crosshairs: true,
      labels: {
        style: {
          color: "#ADAFB2",
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      allowDecimals: false,
      //min: 0,
      labels: {
        formatter: function () {
          return Publib.HighChartAxisUnit(this.value);
        },
        style: {
          color: "#ADAFB2",
        },
      },
    },
    tooltip: {
      shared: true,
      backgroundColor: "#000000",
      formatter: function () {
        //console.log(this.points[0].point.slope);
        //formatTime(this.x)
        var s = '<b><span style="fill:#FFFFFF">';
        s += Publib.formatTime(this.x) + "</span></b><br>";
        s +=
          '<b><span style="fill:#FFFFFF">' +
          titleTxt +
          ":" +
          Publib.formatNumber1(Publib.toDecimal(this.y)) +
          "</span></b><br>";
        //console.log(s);
        //s+="</text>";
        //s+=series.name;
        return s;
      },
    },
    plotOptions: {
      line: {
        animation: false,
      },
      arearange: {
        animation: false,
      },
      flags: {
        animation: false,
      },
      bubble: {
        minSize: 20,
        maxSize: 20,
      },
      series: {
        turboThreshold: 3000,
        events: {
          click: function (event) {
            //console.log(this.data);
            let tmpData = event.point;
            if (tmpData.Warn) {
              //console.log(event);
              //console.log(tmpData);
              //console.log(HighcharObj.series[0]);
              //tmpData.color='#FF0000';

              let tmpdata = HighcharObj.series[0].data.map(function (x) {
                if (x.x == tmpData.x) {
                  //console.log('2322323');
                  x.color = "#FFF000";
                } else {
                  x.color = "#FF0000";
                }
                return x;
              });
              //console.log(tmpdata);
              HighcharObj.series[0].setData(tmpdata);
              //console.log(HighcharObj.series[0].data);
              PolylineWarnDate = tmpData.DateTime;
              Top10abnormalValue = tmpData.y;
              window.dispatchEvent(
                new CustomEvent("PolyLineDOMEventTop10", {
                  detail: TmpSendObj,
                })
              );
              window.dispatchEvent(
                new CustomEvent("PolyLineDOMEventShowList", {
                  detail: tmpData.DateTime,
                })
              );
            }
          },
        },
      },
    },
    series: SeriesData,
    exporting: {
      enabled: false,
    },
  };
  if (!setMin) HCObj.yAxis.min = 0;
  //console.log(data1);
  if (data1.CharData.length == 0) {
    HCObj = {
      chart: {
        backgroundColor: "#26374C",
      },
      title: {
        text: titleTxt + " 暫無數據",
        style: {
          color: "#FFFFFF",
        },
      },
      exporting: {
        enabled: false,
      },
    };
  }

  HighcharObj = Highcharts.chart(divName, HCObj);
  return HighcharObj;
}

function showGameTypeWarnData(data) {
  $("#ShowNum").html(Publib.formatNumber1(data.Num));
  //if ( typeof data.Play!=='undefined')$('#ShowPlay').html(Publib.formatNumber1(data.Play));
  $("#ShowPlay").html(Publib.formatNumber1("loading"));
  $("#ShowMax").html(Publib.formatNumber1(data.Max));
  $("#ShowMin").html(Publib.formatNumber1(data.Min));
  $("#ShowAvg").html(Publib.formatNumber1(data.Avg));
}

function ChgPolyLineData(data1, sTime, eTime, postime) {
  //console.log(sTime+' '+eTime);
  PolylineWarnDate = "";
  let wdata = [];
  let showdata = {
    Num: 0,
    Max: 0,
    Min: Number.MAX_SAFE_INTEGER,
  };
  let tmptotal = 0;
  Top10abnormalValue = 1;
  let data = data1.CharData.filter(function (x) {
    if (x.x >= sTime && x.x <= eTime) {
      let tmpWW = data1.WarnData.find(function (xx) {
        return xx.x == x.x;
      });
      if (tmpWW) {
        tmpWW = JSON.parse(JSON.stringify(tmpWW));
        if (tmpWW.DateTime == postime) tmpWW.color = "#FFF000";
        else tmpWW.color = "#FF0000";
        //console.log(tmpW);
        wdata.push(tmpWW);
      }
      tmptotal += x.y;
      if (showdata.Max < x.y) showdata.Max = x.y;
      if (showdata.Min > x.y) showdata.Min = x.y;
      if (x.Warn) {
        if (x.y < 0) Top10abnormalValue = -1;
        showdata.Num++;
        if (PolylineWarnDate != "") PolylineWarnDate += ",";
        PolylineWarnDate += x.DateTime.replace(" ", "_");
      }
    }
    return x.x >= sTime && x.x <= eTime;
  });

  showdata.Avg = Math.floor(tmptotal / data.length);
  //showdata.Play=data1['player'+data.length] ?  data1['player'+data.length]*1 :'loading';

  data = data.sort(function (a, b) {
    return a.x - b.x;
  });
  wdata = wdata.sort(function (a, b) {
    return a.x - b.x;
  });

  let ReData = {};
  ReData.show = showdata;
  ReData.data = data;
  ReData.wdata = wdata;
  return ReData;
}

function getAbnormalValuePlayerCount(kind, vendor, gametype, sT, eT) {
  let sTime = Publib.formatTime(sT, "-").replace(" ", "_");
  let eTime = Publib.formatTime(eT, "-").replace(" ", "_");
  let APiData = {
    hallId: HallID,
    "command-type": kind,
    "begin-datetime": sTime,
    "end-datetime": eTime,
  };
  if (vendor) APiData.vendor = vendor;
  if (gametype) APiData.gametype = gametype;
  let tmpObj = {
    CType: "abnormalplayercount",
    data: JSON.stringify(APiData),
  };
  let worker1 = new Publib.WorkerClass();
  worker1.Run(
    "../../dist/js/WebWorker/getHallAbnormalValuePlayerCount.js",
    tmpObj,
    ShowHallAbnormalValuePlayerCount
  );
}

function ShowHallAbnormalValuePlayerCount(data) {
  $("#ShowPlay").html(Publib.formatNumber1(data.player));
}
