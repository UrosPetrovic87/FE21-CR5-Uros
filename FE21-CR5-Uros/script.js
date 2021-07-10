var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(locName, locAddress, locZipCode, locImage, Date) {
        this.locName = locName;
        this.locAddress = locAddress;
        this.locZipCode = locZipCode;
        this.locImage = locImage;
        this.Date = Date;
    }
    Locations.prototype.display = function () {
        return "<div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top d-none  d-sm-block d-md-block d-lg-block d-xl-block\n      \" src=\"" + this.locImage + "\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">" + this.locName + "</h5>\n        <p class=\"card-text\">" + this.locAddress + "</p>\n        <p class=\"card-text\">" + this.locZipCode + "</p>\n        <p class=\"card-text\">" + this.Date + "</p>\n        </div>\n        </div>";
    };
    return Locations;
}());
var zoo = new Locations("ZOO Schönbrunn", "Maxingstraße 13b", "1130 Wien", "img/zoo.jpg", "May 20, 1983 21:00:00");
var see = new Locations("Haus des Meeres", "Fritz-Grünbaum-Platz 1", "1060 Wien", "img/meer.jpg", "Dec 10, 1988 13:00:00");
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(locName, locAddress, locZipCode, locImage, Date, restaType, webAddress, restaPhone) {
        var _this = _super.call(this, locName, locAddress, locZipCode, locImage, Date) || this;
        _this.restaType = restaType;
        _this.webAddress = webAddress;
        _this.restaPhone = restaPhone;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return "<div class=\"card\" style=\"width: 18rem;\">\n            <img class=\"card-img-top d-none  d-sm-block d-md-block d-lg-block d-xl-block\n            \" src=\"" + this.locImage + "\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title\">" + this.locName + "</h5>\n            <p class=\"card-text\">" + this.restaType + "</p>\n            <p class=\"card-text\">" + this.locAddress + "</p>\n             <p class=\"card-text\">" + this.locZipCode + "</p>\n             <p class=\"card-text\">" + this.Date + "</p>\n             <p class=\"card-text\">" + this.restaPhone + "</p>\n             <p class=\"card-text\"><a href=\"\">" + this.webAddress + "</a></p>\n            </div>";
    };
    return Restaurant;
}(Locations));
var Schweizerhaus = new Restaurant("Schweizerhaus", "Prater 116", "1020 Wien", "img/schweiz.jpg", "Apr 20, 1989 13:00:00", "Austrian food", "www.schwezerhaus.com", "+43 01 72801520");
var doco = new Restaurant("Do&Co", "Stephansplatz 12", "1010 Wien", "img/doco.jpg", "Sep 22, 1986 13:00:00", "All-food", "www.docohotel.com/.at", "+43 01 5353969");
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(locName, locAddress, locZipCode, locImage, Date, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, locName, locAddress, locZipCode, locImage, Date) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    Events.prototype.display = function () {
        return "<div class=\"card\" style=\"width: 18rem;\">\n            <img class=\"card-img-top d-none  d-sm-block d-md-block d-lg-block d-xl-block\n            \" src=\"" + this.locImage + "\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.locName + "</h5>\n              <p class=\"card-text\">" + this.eventDate + "</p>\n              <p class=\"card-text\">" + this.Date + "</p>\n                <p class=\"card-text\">" + this.locAddress + "</p>\n                   <p class=\"card-text\">" + this.locZipCode + "</p>\n                   <p class=\"card-text\">" + this.eventTime + "</p>\n                   <p class=\"card-text\">" + this.ticketPrice + "</p>\n                  </div>";
    };
    return Events;
}(Locations));
var bull = new Events("Red Bull Flug tag ", "Flugfield Brigittenauer", "1210 Wien", "img/red.jpg", "Jul 15, 1982 13:00:00", "26.09.2021", "18:00 h", "price:50€");
var fifa = new Events("Euro finale", "Wembley-Stadion", "London ", "img/finale.jpg", "Feb 11, 1984 13:00:00", "11.07.2021", "21:00 h", "price: 200€");
var locations = [zoo, see, Schweizerhaus, doco, bull, fifa];
for (var i = 0; i < locations.length; i++) {
    document.getElementById("all").innerHTML += locations[i].display();
}
function sortUp() {
    locations.sort(function (a, b) {
        var dateA = new Date(a.Date), dateB = new Date(b.Date);
        return dateA - dateB;
    });
    var test = " ";
    for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
        var val = locations_1[_i];
        test += val.display();
    }
    document.getElementById("all").innerHTML = test;
}
document.getElementById("up").addEventListener("click", sortUp);
function sortDown() {
    locations.sort(function (a, b) {
        var dateA = new Date(a.Date), dateB = new Date(b.Date);
        return dateB - dateA;
    });
    var test = " ";
    for (var _i = 0, locations_2 = locations; _i < locations_2.length; _i++) {
        var val = locations_2[_i];
        test += val.display();
    }
    document.getElementById("all").innerHTML = test;
}
document.getElementById("down").addEventListener("click", sortDown);
