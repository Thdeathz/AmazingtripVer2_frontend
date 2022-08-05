import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TestComponent from "../components/TestComponent";
import { fetchUserList } from "../testSlice";

function TestPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserList());

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return (  
        <div>
            <h1>Test Page</h1>
            <TestComponent/>    
        </div>
    );
}

export default TestPage;