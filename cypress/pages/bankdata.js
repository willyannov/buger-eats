class bankData {
    
    go(){
        cy.visit('/');
        cy.get('h1').should('have.text', 'O banco com bugs e falhas do seu jeito');
    }

    register(data){

        cy.get('.login__buttons [type=button]').should('have.text','Registrar').click();
        cy.get('[type=submit]').last().should('have.text','Cadastrar');

    
        //type information
        cy.get('input[type=email]').last().type(data.email,{force:true})
        cy.get('input[type=name]').type(data.name,{force:true})
        cy.get('input[placeholder="Informe sua senha"]').last().type(data.password,{force:true})
        cy.get('input[placeholder="Informe a confirmação da senha"]').type(data.password,{force:true})

        //assertion
        cy.get('input[type=email]').last().should('have.value', data.email)
        cy.get('input[type=name]').should('have.value', data.name)
        cy.get('input[placeholder="Informe sua senha"]').last().should('have.value', data.password)
        cy.get('input[placeholder="Informe a confirmação da senha"]').should('have.value', data.password)

        //register
        cy.get('[type=submit]').last().click({force:true})
        cy.get('#modalText').should('contain', 'foi criada com sucesso');
        cy.get('#btnCloseModal').should('have.text', 'Fechar').click()

    }

    
    signin(data){
        
        cy.get('.login__buttons [type=button]').should('have.text','Registrar').click();
        cy.get('[type=submit]').last().should('have.text','Cadastrar');

        //type information
        cy.get('input[type=email]').last().type(data.email,{force:true})
        cy.get('input[type=name]').type(data.name,{force:true})
        cy.get('input[placeholder="Informe sua senha"]').last().type(data.password,{force:true})
        cy.get('input[placeholder="Informe a confirmação da senha"]').type(data.password,{force:true})

        //assertion
        cy.get('input[type=email]').last().should('have.value', data.email)
        cy.get('input[type=name]').should('have.value', data.name)
        cy.get('input[placeholder="Informe sua senha"]').last().should('have.value', data.password)
        cy.get('input[placeholder="Informe a confirmação da senha"]').should('have.value', data.password)

        //register
        cy.get('[type=submit]').last().click({force:true})
        cy.get('#modalText').should('contain', 'foi criada com sucesso');
        cy.get('#btnCloseModal').should('have.text', 'Fechar').click()
        

        //login
        cy.get('input[type=email]').first().type(data.email,{force:true});
        cy.get('input[placeholder="Informe sua senha"]').first().type(data.password,{force:true})
        cy.get('.login__buttons [type=submit]').should('have.text','Acessar').click();

        //assertion login 

        cy.get('#btnExit').should('have.text','Sair')

   
    }

    logout(){

        cy.get('#btnExit').should('have.text','Sair').click()
    }

  
}
export default new bankData