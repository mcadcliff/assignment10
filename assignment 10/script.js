var myVue = new Vue({
    el: "#app",
    data: {
        bottlecaps: [
            
            {name: "King Cobra",
            type: "bottle cap",
            location: "Missouri",
            year: "1854",
            favorite: false,
            imgSrc: "kingcobra.jpg"},
    
            
            {name: "Finnegans Brew Co.",
            type: "bottle cap",
            location: "Minnesota",
            year: "2000",
            favorite: false,
            imgSrc: "finnegans.jpg"},
            
            {name:"I don't know",
            type: "bottle cap",
            location: "The Ground",
            year: "somethin somethin",
            favorite: false,
            imgSrc: "idk.jpg"},
            
            {name: "Full Sail Brewing Co.",
            type: "bottle cap",
            location: "Oregon",
            year: "1987",
            favorite: false,
            imgSrc: "fullsail.jpg"},
            
            {name: "Pyramid Brewing Co.",
            type: "bottle cap",
            location: "Washington",
            year: "1984",
            favorite: true,
            imgSrc: "pyramid.jpg"}
        ]   
    }
});