
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


function readfile(e){
    var file = document.getElementById("myfile").files[0];
    const reader = new FileReader();
    reader.addEventListener('load', e => {
            const csvData = e.target.result.toString();
            //console.log('CSV Data:', csvData);
            data=csvToJSON(csvData)
            //console.log('data',data)
            rHeader = csvData.split('\r').join('').split('\n')
            Dheaders =rHeader[0].split(',');
            coln=data.length
            console.log(data)
            //console.log('headers',Dheaders)
        title=[]
        data.forEach(function(item){
            if (item['title']!="") {let d=item['title'];title.push(d)}
            })
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
        })

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
     reader.readAsText(file, 'UTF-8')
 }
