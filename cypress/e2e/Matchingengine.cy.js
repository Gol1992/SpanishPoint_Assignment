import "cypress-real-events"; // imported real events library

describe('MatchingEngine', () =>{
    beforeEach(() => {
        cy.viewport(1280, 720)      //Set Windows viewport to display full screen
    })


    it('LaunchWebPage', () =>{
        cy.visit("https://www.matchingengine.com/") //Launching Webpage

        cy.wait(5000);  //Set 5 sec Wait time for page to load
        let ite = ["Cue Sheet / AV Work", "Recording", "Bundle", "Advertisement"] //stored the List text in an array to be asserted
        cy.get(".navbar-link.is-active").realHover() //Hover over the Modules menu item 
        cy.get("body > nav:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)").click() //Click on Repertoire Management module
        cy.get(':nth-child(4) > :nth-child(3) > .vc_column-inner > :nth-child(1) > .vc_custom_heading').realHover() //Hover on Multi Territory to remove focus from module as it covers the other items
        cy.get('.vc_custom_1661355414511 > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > h2.vc_custom_heading').scrollIntoView({duration: 2000}) //Scrolling down to Additional Features
        cy.get(':nth-child(2) > a > .vc_tta-title-text').click() ///click on Products Supported

        cy.get("div[id='1661350017393-4859bb9f-5341c79e-be34'] ul > li > span").each(($el, index, $list)=>{   //get the list items
                let t = $el.text()    //extract text from list and store it.
                t = t.trim();          //trim the whitespace from text, Advertisement contains a &nbsp character.
                expect(t).to.eq(ite[index])  // Assertion

        })
        
    })
})