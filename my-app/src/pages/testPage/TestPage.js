import React from "react";

class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({title: ""})
    }
        changeTittle = this.changeTittle.bind(this);
    changeTittle(e) {
        e.preventDefault()
        this.setState({tittle: "new Tittle"})
    
    }
    render() {
        return (
            <div>
                Test Page = {this.state.tittle}
                <button onClick={this.changeTittle}>change Title</button>
            </div>
        );
    }
}
export default TestPage