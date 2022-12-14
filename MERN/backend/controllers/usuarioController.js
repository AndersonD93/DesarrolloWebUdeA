import Usuario from '../models/Usuario.js';
import emailRegistro from '../helper/emailRegistro.js'

const prueba=(req,res)=>{
    res.status(200).json({
        msg:"En esta ruta gestionaremos todas las peticiones correspondientes al modelo de Usuario"
    })
};

const registrar= async (req,res)=>{

    //Se definen los datos del nombre,email y password en el body del req
    const{nombre,email,password,telefono,direccion,web}=req.body;

    //validar usuario duplicado
    //metodo findONe: busca por los diferentes atributos de la dirección
    const existeUsuario= await Usuario.findOne({email});
    if(existeUsuario){
        const error=new Error("El usuario ya ha sido registrado");
        return res.status(400).json({msg:error.message});
    };
    try {
        const usuario=new Usuario(req.body);
        const usuarioGuardado= await usuario.save();
        emailRegistro({
            nombre,
            email,
            direccion,
            telefono,
            password,
            web,
            token:usuarioGuardado.token
        });
        res.json(usuarioGuardado)
    } catch (error) {
        console.error(error.message);   
    }

    //Se solicita creación de usuario con los datos anteriores y se pasa un objecto cartafo atraves del Uploader
   /*
    const user = await Usuario.create({
        nombre,
        email,
        password,
        telefono,
        direccion,
        web   
    })


    res.status(201).json({
        msg:"Registro de Usuario",
        usuario:user
    })
    */
};

const confirmar=async (req,res)=>{
    //req.params:Para leer datos de la URL, en este caso token porque asi lo definimos en la ruta

    const {token}=req.params;
    const usuarioConfirmar=await Usuario.findOne({token});

    if(!usuarioConfirmar){
        const error=new Error("Token no valido");
        return res.status(404).json({msg:error.message});
    };

    try {
        usuarioConfirmar.token=null;
        usuarioConfirmar.confirmado=true;
        await usuarioConfirmar.save();
        res.json({
            msg:"Usuario confirmado correctamente"
        })
    } catch (error) {
        console.error(error.message);
        
    }
};

export{
    prueba,
    registrar,
    confirmar
};