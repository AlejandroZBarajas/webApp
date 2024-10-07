export class User {

    constructor(
        public nombre: string,
        public sexo: string,
        public edad: number,
        public ciudad:  string,
        public orientacion: string
    ){}
    /* 
    getUser(): string {
        return ` nombre: ${this.nombre}, sexo: ${this.sexo} edad:${this.edad} ciudad: ${this.ciudad} orientacion: ${this.orientacion}`;
        return ''
    } 
    */
}
