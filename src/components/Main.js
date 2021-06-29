import React from 'react';
import HornedBeasts from './HornedBeasts';
import Horned from './Horned.json';

class Main extends React.Component {
  

constructor(props)
{
    super(props)
}
    render() {
       
        return (
            <div className="main">
               {Horned.map((item,index)=>{
                   return(
                   <HornedBeasts  renderModal={this.props.renderModal} selectedAnimal={item.title} title={item.title} prag={item.description} url={item.image_url} keyValue={index} key={index} />
                   )
               })}

            </div>


        )
    }
}

export default Main;