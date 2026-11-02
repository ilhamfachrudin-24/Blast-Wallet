export interface Position {


protocol:string;

asset:string;

amount:number;

apy:number;


}





let positions:Position[]=[];





export function addPosition(

position:Position

){


positions.push(position);


return position;

}





export function getPositions(){


return positions;


}
