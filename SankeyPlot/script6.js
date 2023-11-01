
var units = " ";

var margin = {
        top:100,
        right: 30,
        bottom: 10,
        left: 30
    },
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var formatNumber = d3.format(",.0f"), // zero decimal places
    format = function (d) {
        return formatNumber(d) + " " + units;
    }//,
    //color = d3.scale.category20();

//
//psize=16
//lgsize=20
//plist=["100%","80.5%","19.2%","0.4%","61.7%","36.4%","2.0%","47.1%","52.2%","0.7%","15.0%","85.0%"]
//sankeygraph()
//
// $(".rleg").keyup(function(){
//   lgsize=this.value;
//  $("#sankeysvg").remove();
//  sankeygraph()
//  });
//
//   $(".rpct").keyup(function(){
//   psize=this.value;
//  $("#sankeysvg").remove();
//  sankeygraph()
//  });
//
//function Geeks() {
//            plist=[]
//            var input = document.getElementsByName('array[]');
//
//            for (var i = 0; i < input.length; i++) {
//                var a = input[i];
//                plist.push(a.value) ;
//            }
//             $("#sankeysvg").remove();
//            sankeygraph()
//        }
//
//// the function for moving the nodes
//


//document.getElementById("dl-png").onclick=function(){
//  const screeshotTarget=document.getElementById('sankeysvg')
//  html2canvas(screeshotTarget).then((canvas)=>{
//   const base64image=canvas.toDataURL("image/png");
//   var anchor=document.creatElement('a')
//   anchor.setAttribute("href",base64image)
//   anchor.setAttribute("download","sankey.png")
//   anchor.click();
//   anchor.remove();
//   });
//}

function graph(){
    d3.csv(
         dtata,
        (data) => {
        //********************get title**********************
        title=[]
        data.forEach(function(item){
            if (item['title']!="") {let d=item['title'];title.push(d)}
            })
        //console.log(title)
        //********************get nodes**********************
        lab1=[]
        data.forEach(function(item){
            d={}
            d['node']=item['link_s']
            d['name']=item['name_s'].split(" ").join("")
            d['label']=item['label_s']
            lab1.push(d)
            })
        lab2=[]
        data.forEach(function(item){
            d={}
            d['node']=item['link_t']
            d['name']=item['name_t'].split(" ").join("")
            d['label']=item['label_t']
            lab2.push(d)
            })

        labs=[...lab1,...lab2]
        let mymap = new Map();

        //identify unique node objects
        var map = new Map();
        let nodes = labs.filter((web) => {
           if (map.get(web.node)) {
              return false;
           }
           map.set(web.node, web);
           return true;
        });

        nodescolor=['blue','red','yellow','green','red','yellow','green']
        i=0;
        nodes.forEach(function(item){
           item['color']=nodescolor[i]
           i++
           })
        //console.log(nodes)
        //**********************get links***********************
        links=[]
        i=0
        data.forEach(function(item){
        d={}
        d['source']=+item['link_s']
        d['target']=+item['link_t']
        d['value']=+item['value']
        i++
        links.push(d)
        })
        //console.log(links)
        var graph={
         'nodes': nodes,
         'links':links
        }
        //console.log(graph)
        psize=15
        sankeygraph(graph,title)
    })
}
let dtata="https://raw.githubusercontent.com/LeiHuang-statistician/Projects/main/SankeyPlot/test_All.csv"
graph()


$("#ob1").click(function() {
  $("#sankeysvg").remove();
  dtata="https://raw.githubusercontent.com/LeiHuang-statistician/Projects/main/SankeyPlot/test_All.csv"
  graph()
});

$("#ob2").click(function() {
  $("#sankeysvg").remove();
  dtata="https://raw.githubusercontent.com/LeiHuang-statistician/Projects/main/SankeyPlot/test_MI.csv"
  graph()
});

$("#ob3").click(function() {
  $("#sankeysvg").remove();
  dtata="https://raw.githubusercontent.com/LeiHuang-statistician/Projects/main/SankeyPlot/test_HF.csv"
  graph()
});

$("#ob4").click(function() {
  $("#sankeysvg").remove();
  dtata="https://raw.githubusercontent.com/LeiHuang-statistician/Projects/main/SankeyPlot/test_stroke.csv"
  graph()
});


//
//const getname = (elem) =>{
//    var id = $(elem).attr("id");
//    if (id==="ob1"){console.log("obs1") }
//    if (id==="ob2"){console.log("obs2") }
//     $("#sankeysvg").remove();
//     graph()
//}



//
//function csvToJSON(csvDataString){
//    const rowsHeader = csvDataString.split('\r').join('').split('\n')
//    const headers = rowsHeader[0].split(',');
//    const content = rowsHeader.filter((_,i) => i>0);
//    //console.log('Headers: ',headers);
//    const jsonFormatted = content.map(row => {
//        const columns = row.split(',');
//        return columns.reduce((p,c, i) => {
//            p[headers[i]] = c;
//            return p;
//        }, {})
//    })
//    console.log('jsonFormatted:',jsonFormatted);
//    // here you have the JSON formatted
//    return jsonFormatted.filter(function(x) {
//            return x[headers[0]] !== "" ;
//                });
//}
//function makestring(arr,name){
//   var vals=[];
//        for(var i=0;i<arr.length;i++){
//           vals.push(arr[i][name]);
//                }
//
//     var valsfilter = vals.filter(function(x) {
//            return x !== undefined ;
//                })
//     var valsfilter2 = valsfilter.filter(function(x) {
//            return x !== "" ;
//                })
//         return valsfilter2;
//}


