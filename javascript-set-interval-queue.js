var grettings = ["Hello","Hi","Hey"];
var greetingsQueue = setInterval(function(){

    if (grettings.length){

        // Do Some Process (ajax, computation, etc)
        if (true){

            var value = grettings[0];
            var d = new Date();

            console.warn(value);
            document.write(value + ' --> ' + d + '<br>');

            // Remove From the Queue
            grettings.shift();
            
        }

    }else{
        clearInterval(greetingsQueue);
    }

},1000);

// 1000 every 1 second