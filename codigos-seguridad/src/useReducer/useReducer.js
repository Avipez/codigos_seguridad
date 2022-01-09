import React from "react";

const SECURITY_CODE = "paradigma";

function UseReducer() {

  const initialState = {
    error: false,
    loading: false,
    delted: false,
    confirmed: false,
    value: "",
  };

  const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
      return reducerObject(state, action.payload)[action.type];
    } else {
      return state;
    }
  };

  const reducerObject = (state, payload) => ({
    [actionType.error]: {
      ...state,
      error: true,
      loading: false,
    },
    [actionType.confirm]: {
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    },
    [actionType.write]: {
      ...state,
      value: payload,
    },
    [actionType.check]: {
      ...state,
      loading: true,
    },
    [actionType.delete]: {
      ...state,
      deleted: true,
      confirmed: true,
    },
    [actionType.reset]: {
      ...state,
      error: false,
      loading: false,
      confirmed: false,
      deleted: false,
      value: "",
    },
  });

  const actionType = {
    confirm: "CONFIRM",
    error: "ERROR",
    write: "WRITE",
    check: "CHECK",
    delete: "DELETE",
    reset: "RESET",
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onError = () => {
    dispatch({ type: actionType.error });
  };

  const onConfirm = () => {
    dispatch({ type: actionType.confirm });
  };

  const onCheck = () => {
    dispatch({ type: actionType.check });
  };

  const onWrite = (newValue) => {
    dispatch({ type: actionType.write, payload: newValue });
  };

  const onDelete = () => {
    dispatch({ type: actionType.delete });
  };

  const onReset = () => {
    dispatch({ type: actionType.reset });
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
        <h2>Eliminar con useReducer</h2>
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
          onClick={ onCheck }
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
          onClick={ onDelete }
        >
          Si eliminar
        </button>
        <button
          onClick={ onReset }
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
          onClick={ onReset }
        >
          Recuperar useState
        </button>
      </React.Fragment>
    );
  }
}

export { UseReducer };
