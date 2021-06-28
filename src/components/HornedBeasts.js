import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfHorned: 0
        }


    }
    increaseHorne = () => {
        this.setState({
            numOfHorned: this.state.numOfHorned + 1
        })
    }


    render() {
        return (
            <div className="hornedbeasts">
                {/* <h2>
                    {this.props.title}
                </h2>

                <img onClick={this.increaseHorne} src={this.props.url} alt={this.props.alt} />
                
                <p>
                    {this.props.prag}
                </p>
                <p>
                💙 {this.state.numOfHorned}
                </p> */}

                <Card style={{ width: '18rem' }}>
                  
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Img onClick={this.increaseHorne} variant="top" src={this.props.url} alt={this.props.title} />
                        <Card.Text>
                            {this.props.prag}
                        </Card.Text>
                        <Card.Text>
                        💙 {this.state.numOfHorned}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default HornedBeasts;