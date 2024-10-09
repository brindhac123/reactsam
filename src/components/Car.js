
function Car(props){
    //const {brand,color} =props;
    const {carInfo} =props;
    const {brand,color} =carInfo;
    const text =`Hi Im ${color} ${brand} here`
    return(
      <h2>{text}</h2>
    );
  }

  export default Car;