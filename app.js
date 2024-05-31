/* <div class="thimble">Thimble Cactus
<img class = "thimbleimg" src="https://planetdesert.com/cdn/shop/products/816e4d8e-be35-5258-a4c9-9f0b74c01e41_400x.jpg?v=1670366158">
</div>
*/

const data = [
    {name: "Thimble Cactus",
        imgClass: "thimbleimg",
        src: "https://planetdesert.com/cdn/shop/products/816e4d8e-be35-5258-a4c9-9f0b74c01e41_400x.jpg?v=1670366158",
        divClass : "thimble"
    },
    {name: "Moon Cactus",
        imgClass: "moonimg",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GDyZXkfmYyVhY7ls9ZvT9kcST8ER_IDUCg&s",
        divClass: "moon"
    },
    {name: "Bunny Ears Cactus",
        imgClass: "bunnyimg",
        src: "https://www.shutterstock.com/image-photo/cactus-opuntia-on-nature-background-600nw-698989552.jpg",
        divClass: "bunny"
    },
    {name: "Organ Pipe Cactus",
        imgClass: "organimg",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdp9exxLN4lICHkaCRm0NvXumIHcCOxUm7WQ&s",
        divClass: "organP"
    },
    {name: "Saguaro Cactus",
        imgClass: "saguaroimg",
        src: "https://www.mydomaine.com/thmb/FTquCarmnL7l8djQaaW5JxBBq0M=/853x0/filters:no_upscale():strip_icc()/indoor-cactus-plants-saguaro-6fb83aec85a14a1eae828a1cedb83853.jpg",
        divClass: "saguaro"
    }
]
const sandDiv = document.getElementById("sand");
 
data.forEach(element => {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add(element.divClass);
    parentDiv.textContent = element.name;
    const imgEl = document.createElement("img");
    imgEl.classList.add(element.imgClass);
    imgEl.setAttribute("src", element.src)

    parentDiv.append(imgEl);
    sandDiv.appendChild(parentDiv);
})



