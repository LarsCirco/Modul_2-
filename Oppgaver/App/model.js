const model= [{
    app:{
        page:'startPage',
    },

    inputs: {
        startside: {
            enkelbetaling:{
            valgtKonto:'',
            betaleTil: '',}
        },
        sisteransaksjoner:{
            valgtkonto:'',
        }
    },
data:{
    users:[{
        id:0, 
        username: '', 
        password:'', 
        navn: '',
        konto:  [{id: 0,kontonummer:'', saldo:''},
                 {id: 1,kontonummer:'', saldo:''}
                 ],
             }],
    transaksjoner: 
            {
                1:{
                id: 0, 
                dato: '17.03-2023', 
                forklaring:'', 
                sum:'',
                renteDato:' 17-03-2023',
                utFraKonto:500.00,
                innpåKonto:0,
                },
                2:{
                    id: 0, 
                    dato: '17.03-2023', 
                    forklaring:'', 
                    sum:'',
                    renteDato:' 17-03-2023',
                    utFraKonto:30.00,
                    innpåKonto:0,
                    }
            },
        }
    }
]