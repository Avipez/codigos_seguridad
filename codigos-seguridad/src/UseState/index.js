import React from "react";

function UseState() {
    const [error, setError] = React.useState(true);
    const [loading, setLoading] =React.useState(false);

    React.useEffect(() => {
        if(loading) {
            console.log("Empezando el efecto")
            setTimeout(() => {
                console.log("Empezando la validación");
                setLoading(false)
                console.log("Terminando la validación");
            }, 3000)
            console.log("Terminando el efecto")
        }
    }, [loading])

    return (<div>
        <h2>Eliminar UseState</h2>
        <p>Por favor, escribe el código de seguridad.</p>
        {error && (
            <p>Error: el código es incorrecto</p>
        )}
        {loading && (
            <p>Cargando ...</p>
        )}
        <input placeholder="Código de seguridad"></input>
        <button
            onClick={() => setError(!error)}
            onClick={() => setLoading(!loading)}
        >Comprobar</button>
    </div>)
};

export { UseState};