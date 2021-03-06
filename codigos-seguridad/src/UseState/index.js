import React from "react";

const SECURITY_CODE = "paradigma";

function UseState() {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  /* const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false); */

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
    });
  };

  const onCheck = () => {
    setState({
      ...state,
      loading: !state.loading,
      error: false,
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
      confirmed: true,
    });
  };

  const onReset = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: false,
      deleted: false,
      value: "",
    });
  };

  React.useEffect(() => {
    if (state.loading) {
      console.log("Empezando el efecto");
      setTimeout(() => {
        console.log("Empezando la validación");
        if (state.value !== SECURITY_CODE) {
          onError();
        } else {
          onConfirm();
        }
        console.log("Terminando la validación");
      }, 3000);
      /* setTimeout(() => {
          setState({error: false});
      }, 5000) */
      console.log("Terminando el efecto");
    }
  }, [state.loading]);

  console.log(state);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar con useState</h2>
        <p>Por favor, escribe el código de seguridad.</p>
        {state.error && !state.loading && <p>Error: el código es incorrecto</p>}
        {state.loading && <p>Cargando ...</p>}
        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => {
            onWrite(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            onCheck();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>¿Seguro que quieres eliminar el estado?</p>
        <button
          onClick={() => {
            onDelete();
          }}
        >
          Si eliminar
        </button>
        <button
          onClick={() => {
            onReset();
          }}
        >
          No, me arrepenti
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h2>UseState fue eliminado</h2>
        <button
          onClick={() => {
            onReset();
          }}
        >
          Recuperar useState
        </button>
      </React.Fragment>
    );
  }
}

export { UseState };
