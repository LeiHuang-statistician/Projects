var idarray = $("#sidebar") //get sidebar ids.
             .find("img") //Find the spans
             .map(function() { return this.id; }) //Project Ids
             .get(); //ToArray
console.log(idarray)

function pageplots(data, us,varname, barmin,barmax,pagetitle){
  var rmin=barmin;
  var rmax=barmax;
  geohtmp(data, us, 1990, varname, rmin,rmax,"#svg1","svg-forestplot1",".svg-forestplot1")
  geohtmp(data, us, 2000, varname, rmin,rmax,"#svg2","svg-forestplot2",".svg-forestplot2")
  geohtmp(data, us, 2010, varname, rmin,rmax,"#svg3","svg-forestplot3",".svg-forestplot3")
  geohtmp(data, us, 2020, varname, rmin,rmax,"#svg4","svg-forestplot4",".svg-forestplot4")

  //var pagetitle="Black/White Ratio of Homeownership"
  pagetitecolorbar(rmin, rmax,pagetitle)
}
function clearup(){
  $(".svg-forestplot1").remove();
  $(".svg-forestplot2").remove();
  $(".svg-forestplot3").remove();
  $(".svg-forestplot4").remove();
  $("#tiltext").remove();
  $("def").remove();
  $("#colorrect").remove();
  $("#xAxidsG").remove();


}
// var colortheme=d3.interpolateBlues
var colortheme=d3.interpolateReds;

d3.json("https://unpkg.com/us-atlas@2.1.0/us/10m.json").then(function(us) {

  d3.csv("Data visualization Mercy 3 6.29.csv").then(function(data) {
   
    pageplots(data, us,"bwrato_homeownership", 0,100,"Black to White ratio for home ownership")
    //pageplots(data, us,"BW_poverty", 0,450,"Black/White Ratio of Poverty")
    //pageplots(data, us,"WB_poverty", 0,600,"White/Black Ratio of Poverty")
    //pageplots(data, us,"bwedu", 0,150,"bwedu")
    //pageplots(data, us,"wbedu", 0,250,"wbedu")
    //pageplots(data, us,"BW_unemployment", 0,400,"BW_unemployment")
    //pageplots(data, us,"WB_unemployment", 0,100,"WB_unemployment")
    //pageplots(data, us,"Dissimilarity", 0,100,"Dissimilarity")
    //pageplots(data, us,"isolation", 0,100,"Isolation")
    //pageplots(data, us,"Interaction", 0,100,"Interaction")

    var idarray = $("#sidebar") //get sidebar ids.
             .find("div") //Find the spans
             .map(function() { return this.id; }) //Project Ids
             .get(); //ToArray
     //console.log("here",idarray)


     for (let i=0; i<idarray.length;i++){
      $('#'+idarray[i]).click(function(){
          if (i===0) {clearup();pageplots(data, us,"bwrato_homeownership", 0,100,"Black to White ratio for home ownership")}
          if (i===1) {clearup();pageplots(data, us,"BW_poverty", 0,450,"Black to White ratio for poverty")}
          //if (i===2) {clearup();pageplots(data, us,"WB_poverty", 0,600,"White to Black ratio for poverty")}
          if (i===2) {clearup();pageplots(data, us,"bwedu", 0,150,"Black to White ratio for educational attainment <br>(bachelor's degree or higher for the population aged 25 and older) ")}
          //if (i===4) {clearup();pageplots(data, us,"wbedu", 0,250,"White to Black ratio for educational attainment \n(bachelor's degree or higher for the population aged 25 and older) ")}
          if (i===3) {clearup();pageplots(data, us,"BW_unemployment", 0,400,"Black to White ratio for unemployment <br>(for the population 16 years and older)")}
          //if (i===6) {clearup();pageplots(data, us,"WB_unemployment", 0,100,"WB_unemployment White to Black ratio for unemployment \n(for the population 16 years and older)")}
          if (i===4) {clearup();pageplots(data, us,"Dissimilarity", 0,100,"Dissimilarity Index")}
          if (i===5) {clearup();pageplots(data, us,"isolation", 0,100,"Isolation Index")}
          if (i===6) {clearup();pageplots(data, us,"Interaction", 0,100,"Interaction Index")}
          
      })
    }
 
  })



})


