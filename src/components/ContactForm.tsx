import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseVinNumber, chooseYear } from "../redux/slices/RootSlice";

interface ContactFormProps {
  id?: string,
  data?: {}
}


const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit} = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any)  => {
    console.log(`ID ${props.id}`)
    if(props.id) {
      server_calls.update(props.id, data)
      console.log(`Updated: ${data} with ID: ${props.id}`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseVinNumber(data.vin_number));
      dispatch(chooseYear(data.year));
      
      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }
  return (
    
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="make">Make</label>
          <Input {...register('make')} name="make" placeholder="Make"/>
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Input {...register('model')} name="model" placeholder="Model"/>
        </div>
        <div>
          <label htmlFor="vin_number">Vin Number</label>
          <Input {...register('vin_number')} name="vin_number" placeholder="Vin Number"/>
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Input {...register('year')} name="year" placeholder="Year"/>
        </div>
        <div>
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 hover:text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
