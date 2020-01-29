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

       

})