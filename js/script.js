var cards = document.getElementsByClassName("card");

for (var i=0; i<cards.length; i++) {
    cards[i].onclick = function() {
        let perks = this.getElementsByClassName("perks")[0];


        if (perks.style.height === "100px") {
            perks.style.height = "0px";
            perks.style.opacity = "0";

        } else {
            perks.style.height = "100px";
            perks.style.opacity = "1";
        }

        
    }
}
