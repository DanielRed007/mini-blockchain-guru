import React, { ChangeEvent ,useState ,useEffect } from "react";
import { Input } from 'semantic-ui-react';

interface GuruFormInputProps{
  type: string;
  className: string;
  disabled: boolean;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e:any) => void;
}

const GuruFormInput: React.FC<GuruFormInputProps> = ({ type, className, disabled, name, placeholder, onChange, value }) => {
  const [inputType] = useState(type);
  const [classType] = useState(className);
  const [isDisabled] = useState(disabled);
  const [placeholderText] = useState(placeholder);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {

  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <>
      <Input 
        type={inputType} 
        value={inputValue} 
        disabled={isDisabled} 
        name={name} 
        onChange={handleChange} 
        className={classType}
        placeholder={placeholderText}
      />  
    </>
  );
}

export default GuruFormInput;