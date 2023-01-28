const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds;
let interval = null;
let bar = document.getElementById('bar')

let formData={};
const LS = localStorage;

let over = document.getElementById('over')
let span = document.querySelector('span')


start_btn.addEventListener('click',start)
stop_btn.addEventListener('click',stop)
reset_btn.addEventListener('click',reset)

    if(LS.getItem('formData')){
        formData = JSON.parse(LS.getItem('formData'));
        time_el.textContent = `${formData['hours']}:${formData['minutes']}:${formData['seconds']}`
        seconds = +formData['seconds'] + formData['minutes']*60+formData['hours']*3600;
        showProgress(seconds)

        
    }else{
        seconds = 0;
        }


function timer(){
    seconds++;

    showProgress(seconds);
    

    let hours = Math.floor(seconds/3600) 
    let mins = Math.floor((seconds-(hours*3600))/60);
    let secs = seconds%60;

    if(secs<10) secs = '0' + secs;
    if(mins<10) mins = '0' + mins;
    if(hours<10) hours = '0' + hours;
    
    time_el.textContent = `${hours}:${mins}:${secs}`
    
    formData['seconds'] = secs
    formData['minutes'] = mins
    formData['hours'] = hours

    LS.setItem('formData',JSON.stringify(formData))
    

}




function start(){

    if(interval){
        return
    }
    start_btn.textContent = 'Start'
    interval = setInterval(timer,1000)
}

function stop(){
    clearInterval(interval);
    start_btn.textContent = 'Continue'

    interval=null;
}

function reset(){
    let conf = confirm('are you sure?')

    if(conf){
        stop();
        showProgress(0)
        LS.clear();
        seconds=0;
        time_el.textContent='00:00:00'
        over.innerText = '';
        span.innerText = '';
    }
    
    
}

function showProgress(secondsValue){
    let value= secondsValue/10*100
    bar.attributes.value.nodeValue = value;
    

    
    if(value>100){
        over.innerText ='exceeded the plan on '+ ((secondsValue/60).toFixed(2) + ' minutes');
        span.innerText = '✓';
    }
}


