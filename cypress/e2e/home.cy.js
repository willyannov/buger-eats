import bankdata from "../pages/bankdata";
import signupdata from "../factories/signupdata";

describe('Bugbank user', () => {


    it('access homepage', () => {
        bankdata.go()
    });

    it('register account', () => {
        var user= signupdata.user()

        bankdata.go()
        bankdata.register(user)


    });


    it('signin account and logout', () => {
        var user = signupdata.user()

        bankdata.go()
        bankdata.signin(user)
        bankdata.logout()
    });


    
});