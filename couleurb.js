function couleurchange()
{
    let chainecouleur="#"+document.querySelector("#txtrouge").value+document.querySelector("#txtvert").value+document.querySelector("#txtbleu").value;
    return chainecouleur;
}
function controleHexa(chainehexa)
{
    chainehexa=chainehexa.toUpperCase();
    var maregex=/^[A-F0-9]{2}$/;
    let boolres=maregex.test(chainehexa);
  //  alert(boolres);
    console.log(boolres);
    return boolres;
}


var objtxtrouge=document.querySelector("#txtrouge");

objtxtrouge.addEventListener("blur",function()
{
    if(controleHexa(this.value)==false)
    {
        this.value="";
        this.style.backgroundColor="#880000";
        alert("veuillez saisir un chiffre entre 0 et 9, ou une lettre de A à F");
    }
    else
   {
   
    document.body.style.backgroundColor=couleurchange();
   }
});

var objtxtvert=document.querySelector("#txtvert");

objtxtvert.addEventListener("blur",function()
{
    if(controleHexa(this.value)==false)
    {
        this.value="";
        this.style.backgroundColor="#880000";
        alert("veuillez saisir un chiffre entre 0 et 9, ou une lettre de A à F");
    }
    else
   {
    this.style.backgroundColor="#ffffff"; 
    document.body.style.backgroundColor=couleurchange();
   }
    
});

var objtxtbleu=document.querySelector("#txtbleu");

objtxtbleu.addEventListener("blur",function()
{
    if(controleHexa(this.value)==false)
    {
        this.value="";
        this.style.backgroundColor="#880000";
        alert("veuillez saisir un chiffre entre 0 et 9, ou une lettre de A à F");
    }
    else
   {
    this.style.backgroundColor="#ffffff"; 
    document.body.style.backgroundColor=couleurchange();
   }
    
});

