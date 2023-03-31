import signup from '../pages/bankdata'
import signupFactory from '../factories/signupdata'


describe('Signup', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d

    //     })

    // });


    // before(() => {
    //     cy.log("Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes")


    // });

    // beforeEach(() => {
    //     cy.log("Tudo aqui é executado sempre ANTES de CADA caso de teste")

    // });

    // afterEach(() => {
    //     cy.log("Tudo aqui é executado sempre DEPOIS de CADA caso de teste")
    // });

    // after(() => {
    //     cy.log("Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes")


    // });

    it('Used Should Be Deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage);

    });

    it('Incorrect Document', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = '000000141aa'

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido')


    });
    it('Incorrect Email', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'willyan.com.com'

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    });

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            signup.go()
            signup.submit()

        });

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signup.alertMessageShouldBe(msg.output)

            });
        })

    });

});
