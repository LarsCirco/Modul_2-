const model = {
    app: {
        currentpage: 'productpage', // viewcontroller! endre views!!
        currentUser: null, // simulere at ingen er logget inn
    },
    inputs: {
        productpage: {
            productId: 1,
            searchtext:'',
            postNo:'',
            iscompare: false,
            imageIndex: 2,
            colorIndex: 0, 
        },

    },
    //data
    users:[
        {name:'per', pwd:'123'}
    ],
    orders: [
        {
            customer: 'per',
            orderlines: [
                {productId:1, count:1, color},
                {productId:3, count:3, color},
            ],
        },
    ],
    shoppingCart: [
        {productId:1, count:1, color},
        {productId:3, count:3, color},

    ],
    products:[
    {id: 1,
    title: 'sony',
    productNo:1149495,
    description: 'Stæyreduksjon headset',
    colors: [
        {text:'sort', code: '#000000'},
        {text:'blue', code: '#4F7183'}
    ],
    brandLogo:'komplett.no/logo/sony.gif',
    pris: 2190,
    categoryid: 1,
    rating:{
        rating: 4.5,
        count:30,
    }
    },
],
categories: [
    {name: 'TV, Lyd  bilde', id:1},
    {name:'Hodetelefoner', id: 2, parentid:1}]

};