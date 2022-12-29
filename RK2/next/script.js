let exitButton = document.querySelector('#exit')
let nextButton = document.querySelector('#next')

exitButton.addEventListener('click', leave)
nextButton.addEventListener('click', next)
function leave(){
    window.location.href = "reg/index.html"
}
function next(){
    window.location.href = "http://127.0.0.1:5500/index.html"
}
const getRes = async(url) => {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error('status: ${res.status}');
    }
    return await res.json();
}

let groceryBlock = document.querySelector('#grocery')
var count = 0

getRes('items2.json')
    .then (data => {
        for (var i in data){
            count++;
            groceryBlock.innerHTML += '<div class="block" id="block'+ count +'"><h1>' + i + '</h1><img id="image" src="images/' + i + '.jpg" alt=""></div>';
            for (var key in data[i]){
                let blockBlock = document.querySelector('#block' + count);
                blockBlock.innerHTML += '<div class="smallblock"><p>' + key + ': ' + data[i][key] + '</p></div>';
            }
        }
    })