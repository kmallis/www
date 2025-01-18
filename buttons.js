/*button clicks in nav*/

let bio = document.querySelector("#bio") //match the specific button -> biography button
bio.addEventListener('click', () =>{ // when button clicks
    document.querySelector('#message').style.visibility = 'visible'; //reveal the corresponding message in aside
    document.querySelector('#message1').style.visibility = 'hidden'; //hide the other (paintings,exhibitions,links,managment)
    document.querySelector('#message2').style.visibility = 'hidden';
    document.querySelector('#message3').style.visibility = 'hidden';
    document.querySelector('#message4').style.visibility = 'hidden';
})

let foto = document.querySelector("#paintings") // ->paintings button
foto.addEventListener('click', () =>{
    document.querySelector('#message1').style.visibility = 'visible';
    document.querySelector('#message').style.visibility = 'hidden';
    document.querySelector('#message2').style.visibility = 'hidden';
    document.querySelector('#message3').style.visibility = 'hidden';
    document.querySelector('#message4').style.visibility = 'hidden';
})

let works = document.querySelector("#exhibitions") // ->exhibitions button
works.addEventListener('click', () =>{
    document.querySelector('#message2').style.visibility = 'visible';
    document.querySelector('#message1').style.visibility = 'hidden';
    document.querySelector('#message').style.visibility = 'hidden';
    document.querySelector('#message3').style.visibility = 'hidden';
    document.querySelector('#message4').style.visibility = 'hidden';
})

let links = document.querySelector("#links") // ->links button
links.addEventListener('click', () =>{
    document.querySelector('#message3').style.visibility = 'visible';
    document.querySelector('#message1').style.visibility = 'hidden';
    document.querySelector('#message').style.visibility = 'hidden';
    document.querySelector('#message2').style.visibility = 'hidden';
    document.querySelector('#message4').style.visibility = 'hidden';
})

let managment = document.querySelector("#managment") // ->managment button
managment.addEventListener('click', () =>{
    document.querySelector('#message4').style.visibility = 'visible';
    document.querySelector('#message1').style.visibility = 'hidden';
    document.querySelector('#message').style.visibility = 'hidden';
    document.querySelector('#message2').style.visibility = 'hidden';
    document.querySelector('#message3').style.visibility = 'hidden';
})

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*buttons in side menu*/

let info = document.querySelector("#info")  // match with general info button
info.addEventListener('click', () =>{ // when button clicks:
    document.querySelector('#info1').style.visibility = 'visible'; //reveal the right message in main and hide the rest of the texts
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let life = document.querySelector("#life")    // life button
life.addEventListener('click', () =>{
    document.querySelector('#life1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let death = document.querySelector("#death")   
death.addEventListener('click', () =>{
    document.querySelector('#death1').style.visibility = 'visible'; 
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let achievements = document.querySelector("#achievements")    
achievements.addEventListener('click', () =>{
    document.querySelector('#achievements1').style.visibility = 'visible'; 
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#info1').style.visibility = 'hidden';
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let portraits = document.querySelector("#portraits")   
portraits.addEventListener('click', () =>{
    document.querySelector('#portraits1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden'; 
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let landscapes = document.querySelector("#landscapes")    
landscapes.addEventListener('click', () =>{
    document.querySelector('#landscapes1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden'; 
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let religious = document.querySelector("#religious")   
religious.addEventListener('click', () =>{
    document.querySelector('#religious1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden'; 
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let religious_scientific = document.querySelector("#religious-scientific")   
religious_scientific.addEventListener('click', () =>{
    document.querySelector('#religious-scientific1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden'; 
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let painting = document.querySelector("#painting")   
painting.addEventListener('click', () =>{
    document.querySelector('#painting1').style.visibility = 'visible';
    document.querySelector('#info1').style.visibility = 'hidden'; 
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let login = document.querySelector("#login")  
login.addEventListener('click', () =>{
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#info1').style.visibility = 'hidden'; 
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'visible';
})

let biography = document.querySelector("#biography")    
biography.addEventListener('click', () =>{
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#info1').style.visibility = 'hidden'; 
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'hidden';
    document.querySelector('#biography1').style.visibility = 'visible';
    document.querySelector('#login1').style.visibility = 'hidden';
})

let about_paintings = document.querySelector("#about_paintings")    
about_paintings.addEventListener('click', () =>{
    document.querySelector('#portraits1').style.visibility = 'hidden';
    document.querySelector('#info1').style.visibility = 'hidden'; 
    document.querySelector('#life1').style.visibility = 'hidden';
    document.querySelector('#death1').style.visibility = 'hidden';
    document.querySelector('#achievements1').style.visibility = 'hidden';
    document.querySelector('#landscapes1').style.visibility = 'hidden';
    document.querySelector('#religious1').style.visibility = 'hidden';
    document.querySelector('#religious-scientific1').style.visibility = 'hidden';
    document.querySelector('#painting1').style.visibility = 'hidden';
    document.querySelector('#about_paintings1').style.visibility = 'visible';
    document.querySelector('#biography1').style.visibility = 'hidden';
    document.querySelector('#login1').style.visibility = 'hidden';
})