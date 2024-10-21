export const validationLogin = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "El nombre de usuario es obligatorio.";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria.";
  }

  return errors;
};

export const validationRegister = (values) => {
  let errors = {};

  if (!values.username) {
    errors.name = "El nombre de usuario es obligatorio.";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria.";
  } else if (values.password !== values.password2) {
    errors.password = "Las contraseñas no coinciden.";
  }

  return errors;
};
