// Estado actual
let currentState = 0;

// Mostrar el estado actual
function showState(state) {
    // Ocultar todos los estados
    document.querySelectorAll('.estado').forEach((estado) => {
        estado.style.display = 'none';
    });

    // Mostrar el estado actual
    const currentElement = document.querySelector(`.estado${state}`);
    if (currentElement) {
        currentElement.style.display = 'block';
    }
}

// Evento de teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        // Transiciones de estado
        if (currentState === 0) {
            currentState = 1;
        } else if (currentState === 1) {
            currentState = 2;
        } else if (currentState === 2) {
            currentState = 3;
        } else if (currentState === 3) {
            currentState = 4;
        } else if (currentState === 4) {
            currentState = 6;
        } else if (currentState === 5) {
            currentState = 6;
        } else if (currentState === 6) {
            currentState = 100;
        } else if (currentState === 100) {
            currentState = 101;
        } else if (currentState === 101) {
            currentState = 104;
        } else if (currentState === 102) {
            currentState = 100;
        } else if (currentState === 103) {
            currentState = 6;
        } else if (currentState === 104) {
            currentState = 107;
        } else if (currentState === 105) {
            currentState = 101;
        } else if (currentState === 106) {
            currentState = 6;
        } else if (currentState === 110) {
            currentState = 6;
        } else if (currentState === 111) {
            currentState = 104;
        } else if (currentState === 112) {
            currentState = 6;
        } 
        
        else if (currentState === 7) {
            currentState = 200;
        } else if (currentState === 200) {
            currentState = 201;
        } else if (currentState === 204) {
            currentState = 206;
        } else if (currentState === 205) {
            currentState = 7;
        } else if (currentState === 206) {
            currentState = 207;
        } else if (currentState === 207) {
            currentState = 210;
        } else if (currentState === 208) {
            currentState = 201;
        } else if (currentState === 209) {
            currentState = 7;
        }else if (currentState === 210) {
            currentState = 211;
        } else if (currentState === 213) {
            currentState = 7;
        } else if (currentState === 214) {
            currentState = 206;
        } else if (currentState === 215) {
            currentState = 7;
        } 

        else if (currentState === 8) {
            currentState = 300;
        } else if (currentState === 300) {
            currentState = 301;
        } else if (currentState === 301) {
            currentState = 303;
        } else if (currentState === 302) {
            currentState = 8;
        } else if (currentState === 308) {
            currentState = 312;
        } else if (currentState === 309) {
            currentState = 302;
        } else if (currentState === 310) {
            currentState = 8;
        } else if (currentState === 311) {
            currentState = 309;
        } else if (currentState === 312) {
            currentState = 8;
        } else if (currentState === 313) {
            currentState = 8;
        } 

        else if (currentState === 9) {
            currentState = 400;
        } else if (currentState === 400) {
            currentState = 401;
        } else if (currentState === 401) {
            currentState = 404;
        } else if (currentState === 302) {
            currentState = 9;
        } else if (currentState === 403) {
            currentState = 401;
        } else if (currentState === 404) {
            currentState = 407;
        } else if (currentState === 405) {
            currentState = 9;
        } else if (currentState === 406) {
            currentState = 404;
        } else if (currentState === 407) {
            currentState = 409;
        } else if (currentState === 408) {
            currentState = 9;
        } else if (currentState === 415) {
            currentState = 9;
        } else if (currentState === 414) {
            currentState = 407;
        } else if (currentState === 413) {
            currentState = 9;
        } 
        
        



        // Mostrar el nuevo estado
        showState(currentState);
    }



    if (event.key === 'ArrowRight') {
        // Transiciones de estado flecha derecha
        if (currentState === 4) {
            currentState = 5;
        } else if (currentState === 6) {
            currentState = 7;
        } else if (currentState === 7) {
            currentState = 8;
        } else if (currentState === 8) {
            currentState = 9;
        } else if (currentState === 9) {
            currentState = 6;
        } 
        
        
        else if (currentState === 107) {
            currentState = 108;
        } else if (currentState === 108) {
            currentState = 109;
        } else if (currentState === 109) {
            currentState = 110;
        } else if (currentState === 110) {
            currentState = 111;
        } else if (currentState === 111) {
            currentState = 112;
        } else if (currentState === 112) {
            currentState = 107;
        } 
        
        else if (currentState === 201) {
            currentState = 202;
        } else if (currentState === 202) {
            currentState = 203;
        } else if (currentState === 203) {
            currentState = 204;
        } else if (currentState === 204) {
            currentState = 205;
        } else if (currentState === 205) {
            currentState = 201;
        } else if (currentState === 207) {
            currentState = 208;
        } else if (currentState === 208) {
            currentState = 209;
        } else if (currentState === 209) {
            currentState = 207;
        } else if (currentState === 211) {
            currentState = 212;
        } else if (currentState === 212) {
            currentState = 213;
        } else if (currentState === 213) {
            currentState = 214;
        } else if (currentState === 214) {
            currentState = 215;
        } else if (currentState === 215) {
            currentState = 211;
        } 
        
        else if (currentState === 303) {
            currentState = 304;
        }else if (currentState === 304) {
            currentState = 305;
        } else if (currentState === 305) {
            currentState = 306;
        } else if (currentState === 306) {
            currentState = 307;
        } else if (currentState === 307) {
            currentState = 308;
        } else if (currentState === 308) {
            currentState = 309;
        } else if (currentState === 309) {
            currentState = 310;
        } else if (currentState === 310) {
            currentState = 303;
        } else if (currentState === 312) {
            currentState = 311;
        } else if (currentState === 311) {
            currentState = 313;
        } else if (currentState === 401) {
            currentState = 402;
        } else if (currentState === 402) {
            currentState = 401;
        } else if (currentState === 404) {
            currentState = 403;
        } else if (currentState === 403) {
            currentState = 405;
        } else if (currentState === 407) {
            currentState = 406;
        } else if (currentState === 406) {
            currentState = 408;
        } else if (currentState === 409) {
            currentState = 410;
        } else if (currentState === 410) {
            currentState = 411;
        } else if (currentState === 411) {
            currentState = 412;
        } else if (currentState === 412) {
            currentState = 415;
        } else if (currentState === 415) {
            currentState = 414;
        } else if (currentState === 414) {
            currentState = 413;
        } else if (currentState === 413) {
            currentState = 409;
        } 
        
        



        // Mostrar el nuevo estado
        showState(currentState);
    }





    if (event.key === 'ArrowLeft') {
        // Transiciones de estado flecha derecha
        if (currentState === 5) {
            currentState = 4;
        } else if (currentState === 6) {
            currentState = 9;
        } else if (currentState === 9) {
            currentState = 8;
        } else if (currentState === 8) {
            currentState = 7;
        } else if (currentState === 6) {
            currentState = 6;
        } 
        
        
        else if (currentState === 107) {
            currentState = 112;
        } else if (currentState === 112) {
            currentState = 11;
        } else if (currentState === 111) {
            currentState = 110;
        } else if (currentState === 110) {
            currentState = 109;
        } else if (currentState === 108) {
            currentState = 107;
        } 
        else if (currentState === 201) {
            currentState = 205;
        } else if (currentState === 205) {
            currentState = 204;
        } else if (currentState === 204) {
            currentState = 203;
        } else if (currentState === 203) {
            currentState = 202;
        } else if (currentState === 202) {
            currentState = 201;
        } else if (currentState === 207) {
            currentState = 209;
        } else if (currentState === 209) {
            currentState = 208;
        } else if (currentState === 208) {
            currentState = 207;
        } else if (currentState === 211) {
            currentState = 215;
        } else if (currentState === 215) {
            currentState = 214;
        } else if (currentState === 214) {
            currentState = 213;
        } else if (currentState === 213) {
            currentState = 212;
        } else if (currentState === 212) {
            currentState = 211;
        } 
        
        else if (currentState === 303) {
            currentState = 310;
        } else if (currentState === 310) {
            currentState = 309;
        }else if (currentState === 309) {
            currentState = 308;
        } else if (currentState === 308) {
            currentState = 307;
        } else if (currentState === 307) {
            currentState = 306;
        } else if (currentState === 306) {
            currentState = 305;
        } else if (currentState === 305) {
            currentState = 304;
        } else if (currentState === 304) {
            currentState = 303;
        } else if (currentState === 312) {
            currentState = 313;
        } else if (currentState === 313) {
            currentState = 311;
        } else if (currentState === 311) {
            currentState = 312;
        } 
        
        else if (currentState === 401) {
            currentState = 402;
        } else if (currentState === 402) {
            currentState = 401;
        } else if (currentState === 404) {
            currentState = 405;
        } else if (currentState === 405) {
            currentState = 403;
        } else if (currentState === 403) {
            currentState = 404;
        } else if (currentState === 407) {
            currentState = 408;
        } else if (currentState === 408) {
            currentState = 406;
        } else if (currentState === 406) {
            currentState = 407;
        } else if (currentState === 409) {
            currentState = 415;
        } else if (currentState === 415) {
            currentState = 413;
        } else if (currentState === 413) {
            currentState = 414;
        } else if (currentState === 414) {
            currentState = 412;
        } else if (currentState === 412) {
            currentState = 411;
        } else if (currentState === 411) {
            currentState = 410;
        } else if (currentState === 410) {
            currentState = 409;
        } 
        



        // Mostrar el nuevo estado
        showState(currentState);
    }
});

// Mostrar el estado inicial al cargar
showState(currentState);
