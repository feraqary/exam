import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';

const useToastHook = ({ result, success }) => {
  console.log('hello', success);
  useEffect(() => {
    if (result?.isSuccess) {
      ToastSuccess(success);
    }
  }, [result?.isSuccess]);

  useEffect(() => {
    if (result?.isError) {
      const { data } = result.error;
      ToastError(data.error);
    }
  }, [result?.isError]);
  return (
    <>
      <ToastContainer />
    </>
  );
};

export default useToastHook;
