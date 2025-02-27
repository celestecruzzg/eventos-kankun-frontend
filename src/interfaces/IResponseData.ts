import Usuario from './IUsuario';

interface IResponseData {
    success: boolean;
    message: string;
    token: string;
    usuario: Usuario;
  }

export default IResponseData;