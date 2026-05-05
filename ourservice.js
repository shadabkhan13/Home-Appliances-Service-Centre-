let info_2 = [
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: "Refrigerator Repair service",
        Name: "refrigerator",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: " Washing Machine Repair service",
        Name: "washing-m",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: " AC Repair service",
        Name: "AC",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: "Microwave Repair service",
        Name: "microwave",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: "Oven Repair service",
        Name: "oven",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: "Cooler Repair service",
        Name: "cooler",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: "Cooler Repair service",
        Name: "Cooler",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: "Cooler Repair service",
        Name: "Cooler",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: "Cooler Repair service",
        Name: "Cooler",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: "Cooler Repair service",
        Name: "Cooler",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: "Cooler Repair service",
        Name: "Cooler",
    },
    {
        TittleImg: "images/appliance-repair.png",
        TittleName: "Cooler Repair service",
        Name: "Cooler",
    },

];

let all_service_cards = document.querySelector('.all-service-cards');

let onlyForm = document.querySelector('.only-form');

info_2.forEach((info_) => {
    let a = document.createElement('a');
    a.classList.add(`${info_.Name}`);
    a.href = "form.html";
    let cardImage = document.createElement('img');
    cardImage.src = `${info_.TittleImg}`;
    let h2 = document.createElement('h2');
    h2.textContent = `${info_.TittleName}`;
    a.appendChild(h2);

    a.prepend(cardImage);
    all_service_cards.appendChild(a);


    a.addEventListener('click', (e) => {
        e.preventDefault();
        let PRoName = a.getAttribute('class');
        localStorage.setItem("PROName", PRoName);
        console.log(PRoName);
        if(onlyForm.style.display = "none"){
            onlyForm.style.display = "block";
        }
    });

});
let SelectedImageName = localStorage.getItem("TittleImage");


let closePopupForm = document.querySelector('.cancel-btn-1');
if (closePopupForm) {
    closePopupForm.addEventListener('click', () => {
        if (onlyForm.style.display === "block") {
            onlyForm.style.display = "none";
        }
    });
}

let foorterBtn = document.querySelector('.footerbtn');
let scrollUpBtn = document.querySelector('.scrollupbtn');

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
            service: localStorage.getItem("PROName"),
            device: getDeviceType()
        };
        console.log(data);
        fetch("https://script.google.com/macros/s/AKfycbzcrQLr9RxZxR5qJZWDaHV3mLrx8upQ5Laj88lZ9OjQeblRM26PrObvPmImqE753ksW/exec", {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                alert("Request Sent Successfully!");
                document.getElementById("serviceForm").reset();
            })
            .catch(err => {
                console.error(err);
                alert("Error sending request");
            });
    });
}

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
