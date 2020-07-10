var ereg = document.getElementById('e-reg')
var einput = document.querySelector('.e-input')
var regex = /\S+@\S+\.\S+/
var value = "";
ereg.addEventListener('input', function(e){
    value = e.target.value
    e.target.value = value
    if(value.match(regex)){
        einput.style.color = "#fff"
        einput.style.fontWeight = '500'
    }else{
        einput.style.color =  "rgb(180, 54, 54)"
        einput.style.fontWeight = 'bolder'
        elabel.classList.remove('eLabelRed')
    }
})
