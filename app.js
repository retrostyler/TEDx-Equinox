const first = {
    title: 'TEDx topic',
    description: 'TEDx description',
    about: "TEDx about"
}
const second = {
    title: "Lorem Ipsum Dolore",
    description: "Lorem Ipsum Dolore porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    about : "Lorem Ipsum Dolore porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, ipsum quia dolor sit amet, consectetur, adipisci velit, in dapibus or "
}

const data = [first, second];

var i = 0;

function leftClick(){
    if(i == 0){
        i = data.length - 1;
    }else{
        i--;
    }
    console.log(i);
    console.log(data[i].title);
    console.log(data[i].description);
    document.getElementById("title").innerHTML = data[i].title;
    document.getElementById("description").innerHTML = data[i].description;
} 

function rightClick(){
    if(i == data.length - 1){
        i = 0;
    }else{
        i++;
    }    
    document.getElementById("title").innerHTML = data[i].title;
    document.getElementById("description").innerHTML = data[i].description;
}

