
document.querySelector("#getBook").addEventListener('click', getBook)

var path = new Array();

function getBook(){
    let searchInput = document.querySelector("#search-text").value;
    
    fetch ('https://reststop.randomhouse.com/resources/works?max=100&search='+(searchInput), {
        headers: {
            'Accept': 'application/json',
        }
    })
    .then((response) =>  {
        return response.json()
    })
    .then((data) => {    
        var title = "Title: "
        var author = "Author: "
        let output = '<h2>Books</h2>';
        for (i = 0; i < data.work.length; i++) {
            path[i] = "heart.png";
            output += `<b>Title:</b> ${data.work[i].titleweb} | <b>Author:</b> ${data.work[i].authorweb} 
            <btn onclick=switchImg(${i})><img id=likeImage${i} src=${path[i]} width=15px height = 15px></btn>`  +"<br><br>" 
        }
        document.querySelector("#output").innerHTML = output;
    })
    .then(function(obj) { 
        console.log('everything is ok', obj)
    })
    .catch(function(error) {
        console.log('error!', error)
        let output = '<h2>Sorry</h2>';
        output += "There are no results for the search "+(searchInput).bold()
        document.querySelector("#output").innerHTML = output;
    })
}

function switchImg(i) {
    console.log(path[i])
    if (path[i].localeCompare("heart.png")) { 
        path[i] = "heart.png"
        document.querySelector(`#likeImage${i}`).src = "heart.png";
       
    } else {
        path[i] = "full.png"
        document.querySelector(`#likeImage${i}`).src = "full.png";
    }
    
}

const closeIcon = document.querySelector(".close-icon");
const searchBar = document.querySelector("#search-text");

searchBar.addEventListener("keyup", () => {
if(searchBar.value && closeIcon.style.visibility != "visible"){
    closeIcon.style.visibility = "visible";
} else if(!searchBar.value) {
    closeIcon.style.visibility = "hidden";
}
});

closeIcon.addEventListener("click", () => {
searchBar.value = "";
closeIcon.style.visibility = "hidden";
})