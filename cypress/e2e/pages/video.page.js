class video{
    async videointeract(){
        cy.get(':nth-child(2) > #contents > :nth-child(2) > #content > .yt-simple-endpoint.ytd-playlist-renderer > h3.style-scope > #video-title').click(); 
        cy.wait(4000);
        if(cy.get('button.ytp-skip-ad-button').should('be.visible'))
        {
           cy.get('button.ytp-skip-ad-button').should('be.visible').click();     }        
        cy.get('.ytp-settings-button').click();
        cy.contains('Playback speed').click();
        cy.contains('div.ytp-menuitem-label', '1.25').click();
        cy.get('.ytp-settings-button').click(); 
    }
}
module.exports=new video();