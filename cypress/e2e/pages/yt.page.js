class yt{
    async ytsearch(){
        cy.visit('https://www.youtube.com/');
   cy.get('#search-input > #search').type('cypress tutorial{enter}');
    }
}
module.exports=new yt();