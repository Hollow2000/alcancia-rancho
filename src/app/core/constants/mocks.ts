import { TypeMovementEnum } from "../enums/type-movement.enum";


export class Mocks {
    static readonly Family = [
        {
            id: 'asg24w2g',
            nombres: 'Saul Emmanuel',
            apellidos: 'Moedano Miguel',
            foto: 'https://lh3.googleusercontent.com/a/ACg8ocJ7ZbUYuyq1H169amNmFLN8jsIkriChMWqZnF3lfunnqPdlNF6x=s96-c',
            admin: true
        },
        {
            id: '43grh3a',
            nombres: 'Diana Laura',
            apellidos: 'Cortes Zarate',
            admin: false
        }
    ];
    
    static readonly Savings = [
        {
            id: '5Z3RBEfu05n1EA8DBtO1',
            nombre: 'Puerta',
            cantidad: 5920,
            meta: 6200,
            activo: true
        },
        {
            id: 'df3RBEfu05n1EA8DB123',
            nombre: 'Reparacion de loseta del baño',
            cantidad: 3021,
            meta: 102300,
            activo: true
        }
    ];
    
    static readonly Movements = [
        {
            id: '122t4f5g4q3',
            cantidad: 100,
            descripcion: "Primer ahorro",
            familiar: "Saul Moedano",
            fecha: "10 de enero de 2025",
            idAhorros: "5Z3RBEfu05n1EA8DBtO1",
            tipo: TypeMovementEnum.into
        },
        {
            id: 'hq45tbrt435',
            cantidad: 2500,
            descripcion: "asmdñamsñm amsldmñamsd ñasmdñ malsd",
            familiar: "Saul Emmanuel Moedano Miguel",
            fecha: "10 de enero de 2025",
            idAhorros: "5Z3RBEfu05n1EA8DBtO1",
            tipo: TypeMovementEnum.into
        },
        {
            id: 'qa3hbe534t',
            cantidad: 2300,
            descripcion: "Retiro para el marco de la puerta",
            familiar: "Saul Moedano",
            fecha: "10 de enero de 2025",
            idAhorros: "df3RBEfu05n1EA8DB123",
            tipo: TypeMovementEnum.out
        }
    ];
}