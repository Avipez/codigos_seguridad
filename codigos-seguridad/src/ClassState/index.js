import React from "react";
import { Loading } from "../Loading";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            value: "",
            error: false,
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
        console.log(this.state.value)
        if(this.state.loading) {
            setTimeout(() => {
                console.log("Empezando la validación");
                if (this.state.value !== SECURITY_CODE) {
                    this.setState({error: true, loading: false})
                } else {
                    this.setState({error: false, loading: false})
                }
                console.log("Terminando la validación");
            }, 3000)
        }
    }

    render() {
        const { error, loading, value} = this.state;
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Por favor, escribe el código de seguridad.</p>
                {(error && !loading) && (
                    <p>Error: el código es incorrecto</p>
                )}
                {loading && <Loading /> }
                <input
                    placeholder="Código de seguridad"
                    value={value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value})
                    }}
                ></input>
                <button
                    onClick={() => this.setState({error: !error})}
                    onClick={() => this.setState({loading: true})}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState};