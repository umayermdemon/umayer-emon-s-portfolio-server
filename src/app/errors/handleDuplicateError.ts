import { TErrorSource } from "../interfaces/error";

const handleDuplicateError = (err: any) => {
  const match = err.message.match(/"([^"]*)"/);
  const extractMessage = match && match[1];
  const errorSources: TErrorSource = [
    {
      path: "",
      message: `${extractMessage} is already exists`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: "Duplicate Error!",
    errorSources,
  };
};

export default handleDuplicateError;
