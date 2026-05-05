
let ourService = document.querySelector('.ourservice');
let dropDown = document.querySelector('.dropdown');
let bookBtn = document.querySelector('.header button');
let popup = document.querySelector('.popup');
let foorterBtn = document.querySelector('.footerbtn');
let scrollUpBtn = document.querySelector('.scrollupbtn');
let cancelBtn = document.querySelector('.cancel-btn');
let overlay = document.querySelector('#overlay');
let serviceIconimg = document.querySelector('.services-icon');
let serviceIcon = document.querySelectorAll('.services-icon>div');
let imageInPopup = document.querySelector('.image-in-popup');
let containerMain = document.querySelector('.container-main');
let onlyForm = document.querySelector('.only-form');
let closePopupForm = document.querySelector('.cancel-btn-1');
let formSideImage = document.querySelector('.form-side-image');
// let productLinks = document.querySelectorAll('.product-links>h2');
let productLinks = document.querySelector('.product-links');
let productImageShowContainer = document.querySelector('.product-image-show-container');
let getServiceForm = document.querySelector('.getServiceForm');

// Sidebar toggle elements
let hamburger = document.querySelector('.hamburger');
let closeSidebarBtn = document.querySelector('.close-sidebar');
let navbar = document.querySelector('.navbar');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navbar.classList.add('active');
    });
}

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}






info.forEach(data => {
    Object.values(data).forEach(value => {
        if (value.endsWith('.png') || value.endsWith('.jpeg')) {
            let img = new Image();
            img.src = value;
        }
    });
});




let selectedData = null;
info.forEach((data) => {
    selectedData = data;
    let div = document.createElement('div');
    div.classList.add('icon');
    div.innerHTML = `<img src="${data.titleimg}" alt="">`;
    serviceIconimg.appendChild(div);
    div.addEventListener('click', () => {
        popUpShow(data);
        if (popup.style.display === "block") {
            popup.style.display = "none";
            overlay.style.display = "none";
            document.body.style.overflow = "auto";
        } else {
            popup.style.display = "block";
            overlay.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    });
});


let popUpShow = (data) => {
    let oldImages = containerMain.querySelector('.image-in-popup');
    if (oldImages) oldImages.remove();
    let div = document.createElement('div');
    div.classList.add('image-in-popup');
    div.innerHTML = `  <img class="img-btn" id="Refrigerator Repair" src="${data.fridgeImg}" alt="">
                       <img class="img-btn" id="Washing Machine Repair" src="${data.washingImg}" alt="">
                       <img class="img-btn" id="Microwave Repair" src="${data.microImg}" alt="">
                       <img class="img-btn" id="Mixer Repair" src="${data.mixerImg}" alt="">
                       <img class="img-btn" id="Water Purifyer Repair" src="${data.roImg}" alt="">
                       <img class="img-btn" id="Roof Fan Repair" src="${data.roofFanImg}" alt="">
                       <img class="img-btn" id="Geyser Repair" src="${data.geyserImg}" alt="">
                       <img class="img-btn" id="AC Repair" src="${data.acImg}" alt="">
                       <img class="img-btn" id="Cooler Repair" src="${data.coolerImg}" alt="">
                       <img class="img-btn" id="Dish Washer Repair" src="${data.dishWashImg}" alt="">`;
    containerMain.prepend(div);
    let imgTags = div.querySelectorAll('.img-btn');
    imgTags.forEach((img) => {
        img.addEventListener('click', (e) => {
            let imgUrl = e.target.getAttribute("src");
            let imgName = e.target.getAttribute("id");
            console.log(imgUrl);

            // secPopup(imgUrl);
            localStorage.setItem("SelectedImage", imgUrl);
            localStorage.setItem("SelectedImageName", imgName);
            window.location.href = "form.html";
        });
    });
}


let newImage = localStorage.getItem("SelectedImage");
let newImageName = localStorage.getItem("SelectedImageName");
if (newImage && newImageName) {
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    h2.textContent = `${newImageName}`;
    img.src = newImage;
    formSideImage.prepend(img);
    formSideImage.appendChild(h2);
}

if (ourService) {
    ourService.addEventListener('click', () => {
        if (dropDown.style.display === "block") {
            dropDown.style.display = "none";
        } else {
            dropDown.style.display = "block";
        }
    });
}

// Book Service Now Button
if (bookBtn) {
    bookBtn.addEventListener('click', () => {
        if (onlyForm.style.display === "block") {
            onlyForm.style.display = "none";
            // overlay.style.display = "none";
            // document.body.style.overflow = "auto";
        } else {
            onlyForm.style.display = "block";
            // overlay.style.display = "flex";
            // document.body.style.overflow = "hidden";
        }
    });
}

if (closePopupForm) {
    closePopupForm.addEventListener('click', () => {
        if (onlyForm.style.display === "block") {
            onlyForm.style.display = "none";
        }
    });
}




// scroll-up button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        foorterBtn.classList.add('active');
        scrollUpBtn.classList.add('active');

    } else {
        foorterBtn.classList.remove('active');
        scrollUpBtn.classList.remove('active');
    }
});



if (scrollUpBtn) {
    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}





// popup cancel button
if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {

        popup.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    });
}



// overlay cancel button
if (overlay) {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            popup.style.display = "none";
            overlay.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}




function getDeviceType() {
    let ua = navigator.userAgent.toLowerCase();

    if (/mobile/i.test(ua)) return "Mobile";
    if (/tablet|ipad/i.test(ua)) return "Tablet";

    // fallback (screen size)
    if (window.innerWidth < 768) return "Mobile";
    if (window.innerWidth < 1024) return "Tablet";

    return "Desktop";
}




let form = document.getElementById("serviceForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let data = {
            name: document.querySelector('[name="name"]').value,
            phone: document.querySelector('[name="phone"]').value,
            city: document.querySelector('[name="city"]').value,
            problem: document.querySelector('[name="problem"]').value,
            service: localStorage.getItem("SelectedImageName"),
            service: localStorage.getItem("Service-name"),
            device: getDeviceType()
        };
        console.log(data);
        fetch("https://script.google.com/macros/s/AKfycbzcrQLr9RxZxR5qJZWDaHV3mLrx8upQ5Laj88lZ9OjQeblRM26PrObvPmImqE753ksW/exec", {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                onlyForm.style.display = "none";
                alert("Request Sent Successfully!");
                document.getElementById("serviceForm").reset();
            })
            .catch(err => {
                console.error(err);
                alert("Send Failed! , Please Fill Form Again");
            });
    });
}
// let submitbtn = document.querySelector('.subbtn');
// submitbtn.addEventListener('click',(e)=>{
//     console.log(e.target);
//     if(e.target==="subbtn"){
//     setTimeout(()=>{
//         onlyForm.style.display = "none";
//     },1000);}
    
// });




let banner_image = document.querySelector('.banner-image');
banner_image.addEventListener('click', () => {
    window.location.href = "ourServices.html";
});




let sliderData = [
    { SlideImg: "images/refrigerator-repairing.png", SlideName: "Refrigerator Repair", Name: "refrigerator" },
    { SlideImg: "images/washing-machine-repairing.png", SlideName: "Washing Machine Repair", Name: "washing-m" },
    { SlideImg: "images/microwave-repairing.png", SlideName: "Microwave Repair", Name: "microwave" },
    { SlideImg: "images/ro-repairing.png", SlideName: "Water Purifier Repair", Name: "Ro" },
    { SlideImg: "images/cooler-repairing.png", SlideName: "Cooler Repair", Name: "cooler" },
    { SlideImg: "images/Ac-repairing.png", SlideName: "Air Conditioner Repair", Name: "AC" },
];

let imagesGridContainer = document.querySelector('.imagesgrid');
sliderData.forEach((Sdata) => {
    let DIV = document.createElement('div');
    DIV.classList.add(`${Sdata.Name}`);

    let IMG = document.createElement('img');
    IMG.src = `${Sdata.SlideImg}`;
    let H3 = document.createElement('h3');
    H3.textContent = `${Sdata.SlideName}`;
    DIV.prepend(IMG);
    DIV.appendChild(H3);

    imagesGridContainer.appendChild(DIV);
});


imagesGridContainer.querySelectorAll('div').forEach((d) => {
    d.addEventListener('click', (e) => {
        e.preventDefault();
        onlyForm.style.display = "block";
        let clname = d.getAttribute('class');
        console.log(clname);
        localStorage.setItem("Service-name", clname);

    })
});

if (getServiceForm) {
    getServiceForm.addEventListener('click', (e) => {
        e.preventDefault();
        onlyForm.style.display = "block";
    });
}



let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let icons = document.querySelectorAll('.icon');

prev.addEventListener('click',() => {
    icons.forEach((icon) => {
        icon.classList.add('activebtn');
    });

});

next.addEventListener('click',() => {
    icons.forEach((icon) => {
        icon.classList.remove('activebtn');
    });

});



