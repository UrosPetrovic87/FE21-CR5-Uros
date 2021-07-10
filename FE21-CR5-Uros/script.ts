
class Locations { 
    locName: string ;
    locAddress: string ;
    locZipCode: string ;
    locImage: string ;
    Date: string;
        
 constructor (locName:string, locAddress:string, locZipCode:string, locImage:string, Date:string) { 
        this.locName = locName;
        this.locAddress = locAddress;
        this.locZipCode = locZipCode;
        this.locImage = locImage;
        this.Date= Date;
    }


    display(){ 

        return`<div class="card" style="width: 18rem;">
      <img class="card-img-top d-none  d-sm-block d-md-block d-lg-block d-xl-block
      " src="${this.locImage}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${this.locName}</h5>
        <p class="card-text">${this.locAddress}</p>
        <p class="card-text">${this.locZipCode}</p>
        <p class="card-text">${this.Date}</p>
        </div>
        </div>`}
   }

     var zoo = new Locations ("ZOO Schönbrunn", "Maxingstraße 13b", "1130 Wien","img/zoo.jpg", "May 20, 1983 21:00:00");
 
    var see = new Locations ("Haus des Meeres", "Fritz-Grünbaum-Platz 1", "1060 Wien","img/meer.jpg","Dec 10, 1988 13:00:00");



    class Restaurant extends Locations { 
        restaType: string ;
        webAddress: string ;
        restaPhone: string ;
        
               
     constructor (locName:string, locAddress:string, locZipCode:string, locImage:string, Date:string, restaType:string, webAddress:string, restaPhone:string) {
            super (locName, locAddress, locZipCode, locImage, Date);
            this.restaType = restaType;
            this.webAddress = webAddress;
            this.restaPhone = restaPhone;
            }


            display(){ 
                return`<div class="card" style="width: 18rem;">
            <img class="card-img-top d-none  d-sm-block d-md-block d-lg-block d-xl-block
            " src="${this.locImage}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${this.locName}</h5>
            <p class="card-text">${this.restaType}</p>
            <p class="card-text">${this.locAddress}</p>
             <p class="card-text">${this.locZipCode}</p>
             <p class="card-text">${this.Date}</p>
             <p class="card-text">${this.restaPhone}</p>
             <p class="card-text"><a href="">${this.webAddress}</a></p>
            </div>`}
           }


           var Schweizerhaus = new Restaurant ("Schweizerhaus", "Prater 116", "1020 Wien","img/schweiz.jpg","Apr 20, 1989 13:00:00","Austrian food", "www.schwezerhaus.com", "+43 01 72801520");
    
            var doco = new Restaurant ("Do&Co", "Stephansplatz 12", "1010 Wien","img/doco.jpg","Sep 22, 1986 13:00:00", "All-food", "www.docohotel.com/.at", "+43 01 5353969");
      

             class Events extends Locations { 
                eventDate: string ;
                eventTime: string ;
                ticketPrice: string;
                       

             constructor (locName:string, locAddress:string, locZipCode:string, locImage:string, Date:string, eventDate:string, eventTime:string, ticketPrice:string) {
                    super (locName, locAddress, locZipCode, locImage,Date);
                    this.eventDate = eventDate;
                    this.eventTime = eventTime;
                    this.ticketPrice = ticketPrice;
                 }


       
            display(){ 
            return `<div class="card" style="width: 18rem;">
            <img class="card-img-top d-none  d-sm-block d-md-block d-lg-block d-xl-block
            " src="${this.locImage}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${this.locName}</h5>
              <p class="card-text">${this.eventDate}</p>
              <p class="card-text">${this.Date}</p>
                <p class="card-text">${this.locAddress}</p>
                   <p class="card-text">${this.locZipCode}</p>
                   <p class="card-text">${this.eventTime}</p>
                   <p class="card-text">${this.ticketPrice}</p>
                  </div>`}
              }

                var bull = new Events ("Red Bull Flug tag ", "Flugfield Brigittenauer", "1210 Wien", "img/red.jpg","Jul 15, 1982 13:00:00", "26.09.2021", "18:00 h", "price:50€");


                var fifa = new Events ("Euro finale", "Wembley-Stadion", "London ", "img/finale.jpg", "Feb 11, 1984 13:00:00","11.07.2021", "21:00 h", "price: 200€");


                var locations = [zoo,see,Schweizerhaus,doco,bull,fifa];

        for (let i = 0; i < locations.length ; i++) { 
     
        (document.getElementById("all") as HTMLElement).innerHTML += locations [i].display();
}


function sortUp(){
    locations.sort(function(a:string, b:string){
        var dateA = new Date(a.Date), dateB = new Date(b.Date);
        return dateA - dateB ;
        
    });  

    var test:string = " ";
    for (let val of locations) {
        test += val.display();
        }
       
  
    (document.getElementById("all")as HTMLElement).innerHTML = test;
}

(document.getElementById("up")as HTMLElement).addEventListener("click", sortUp) 


function sortDown(){
    locations.sort(function(a:string, b:string){
        var dateA = new Date(a.Date), dateB = new Date(b.Date);
        return dateB - dateA ;
        
    });  

    var test:string = " ";
    for (let val of locations) {
        test += val.display();
        }
       
  
    (document.getElementById("all")as HTMLElement).innerHTML = test;
}

(document.getElementById("down")as HTMLElement).addEventListener("click", sortDown) 





