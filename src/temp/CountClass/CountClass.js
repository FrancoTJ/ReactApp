import {Component} from "react"; // 4.1k (gziped: 1.8k)

class CountClass extends Component {
    render(){
        console.log(this.props)
        return(
            <h1>Contador Clase</h1>
        )
    }

}

export default CountClass