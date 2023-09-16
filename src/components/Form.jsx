import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./utils/css/Form.module.css";

const Form = () => {
  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El nombre es obligatorio")
        .min(5, "El minimo debe ser 5 caracteres"),
      email: Yup.string()
        .email("Ingrese un email valido")
        .required("El email es obligatorio"),
    }),

   
  });

  return (
    <div className={style.contenedor}>
      <h1 className="consultas">Consultas</h1>
      <Typography color="primary" variant="h4" align="center">
        
      </Typography >
      <form action="" className={style.form} onSubmit={handleSubmit}>
        <Grid
          container
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={3}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={4}>
            <TextField
            
              type="text"
              id="outlined-basic"
              label="name"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              value={values.nombre}
              helperText={errors.nombre}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              type="email "
              id="outlined-basic"
              label="email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              value={values.email}
              helperText={errors.email}
            />
          </Grid>
        </Grid>

        

        <Button className="btn"type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Form;
