var id=0;

function addrec() {
    let idval=document.getElementById('id');
    let nameval=document.getElementById('name');
    
  //  let tbody=document.getElementById('tb');

    let tb=document.getElementById('tb');

    let tr1=document.createElement('tr');
    let tdforid=document.createElement('td');
    let tdforname=document.createElement('td');

    tdforid.innerText=idval.value;
    tdforname.innerText=nameval.value;

    tr1.appendChild(tdforid);
    tr1.appendChild(tdforname);
id++;
tr1.setAttribute('id','abc'+id);
tb.appendChild(tr1);
/*
tr1.addEventListener('click',(event)=>{
    //let row = parseInt(event.target.innerText);
    //let table = document.getElementsByTagName('table')[0];
  //  idval.value = table.rows[row].cells[0].innerText;
   // nameval.value = table.rows[row].cells[1].innerText;
  //  lnameInput.value = table.rows[row].cells[2].innerText;
})*/

}
