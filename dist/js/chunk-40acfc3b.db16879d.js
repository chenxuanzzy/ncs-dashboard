(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40acfc3b"],{"159b":function(t,e,a){var l=a("da84"),n=a("fdbc"),s=a("17c2"),r=a("9112");for(var i in n){var o=l[i],c=o&&o.prototype;if(c&&c.forEach!==s)try{r(c,"forEach",s)}catch(u){c.forEach=s}}},"17c2":function(t,e,a){"use strict";var l=a("b727").forEach,n=a("a640"),s=n("forEach");t.exports=s?[].forEach:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}},"379c":function(t,e,a){"use strict";a("c5b6")},"74ec":function(t,e,a){t.exports={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},"89ea":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",{staticStyle:{padding:"0% 4% 2% 4%"}},[a("div",{staticClass:"right-back"},[a("icon",{attrs:{iconName:"home"}}),a("icon",{attrs:{iconName:"rightarrow"}}),a("span",[a("router-link",{attrs:{to:"../"}},[t._v("監控總覽")])],1),a("icon",{attrs:{iconName:"rightarrow"}}),a("span",[t._v("告警明細")])],1),a("div",{staticClass:"esb-content"},[a("span",{staticClass:"esb-name"},[t._v("BA 大數據監控")]),a("div",{staticClass:"time-refresh",staticStyle:{"margin-top":"10px"}},[a("span",{staticClass:"data-time"},[t._v("資料時間 2021/08/06 18:00")]),a("button",{staticClass:"btn-refresh",on:{click:t.forceRender}},[a("icon",{attrs:{iconName:"refresh"}})],1)])]),a("el-row",{staticStyle:{padding:"10px"},attrs:{gutter:20}},[a("el-col",{staticClass:"slider-left",attrs:{span:4}},[a("div",{staticClass:"warning-list"},[a("span",[t._v("告警列表")])]),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","unique-opened":!0,"active-text-color":"white"}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("span",{staticClass:"side-title"},[t._v("人數 (7)")])]),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("2021/08/06")]),a("el-menu-item",{attrs:{index:"1-1"}},[t._v(" 18:30 上升 20%")]),a("el-menu-item",{attrs:{index:"1-2"}},[t._v("18:29 上升 20%")]),a("el-menu-item",{attrs:{index:"1-3"}},[t._v("18:15 下降 15%")]),a("el-menu-item",{attrs:{index:"1-4"}},[t._v("18:16 上升 20%")]),a("el-menu-item",{attrs:{index:"1-5"}},[t._v("18:05 上升 20%")]),a("el-menu-item",{attrs:{index:"1-6"}},[t._v("18:01 上升 20%")]),a("el-menu-item",{attrs:{index:"1-7"}},[t._v("18:00 上升 20%")])],2)],2),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("span",[t._v("人數 (2)")])]),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("2021/08/06")]),a("el-menu-item",{attrs:{index:"1-1"}},[t._v("18:30 上升 20%")]),a("el-menu-item",{attrs:{index:"1-2"}},[t._v("18:29 上升 20%")])],2)],2),a("el-submenu",{attrs:{index:"3",close:""}},[a("template",{slot:"title"},[a("span",[t._v("數量 (1)")])]),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("2021/08/06")]),a("el-menu-item",{attrs:{index:"1-1"}},[t._v("18:30 上升 20%")])],2)],2)],1)],1),a("el-col",{staticClass:"item-right",attrs:{span:20}},[a("div",{staticClass:"wearning-content"},[a("span",{staticClass:"area_title"},[t._v("告警內容")]),a("el-select",{attrs:{"value-key":"value",placeholder:"1 小時",size:"small"},model:{value:t.hourValue,callback:function(e){t.hourValue=e},expression:"hourValue"}},[a("template",{slot:"prefix"},[a("i",{staticClass:"el-icon-time",staticStyle:{"font-size":"20px","padding-top":"5px"}})]),t._l(t.outlet,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],2)],1),a("el-row",{staticStyle:{padding:"20px 0px 15px 0px",display:"flex"}},[a("div",{staticClass:"card_top_1"},[a("span",{staticClass:"card_number"},[t._v("7")]),a("br"),a("span",[t._v("告警次數")])]),a("div",{staticClass:"card_top"},[a("span",{staticClass:"card_number"},[t._v("132")]),a("br"),a("span",[t._v("數")])]),a("div",{staticClass:"card_top"},[a("span",{staticClass:"card_number"},[t._v("648")]),a("br"),a("span",[t._v("最大值")])]),a("div",{staticClass:"card_top"},[a("span",{staticClass:"card_number"},[t._v("198")]),a("br"),a("span",[t._v("最小值")])]),a("div",{staticClass:"card_top"},[a("span",{staticClass:"card_number"},[t._v("326")]),a("br"),a("span",[t._v("平均值")])])]),a("el-row",[a("abnormalChart",{attrs:{data:t.data}})],1),a("el-row",[a("div",{staticClass:"game-table"},[a("span",[t._v("明細")])]),a("abnormalTable")],1)],1)],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("highcharts",{attrs:{options:t.chartOptions}})],1)},r=[],i={name:"abnormalChart",data:function(){return{loading:!0,chartOptions:{chart:{borderColor:"rgba(255, 255, 255, 0.12)",backgroundColor:"#0c1321"},xAxis:{type:"datetime",crosshair:!0,allowDecimals:!1,dateTimeLabelFormats:{minute:"%H:%M"},lineColor:"rgba(255, 255, 255, 0.12)",tickColor:"rgba(255, 255, 255, 0.12)",labels:{style:{color:"#666666"}}},yAxis:{title:{enabled:!1},gridLineColor:"rgba(255, 255, 255, 0.12)",gridLineDashStyle:"longdash"},title:{text:"人數",style:{color:"white"}},subtitle:{text:"時間區間 17:30~18:30",align:"right",margin:10,y:15,style:{color:"white",fontSize:"18px"}},tooltip:{shared:!0,useHTML:!0,formatter:function(){var t='<b style="color:#8b8b8b">AA 人數</b><br>';return t+="2021/08/06 18:00 5,134<br>",t+='昨天 (08/05)<i class="el-icon-top"></i>4,363<br>',t+='上週 (08/05)<i class="el-icon-top"></i>4,363<br>',t+='上月 (07/06)<i class="el-icon-top"></i>4,363<br>',t+="<hr>",t+='<span style="color:#8b8b8b">●</span>AA 人數 '.concat(this.points[0].y,"<br>"),t+='<span style="color:#a1a1a1">●</span>BA 人數 '.concat(this.points[1].y,"<br>"),t+='<span style="color:#e3b6b6">●</span>數量 '.concat(this.points[2].y,"<br>"),t+='<span style="color:#616060">●</span>BB 數量 '.concat(this.points[3].y,"<br>"),t}},plotOptions:{bubble:{minSize:3,maxSize:15}},series:[{pointInterval:3600,name:'<b style="color:#3c76f4">AA 人數</b>',color:"#3c76f4",dashStyle:"Solid",zIndex:2,data:[5.655,5.976,6.005,6.06,5.988,6.021,6.049,5.882,5.296,5.142,4.701,4.701,4.647,4.491,4.48,4.384,4.263,4.515,4.721,5.084,6.225,6.302,6.409,6.52,6.462,6.525,6.816,6.656,6.566,6.34,6.177,6.143,7.462,7.783,7.885,7.998,8.182,8.352,8.32,8.5,8.967,8.474,8.178,7.89,7.436,7.634,7.777,7.628],marker:{enabled:!1},dataLabels:{enabled:!1}},{pointInterval:3600,name:'<b style="color:#38a56e">離線人數</b>',color:"#38a56e",dashStyle:"shortdash",data:[5.026,5,4.941,4.872,4.751,4.408,4.425,4.301,4.134,4.171,4.272,4.34,4.543,4.826,5.381,5.374,5.433,5.483,10.154,10.173,10.361,11.186,11.226,11.091,10.899,10.945,10.892,9.618,9.092,8.465,7.864,7.396,7.076,7.053,5.288,5.428,5.539,5.869,6.956,7.443,7.654,5.15,5.106,4.989,5.103,8.005,8.181,8.386],marker:{enabled:!1}},{pointInterval:3600,name:'<b style="color:#e3b6b6">單量</b>',color:"#e3b6b6",zIndex:1,dashStyle:"shortdash",data:[5.15,5.106,4.989,5.103,5.288,5.428,5.363,5.026,5,4.941,4.872,4.751,4.408,4.425,4.301,4.134,4.171,4.272,4.34,4.543,4.826,5.381,5.374,5.433,5.483,5.539,5.869,6.956,7.443,7.654,8.005,8.181,8.386,9.202,9.51,9.66,9.141,8.79,8.747,8.949,9.188,9.625,10.154,10.173,10.361,11.186,11.226,11.091],marker:{enabled:!1}},{pointInterval:3600,name:'<b style="color:#f1e04d">BB</b>',color:"#f1e04d",zIndex:1,dashStyle:"shortdash",data:[5.655,5.976,6.005,6.06,5.988,6.021,6.049,5.882,5.296,5.142,4.701,4.701,4.647,4.491,4.48,4.384,4.263,4.515,4.721,5.084,6.787,6.048,6.003,6.189,6.216,6.389,6.353,7.341,7.899,6.225,6.302,6.409,6.52,6.462,6.525,6.816,6.656,6.566,6.34,6.177,6.143,7.462,7.783,7.885,7.998,8.182,8.352,8.32],marker:{enabled:!1}},{type:"bubble",name:'<b style="color:#FF0000">告警值</b>',enableMouseTracking:!1,opacity:5,states:{inactive:{opacity:1}},data:[{x:144090,y:9},{x:115090,y:7.5}],zIndex:2,color:"red"}],credits:{enabled:!1}}}}},o=i,c=a("2877"),u=Object(c["a"])(o,s,r,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"table-border",staticStyle:{border:"1px solid black"}},[a("el-table",{attrs:{data:t.pagedTableData,height:"348","cell-style":{background:"#050f1e"},"summary-method":t.getSummaries,"show-summary":""}},[a("el-table-column",{attrs:{prop:"name",sortable:"",label:"名稱",align:"left"}}),a("el-table-column",{attrs:{prop:"gamekind",sortable:"",label:"類別",align:"left"}}),a("el-table-column",{attrs:{prop:"gameplatform",sortable:"",label:"平台",align:"left"}}),a("el-table-column",{attrs:{prop:"betpeople",align:"right",sortable:"",label:"人數"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.betpeople)+" "),a("icon",{attrs:{iconName:"RedArrow"}})]}}])}),a("el-table-column",{attrs:{prop:"wagerstotal",align:"right",sortable:"",label:"數量"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.wagerstotal)+" "),a("icon",{attrs:{iconName:"GreenArrow"}})]}}])})],1)],1),a("div",{staticClass:"pagenation"},[a("el-pagination",{attrs:{background:"",total:this.tableData.length,"page-sizes":[10,25,50,100,250,500],"page-size":t.pageSize,layout:"prev, pager, next, total, sizes"},on:{"current-change":t.setPage,"size-change":t.handleSizeChange}})],1)])},b=[],m=(a("fb6a"),a("159b"),a("99af"),{data:function(){return{tableData:[],pageData:[],pageSize:10,page:1}},computed:{pagedTableData:function(){return this.tableData.slice(this.pageSize*this.page-this.pageSize,this.pageSize*this.page)}},methods:{setPage:function(t){this.page=t},handleSizeChange:function(t){this.pageSize=t},getSummaries:function(t){var e=t.columns,a=t.data,l=[];return console.log(a),e.forEach((function(t,e){0===e&&1===e?l[e]="":2===e?l[e]="合計":3===e?l[e]="2,567(4.4%)":4===e&&(l[e]="365,768(100%)")})),l}},created:function(){for(var t=0;t<1500;t++)this.tableData.push({name:"AA 人數",gamekind:"市場數據",gameplatform:"AA 狀態",betpeople:"1".concat(t," (4.7%)"),wagerstotal:"".concat(t,",400 (").concat(t,".7%)")})}}),v=m,f=(a("379c"),Object(c["a"])(v,p,b,!1,null,null,null)),h=f.exports,g={components:{abnormalChart:d,abnormalTable:h},data:function(){return{data:[],activeColor:"red",outlet:[{value:"1",label:"1 小時"},{value:"2",label:"3 小時"},{value:"3",label:"6 小時"},{value:"4",label:"12 小時"},{value:"5",label:"24 小時"}],hourValue:""}},methods:{forceRender:function(){window.location.reload()}}},_=g,x=(a("e67e"),Object(c["a"])(_,l,n,!1,null,null,null));e["default"]=x.exports},a640:function(t,e,a){"use strict";var l=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&l((function(){a.call(null,e||function(){throw 1},1)}))}},c5b6:function(t,e,a){t.exports={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},e67e:function(t,e,a){"use strict";a("74ec")},fb6a:function(t,e,a){"use strict";var l=a("23e7"),n=a("861d"),s=a("e8b5"),r=a("23cb"),i=a("50c4"),o=a("fc6a"),c=a("8418"),u=a("b622"),d=a("1dde"),p=d("slice"),b=u("species"),m=[].slice,v=Math.max;l({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var a,l,u,d=o(this),p=i(d.length),f=r(t,p),h=r(void 0===e?p:e,p);if(s(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?n(a)&&(a=a[b],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return m.call(d,f,h);for(l=new(void 0===a?Array:a)(v(h-f,0)),u=0;f<h;f++,u++)f in d&&c(l,u,d[f]);return l.length=u,l}})}}]);