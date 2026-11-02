let favorites:string[]=[];




export function favoriteDApp(

name:string

){


if(!favorites.includes(name)){


favorites.push(name);


}


return favorites;

}





export function getFavorites(){


return favorites;

}
