import { useEffect, useRef, useState } from "react";

const OPT_INPUT_SIZE = 6;

function OtpInput() {
  const [inputArr, setInputArr] = useState(new Array(OPT_INPUT_SIZE).fill(""));

  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleOnChange = (event, index) => {
    const value = event.target.value;

    if (isNaN(value)) {
      return;
    }

    const newInputs = [...inputArr];

    if (value.length > 1) {
      value.split("").forEach((val, valIndex) => {
        if (index + valIndex < OPT_INPUT_SIZE) {
          newInputs[index + valIndex] = val;
        }
      });

      setInputArr(newInputs);
      inputRef.current[value.length]?.focus();
      return;
    }

    const newValue = value.trim();
    newInputs[index] = newValue.slice(-1);
    setInputArr(newInputs);
    value && inputRef.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (event, index) => {
    const value = event.target.value;
    if (!value && event.code === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <h1>Otp Input Component</h1>

      <div>
        {inputArr.map((input, index) => {
          return (
            <input
              className="input"
              name={`otp-${index}`}
              ref={(ref) => (inputRef.current[index] = ref)}
              value={input}
              type="text"
              key={index}
              onKeyDown={(event) => handleOnKeyDown(event, index)}
              onChange={(event) => handleOnChange(event, index)}
            />
          );
        })}
      </div>
    </>
  );
}

export default OtpInput;
