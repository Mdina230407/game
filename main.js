let     input = document.querySelector('.input'),
        btn   = document.querySelector('.btn'),
        time  = document.querySelector('.time'),
        gameZone = document.querySelector('.game__zone'),
        score = 0,
        gameTime = 0,
        interval = 0;

        
   
btn.addEventListener('click', () => {
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        gameZone.innerHTML = ''
        score = 0
        start()
    }else {
        alert('Нужно вести минимум 5 секунд')
    }
})


gameZone.addEventListener('click', (event) => {
       if(event.target.classList.contains('ball')) {
                score++
                event.target.remove()
                createBall()
       }
})


function start() {
        time.innerHTML = gameTime
        interval = setInterval(() => decrease(), 1000)
        createBall()
}

function decrease () {
        if(gameTime == 1) {
                time.innerHTML = 0
                end()
        }else {
             time.innerHTML = --gameTime   
        }
}

function end() {
        gameZone.innerHTML = `<h2>Вы набрали ${score} баллов</h2>`
        clearInterval(interval)
}


function createBall() {
        let ball = document.createElement('div')
        let size = 40
        ball.style.clipPath = shape();
        ball.classList.add('ball')
        ball.style.width = sizeRandom()
        ball.style.height = sizeRandom()
        ball.style.background =  colorsRandom()
        let params = gameZone.getBoundingClientRect()
        
        ball.style.top = random(0,params.height - size) + 'px'
        ball.style.left = random(0,params.width - size) + 'px'
        
        gameZone.append(ball)
        
}

function random(min,max) {
        return Math.floor(Math.random() * (max + 1 - min ) + min)
}
function colorsRandom (){
        let colors = ['red', 'green', 'white', 'yellow']
        return colors[Math.floor(Math.random() * colors.length)]
}
function sizeRandom(){
        let ballSize = [20+'px', 40+'px', 60+'px', 80+'px']
        return ballSize[Math.floor(Math.random() * ballSize.length)] 
}

function shape() {
        let shapeType = Math.floor(Math.random() * 5); 
        switch (shapeType) {
            case 0: 
                return 'circle'; 
            case 1: 
                return 'square'; 
            case 2:
                return 'ellipse(50% 30%)'; 
            case 3:
                return 'polygon(50% 0%, 0% 100%, 100% 100%)'; 
            case 4:
                return 'polygon(50% 0%, 0% 100%, 100% 100%, 50% 50%)'; 
            default:
                return 'circle'; }
    }