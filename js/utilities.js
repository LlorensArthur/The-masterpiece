// fonction getRandomColor va retourner une string avec des valeurs rgba
function getRandomColor() {
    return `rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)}, 0.${getRandomInt(9)})`;
}

// fonction getRandomInteger
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}