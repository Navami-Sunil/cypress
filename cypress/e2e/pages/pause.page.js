class pause{
    async videopause(){
        cy.wait(4000);
   cy.get('.ytp-play-button').click();     
    }
}
module.exports=new pause();