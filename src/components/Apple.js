import React from "react";

class Apple extends React.Component {
    render(){
        const {AppleInfo} = this.props;
        const {type,color} = AppleInfo;
        return(
            <h2>I am {type} {color} apple</h2>
        )
    } 

}
export default Apple;