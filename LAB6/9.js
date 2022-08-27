
function addKeyAndValue(a,b,c){ 
       var newarray=[];
       a.forEach(function(b,c) {
      newarray.push({
          label:b,
          data:c})
});


console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], 
"isInstructor", true));