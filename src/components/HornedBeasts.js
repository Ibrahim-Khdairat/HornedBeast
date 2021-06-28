import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfHornedLike: 0,
            numOfHornedDisLike: 0

        }


    }
    increaseHorneLike = () => {
        this.setState({
            numOfHornedLike: this.state.numOfHornedLike + 1
        })
    }

    increaseHorneDisLike = () => {
        this.setState({
            numOfHornedDisLike: this.state.numOfHornedDisLike + 1
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
                        <Card.Img  variant="top" src={this.props.url} alt={this.props.title} />
                        <Card.Text>
                            {this.props.prag}
                        </Card.Text>
                        <Card.Text>
                        Vote For Your Fave. Horne ...
                        </Card.Text>
                        <Button variant="success" onClick={this.increaseHorneLike}>👍</Button>{' '}
                        <Button variant="danger" onClick={this.increaseHorneDisLike}>👎</Button> 
                        <Card.Text>
                        Num Of Likes : {this.state.numOfHornedLike}
                        </Card.Text> 
                        <Card.Text>
                        Num Of Dis-Likes : {this.state.numOfHornedDisLike}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default HornedBeasts;