import { User } from "./user"

export class Companion extends User{
    constructor(
        id: number,
        nombre: string,
        sexo: string,
        edad: number,
        ciudad:  string,
        orientacion: string,
        public estatura: string,
        public peso: string,
        public complexion: string,
        public piel: string,
        public cabello: string
        ){
            super (id, nombre, sexo, edad, ciudad, orientacion)
        }
        getAccompanied():string{
            return`${this.getUser()}, estatura: ${this.estatura}, peso: ${this.peso}, complexion: ${this.complexion}, piel: ${this.piel}, cabello: ${this.cabello} }`
        }
}
