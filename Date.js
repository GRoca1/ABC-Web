function affichedate()
{
chaine="";
var madate= new Date();
let datejour=madate.getDate();
let mois=madate.getMonth()+1;
let annee=madate.getFullYear();
let chainedate="";

if(datejour<10)
{
    chainedate+="0"+datejour;

}
else 
{
    chainedate+=datejour;
}
(mois<10)?chainedate+="/0"+mois:chainedate+="/"+mois;
chainedate+="/"+annee;
return chainedate;
}


var objetboutondate= document.querySelector("#btndate");
objetboutondate.addEventListener('click', function() { document.getElementById('madate').value=affichedate();});

function afficheheure()
{
    var chaineheure="";
    var monheure=new Date();
    let heure=monheure.getHours();
    (heure<10)? chaineheure+="0"+heure:chaineheure+=heure;
    let min=monheure.getMinutes();
    (min<10)?chaineheure+=":0"+min: chaineheure+=":"+min;
    let sec=monheure.getSeconds();
    (sec<10)?chaineheure+=":0"+sec:chaineheure+=":"+sec;

    document.getElementById("monheure").value=chaineheure;
    setTimeout(function() {afficheheure();}, 1000);
      
}
var objetboutondate= document.querySelector("#btnheure");
objetboutondate.addEventListener('click', function() { afficheheure();});
