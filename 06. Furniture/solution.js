function solve() {
    let exercise = document.getElementById('exercise');
    exercise.addEventListener('click', clicked);

    function clicked(ev) {

        if (ev.target.tagName === 'BUTTON') {
            if (ev.target.textContent === 'Generate') {
                let inputFurnitureText = ev.target.parentNode.querySelectorAll('textarea')[0];
                let arrFromInput = JSON.parse(inputFurnitureText.value);

               // if (Array.isArray(arrFromInput)) {
                let ar2 = undefined;
                if (Array.isArray(arrFromInput)){
                    ar2 = Array.from(arrFromInput);
                }else {
                    ar2 = Array.of(arrFromInput);
                }

                    ar2
                        .forEach(line => {
                            let tBody = document.querySelector('.table').querySelector('tbody');
                             let imgUrl = line.img;
                             let name = line.name;
                             let price = line.price;
                             let decFactor = line.decFactor;
                            let newElementTr = document.createElement('tr');

                            // input !
                            let tdForInput = document.createElement('td');
                            let input = document.createElement('input');
                            input.setAttribute('type','checkbox');
                            tdForInput.appendChild(input);
                            // input !

                            newElementTr.appendChild(createElements('tr','td','img',imgUrl));
                            newElementTr.appendChild(createElements('tr','td','p',name));
                            newElementTr.appendChild(createElements('tr','td','p',price));
                            newElementTr.appendChild(createElements('tr','td','p',decFactor));
                            newElementTr.appendChild(tdForInput);
                            tBody.appendChild(newElementTr)
                                console.log(newElementTr)


                        })



            }else if (ev.target.textContent === 'Buy'){
                let buttonParent = ev.target.parentNode;
                let table = buttonParent.querySelector('table');
                let tbody = table.querySelector('tbody');
                let items = tbody.querySelectorAll('tr');
                let ar = [];
                Array.from(items)
                    .forEach(line => {
                        let checkBox = line.querySelector('input');
                       if (checkBox.checked){
                           let name = line.querySelectorAll('td')[1].querySelector('p');
                           let price = line.querySelectorAll('td')[2].querySelector('p');
                           let decor = line.querySelectorAll('td')[3].querySelector('p');

                           let temp = {
                               name:name.textContent,
                               price:Number(price.textContent),
                               decor:Number(decor.textContent)
                           }
                           ar.push(temp);
                       }
                    })

                let textArea = document.getElementById('exercise').querySelectorAll('textarea')[1];

                let total = ar.reduce((acc,curr) => {
                     acc.total += curr.price;
                     acc.names.push(curr.name);
                     acc.decor += Number(curr.decor);
                     return acc;

                },{total:0,names:[],decor:0});
               // console.log(textArea);
                 textArea.textContent = `Bought furniture: ${total.names.join(', ')}\nTotal price: ${total.total.toFixed(2)}\nAverage decoration factor: ${total.decor/total.names.length}`;
            }


        }
    }

    function createElements(tr, td , imgOrTp , text) {
        let newElementTd = document.createElement(td);

        let newElementImgOrTp = undefined;
        if (imgOrTp === 'img'){
            newElementImgOrTp = document.createElement('img');
            newElementImgOrTp.setAttribute('src', text)
        } else {
            newElementImgOrTp = document.createElement('p');

            newElementImgOrTp.textContent = text;
        }



        newElementTd.appendChild(newElementImgOrTp);
      //  newElementTr.appendChild(newElementTd);
        return newElementTd;
    }


}