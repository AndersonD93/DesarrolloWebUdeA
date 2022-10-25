import heroes, {owner} from './data.js';


//find
export const getHeroesById= (id)=>{
   return heroes.find((heroe)=> heroe.id== id);
}

console.log(getHeroesById(3));

// Filter

const getHeroesByOwner =(owner)=> heroes.filter((heroe)=>heroe.owner== owner);

console.log(getHeroesByOwner('Marvel'));


