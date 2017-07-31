function getPokemon(){
    for (var n = 1; n < 152; n++)
    {
        var pngUrl = "http://pokeapi.co/media/img/" + n.toString() + ".png";
        var strID = "poke-" + n.toString();
        var s = "<img src='" + pngUrl + "' id='" + strID + "'>\n";
        $('#pokemon').append(s);
        $(document).on('click', "#"+strID, function(){showPokeData($(this).attr('id'))});
        // $(document).on('click', strID, function(){console.log(strID)});
    }
}

function showPokeData(pokeID){
    console.log(pokeID);
    pokeID = pokeID.split('-')[1];
    var apiUrl =  "http://pokeapi.co/api/v1/pokemon/" + pokeID + "/";
    $.get(  apiUrl,
            function(res){
                $('#height').empty();
                $('#weight').empty();
                $('#typelist').empty();
                $('#height').append(res['height']);
                $('#weight').append(res['weight']);
                $('#poke-name').empty();
                $('#poke-name').append(res['name']);
                var dtypes = res['types'];
                for (var d in dtypes)
                {
                    var pokeType = dtypes[d].name;
                    console.log(pokeType);
                    $('#typeslist').append('<li>'+pokeType.toString()+'</li>');
                }
            },
            'json'  );
        
}

$(document).ready(function(){getPokemon();});


// var pngUrl = "http://pokeapi.co/media/img/2.png";
// height, weight, types, url
// $.load(apiURL)
