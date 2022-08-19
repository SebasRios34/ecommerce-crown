import { FormInputLabel, Input, Group } from "./form-input.styles";
/*
  label: label name for the rendered input
  inputOptions: properties inherited for the input tag

  FormInputLabel:
    shrink: properties passed to the styled component, so that the shrink functionality can be rendered.
*/
const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
