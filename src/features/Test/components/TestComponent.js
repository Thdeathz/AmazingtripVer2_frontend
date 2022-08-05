import { useSelector } from "react-redux";


function TestComponent() {
    const usersData = useSelector((state) => state.test.data);

    return ( 
        <>
            <h1>Test component</h1>
            {usersData?.map((each, index) => (
                <div key={index}>
                    <h3>{each.nickname}</h3>
                    <br/>
                </div>
            ))}
        </>
    );
}

export default TestComponent;