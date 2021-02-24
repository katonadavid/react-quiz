import { Question } from "./types";

function shuffleOptions( options: string[] ) {
    for (var i = options.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = options[i];
        options[i] = options[j];
        options[j] = temp;
    }
    return options;
}

export { shuffleOptions };