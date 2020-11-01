$(".txtb input").on("focus",function(){
  $(this).addClass("focus");
});
$(".txtb input").on("blur",function(){
  if($(this).val() == "")
  $(this).removeClass("focus");
});
function validateFormOnSubmit(theForm) {
    var kosten = document.getElementById('kosten').value
    var geld = document.getElementById('geld').value
    var ergebnis = document.getElementById('ergebnis')
    ergebnis.innerHTML = "Ergebnis"
    if(kosten == 0  || geld ==0){
      ergebnis.innerHTML = "Null ist nicht erlaubt!"
    }else if(parseFloat(kosten) > parseFloat(geld)){
      ergebnis.innerHTML = "Das Geld ist nicht genug!"
    }else if(parseFloat(geld)-parseFloat(kosten) >= 100){
      ergebnis.innerHTML  = "Das Wechselgeld ist mehr als 100 €, veruchen Sie bitte mit weniger Geld."
    }else{
        kosten = parseFloat(kosten).toFixed(2)*100;
        geld = parseFloat(geld).toFixed(2)*100;
  //    console.log("Kosten: "+kosten+", Geld: "+geld)
      var feld = [0,0,0,0,0,0,0,0]
      var wechselgeld = ((parseFloat(geld)-parseFloat(kosten))/100).toFixed(2)
  //    console.log("Dinero: "+wechselgeld)
      var wechselgeld1 = Math.floor(wechselgeld)
      var largo = String(wechselgeld1).length
  //    console.log("Largo: "+largo+", primer valor: "+wechselgeld1)
      var wechselgeld2 = parseFloat(String(wechselgeld).substring(largo+1))
//      console.log("Segundo valor: "+wechselgeld2)
      if(wechselgeld1 != 0){
        feld[0] = Math.floor(wechselgeld1/2
        )
        feld[1] = wechselgeld1%2
      }
      if(wechselgeld2 != 0){
        feld[2] = Math.floor(wechselgeld2/50)
        var res50 = wechselgeld2 % 50
        feld[3] = Math.floor(res50/20)
        var res20 = res50 % 20
        feld[4] = Math.floor(res20/10)
        var res10 = res20 % 10
        feld[5] = Math.floor(res10/5)
        var res5 = res10 % 5
        feld[6] = Math.floor(res5/2)
        var res2 = res5 % 2
        feld[7] = Math.floor(res2/1)
      }
      var munze = "<h5>Münze €"+wechselgeld+"</h5>"
      for (let i = 0; i < 8; i++) {
        if(feld[i]!=0){
          switch(parseInt(i)) {
            case 0:
            munze += "€2:"
            break;
            case 1:
            munze += "€1:"
            break;
            case 2:
            munze += "€0.50:"
            break;
            case 3:
            munze += "€0.20:"
            break;
            case 4:
            munze += "€0.10:"
            break;
            case 5:
            munze += "€0.05:"
            break;
            case 6:
            munze += "€0.02:"
            break;
            case 7:
            munze += "€0.01:"
            break;
            default:break;
          }
          munze += " "+feld[i]+"<br>"
        }
      }
      ergebnis.innerHTML =munze
      //console.log("$2:"+feld[0]+",$1:"+feld[1]+",$0.50:"+feld[2]+",$0.20:"+feld[3]+",$0.10:"+feld[4]+",$0.05:"+feld[5]+",$0.02:"+feld[6]+",$0.01:"+feld[7])
      //console.log("Monedas de 2:"+feld[0]+", monedas de 1:"+feld[1])
      //console.log("Primer resultado: "+Math.floor(32/50)+","+(32%50))
    }
    return false;
}
