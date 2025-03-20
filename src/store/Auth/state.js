export default function state(){
    return{
        errValidation:'',
        sendingRequest: false,
        firstName: '',
        lastName: '',
        email: '',
        birthDay: '',
        password: '',
        gender: '',
        id: null,
        imgUrl:'',
        token: '',
        logged: false,
        mySalles:[],
    };
};

// if try to sign up 
// take the local values 
// when log in 
// take the server values