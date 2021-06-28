import React from 'react';
import HornedBeasts from './HornedBeasts';
import Horned from './Horned.json';

class Main extends React.Component {
    render() {
       
        return (
            <div className="main">
               {Horned.map((item,index)=>{
                   return(
                   <HornedBeasts  title={item.title} prag={item.description} url={item.image_url} key={index} />
                   )
               })}

            </div>


        )
    }
}

export default Main;