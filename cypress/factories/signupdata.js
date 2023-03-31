var faker = require('faker')


export default {

    user: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            email: 'abc123@gmail.com' ,
            password: "12345678@abc"

            
        }

        return data
    }

    
}