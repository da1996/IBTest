if (!customElements.get('accordion-personal')) {
  customElements.define('accordion-personal', class AccordionPersonal extends HTMLElement {
    constructor() {
      super();
      var accordionDetails = this.querySelectorAll('detailsMy');
      accordionDetails.forEach(function(itme) {
        var selfItme = itme;
        var selfSum = itme.querySelector('summaryMy');
        selfSum.addEventListener('click', function (event) {  
            event.preventDefault();
            selfItme.toggleAttribute("open");
            var x = selfItme.querySelector('div');
            if (x.style.display != "block") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
        });
      });
    }
    
    });
}
