let pageData = {
    productName: 'Book a Cruise to the Moon',
    productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
    imageSrc: [
        "GalaxyTrip/asteroid.jpg",
        "GalaxyTrip/fantasy.jpg",
        "GalaxyTrip/space.jpg",
        "GalaxyTrip/spaceship.jpg"
    ],
    productClasses:[
        {
            name:'Coach',
            price:125000,
            seatsAvailable:20,
            earlyBird:true
        },
        {
            name:'Business',
            price:275000,
            seatsAvailable:6,
            earlyBird:true
        },
        {
            name:'First',
            price:430000,
            seatsAvailable:2,
            earlyBird:false
        }
    ],
    statusList:[
        "Coach",
        "Business",
        "First"
    ],

    statusIndex:"",

    name: "",

    count: "",

    note: "",

    summary:"",

    bookingButton:false,

    h2ClassController:{
        centered:true,
        colorFont:false
    },
    pStyleController:{
        'margin-left':'50px',
        color:'blue',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
        },
    imageAlt:"Photo from space"        
};

let pageMethods = {
    computeTicket(){
        this.productClasses[this.statusIndex].seatsAvailable -= this.note;
    },
    bookingStatus(){
        this.bookingButton = true;
    },
    displaySummary() {
        this.summary = `${this.name} - ${this.statusList[this.statusIndex]}
    。 ${this.count} 張 備註: ${this.note} 剩餘位置: ${this.productClasses[this.statusIndex].seatsAvailable  }`;
    },
}

const app = Vue.createApp({
    data() {
        return pageData;
    },
    methods: pageMethods,
});
app.mount("#app")