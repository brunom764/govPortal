import { States, Years } from "./enums"

export enum Sections {
    saude = "saude",
    assistenciaSocial = "assistenciaSocial",
    previdenciaSocial = "previdenciaSocial",
}

export type ValuesType = {
    state: States | string
    year: Years | string
    data: dataValues[]
}

export type dataValues = {
    section: Sections
    expanseCommitted: number
    expensePaied: number
}

export const values: ValuesType[] = [{
    state: States.AC,
    year: Years.Dezoito,
    data: [{
        section: Sections.saude,
        expanseCommitted: 10,
        expensePaied: 0,
        },{
        section: Sections.assistenciaSocial,
        expanseCommitted: 20,
        expensePaied: 0
    },{
        section: Sections.previdenciaSocial,
        expanseCommitted: 30,
        expensePaied: 0}]
    },]