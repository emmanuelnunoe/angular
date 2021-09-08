function suma(num1:number, num2:number):number{
    return num1+num2;
}

function resta(num1:number, num2:number):number{
    return num1-num2;
}

function multiplica(num1:number, num2:number):number{
    return num1*num2;
}

function dividde(num1:number, num2:number):number{
    return num1/num2;
}

const mayorDeDosNumeros=(numero1:number, numero2:number):number=>{ //arrow function con tip de return
    let mayor =0;
    if(numero1 > numero2){
        mayor = numero1
    }
    if(numero2 > numero1)
    {
        mayor = numero2
    }
    return mayor;
}


enum Role{ 
    'Admin',
    'User',
    'SuperUser'
}

function agregarUsuario(nombre:string, rol:Role){
    console.log('Usuario agregado')
}

