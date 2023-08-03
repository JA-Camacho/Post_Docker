export class Post {
    constructor(ID_usuario = '', autor= '', titulo='',contenido='',fecha_post='', fecha_edicion=''){
        this.ID_usuario = ID_usuario;
        this.autor = autor;
        this.titulo = titulo;
        this.contenido = contenido;
        this.fecha_post = fecha_post;
        this.fecha_edicion = fecha_edicion;
    }
    ID_usuario: string;
    autor : string;
    titulo: string;
    contenido : string;
    fecha_post : string;
    fecha_edicion : string;
}   