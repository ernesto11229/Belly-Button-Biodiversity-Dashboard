function gids(){
d3.json("samples.json").then(importedData => {
  console.log(importedData);
  // var data = importedData;

// data.sort(function(a, b) {
//     return parseFloat(b.sample_values) - parseFloat(a.sample_values)
//     });
var sampleV =  importedData.samples[0].sample_values;
var labels =  importedData.samples[0].otu_labels;
var idnames = importedData.samples[0].otu_ids;
console.log(idnames);
console.log(sampleV);
console.log(labels);
//sample_values 
var sortvalues = sampleV.sort((a,b)=>b.sample_values -a.sample_values);
console.log(sortvalues)
var slicevalues = sortvalues.slice(0,10);
console.log(slicevalues)
var sampleV_S_reverse = slicevalues.reverse();
console.log (sampleV_S_reverse)

//ids

var sortIDnames = idnames.sort((a,b)=>b.otu_ids -a.otu_ids);
console.log(sortIDnames)
var sliceIds = sortIDnames.slice(0,10);
console.log(sliceIds)
var IDnames_S_reverse = sliceIds.reverse();
console.log (IDnames_S_reverse)
//labels

// var sortlabels = labels.sort((a,b)=>b.otu_labels -a.labels);
// console.log(sortlabels)
// var slicelabels = sortlabels.slice(0,10);
// console.log(slicelabels)
var slicelabels = labels.slice(0,10);
console.log(slicelabels)
// var labels_S_reverse = slicelabels.reverse();
// console.log (labels_S_reverse)
// data = data.slice(0, 10);
// data = data.reverse();
var outid = IDnames_S_reverse.map(d => "OTU " + d);
console.log(`OTU IDS: ${outid}`)
var slabels =  importedData.samples[0].slicelabels.slice(0,10);
console.log(`OTU_labels: ${slabels}`)

var trace1 = {
    x: sampleV_S_reverse,
    y: outid,
    text: slabels,
    name: "Plot",
    type: "bar",
    orientation: "h"
  };

  var chartData = [trace1];

  var layout = {
    title: "TOP 10 ",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };
  Plotly.newPlot("bar", chartData, layout);

});
}
gids();

