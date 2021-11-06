import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { Section, TextSection } from "./Form.styles";
import { Button } from "../Button";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}></label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div className="">{meta.error}</div> : null}
    </>
  );
};

const FormComponent = () => {
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must be at least 3 characters long")
            .max(45, "Must be  15 characters long or less")
            .required("Make sure to enter your name"),
          email: Yup.string()
            .email("Make sure to enter a valid email address")
            .required("Make sure to enter your email address"),
          phone: Yup.string().max("Make sure to enter a valid phone number"),
          message: Yup.string()
            .max(200, "Must be  200 characters long or less")
            .required("Make sure to enter your message"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "To proceed, you must first accept the terms"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
            <Form>
              <TextSection>
                <TextInput
                  label="name"
                  name="name"
                  type="text"
                  placeholder="Enter your first name"
                />
                <TextInput
                  label="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email "
                />
                <TextInput
                  label="message"
                  name="message"
                  type="text"
                  className="message"
                  placeholder="Leave your message  "
                />
            
                <Button dark='true' type="submit">
                  {props.isSubmitting ? "Loading.." : "Send your Message"}
                </Button>
              </TextSection>
            </Form>
        )}
      </Formik>
    );
  };
  
  export default FormComponent;