var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            adress: {
                postalcode: '18552100',
                street: 'Avenida do Trabalhador',
                number: '50',
                details: 'Chacara',
                district: 'Centro Empresarial Castelo Branco',
                city_uf: 'Boituva/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg.jpg'
        }

        return data
    }
}