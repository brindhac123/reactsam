import Car from './Car'
import Apple from './Apple';
import Gun from './Gun';

function Garage(){
    //const brand="BMW";
    //const color="Black";
    const isDoorOpened=true;
    const carInfo={brand:"BMW",color:"Black"}
    //const carInfo={}
    const AppleInfo={typr:"Fuji",color:"Red"}
    const carList= [
      { brand :"BMW", color:"Red"},
      { brand :"Ford", color:"Back"},
      { brand :"Tesla", color:"Blue"},

    ];
    const numberList = [
      1,2,3,4,5,6
    ];

    const showcarInfo = carInfo.brand !== undefined && carInfo.color !== undefined 
    return(
      <>
      <h2>Who is there</h2>
      {/* <Car brand={brand} color={color}/> */}
      { showcarInfo && <Car carInfo={carInfo}/> }
      
      <Apple AppleInfo={AppleInfo}/>
      
      {isDoorOpened?<h2>Garage door is opened</h2> : <h2>Garage door is closed</h2>}

      <ul>
        {carList.map((carInfo) => <li key={carInfo.brand} ><Car carInfo={carInfo}/> </li> ) }
      </ul>
      <ul>
        {numberList.map((e,index) => <p key={index}>{e}</p> ) }
      </ul>
      </>
    )
  }

  export default Garage;