var warning_btn = document.getElementById('warning')
var exchanged_btn = document.getElementById('exchange_btn')
console.log(exchanged_btn)
var warning_tag = true; 

exchange_btn.addEventListener('click',function(){
    this.className = 'haven';
})

warning_btn.onclick = function(){
    if(warning_tag){
        this.className = ''
        warning_tag = false
    }
    else{
        this.className = 'default'
        warning_tag = true
    }
    
}