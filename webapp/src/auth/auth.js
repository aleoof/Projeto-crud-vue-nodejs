

export const  authGuard = (response) => {
     if(localStorage.getItem('user') === response.user && localStorage.getItem('password') === response.password){
         return true
     }else{
        let err = 'Usuário ou senha incorreta' 
         return err
     }


}