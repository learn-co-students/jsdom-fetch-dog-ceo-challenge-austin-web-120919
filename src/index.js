console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () =>{
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(json =>{
             console.log(json);
            const imageDiv = document.getElementById("dog-image-container");
            json.message.forEach(function(imgLink){
                imgRef = document.createElement('img');
                imageDiv.appendChild(imgRef);
                imgRef.setAttribute('src', imgLink);
            });
        }
        );
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json => {
            console.log(json);
            const dogBreedsList = document.getElementById('dog-breeds');

            for (const key in json.message ){
                
                const dogBreedListItem = document.createElement('li');
                dogBreedListItem.addEventListener('click', (e) => {
                    e.target.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;

                });
                dogBreedListItem.innerHTML = key;
                dogBreedsList.appendChild(dogBreedListItem);    

            };
        });

        const dogBreedsList = document.getElementById('dog-breeds');

        const letterDropdown = document.getElementById('breed-dropdown');
        letterDropdown.addEventListener('change', (e) => {
            let selectLetter = e.target.value;
            let listItems = dogBreedsList.querySelectorAll('li');
            
            listItems.forEach(function(listItem){

                let breedName = listItem.innerText;

                if(breedName.charAt(0) == selectLetter){
                    listItem.removeAttribute('hidden');
                } else {
                    listItem.setAttribute('hidden', true);
                }
            });

        });

});