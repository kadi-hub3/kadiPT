import {TextSection, Form } from "./Form.styles";
import { Button } from "../Button";
import { useForm, ValidationError } from '@formspree/react';


const FormComponent = () => {
  const [state, handleSubmit] = useForm("xyybojpz");
  if (state.succeeded) {
      return <h3>Thanks for your message, I'll get back to you ASAP!</h3>;
  }
    return (
            <Form onSubmit={handleSubmit}>
              <TextSection>
              <input
                id="name"
                type="name" 
                name="name"
                placeholder='Please enter your name '
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
              <input
                id="email"
                type="email" 
                name="email"
                placeholder='Please enter your email '
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <textarea
                id="message"
                name="message"
                placeholder='Leave your message '
                rows='5'
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <Button dark="true" type="submit" disabled={state.submitting}>
                Send your message
              </Button>
              </TextSection>
            </Form>
      );
  };
  
  export default FormComponent;