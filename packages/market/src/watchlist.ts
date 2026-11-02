let watchlist:string[]=[];




export function addWatchToken(

symbol:string

){


if(!watchlist.includes(symbol)){


watchlist.push(symbol);


}


return watchlist;

}





export function getWatchlist(){


return watchlist;

}
