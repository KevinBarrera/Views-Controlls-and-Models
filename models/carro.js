var context = [
    {
        id: 1,
        marca: 'Chevrolet',
        precio: 1000000,
        url:'http://ppigmm.com.mx/media/cache/59/28/5928709c3685ef4efc30ab15fc261b4e.jpg'
    },
    {
        id: 2,
        marca: 'Ford',
        precio: 2000000,
        url:'http://ppigmm.com.mx/media/cache/59/28/5928709c3685ef4efc30ab15fc261b4e.jpg'
    },
    {
        id: 3,
        marca: 'Audi',
        precio: 22222000,
        url:'http://ppigmm.com.mx/media/cache/59/28/5928709c3685ef4efc30ab15fc261b4e.jpg'
    }
];

exports.showAll = ()=>{
    return context;
};

exports.getOne = (id)=>{
    return context.filter((carro)=>carro.id == id)[0];
};