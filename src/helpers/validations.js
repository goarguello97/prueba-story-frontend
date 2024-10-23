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
    errors.username = "El nombre de usuario es obligatorio.";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria.";
  } else if (values.password !== values.password2) {
    errors.password = "Las contraseñas no coinciden.";
  }

  return errors;
};

export const validationProduct = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "El nombre es obligatorio.";
  }

  if (!values.description) {
    errors.description = "La descripción es obligatoria.";
  }
  if (!values.image_url) {
    errors.image_url = "La imagen es obligatoria.";
  }
  if (!values.price) {
    errors.price = "El precio es obligatorio.";
  }
  if (!values.brand_id) {
    errors.brand_id = "La marca es obligatoria.";
  }

  return errors;
};

export const validationBrand = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "El nombre es obligatorio.";
  }

  if (!values.logo_url) {
    errors.logo_url = "La imagen es obligatoria.";
  }

  return errors;
};
