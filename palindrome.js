document.getElementById('back').addEventListener('click', function(){
    window.location.href = 'front.html'
})


document.getElementById('btn-check').addEventListener('click', function(){
    const value = document.getElementById('input').value;
    
    
    const rev = value.split('').reverse().join('');
    
    
    if(value === rev){
        alert('palindrome');
    }
    else{
        alert('not palindrome');
    }
    input.value = '';
})