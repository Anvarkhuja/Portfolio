import images from "./images";

const services = [
    {
        image: `${images.services_img_1}`,
        title: "Front-end",
        paragraph: "HTML, CSS, BOOTSTRAP, JavaScript, Redux, ReactJS, API call, TailWind CSS"
    },
    {
        image: `${images.services_img_2}`,
        title: "Back-end",
        paragraph: "NodeJS, ExpressJS, Moongose, MongoDB, MySQL, Postman"
    },
    {
        image: `${images.services_img_3}`,
        title: "Responsive",
        paragraph: "MOBILE, TAB, DESKTOP"
    },
    // {
    //     image: `${images.services_img_4}`,
    //     title: "Branding",
    //     paragraph: "Business Card uchun 1-sahifali web-site, QR-code."
    // },
    {
        image: `${images.services_img_5}`,
        title: "UI design",
        paragraph: "Foydalanuvchi interfeysi (UI) dizayni tashqi ko'rinish yoki uslubga e'tibor qaratgan holda o'z loyihalarimni designlashtiraman."
    },
    {
        image: `${images.services_img_6}`,
        title: "Deployment & Hosting",
        paragraph: "@HOST.UZ, GIT HUB, VERCEL, NETLIFY, HEROKU,"
    },
];

const works = [
    {
        image: `${images.work_img_1}`,
        link: "https://namangan-city-uz.netlify.app/",
        desc: "Namangan Tour Full Website - ReactJS, NodeJS, ExpressJS, MySQL"
        
    },
    {
        image: `${images.work_img_2}`,
        link: "https://mister-blog-frontend.vercel.app/",
        desc: "Blog Website - MERN stack CRUD app (login:demo , parol:123)"
    },
    {
        image: `${images.work_img_3}`,
        link: "https://mistertube.vercel.app/",
        desc: "YOU TUBE anolog - ReactJS with RapidAPI"
    },
   
];









export {services, works};
