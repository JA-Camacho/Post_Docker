export class User {
    constructor(nombre = '', apellido = '', usuario = '', password = '', fecha_inicio_sesion = '') {
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.password = password;
        this.fecha_inicio_sesion = fecha_inicio_sesion;
    }
    nombre: string;
    apellido: string;
    usuario: string;
    password: string;
    fecha_inicio_sesion: string;
}