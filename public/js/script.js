const Site = new Dashboard();
(() => {
    async function test(path, method, STG, LIN) {
        if (method.method === "GET") {
            const response = await fetch(path, method);
            const music = await response.json();
            while (List.hasChildNodes())
                List.removeChild(List.firstChild);

            while (Video.hasChildNodes())
                Video.removeChild(Video.firstChild);

            for (let i = 1; i < music.length; i++) {
                if (STG === music[i][0]) {
                    var S1 = music[i][1];
                    document.getElementById('myIframe').src = S1;
                    break;
                }
            }
            for (let i = 1; i < music.length; i++) {
                if (STG === music[i][0]) {
                    var par = document.createElement("p");
                    var ach = document.createElement("a");

                    ach.innerText = music[i][2];
                    par.appendChild(ach);
                    console.log(par);
                    List.appendChild(par);
                }
            }
        }
        else if (method.method === "POST") {
            var bodyObj = {};
            bodyObj['stage'] = STG;
            bodyObj['link'] = LIN;
            console.log(bodyObj);
            const response = await fetch(path, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyObj)
            });
            const music = await response.json();
        }
    }

    function onSubmit() //post
    {
        event.preventDefault();
        var text = (stage.selectedIndex * 20 + 40) + 'km/h';
        var link = Link.value;
        var method = { method: "POST" };
        test('/api', method, text, link);
        Site.toSecond();
    }

    var Stage = document.querySelectorAll(".button");
    for (var i of Stage)
        i.addEventListener('click', onGet);
    var formElement = document.querySelector('form');
    formElement.addEventListener('submit', onSubmit);
    var stage = document.querySelector('#stage');
    var Link = document.querySelector('#link');
    var List = document.querySelector('#output');
    var Video = document.querySelector('#video');

    function onGet()  //get
    {
        var text = event.target.textContent;
        var method = { method: "GET" };
        test('/api', method, text, null);
    }

})();