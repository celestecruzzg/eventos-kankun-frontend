interface Usuario {
    id: number;
    nombre: string;
    apPaterno: string;
    apMaterno: string;
    email: string;
    contrasena: string;
    tipoUsuario: string;
    codigoVerificacion2FA: string | null;
    codigoVerificacionRegistro: string;
    verificado: boolean;
}

export default Usuario;