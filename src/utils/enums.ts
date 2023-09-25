export enum States {
    AC = 'Acre',
    AM = 'Amazonas',
    AP = 'Amapá',
    PA = 'Pará',
    RO = 'Rondônia',
    RR = 'Roraima',
    TO = 'Tocantins',
    // estados da região Norte

    AL = 'Alagoas',
    BA = 'Bahia',
    CE = 'Ceará',
    MA = 'Maranhão',
    PB = 'Paraíba',
    PE = 'Pernambuco',
    PI = 'Piauí',
    RN = 'Rio Grande do Norte',
    SE = 'Sergipe',
    // estados da região Nordeste

    DF = 'Distrito Federal',
    GO = 'Goiás',
    MT = 'Mato Grosso',
    MS = 'Mato Grosso do Sul',
    // estados da região Centro-Oeste

    ES = 'Espírito Santo',
    MG = 'Minas Gerais',
    RJ = 'Rio de Janeiro',
    SP = 'São Paulo',
    // estados da região Sudeste

    PR = 'Paraná',
    RS = 'Rio Grande do Sul',
    SC = 'Santa Catarina',
    // estados da região Sul
}


const Norte: States[] = [States.AC, States.AM, States.AP, States.PA, States.RO, States.RR, States.TO];
const Nordeste: States[] = [States.AL, States.BA, States.CE, States.MA, States.PB, States.PE, States.PI, States.RN, States.SE];
const CentroOeste: States[] = [States.DF, States.GO, States.MT, States.MS];
const Sudeste: States[] = [States.ES, States.MG, States.RJ, States.SP];
const Sul: States[] = [States.PR, States.RS, States.SC];

export const Regiao  = {
    NE : Object.values(Nordeste) as string[],
    NO : Object.values(Norte) as string[],
    CO : Object.values(CentroOeste) as string[],
    SD : Object.values(Sudeste) as string[],
    SU : Object.values(Sul) as string[]
}

export const Nacional: any = {
    AllStates : Object.values(States) as string[]
}

export enum Years {
    Dezoito = "2018",
    Dezenove = "2019",
    Vinte = "2020",
    VinteUm = "2021"
}

export const TodoAnos: any = {
    AllYears : Object.values(Years) as string[]
}
