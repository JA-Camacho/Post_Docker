export class User {
    constructor(ID_usuario = '',nombre = '', apellido = '', usuario = '', password = '', fecha_inicio_sesion = '') {
        this.ID_usuario = ID_usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.password = password;
        this.fecha_inicio_sesion = fecha_inicio_sesion;
    }
    ID_usuario : string;
    nombre: string;
    apellido: string;
    usuario: string;
    password: string;
    fecha_inicio_sesion: string;
}