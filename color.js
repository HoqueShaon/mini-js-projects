
document.getElementById('back').addEventListener('click', function(){
    window.location.href = 'front.html'
})

document.getElementById('green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})
document.getElementById('red').addEventListener('click', function(){
    document.body.style.backgroundColor = 'red'
})
document.getElementById('blue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue'
})

document.getElementById('random').addEventListener('click', function(event){
    event.preventDefault();

    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;
});
