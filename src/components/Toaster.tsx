import { ToastContainer } from "react-toastify";

const Toaster = ({ id }: { id: string }) => (
    <ToastContainer
        containerId={id}
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ fontFamily: "inherit" }}
    />
);

export default Toaster;
