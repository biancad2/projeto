function ola(){
    alert("oi");
}
function teste(){
    var btn1 = document.getElementById("btn1");
    btn1.setAttribute("onclick","ola()");
}
function montarTabela(resp){
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var trowh = document.createElement("tr");
    var thid = document.createElement("th");
    var thnome = document.createElement("th");
    var thp1 = document.createElement("th");
    var thp2 = document.createElement("th");
    var thmed = document.createElement("th");
    var tbody = document.createElement("tbody");
    thid.innerHTML="ID";
    thnome.innerHTML="NOME";
    thp1.innerHTML="P1";
    thp2.innerHTML="P2";
    thmed.innerHTML="MEDIA";
    var vetObj= resp.dados;
    for(var i=0; i<vetObj.length; i++){
        var tr=document.createElement("tr");
        var tdId=document.createElement("td");
        var tdNome=document.createElement("td");
        var tdP1=document.createElement("td");
        var tdP2=document.createElement("td");
        var tdMed=document.createElement("td");
        tdId.innerHTML=vetObj[i].id;
        tdNome.innerHTML=vetObj[i].nome;
        tdP1.innerHTML=vetObj[i].P1;
        tdP2.innerHTML=vetObj[i].P2;
        tdMed.innerHTML=0.5*(vetObj[i].P1+vetObj[i].P2);
        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdP1);
        tr.appendChild(tdP2);
        tr.appendChild(tdMed);
    }
    thead.appendChild(thid);
    thead.appendChild(thnome);
    thead.appendChild(thp1);
    thead.appendChild(thp2);
    thead.appendChild(thmed);
    table.appendChild(thead);
    table.appendChild(tbody);
    var div=document.querySelector(".tabela");
    div.appendChild(table);
}
function iniciarTabela(){
    montarTabela({dados:[{id: 1,nome:"Mayra",p1:6,p2:5},{id: 2,nome:"Pedro",p1:8,p2:9},{id: 3,nome:"Wesley",p1:10,p2:10},{id: 4,nome:"Roxelly",p1:7.5,p2:7}]});
}