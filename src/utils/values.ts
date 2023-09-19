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
    expensePaid: number
}

export const values: ValuesType[] = [
    {
    state: States.DF,
    year: Years.Dezoito,
    data: [{
        section: Sections.saude,
        expanseCommitted: 3564899654.0,
        expensePaid: 3003884685.18,
        },{
        section: Sections.assistenciaSocial, 
        expanseCommitted: 414745097.23,
        expensePaid: 384307464.62
        },{
        section: Sections.previdenciaSocial,
        expanseCommitted: 4241955213.9,
        expensePaid: 4116156484.42
        },],
    },
    {
    state: States.DF,
    year: Years.Dezenove,
    data: [{
        section: Sections.saude,
        expanseCommitted: 3178959826.02, 
        expensePaid: 2823841453.82
        },{
        section: Sections.assistenciaSocial,
        expanseCommitted: 400312891.05, 
        expensePaid: 370865485.61
        },{
        section: Sections.previdenciaSocial,
        expanseCommitted: 4493074909.38, 
        expensePaid: 4228263886.81
        },],
    },
    {
    state: States.DF,
    year: Years.Vinte,
    data: [{
        section: Sections.saude, 
        expanseCommitted: 3750800313.0, 
        expensePaid: 3383425981.0 
        },{
        section: Sections.assistenciaSocial,
        expanseCommitted: 501462512.6, 
        expensePaid: 473779579.0 
        },{
        section: Sections.previdenciaSocial, 
        expanseCommitted: 4070853280.0, 
        expensePaid: 3815318733.0 
        },],
    },
    {
    state: States.DF,
    year: Years.VinteUm,
    data: [{
        section: Sections.saude, 
        expanseCommitted: 4647248361.0, 
        expensePaid: 3913336377.0 
        },{
        section: Sections.assistenciaSocial, 
        expanseCommitted: 603525239.9, 
        expensePaid: 564944128.1
        },{
        section: Sections.previdenciaSocial, 
        expanseCommitted: 4475908708.0, 
        expensePaid: 4213035850.0
        },],
    },
    {
    state: States.AC,
    year: Years.Dezoito,
    data: [{
        section: Sections.saude,
        expanseCommitted: 893873797.62,
        expensePaid: 855308875.99,
        },{
        section: Sections.assistenciaSocial,
        expanseCommitted: 37128777.22,
        expensePaid: 37058134.84
        },{
        section: Sections.previdenciaSocial,
        expanseCommitted: 558099447.26,
        expensePaid: 558064308.96
        },],
    },
    {
        state: States.AC,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 880656931.15,
            expensePaid: 837008823.86,
            },{
            section: Sections.assistenciaSocial,
            expanseCommitted: 37528779.66,
            expensePaid: 37479958.76
            },{
            section: Sections.previdenciaSocial,
            expanseCommitted: 677960148.33,
            expensePaid: 670620702.12
            },],
    },
    {
        state: States.AC,
        year: Years.Vinte,
        data: [{            
            section: Sections.saude,
            expanseCommitted: 1136399439.0,
            expensePaid: 1066898662.0,
            },{
            section: Sections.assistenciaSocial,
            expanseCommitted: 35351236.01,
            expensePaid: 32686508.78
            },{
            section: Sections.previdenciaSocial,
            expanseCommitted: 693503088.6,
            expensePaid: 693500782.6
            },],
    },
    {
        state: States.AC,
        year: Years.VinteUm,
        data: [{            
            section: Sections.saude,
            expanseCommitted: 1261220503.0,
            expensePaid: 1173259200.0,
            },{
            section: Sections.assistenciaSocial,
            expanseCommitted: 41452446.66,
            expensePaid: 37587834.36
            },{
            section: Sections.previdenciaSocial,
            expanseCommitted: 740191156.9,
            expensePaid: 738174507.0
            },],
    },   
    {
        state: States.AL,
        year: Years.Dezoito,
        data: [{            
            section: Sections.saude,
            expanseCommitted: 1280282995.3
            ,
            expensePaid: 1211624959.92
            ,
            },{
            section: Sections.assistenciaSocial,
            expanseCommitted: 65458695.82
            ,
            expensePaid: 64517407.71
            
            },{
            section: Sections.previdenciaSocial,
            expanseCommitted: 1951777416.56
            ,
            expensePaid: 1862203671.59
            },],
    },
    {
        state: States.AL,
        year: Years.Dezenove,
        data: [{            
            section: Sections.saude,
            expanseCommitted: 1318051057.35
            ,
            expensePaid: 1219323060.96
            ,
            },{
            section: Sections.assistenciaSocial,
            expanseCommitted: 16240615.45
            ,
            expensePaid: 14867084.68
            
            },{
            section: Sections.previdenciaSocial,
            expanseCommitted: 1564453262.85
            ,
            expensePaid: 1454036077.34
            },],
    },
    {
        state: States.AL,
        year: Years.Vinte,
        data: [{            
            section: Sections.saude,
            expanseCommitted: 1546204630.0
            ,
            expensePaid:1484615479.0
            ,
            },{
            section: Sections.assistenciaSocial,
            expanseCommitted: 33731794.99
            ,
            expensePaid: 30805740.69
           
            },{
            section: Sections.previdenciaSocial,
            expanseCommitted:  2121851896.0
            ,
            expensePaid: 2068136629.0
            },],
    },
    {
        state: States.AL,
        year: Years.VinteUm,
        data: [{            
            section: Sections.saude,
            expanseCommitted: 2266487097.0
            ,
            expensePaid: 2084509739.0
            ,
            },{
            section: Sections.assistenciaSocial,
            expanseCommitted: 129812484.1
            ,
            expensePaid: 127022207.3
            
            },{
            section: Sections.previdenciaSocial,
            expanseCommitted: 2456637755.0
            ,
            expensePaid: 2385214684.0
            },],
    }, 
    {
        state: States.AP,
        year: Years.Dezoito,
        data: [{            
            section: Sections.saude,
            expanseCommitted: 743021382.46,
            expensePaid: 451941071.46,
            },{
            section: Sections.assistenciaSocial,
            expanseCommitted:  82656170.,
            expensePaid: 57479751.05            
            },{
            section: Sections.previdenciaSocial,
            expanseCommitted: 137762817.26,
            expensePaid: 136841605.38
            },],
    },
    {
        state: States.AP,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 785384326.79, 
            expensePaid: 556980429.88
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 82221828.79, 
            expensePaid: 54754567.05
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 267699780.68,
            expensePaid: 252139166.09
            },],
    },
    {
        state: States.AP,
        year: Years.Vinte,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 1165218424.00, 
            expensePaid: 788149005.20
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 115841105.50, 
            expensePaid: 72782248.33
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 226796060.40, 
            expensePaid: 210955920.20
            },],
    },
    {
        state: States.AP,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 1395767985.00, 
            expensePaid: 1126403768.00
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 139750169.10, 
            expensePaid: 117911212.60
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 288354045.00,
            expensePaid: 271695593.60},],
    },
    {
        state: States.AM,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 2720309985.79, 
            expensePaid: 2537674356.56
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 60527897.82, 
            expensePaid: 56268222.80
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 1679236143.96, 
            expensePaid: 1674278365.80
            },],
    },
    {
        state: States.AM,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 2900569305.08, 
            expensePaid: 2670389739.41
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 73901381.46, 
            expensePaid: 67274936.87
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 2145498873.16, 
            expensePaid: 1986717607.11
            },],
    },
    {
        state: States.AM,
        year: Years.Vinte,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 3702507209.00, 
            expensePaid: 3369328430.00
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 102105258.60, 
            expensePaid: 89587090.07
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 2366730102.00, 
            expensePaid: 2356066011.00},],
    },
    {
        state: States.AM,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 4148258831.00, 
            expensePaid: 3864853254.00
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 429250064.60, 
            expensePaid: 356161823.60
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 2481743538.00, 
            expensePaid: 2475237092.00
            },],
    },
    {
        state: States.BA,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 7063869160.48, 
            expensePaid: 6806261481.71
        },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 260376993.81, 
            expensePaid: 255831634.89
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 7477954337.16, 
            expensePaid: 7404903062.47
            },],
    },
    {
        state: States.BA,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 7457461437.88, 
            expensePaid: 7198073534.33
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 287510730.77, 
            expensePaid: 280523146.20
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 7977916617.79, 
            expensePaid: 7908568342.43
            },],
    },
    {
        state: States.BA,
        year: Years.Vinte,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 8358687975.00, 
            expensePaid: 7998146140.00
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 268155643.90, 
            expensePaid: 264436162.20
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 8693249369.00, 
            expensePaid: 8599768388.00
            },],
    },
    {
        state: States.BA,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 9292223986.00, 
            expensePaid: 8859625699.00
            },{
            section: Sections.assistenciaSocial,
            expanseCommitted: 277908147.80, 
            expensePaid: 270023788.80
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 9235220278.00, 
            expensePaid: 9133958035.00
            },],
    },
    {
        state: States.CE,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 3497990866.42, 
            expensePaid: 3303692728.18
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 283086000.83, 
            expensePaid: 271502695.36
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 3367865790.11, 
            expensePaid: 3367865790.11
            },],
    },
    {
        state: States.CE,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 3612886485.31, 
            expensePaid: 3372639307.90
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 303650755.09, 
            expensePaid: 295711533.13
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 3560603915.81, 
            expensePaid: 3560603915.81
            },],
    },
    {
        state: States.CE,
        year: Years.Vinte,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 4534952032.00, 
            expensePaid: 4277986287.00
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 316770830.50, expensePaid: 307238830.40
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 3721007252.00, 
            expensePaid: 3720752253.00
            },],
    },
    {
        state: States.CE,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude, 
            expanseCommitted: 5091484041.00, 
            expensePaid: 4788247748.00
            },{
            section: Sections.assistenciaSocial, 
            expanseCommitted: 518463412.70, 
            expensePaid: 491337531.40
            },{
            section: Sections.previdenciaSocial, 
            expanseCommitted: 3817693080.00, 
            expensePaid: 3817125510.00
            },],
    },
    {
        state: States.ES,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2606440239.25, 
            expensePaid: 2415468330.92 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 117676712.47, 
            expensePaid: 112728001.82 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2795794341.60, 
            expensePaid: 2791513038.34 
           },],
    },
    {
        state: States.ES,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2597816024.54, 
            expensePaid: 2411994894.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 97648723.47, 
            expensePaid: 91536321.27 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2977966537.67, 
            expensePaid: 2972943059.41 
           },],
    },
    {
        state: States.ES,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 3184811969.00, 
            expensePaid: 2983778646.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 128935731.90, 
            expensePaid: 122217287.00 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2622644423.00, 
            expensePaid: 2612200714.00 
           },],
    },
    {
        state: States.ES,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 3751140236.00, 
            expensePaid: 3519778116.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 241794078.40, 
            expensePaid: 240576886.70 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3373617067.00, 
            expensePaid: 3367527197.00 
           },],
    },

]