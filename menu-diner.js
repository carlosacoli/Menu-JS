import * as lodash from "https://cdn.skypack.dev/lodash@4.17.21";
//Distintos Menus
const MenuDesayuno =[
    {comida: 'tortilla de patatas', Precio: 5},
    {comida: 'croissant con jamon', Precio: 3},
    {comida: 'pan tostado con tomate', Precio: 4}
    
];

const MenuAlmuerzo =[
    {comida: 'paella', Precio: 10},
    {comida: 'sopa de mariscos', Precio: 11},
    {comida: 'solomo asado', Precio: 13}
    
];

const MenuCena =[
    {comida: 'paella', Precio: 11},
    {comida: 'sopa de mariscos', Precio: 13},
    {comida: 'solomo asado', Precio: 15}
    
];

const AcompañamientoDesayuno =[
    {comida: 'cafe', Precio: 1},
    {comida: 'jugo de naranja', Precio: 2},    
];

const Acompañamiento =[
    {comida: 'alitas', Precio: 3},
    {comida: 'papas fritas', Precio: 2},    
];

const ComentarioComida = [
    'Buena eleccion',
    'La especialidad de la casa',
    'Te va a encantar este plato, esta delicioso!'
];

const ComentarioAcom = [
    'Excelente para complementar con un buen plato',
    'Una mezcla rica e interesante'
];

//Funciones para generar un comentario aleatoriamente
const ComentarioPrincipal = () =>{
    var ComentarioSelec = Math.floor (Math.random()*(ComentarioComida.length));
    return ComentarioComida[ComentarioSelec];
  };

const ComentarioSecundario = () =>{
    var ComentarioSelec = Math.floor (Math.random()*(ComentarioAcom.length));
    return ComentarioAcom[ComentarioSelec];
};


alert('Bienvenido al Restaurante');
let PeticionComida = prompt('Que Desea comer usted? Desayuno, Almuerzo o Cena?');

switch (PeticionComida) {
    case 'Desayuno': case 'desayuno':
        let CartaDesayuno = MenuDesayuno.map(function(element){
            return `${element.comida} ${element.Precio}€` +"\n";
        });
        alert(`Los menús para desayunar son los siguientes: \n ${CartaDesayuno}`);
        
        var PeticionPlato = prompt('Que Desea escoger para desayunar?');
        switch (PeticionPlato) {
            case 'Tortilla de patatas': case 'tortilla de patatas':
                alert(ComentarioPrincipal());
                break;

            case 'Croissant con jamon': case 'croissant con jamon':
                alert(ComentarioPrincipal());
                break;

            case 'Pan tostado con tomate': case 'pan tostado con tomate':
                alert(ComentarioPrincipal());
                break;

            default:
                alert('Ha escogido una opcion incorrecta!!');
                break;
        
        }
            var PeticionPlato = PeticionPlato.toLowerCase();
            var filtro = MenuDesayuno.filter(menu => menu.comida == PeticionPlato );
            var PrecioPlato = filtro.map(function(element){
                return element.Precio;
            });

            alert(`El monto a pagar por ${PeticionPlato} es de ${PrecioPlato}€.`);
        
        break;
    
    case 'Almuerzo': case 'almuerzo':
        let CartaAlmuerzo = MenuAlmuerzo.map(function(element){
            return `${element.comida} ${element.Precio}€` +"\n";
        });
        alert(`Los menús para almorzar son los siguientes: \n ${CartaAlmuerzo}`);

        var PeticionPlato = prompt('Que Desea escoger para Almorzar?');
        switch (PeticionPlato) {
            case 'Paella': case 'paella':
                alert(ComentarioPrincipal());
                break;

            case 'Sopa de mariscos': case 'sopa de mariscos':
                alert(ComentarioPrincipal());
                break;

            case 'Solomo asado': case 'solomo asado':
                alert(ComentarioPrincipal());
                break;

            default:
                alert('Ha escogido una opcion incorrecta!!');
                break;
        
        }
            var PeticionPlato = PeticionPlato.toLowerCase();
            var filtro = MenuAlmuerzo.filter(menu => menu.comida == PeticionPlato );
            var PrecioPlato = filtro.map(function(element){
                return element.Precio;
            });

            alert(`El monto a pagar por ${PeticionPlato} es de ${PrecioPlato}€.`);

        break;

    case 'Cena': case 'cena':
        let CartaCena = MenuCena.map(function(element){
            return `${element.comida} ${element.Precio}€` +"\n";
        });
        alert(`Los menús para cenar son los siguientes: \n ${CartaCena}`);

        var PeticionPlato = prompt('Que Desea escoger para Cenar?');
        switch (PeticionPlato) {
            case 'Paella': case 'paella':
                alert(ComentarioPrincipal());
                break;

            case 'Sopa de mariscos': case 'sopa de mariscos':
                alert(ComentarioPrincipal());
                break;

            case 'Solomo asado': case 'solomo asado':
                alert(ComentarioPrincipal());
                break;

            default:
                alert('Ha escogido una opcion incorrecta!!');
                break;
        
        }

            var PeticionPlato = PeticionPlato.toLowerCase();
            var filtro = MenuCena.filter(menu => menu.comida == PeticionPlato );
            var PrecioPlato = filtro.map(function(element){
                return element.Precio;
            });

            alert(`El monto a pagar por ${PeticionPlato} es de ${PrecioPlato}€.`);
    
        break;
        
    default:
        alert('Ha escogido una opcion incorrecta!!');
    break;
}
alert('Ahora voy a mostrarles los acompañantes que tenemos el dia de hoy');

switch (PeticionComida) {
    case 'Desayuno': case 'desayuno':
        let CartaAcomDesayuno = AcompañamientoDesayuno.map(function(element){
            return `${element.comida} ${element.Precio}€` +"\n";
        });
        alert(`Los acompañantes disponibles para su plato son los siguientes: \n ${CartaAcomDesayuno}`);
        
        var PeticionAcompañante = prompt('Que Desea escoger para Acompañar su plato?');
        switch (PeticionAcompañante) {
            case 'Cafe': case 'cafe':
                alert(ComentarioSecundario());
                break;

            case 'Jugo de naranja': case 'jugo de naranja':
                alert(ComentarioSecundario());
                break;

            default:
                alert('Ha escogido una opcion incorrecta!!');
                break;
        
        }

            var PeticionAcompañante = PeticionAcompañante.toLowerCase();
            var filtro = AcompañamientoDesayuno.filter(menu => menu.comida == PeticionAcompañante );
            var PrecioAcompañante = filtro.map(function(element){
                return element.Precio;
            });

            alert(`El monto a pagar por ${PeticionAcompañante} es de ${PrecioAcompañante}€.`);

    break;

    case 'Almuerzo': case 'almuerzo': case 'Cena': case 'cena':
        let CartaAcompañamiento = Acompañamiento.map(function(element){
            return `${element.comida} ${element.Precio}€` +"\n";
        });
        alert(`Los acompañantes disponibles para su plato son los siguientes: \n ${CartaAcompañamiento}`);

        var PeticionAcompañante = prompt('Que Desea escoger para Acompañar su plato?');
        switch (PeticionAcompañante) {
            case 'Alitas': case 'alitas':
                alert(ComentarioSecundario());
                break;

            case 'Papas fritas': case 'papas fritas':
                alert(ComentarioSecundario());
                break;

            default:
                alert('Ha escogido una opcion incorrecta!!');
                break;
        
        }
            var PeticionAcompañante = PeticionAcompañante.toLowerCase();
            var filtro = Acompañamiento.filter(menu => menu.comida == PeticionAcompañante );
            var PrecioAcompañante = filtro.map(function(element){
                return element.Precio;
            });

            alert(`El monto a pagar por ${PeticionAcompañante} es de ${PrecioAcompañante}€.`);

    break;

}

const Tprecio = PrecioPlato.concat(PrecioAcompañante);
const MontoTotal = _.reduce((Tprecio), function(total,num) {
        return total + num;
    }, 0);

alert('Cliente: "Camarero puede darme la cuenta por favor?"');
alert(`Si claro, el monto total de su factura es ${MontoTotal}€.`);
alert('Gracias por preferirnos, Buen dia!');