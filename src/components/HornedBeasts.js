import React from 'react';
class HornedBeasts extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            numOfHorned : 0
        }

      
    }
    increaseHorne = () =>{
        this.setState({
            numOfHorned : this.state.numOfHorned + 1
        })
    }
  

    render() {
        return (
            <div className="hornedbeasts">
                <h2>
                    {this.props.title}
                </h2>

                <img onClick={this.increaseHorne} src={this.props.url} alt={this.props.alt} />
                
                <p>
                    {this.props.prag}
                </p>
                <p>
                💙 {this.state.numOfHorned}
                </p>
            </div>

        )
    }
}

export default HornedBeasts;