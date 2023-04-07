import bankdata from "../pages/bankdata";
import signupdata from "../factories/signupdata";

describe('Bugbank user', () => {


    it('access homepage', () => {
        bankdata.go()
    });

    it.only('register account', () => {
        var user= signupdata.user()

        bankdata.go()
        bankdata.register(user)
        bankdata.registerbtn()


    });


    it('signin account and logout', () => {
        var user = signupdata.user()

        bankdata.go()
        bankdata.signin(user)
        bankdata.logoutbtn()
    });

   

    
});