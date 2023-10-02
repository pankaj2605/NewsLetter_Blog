import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function Error(){
    const error=useRouteError();
    let title="An Error occured";
    let message="Something went wrong";

    if(error.status === 500){
        message=error.data.message;
    }
    if(error.status === 404){
        title="not Found";
        message= "could not find resoursce or page";
    }
    return (
        <>
            <MainNavigation/>
            <PageContent title={title}>
            <p>{message}</p>

            </PageContent>
        </>
    )
}

export default Error;