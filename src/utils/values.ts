import { States, Years } from "./enums"

export enum Sections {
    saude = "saude",
    assistenciaSocial = "assistenciaSocial",
    previdenciaSocial = "previdenciaSocial",
}

export type ValuesType = {
    state: States
    year: Years
    section: Sections
    expansesCommitted: number
    expensePaied: number
}

export const values: ValuesType[] = [{
    state: States.AC,
    year: Years.Dezoito,
    section: Sections.saude,
    expansesCommitted: 0,
    expensePaied: 0,
},]