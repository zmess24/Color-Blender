(function() { 
    console.log("JS Loaded");
    let red = 255;
    let green = 255;
    let blue = 255;

    const palette = document.getElementById('palette');
    palette.style.background = `rgb(${red}, ${green}, ${blue})`;

    function blend10(color, operation) {
        if (color === 'red' && operation === 'add' && red !== 255) red = red + 12.75;
        if (color === 'red' && operation === 'sub' && red !== 0) red = red - 12.75;
        if (color === 'green' && operation === 'add'&& green !== 255) green = green + 12.75;
        if (color === 'green' && operation === 'sub' && green !== 0) green = green - 12.75;
        if (color === 'blue' && operation === 'add'&& green !== 255) blue = blue + 12.75;
        if (color === 'blue' && operation === 'sub' && blue !== 0) blue = blue - 12.75;
    };

    document.querySelector('#colors').addEventListener('click', function({ target }) {
        let color = target.id
        if (color === 'colors') return;
        
        if (color === 'red') {
            blend10('red', 'add')
            blend10('green', 'sub');
            blend10('blue', 'sub');
            palette.style.background = `rgb(${red}, ${green}, ${blue})`;
        }

        if (color === 'green') {
            blend10('red', 'sub');
            blend10('green', 'add');
            blend10('blue', 'sub');
            palette.style.background = `rgb(${red}, ${green}, ${blue})`;
        }

        if (color === 'blue') {
            blend10('red', 'sub');
            blend10('green', 'sub');
            blend10('blue', 'add');
            palette.style.background = `rgb(${red}, ${green}, ${blue})`;
        }

        if (color === 'yellow') {
            blend10('red', 'add');
            blend10('green', 'add');
            blend10('blue', 'sub');
            palette.style.background = `rgb(${red}, ${green}, ${blue})`;
        }
    });


    document.querySelector('#reset').addEventListener('click', function () {
        red = 255;
        green = 255;
        blue = 255;
        palette.style.background = `rgb(${red}, ${green}, ${blue})`;
    });
})();