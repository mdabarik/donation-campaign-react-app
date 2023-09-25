import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl text-center my-10">Opps! 404 Not Found.</h2>
            <button className="btn btn-error" onClick={() => goBack()}>Go Back</button>
        </div>
    );
};

export default ErrorPage;