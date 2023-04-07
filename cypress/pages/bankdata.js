const el = require('./elements').ELEMENTS

class bankData {
    
    go(){
        cy.visit('/');
        cy.get('h1').should('have.text', 'O banco com bugs e falhas do seu jeito');
    }

    register(data){

        cy.get(el.registerbtn).should('have.text','Registrar').click();
        cy.get(el.submitbtn).last().should('have.text','Cadastrar');

    
        //type information
        cy.get(el.email).last().type(data.email,{force:true})
        cy.get(el.name).type(data.name,{force:true})
        cy.get(el.password).last().type(data.password,{force:true})
        cy.get(el.confirmpassword).type(data.password,{force:true})

        //assertion
        cy.get(el.email).last().should('have.value', data.email)
        cy.get(el.name).should('have.value', data.name)
        cy.get(el.password).last().should('have.value', data.password)
        cy.get(el.confirmpassword).should('have.value', data.password)


    }

    
    signin(data){
        
        cy.get(el.registerbtn).should('have.text','Registrar').click();
        cy.get(el.submitbtn).last().should('have.text','Cadastrar');

        //type information
        cy.get(el.email).last().type(data.email,{force:true})
        cy.get(el.name).type(data.name,{force:true})
        cy.get(el.password).last().type(data.password,{force:true})
        cy.get(el.confirmpassword).type(data.password,{force:true})

        //assertion
        cy.get(el.email).last().should('have.value', data.email)
        cy.get(el.name).should('have.value', data.name)
        cy.get(el.password).last().should('have.value', data.password)
        cy.get(el.confirmpassword).should('have.value', data.password)

        //register
        cy.get(el.submitbtn).last().click({force:true})
        cy.get('#modalText').should('contain', 'foi criada com sucesso');
        cy.get(el.registersuccessbtn).should('have.text', 'Fechar').click()
        

        //login
        cy.get(el.email).first().type(data.email,{force:true});
        cy.get(el.password).first().type(data.password,{force:true})
        cy.get(el.loginbtn).should('have.text','Acessar').click();

       

   
    }

    registerbtn(){

        cy.get(el.registerbtn).last().click({force:true})
        

    }

    logoutbtn(){

        cy.get(el.logoutbtn).should('have.text','Sair').click()
    }



  
}
export default new bankData