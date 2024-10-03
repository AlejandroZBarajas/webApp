export class User {

    constructor(
        public id: number,
        public nombre: string,
        public sexo: string,
        public edad: number,
        public ciudad:  string,
        public orientacion: string
    ){}
    getUser(): string {
        return `id: ${this.id}, nombre: ${this.nombre}, sexo: ${this.sexo} edad:${this.edad} ciudad: ${this.ciudad} orientacion: ${this.orientacion}`;
      }
}
