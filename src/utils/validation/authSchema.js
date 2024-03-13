import {object,string,ref} from "yup"

export const registerSchema = object().shape({
    confirmPassword:string().required("confirmacion requerida").oneOf([ref("password"),null],"La contraseña no coincide"),
    password:string().required("La contraseña es requerida").min(6,"Minimo 6 caracteres"),
    email:string().required("Email requerido").email("No es un mail valido")

})

export const loginSchema = object().shape({
    password:string().required("La contraseña es requerida").min(6,"Minimo 6 caracteres"),
    email:string().required("El email es requerido").email("No es un mail valido")

})