const xhr = new XMLHttpRequest();
let btn;
let output;
const wrapp = document.querySelector(".wrapper");
(function render(){
    btn = document.createElement('button');
    btn.innerHTML = "GET DATA";
    output  = document.createElement('div');
    output.className = "output";
    wrapp.appendChild(btn);
    btn.addEventListener('click', function() {
        wrapp.appendChild(output);
        output.style.display = "flex";
        output.innerHTML = '<img src="https://vitaminvp.github.io/WA/client/assets/images/ajax-loader.gif">';
        const timeout = 3000;
        const timer = setTimeout(function () {
            xhr.abort();
            alert("Зависон, однако!");
            output.style.display = "none";
        }, timeout);
        xhr.open("GET", "http://localhost:4001/list");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200){
                output.innerHTML = "";
                let data = JSON.parse(xhr.responseText);
                data = Array.from(data);
                data.forEach( (item) => {
                    let content = "";
                    content += "<ul>";
                    for (let key in item){
                        content += '<li>'+key+': "'+item[key]+'"</li>';
                    }
                    content += "</ul>";
                    output.innerHTML += content;
                    clearTimeout(timer);
                });
            }
        };
        xhr.send();
    });
})();


