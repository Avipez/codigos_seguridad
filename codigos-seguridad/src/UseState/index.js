import React from "react";

const SECURITY_CODE = "paradigma";


function UseState() {
    const [state, setState] = React.useState({
        value: "",
        error: false,
        loading: false,
    })
  /* const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false); */


  React.useEffect(() => {
    if (state.loading) {
      console.log("Empezando el efecto");
      setTimeout(() => {
        console.log("Empezando la validación");
        if (state.value !== SECURITY_CODE) {
            setState({
                ...state,
                error: true,
                loading: false});
        } else {
            setState({
                ...state,
                error: false,
                loading: false,
            })
        }
        console.log("Terminando la validación");
      }, 3000);
      /* setTimeout(() => {
          setState({error: false});
      }, 5000) */
      console.log("Terminando el efecto");
    }
  }, [state.loading]);

  console.log(state)

  return (
    <div>
      <h2>Eliminar UseState</h2>
      <p>Por favor, escribe el código de seguridad.</p>
      {(state.error && !state.loading) && <p>Error: el código es incorrecto</p>}
      {state.loading && <p>Cargando ...</p>}
      <input
        placeholder="Código de seguridad"
        value={state.value}
        onChange={(event) => {
            setState({
                ...state,
                value: event.target.value});
        }}
      ></input>
      <button
        onClick={() => setState({
            ...state,
            loading: !state.loading,
            error: false
        })}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseState };
