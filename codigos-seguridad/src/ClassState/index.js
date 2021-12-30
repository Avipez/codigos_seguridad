import React from "react";
import { Loading } from "../Loading";

class ClassState extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            error: true,
            loading: false,
        }
    }
    /* UNSAFE_componentWillMount() {
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    } */
    componentDidUpdate() {
        console.log("update")
        if(this.state.loading) {
            setTimeout(() => {
                console.log("Empezando la validación");
                this.setState({loading: false})
                console.log("Terminando la validación");
            }, 3000)
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Por favor, escribe el código de seguridad.</p>
                {this.state.error && (
                    <p>Error: el código es incorrecto</p>
                )}
                {this.state.loading && <Loading /> }
                <input placeholder="Código de seguridad"></input>
                <button
                    onClick={() => this.setState({error: !this.state.error})}
                    onClick={() => this.setState({loading: true})}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState};