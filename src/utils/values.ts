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
    {
        state: States.GO,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 3936633952.69, 
            expensePaid: 3114124542.31 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 207976085.04, 
            expensePaid: 166394790.67 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2741154666.68, 
            expensePaid: 2583047391.60 
           },],
    },
    {
        state: States.GO,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 4372060097.74, 
            expensePaid: 4289166023.80 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 216167696.73, 
            expensePaid: 158112252.30 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3319989161.14, 
            expensePaid: 3319989092.84 
           },],
    },
    {
        state: States.GO,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 4511375955.00, 
            expensePaid: 4421968857.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 204855902.50, 
            expensePaid: 169668397.70 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 5597981676.00, 
            expensePaid: 5597512330.00 
           },],
    },
    {
        state: States.GO,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 5815528328.00, 
            expensePaid: 5342341095.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 356575307.60, 
            expensePaid: 335129903.50 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 5915101801.00, 
            expensePaid: 5914245720.00 
           },],
    },
    {
        state: States.MA,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2271616149.04, 
            expensePaid: 2034950592.06 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 324201569.36, 
            expensePaid: 275809653.31 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2710890690.59, 
            expensePaid: 2633736984.79 
           },],
    },
    {
        state: States.MA,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2416403820.21, 
            expensePaid: 2137074122.81 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 301673344.53, 
            expensePaid: 238383852.25 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2924127303.36, 
            expensePaid: 2772340696.92 
           },],
    },
    {
        state: States.MA,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 3056557376.00, 
            expensePaid: 2771597365.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 413446086.20, 
            expensePaid: 330795174.40 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2932860182.00, 
            expensePaid: 2899107490.00 
           },],
    },
    {
        state: States.MA,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 3520989393.00, 
            expensePaid: 3203978347.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 515784723.30, 
            expensePaid: 422238260.50 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2872048732.00, 
            expensePaid: 2855469016.00 
           },],
    },
    {
        state: States.MG,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 7439918438.84, 
            expensePaid: 4390296582.68 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 106046614.14, 
            expensePaid: 45239235.30 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 16585384620.24, 
            expensePaid: 14537657767.93 
           },],
    },
    {
        state: States.MG,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 10104635967.77, 
            expensePaid: 5220217780.78 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 138329449.05, 
            expensePaid: 97298294.88 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 17778679316.67, 
            expensePaid: 15512684000.30 
           },],
    },
    {
        state: States.MG,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 9731140968.00, 
            expensePaid: 7065947407.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 525692854.90, 
            expensePaid: 517077326.70 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 18478658894.00, 
            expensePaid: 16509477807.00 
           },],
    },
    {
        state: States.MG,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 11749023842.00, 
            expensePaid: 10227739605.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 846437523.60, 
            expensePaid: 770833836.50 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 19133817551.00, 
            expensePaid: 17516827337.00 
           },],
    },
    {
        state: States.MS,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1265187653.64, 
            expensePaid: 1063796423.04 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 183959277.78, 
            expensePaid: 173928918.86 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3086382401.82, 
            expensePaid: 2827741231.32 
           },],
    },
    {
        state: States.MS,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1324059064.45, 
            expensePaid: 1142772532.78 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 162782321.44, 
            expensePaid: 161736257.14 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3252050184.36, 
            expensePaid: 3251844222.93 
           },],
    },
    {
        state: States.MS,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1585148961.00, 
            expensePaid: 1419591869.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 177383864.80, 
            expensePaid: 174307663.00 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3600947593.00, 
            expensePaid: 3600947593.00 
           },],
    },
    {
        state: States.MS,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1862942032.00, 
            expensePaid: 1646217354.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 174754317.40, 
            expensePaid: 172186536.00 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3999906189.00, 
            expensePaid: 3980263416.00 
           },],
    },
    {
        state: States.MT,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1823144611.55, 
            expensePaid: 1398047699.14 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 19253801.21, 
            expensePaid: 8853231.16 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3781807532.04, 
            expensePaid: 3346506285.74 
           },],
    },
    {
        state: States.MT,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1796434951.53, 
            expensePaid: 1608212621.97 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 69082188.05, 
            expensePaid: 59028217.23 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 4001479077.16, 
            expensePaid: 3401407321.58 
           },],
    },
    {
        state: States.MT,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2011172372.00, 
            expensePaid: 1762364156.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 95470506.33, 
            expensePaid: 91478950.94 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 4164654538.00, 
            expensePaid: 4079598374.00 
           },],
    },
    {
        state: States.MT,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2932687448.00, 
            expensePaid: 2562361032.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 222915970.40, 
            expensePaid: 200096665.50 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 4337117298.00, 
            expensePaid: 4237911344.00 
           },],
    },
    {
        state: States.PA,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 3079310610.84, 
            expensePaid: 3068600576.63 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 994541815.20, 
            expensePaid: 984099597.25 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3495265659.22, 
            expensePaid: 3495129435.33 
           },],
    },
    {
        state: States.PA,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2827302689.39, 
            expensePaid: 2806401944.47 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 1004061462.22, 
            expensePaid: 990029347.27 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3889688516.29, 
            expensePaid: 3887941454.20 
           },],
    },
    {
        state: States.PA,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 3835395262.00, 
            expensePaid: 3753919189.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 1206733197.00, 
            expensePaid: 1200717762.00 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 4257600641.00, 
            expensePaid: 4253899253.00 
           },],
    },
    {
        state: States.PA,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 4327292943.00, 
            expensePaid: 4273009430.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 1569823506.00, 
            expensePaid: 1531518803.00 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 4654465426.00, 
            expensePaid: 4644318342.00 
           },],
    },
    {
        state: States.PB,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1432394962.55, 
            expensePaid: 1285318128.89 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 169403935.87, 
            expensePaid: 165795106.82 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 1577442351.76, 
            expensePaid: 1577329130.63 
           },],
    },
    {
        state: States.PB,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1342152427.68, 
            expensePaid: 1288335581.10 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 201798048.99, 
            expensePaid: 187837001.85 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 1653750747.64, 
            expensePaid: 1653635197.71 
           },],
    },
    {
        state: States.PB,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1592522828.00, 
            expensePaid: 1517734017.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 222544380.80, 
            expensePaid: 204702446.30 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 1791228350.00, 
            expensePaid: 1791039572.00 
           },],
    },
    {
        state: States.PB,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2024343115.00, 
            expensePaid: 1869381256.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 283386553.50, 
            expensePaid: 261886521.70 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 1859919348.00, 
            expensePaid: 1859648956.00 
           },],
    },
    {
        state: States.PE,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 4974034341.91, 
            expensePaid: 4733568038.94 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 40924675.42, 
            expensePaid: 35028020.86 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 5809080483.82, 
            expensePaid: 5807992564.38 
           },],
    },
    {
        state: States.PE,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 5315001892.64, 
            expensePaid: 5234498076.34 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 35646324.65, 
            expensePaid: 33501262.99 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 6333172647.89, 
            expensePaid: 6332131179.03 
           },],
    },
    {
        state: States.PE,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 6585362678.00, 
            expensePaid: 6337087922.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 213568664.50, 
            expensePaid: 207829002.80 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 6662962353.00, 
            expensePaid: 6662490864.00 
           },],
    },
    {
        state: States.PE,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 7492995052.93, 
            expensePaid: 7153522149.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 209836821.00, 
            expensePaid: 208540356.70 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 6844539243.00, 
            expensePaid: 6843967074.00 
           },],
    },
    {
        state: States.PI,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1572270930.63, 
            expensePaid: 1427175580.23 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 60135616.20, 
            expensePaid: 48172474.14 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 1755321732.43, 
            expensePaid: 1525608913.06 
           },],
    },
    {
        state: States.PI,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1703308836.60, 
            expensePaid: 1498921040.39 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 63548115.37, 
            expensePaid: 44673638.10 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2920559964.52, 
            expensePaid: 2640546809.67 
           },],
    },
    {
        state: States.PI,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2231640555.00, 
            expensePaid: 1891808411.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 73625156.25, 
            expensePaid: 66779328.41 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2488224813.00, 
            expensePaid: 2199488191.00 
           },],
    },
    {
        state: States.PI,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2400955638.00, 
            expensePaid: 2251891799.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 76896523.32, 
            expensePaid: 67717340.17 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2391707701.00, 
            expensePaid: 2234864054.00 
           },],
    },
    {
        state: States.PR,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 701053977.99, 
            expensePaid: 537760593.86 
            },
            {
            section: Sections.assistenciaSocial,
            expanseCommitted: 37454006.51, 
            expensePaid: 36509466.61 
            },
            {
            section: Sections.previdenciaSocial,
            expanseCommitted: 51244599.82, 
            expensePaid: 48616182.08 
            }
        ]
    },
    {
        state: States.PR,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 752349323.00, 
            expensePaid: 664682465.20 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 2040391.86, 
            expensePaid: 1078712.42 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 66665411.11, 
            expensePaid: 64410635.85 
           }
        ]
    },
    {
        state: States.PR,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 854119269.70, 
            expensePaid: 717114964.50 
            },
            {
            section: Sections.assistenciaSocial,
            expanseCommitted: 28436150.43, 
            expensePaid: 10048375.31 
            },
            {
            section: Sections.previdenciaSocial,
            expanseCommitted: 99597572.70, 
            expensePaid: 88407796.20 
            }
        ]
    },
    {
        state: States.PR,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1208193721.00, 
            expensePaid: 1065945256.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 79208988.22, 
            expensePaid: 74571555.75 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 156336882.80, 
            expensePaid: 123911427.20 
           }
        ]
    },
    {
        state: States.RJ,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 5859503380.00, 
            expensePaid: 3300882386.34 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 239513520.55, 
            expensePaid: 207979201.17 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 21580168586.22, 
            expensePaid: 20596450376.01 
           }
        ]
    },
    {
        state: States.RJ,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 5529947790.60, 
            expensePaid: 4866848552.10 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 179439462.21, 
            expensePaid: 159522739.20 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 21506489689.61, 
            expensePaid: 20445729102.15 
           }
        ]
    },
    {
        state: States.RJ,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 6532498634.00, 
            expensePaid: 6182337367.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 202096580.00, 
            expensePaid: 194591587.90 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 23274360998.00, 
            expensePaid: 22134235214.00 
           }
        ]
    },
    {
        state: States.RJ,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 8271461533.00, 
            expensePaid: 7573511301.00 
            },
            {
            section: Sections.assistenciaSocial,
            expanseCommitted: 857511869.30, 
            expensePaid: 845915798.60 
            },
            {
            section: Sections.previdenciaSocial,
            expanseCommitted: 24151649139.00, 
            expensePaid: 24045339274.00 
            }
        ]
    },
    {
        state: States.RO,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1080541636.03, 
            expensePaid: 990035268.87 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 32776516.20, 
            expensePaid: 26946259.27 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 655312199.33, 
            expensePaid: 654038098.89 
           }
        ]
    },
    {
        state: States.RO,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1114959955.91, 
            expensePaid: 978521967.04 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 20185957.96, 
            expensePaid: 14397510.83 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 781383562.84, 
            expensePaid: 781108840.87 
           }
        ]
    },
    {
        state: States.RO,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1410203085.00, 
            expensePaid: 1153960949.00 
            },
            {
            section: Sections.assistenciaSocial,
            expanseCommitted: 72541440.26, 
            expensePaid: 61128814.18 
            },
            {
            section: Sections.previdenciaSocial,
            expanseCommitted: 714864546.60, 
            expensePaid: 714650988.70 
            }
        ]
    },
    {
        state: States.RO,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1730874744.00, 
            expensePaid: 1287868180.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 65656550.67, 
            expensePaid: 57286202.47 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 772343239.00, 
            expensePaid: 771763899.70 
           }
        ]
    },
    {
        state: States.RR,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 701053977.99, 
            expensePaid: 537760593.86 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 37454006.51, 
            expensePaid: 36509466.61 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 51244599.82, 
            expensePaid: 48616182.08 
           }
        ]
    },
    {
        state: States.RR,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 752349323.00, 
            expensePaid: 664682465.20 
            },
            {
            section: Sections.assistenciaSocial,
            expanseCommitted: 2040391.86, 
            expensePaid: 1078712.42 
            },
            {
            section: Sections.previdenciaSocial,
            expanseCommitted: 66665411.11, 
            expensePaid: 64410635.85 
            }
        ]
    },
    {
        state: States.RR,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 854119269.70, 
            expensePaid: 717114964.50 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 28436150.43, 
            expensePaid: 10048375.31 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 99597572.70, 
            expensePaid: 88407796.20 
           }
        ]
    },
    {
        state: States.RR,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1208193721.00, 
            expensePaid: 1065945256.00 
            },
            {
            section: Sections.assistenciaSocial,
            expanseCommitted: 79208988.22, 
            expensePaid: 74571555.75 
            },
            {
            section: Sections.previdenciaSocial,
            expanseCommitted: 156336882.80, 
            expensePaid: 123911427.20 
            }
        ]
    },
    {
        state: States.RN,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1569741459.58, 
            expensePaid: 1302611282.10 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 156147957.71, 
            expensePaid: 145026294.36 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3092151864.17, 
            expensePaid: 2903478341.33 
           }
        ]
    },
    {
        state: States.RN,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1398041951.47, 
            expensePaid: 1175247004.07 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 180734182.39, 
            expensePaid: 167366110.71 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 4070963294.41, 
            expensePaid: 3280611321.52 
           }
        ]
    },
    {
        state: States.RN,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1784563562.00, 
            expensePaid: 1490837956.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 140525664.90, 
            expensePaid: 117683158.60 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 3928433908.00, 
            expensePaid: 3770223522.00 
           }
        ]
    },
    {
        state: States.RN,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1923669101.00, 
            expensePaid: 1625734582.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 127160466.00, 
            expensePaid: 104907882.90 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 4380222257.00, 
            expensePaid: 4204817568.00 
           }
        ]
    },
    {
        state: States.RS,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 5993546121.01, 
            expensePaid: 5358808101.18 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 361231566.53, 
            expensePaid: 329586193.31 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 15653571599.56, 
            expensePaid: 14026344052.26 
           }
        ]
    },
    {
        state: States.RS,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 6218991793.93, 
            expensePaid: 5422211972.86 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 378006330.58, 
            expensePaid: 348358557.76 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 16676237298.92, 
            expensePaid: 14970786368.68 
           }
        ]
    },
    {
        state: States.RS,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 7360989654.00, 
            expensePaid: 6668896110.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 143577254.80, 
            expensePaid: 126667835.00 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 17249771001.00, 
            expensePaid: 16205436048.00 
           }
        ]
    },
    {
        state: States.RS,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 8220146674.00, 
            expensePaid: 7687626593.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 169014472.90, 
            expensePaid: 145936969.10 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 17300601714.00, 
            expensePaid: 17277903838.00 
           }
        ]
    },
    {
        state: States.SC,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 3502278102.05, 
            expensePaid: 3125045160.88 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 128972793.05, 
            expensePaid: 121516461.38 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 6418447790.02, 
            expensePaid: 6411399490.73 
           }
        ]
    },
    {
        state: States.SC,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 3307615380.89, 
            expensePaid: 3024097665.86 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 83184371.89, 
            expensePaid: 78949231.50 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 6816703217.95, 
            expensePaid: 6810398083.58 
           }
        ]
    },
    {
        state: States.SC,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 4137309981.00, 
            expensePaid: 3854876243.00 
            },
            {
            section: Sections.assistenciaSocial,
            expanseCommitted: 103170400.30, 
            expensePaid: 102105194.10 
            },
            {
            section: Sections.previdenciaSocial,
            expanseCommitted: 7109683064.00, 
            expensePaid: 7102152690.00 
            }
        ]
    },
    {
        state: States.SC,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 4755585699.00, 
            expensePaid: 4345225069.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 109408025.40, 
            expensePaid: 108410817.50 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 7361850479.00, 
            expensePaid: 7352460389.00 
           }
        ]
    },
    {
        state: States.SE,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1153369062.50, 
            expensePaid: 1147176532.35 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 80560203.32, 
            expensePaid: 73833117.48 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 1890209088.40, 
            expensePaid: 1889210533.88 
           }
        ]
    },
    {
        state: States.SE,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1232791175.81, 
            expensePaid: 1227983783.13 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 89073952.70, 
            expensePaid: 76286158.76 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2373510272.74, 
            expensePaid: 2134317408.00 
           }
        ]
    },
    {
        state: States.SE,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1520262949.00, 
            expensePaid: 1513839240.00 
            },
            {
            section: Sections.assistenciaSocial,
            expanseCommitted: 96477146.19, 
            expensePaid: 84101494.58 
            },
            {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2378260131.00, 
            expensePaid: 2325640166.00 
            }
        ]
    },
    {
        state: States.SE,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1836869552.00, 
            expensePaid: 1813126166.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 100222191.40, 
            expensePaid: 89365783.18 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 2013804688.00, 
            expensePaid: 2002811116.00 
           }
        ]
    },
    {
        state: States.SP,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 24158817080.62, 
            expensePaid: 22484945348.34 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 704847182.17, 
            expensePaid: 611544870.80 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 36129046005.39, 
            expensePaid: 33653023873.52 
           }
        ]
    },
    {
        state: States.SP,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 25041212146.94, 
            expensePaid: 23660041625.77 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 721608754.19, 
            expensePaid: 606666736.93 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 38346985121.57, 
            expensePaid: 35388379477.84 
           }
        ]
    },
    {
        state: States.SP,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 28273223642.00, 
            expensePaid: 26191595779.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 975420140.50, 
            expensePaid: 818579352.20 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 44390091228.00, 
            expensePaid: 38319579120.00 
           }
        ]
    },
    {
        state: States.SP,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 29675416283.00, 
            expensePaid: 26915728674.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 1184153575.00, 
            expensePaid: 908180794.60 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 38511117965.00, 
            expensePaid: 35472911257.00 
           }
        ]
    },
    {
        state: States.TO,
        year: Years.Dezoito,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1642252894.15, 
            expensePaid: 1603834314.04 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 26823495.39, 
            expensePaid: 25088692.22 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 1050247946.76, 
            expensePaid: 1009934221.88 
           }
        ]
    },
    {
        state: States.TO,
        year: Years.Dezenove,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1738941256.32, 
            expensePaid: 1625097487.67 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 31994589.71, 
            expensePaid: 27969169.67 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 1236231628.84, 
            expensePaid: 1198002593.31 
           }
        ]
    },
    {
        state: States.TO,
        year: Years.Vinte,
        data: [{
            section: Sections.saude,
            expanseCommitted: 1915077126.00, 
            expensePaid: 1785715628.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 98919554.66, 
            expensePaid: 86949695.48 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 1420013741.00, 
            expensePaid: 1387471147.00 
           }
        ]
    },
    {
        state: States.TO,
        year: Years.VinteUm,
        data: [{
            section: Sections.saude,
            expanseCommitted: 2327422313.00, 
            expensePaid: 2182958795.00 
           },
           {
            section: Sections.assistenciaSocial,
            expanseCommitted: 96307773.98, 
            expensePaid: 82036706.80 
           },
           {
            section: Sections.previdenciaSocial,
            expanseCommitted: 1581411225.00, 
            expensePaid: 1565905732.00 
           }
        ]
    },


]
