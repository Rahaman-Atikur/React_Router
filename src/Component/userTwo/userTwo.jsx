import { use } from "react";

const userTwo = ({loadingData}) => {
    const loadedData = use(loadingData);
    return (
        <div>
            <h2>I am user Two</h2>
        </div>
    );
};

export default userTwo;