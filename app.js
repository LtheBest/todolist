//alert('hello word');

// function PlanMaison (){ 
//     let dimension = prompt("entrer les dimensions de votre maison");
//     console.log(dimension);
// }
// PlanMaison();
// for 
// for (let i=0; i<=100; i++){
//     console.log(i);
//     break;
// }
//for loop
// notre boucle va compter la longueur de notre chaine de caractere en affichant des lettres a chaque indice
// const text = "loic";
// for(let i=0; i<text.length; i++){
//     console.log(text[i]);
// }
//notre boucle va compter la longueur de notre chaine de caractere en affichant des chiffres 
// const text = "loic";
// for(let i=0; i<text.length; i++){
//     console.log([i]);
// }
// for of 
// parcourir notre tableau et afficher la totaliter

// const names = ["ulrich","yelena","nolwen","annick","rodrigue"];
// for(let name of names ){
//     console.log(name);
// }
//afficher les indexes de notre const names 
// const names = ["ulrich","yelena","nolwen","annick","rodrigue"];
// for(let name of names ){
//     console.log(names.indexOf(name));
// }
//foreach
// NB: foreach fonctionne uniquement avec les tableaux
// paracour les elements de notre tableau et l'affiche dans la console
// const names = ["ulrich","yelena","nolwen","annick","rodrigue"];
// names.forEach(function(name){
//     console.log(name);
// });
// paracour les elements de notre tableau et l'affiche dans la console avec l'index correspondant a chaqu'element
// const names = ["ulrich","yelena","nolwen","annick","rodrigue"];
// names.forEach(function(name,index){
//     console.log(name,index);
// });
//for in
//parcour les elements de mon object et les affiches
// const users ={
//     name:"ulrich",
//     age:4,
//     souscription: 500,
//     aregent:"zero",
// };
// for(let user in users){
//     console.log(users);
//     break;
// }
//parcour les elements de mon object et affiche la valeur du premier element
// const users ={
//     name:"ulrich",
//     age:4,
//     souscription: 500,
//     aregent:"zero",
// };
// for(let user in users){
//     console.log(users[user]);
//     break;
// }
//while
// let i =15;
// while(i<20){
//     console.log(i)
//     i++;
// }
//do while
// exercute le code au moins une fois avant de tester la condition
// let i =15;
// do{
//     console.log(i)
//     i++;
// }while(i>20);


// tp creer un jeux permettant a l'utilisateur de deviner un nombre generer par l'utilisateur

    // Generer un nombre aleatoire
    // donner a l'utilisateur la capacite de deviner ou de jouer
    // faire deviner l'utilisateur et s'il a faux , lui faire recommencer le jeu, on lui repose la question
    // s'il gagne, on stop

    // function devineGame(){
    //     let number = Math.random() * 11;
    //     let fixe = Math.floor(number);
    //     let devine;
    //     do{
    //         devine = prompt("devine un nombre entre 0 et 10");
    //         console.log(devine,fixe);
        
    //         if(fixe>devine){
    //             console.log("trop petit");
                
    //         }else if(fixe<devine){
    //             console.log("trop grand");
               
    //         } 
    //     }while(devine!=fixe);
    // }
    // devineGame();
    // scope ghlobal

    // let food ="appel";
    // let fruits=50;
    // console.log(food,fruits);
    
    //scope local

    function fruit(){
        let food = "banane";
        let fruits = 50;
        console.log(food,fruits);
    }
    fruit();
// 