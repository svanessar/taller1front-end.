function percir(){
    const  radiopci=parseInt (document.getElementById('lado1pci').value);
 
    resultadopci=2*(
        3,14*radiopci);
    alert("La Longitud de su palabra es: " +resultadopci);
    }

 function areacir(){
        const  radioaci=parseInt (document.getElementById('lado1aci').value);
     
        resultadoaci=3,14*(radioaci*radioaci);
        alert("La Longitud de su palabra es: " +resultadoaci);
        }

     function perimetrocua(){
        const  perimetrocua=parseInt (document.getElementById('ladopcu').value);
                 
        let resultadopcua=(perimetrocua+perimetrocua+perimetrocua+perimetrocua);
        alert("La Longitud de su palabra es: " +resultadopcua);
         }

  function areacua(){
    const  areacua=parseInt (document.getElementById('areacua').value);
         
    resultadoacua=areacua*areacua;
    alert("La Longitud de su palabra es: " +resultadoacua);
    }

    function perimetrorec(){
        const  lado1rec=parseInt (document.getElementById('lado1rec').value);
        const  lado2rec=parseInt (document.getElementById('lado2rec').value);
                 
        let resultadoprec=(lado2rec+lado2rec+lado1rec+lado1rec);
        alert("La Longitud de su palabra es: " +resultadoprec);
         }


         function arearec(){
            const  lado1rec=parseInt (document.getElementById('lado1rec').value);
            const  lado2rec=parseInt (document.getElementById('lado2rec').value);
                     
            resultadoarec=lado2rec*lado1rec;
            alert("La Longitud de su palabra es: " +resultadoarec);
             }


             function perimetrotri(){
                const  lado1tri=parseInt (document.getElementById('lado1tri').value);
                const  lado2tri=parseInt (document.getElementById('lado2tri').value);
                const  lado3tri=parseInt (document.getElementById('lado3tri').value);
                resultadoptri=lado1tri+lado2tri+lado3tri;
                alert("La Longitud de su palabra es: " +resultadoptri);
                 }
                 function areatri(){
                    const  b=parseInt (document.getElementById('base').value);
                    const  a=parseInt (document.getElementById('altura').value);
                    
                    resultadoatri=a*b;
                    alert("La Longitud de su palabra es: " +resultadoatri);
                     }
