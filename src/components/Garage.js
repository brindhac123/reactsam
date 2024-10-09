import Car from './Car'
import Apple from './Apple';

function Garage(){
    //const brand="BMW";
    //const color="Black";
    const carInfo={brand:"BMW",color:"Black"}
    const AppleInfo={typr:"Fuji",color:"Red"}
    return(
      <>
      <h2>Who is there</h2>
      {/* <Car brand={brand} color={color}/> */}
      <Car carInfo={carInfo}/>

      <Apple AppleInfo={AppleInfo}/>
      </>
    )
  }

  export default Garage;