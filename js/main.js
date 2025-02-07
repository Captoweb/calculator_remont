let resSquare1 = 0
let resSquare2 = 0
let resSquare3 = 0
let resSquare4 = 0
let resSquare5 = 0
let resSquare6 = 0
let resSquare7 = 0

let btnRes = document.querySelector('.btn1')

function calc() {

    let width1 = document.querySelector('#width1').value
    let length1 = document.querySelector('#length1').value
    let hight1 = document.querySelector('#hight1').value

    let window1 = document.querySelector('#window1').value
    let door1 = document.querySelector('#door1').value

    let res1 = (( Number(width1) + Number(length1) ) * 2 * Number(hight1) - Number(window1) - Number(door1) ).toFixed(2)
    let res12 = res1  + ' кв м'
    
   console.log(res1)
   console.log(res12)
   document.querySelector('#res').innerHTML = res12
   resSquare1 = res1
}

btnRes.addEventListener('click', calc)



let btnRes2 = document.querySelector('.btn2')

function calc2() {

    let width2 = document.querySelector('#width2').value
    let length2 = document.querySelector('#length2').value
    let hight2 = document.querySelector('#hight2').value

    let window2 = document.querySelector('#window2').value
    let door2 = document.querySelector('#door2').value
    
    let res2 = (( Number(width2) + Number(length2) ) * 2 * Number(hight2) - Number(window2) - Number(door2)).toFixed(2)
    let res22 = res2  + ' кв м'
    
   console.log(res2)
   console.log(res22)
   document.querySelector('#res2').innerHTML = res22
   resSquare2 = res2
}

btnRes2.addEventListener('click', calc2)



let btnRes3 = document.querySelector('.btn3')

function calc3() {

    let width3 = document.querySelector('#width3').value
    let length3 = document.querySelector('#length3').value
    let hight3 = document.querySelector('#hight3').value

    let window3 = document.querySelector('#window3').value
    let door3 = document.querySelector('#door3').value
    
    let res3 = (( Number(width3) + Number(length3) ) * 2 * Number(hight3) - Number(window3) - Number(door3)).toFixed(2)
    let res32 = res3  + ' кв м'
    
   console.log(res3)
   console.log(res32)
   document.querySelector('#res3').innerHTML = res32
   resSquare3 = res3
}

btnRes3.addEventListener('click', calc3)



let btnRes4 = document.querySelector('.btn4')

function calcCorridor() {

    let widthCorridor = document.querySelector('#widthCorridor').value
    let lengthCorridor = document.querySelector('#lengthCorridor').value
    let hightCorridor = document.querySelector('#hightCorridor').value

    let doorCorridor = document.querySelector('#doorCorridor').value
    
    let res4 = (( Number(widthCorridor) + Number(lengthCorridor) ) * 2 * Number(hightCorridor) - Number(doorCorridor)).toFixed(2)
    let res42 = res4  + ' кв м'
    
   console.log(res4)
   console.log(res42)
   document.querySelector('#res4').innerHTML = res42
   resSquare4 = res4
}

btnRes4.addEventListener('click', calcCorridor)



let btnRes5 = document.querySelector('.btn5')

function calcKitchen() {

    let widthKitchen = document.querySelector('#widthKitchen').value
    let lengthKitchen = document.querySelector('#lengthKitchen').value
    let hightKitchen = document.querySelector('#hightKitchen').value

    let windowKitchen = document.querySelector('#windowKitchen').value
    let doorKitchen = document.querySelector('#doorKitchen').value
    
    let res5 = (( Number(widthKitchen) + Number(lengthKitchen) ) * 2 * Number(hightKitchen) - Number(windowKitchen) - Number(doorKitchen)).toFixed(2)
    let res52 = res5 + ' кв м'
    
   console.log(res5)
   console.log(res52)
   document.querySelector('#res5').innerHTML = res52
   resSquare5 = res5
}

btnRes5.addEventListener('click', calcKitchen)



let btnRes6 = document.querySelector('.btn6')

function calcBathroom() {

    let widthBathroom = document.querySelector('#widthBathroom').value
    let lengthBathroom = document.querySelector('#lengthBathroom').value
    let hightBathroom = document.querySelector('#hightBathroom').value

    let doorBathroom = document.querySelector('#doorBathroom').value
    
    let res6 = ((Number(widthBathroom) + Number(lengthBathroom)) * 2 * Number(hightBathroom) - Number(doorBathroom)).toFixed(2) 
    let res62 = res6 +' кв м'
    
   console.log(res6)
   console.log(res62)
   document.querySelector('#res6').innerHTML = res62
   resSquare6 = res6
}

btnRes6.addEventListener('click', calcBathroom)



let btnRes7 = document.querySelector('.btn7')

function calcToiletRoom() {

    let widthToiletRoom = document.querySelector('#widthToiletRoom').value
    let lengthToiletRoom = document.querySelector('#lengthToiletRoom').value
    let hightToiletRoom = document.querySelector('#hightToiletRoom').value

    let doorToiletRoom = document.querySelector('#doorToiletRoom').value
    
    let res7 = (( Number(widthToiletRoom) + Number(lengthToiletRoom) ) * 2 * Number(hightToiletRoom) - Number(doorToiletRoom) ).toFixed(2)
    let res72 = res7 + ' кв м'
    
   console.log(res7)
   console.log(res72)
   document.querySelector('#res7').innerHTML = res72
   resSquare7 = res7
}

btnRes7.addEventListener('click', calcToiletRoom)



let total = document.querySelector('.totalSum')


function totalSum() {
    console.log('------------- totalSum ----------------')
    let sum = Number(resSquare1) + Number(resSquare2) + Number(resSquare3) + Number(resSquare4) + Number(resSquare5) + Number(resSquare6) + Number(resSquare7)
    console.log(sum)
    document.querySelector('#total').innerHTML = sum + ' кв м'
}

 
total.addEventListener('click', totalSum)


