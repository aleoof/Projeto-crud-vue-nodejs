

export const  authGuard = (response) => {
    /* eslint-disable no-console */
    console.log(localStorage.getItem('user'),localStorage.getItem('password'));
     if(localStorage.getItem('user') === response.user && localStorage.getItem('password') === response.password){
         return true
     }else{
        let err = 'Usuário ou senha incorreta' 
         return err
     }


}