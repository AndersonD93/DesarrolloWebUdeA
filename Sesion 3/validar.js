function validacampos(){
    var user= document.frmLogin.txtusuario.value;

    if (user==""){
        alert("Digite el dato del usuario")
        document.frmLogin.txtusuario.focus();
        return false;
    }
    
    if(user.length>5){
        alert("El usuario es invalido");
        document.frmLogin.txtusuario.focus();
        return false;
    }

    var pwd= document.frmLogin.txtpass.value;
    

    if (pwd==""){
        alert("Digite contraseña");
        document.frmLogin.txtpass.focus();
        return false;
    }
    else if(pwd.length>3){
        alert("La contraseña debe ser de 3 caracteres");
        document.frmLogin.txtpass.focus();
        return false;
    }
    return document.write("bienvenido al sistema");


}