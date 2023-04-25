import { useState } from 'react';
import Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';



function FormSignUp({ handleSubmit }) {
  const [name, setName] = useState("")/*useState devuelve en primera posi el valor, y en segunda pos devuelve la funcion con la que actua*/
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [promociones, setPromociones] = useState(true)
  const [novedades, setNovedades] = useState(false)

  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "Deben ser almenos 3 caracteres",
    },
  })

  function validarNombre(nombre) {
    if (nombre.length >= 3) {
      return { name: { error: false, message: "" }, }
    }else{
      return { name: { error: true, message: "Deben ser almenos 3 caracteres"}}
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit({name, lastName, email, promociones, novedades})
    }}>
      <TextField  id="name" label="Nombre"
        variant="outlined" fullWidth margin='normal'
        onChange={(e) => setName(e.target.value)}
        value={ name }
        error={ errors.name.error}
        helperText={errors.name.error ? errors.name.message : ""}
        onBlur={(e) => {
          setErrors(validarNombre(e.target.value) )
        }}
      />
      <TextField  id="lastName" label="Apellido"
        variant="outlined" fullWidth margin='normal'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField  id="email" label="Email"
        variant="outlined" fullWidth margin='normal'
        value={ email }
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormGroup>
        <FormControlLabel control={<Switch checked={promociones} 
          onChange={(e) => setPromociones(e.target.checked)} />} label="Promociones" />
        <FormControlLabel control={<Switch checked={novedades}
          onChange={(e) => setNovedades(e.target.checked)}/>} label="Novedades" />
      </FormGroup>

      <Button variant="contained" type='submit'>Registrarse</Button>
    </form>
    
  )
}

export default FormSignUp
