import nomdemailer from 'nodemailer';

const emailRegistro=async(datos)=>{
    const transport=nomdemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT,
        auth:{
            //type:"Oauth2"
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const {email,nombre,token}=datos;
    //Enviar el email

    const info=await transport.sendMail({
        from:"AEC- Administrador de Ecommerce articulos",
        to:email,
        subject:'Comprueba tu cuenta AEC',
        text:'Comprueba tu cuenta AEC',
        html: `<p>Hola: ${nombre}, comprueba tu cuenta en AEC.</p>
                <p> Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a></p>
                <p> Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>`


    });
};
export default emailRegistro;