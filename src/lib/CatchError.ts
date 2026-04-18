import axios from "axios";
import { toast, type ToastPosition } from "react-toastify";

const CatchError = (err: unknown, position: ToastPosition = "top-right") => {
    if(axios.isAxiosError(err))
        toast.error(err.response?.data?.message || err.message, {position})

      else if(err instanceof Error)
        toast.error(err.message, {position})

      else toast.error("Network Error", {position});
}

export default CatchError