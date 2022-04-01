const movimientos = document.getElementById ("descripcion");
const estadisticas2 = document.getElementById("estadisticas1");
const tipospok = document.getElementById("tipos");
const imagenpoke = document.getElementById("imagenPoke");

const fetchPokemon = () => {
    const nombrePoke = document.getElementById ("nombrePoke");
    let pokeInput = nombrePoke.value.toLowerCase();    
    let pokeinputvalor = typeof pokeInput;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);
            console.log("equivocado");
            pokeImage("./siluetaPoke.jpg")
            
        }
        else{            
            return res.json();
        }
        
    }).then((data) => {
        movimientos.value = '';
        estadisticas2.value = '';
        tipospok.textContent = '';
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeId = data.id;                
        let pokeStats = data.stats;
        let pokename = data.name;
        estadisticas2.value += `name: ${pokename} \nid: ${pokeId}\n`

        let final = data.stats.length,stanum=0;
        let final2 = data.moves.length;
        let final3 = data.types.length;
        
        let dato=[], nomDato=[], movimiento =[], tipo = [];
        movimientos.value += `Movimientos:\n\n`

        for (let mov=0; mov < final2; mov++){
            movimiento[mov] = data.moves[mov].move.name;
            movimientos.value += `${movimiento[mov]} \n`; 
        }


        for (let sta=0; sta < final; sta++){
            nomDato[stanum] = data.stats[sta].stat.name;
            nomDato[stanum+1] = data.stats[sta].base_stat;
            estadisticas2.value += `${nomDato[stanum]}: ${nomDato[stanum+1]} \n`;
            stanum=stanum+2;            
        }

        for (let clase=0; clase < final3; clase++){
            tipo[clase] = data.types[clase].type.name;
            estadisticas2.value += `type: ${tipo[clase]} \n`;
        }
        /*const url2 = `https://pokeapi.co/api/v2/evolution-chain/${pokeId}/`
            fetch(url2).then((res2) => {
                console.log(res2);
                return res2.json();
            }).then((data2) => {
                console.log(data2);
            })*/
        
        console.log(pokeInput);
        console.log(pokeId);
        console.log(pokeImg);
        pokeImage(pokeImg);
        console.log(pokeinputvalor);
        
    })
}


//fetchPokemon();
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeimagen");
    pokeimagen.src = url;
}


