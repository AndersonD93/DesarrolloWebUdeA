import { rejects } from 'assert';
import { resolve } from 'path';
import {getHeroesById} from './arrays.js';

const getHeroesByIdAsync= (id)=>{
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            const p= getHeroesById(id);
            if(p){
                resolve(p);
            }else{
                reject ('no se cumplio la promesa = no encontró el heroe');
            }
        },2000)
        
    });

}

getHeroesByIdAsync(10)
.then(heroe=> console.log('Heroe',heroe))
.catch(err=> console.warn(err));