import React from 'react';
import Top from "../../Components/Top/Top";
import Courses from "../../Components/Courses/Courses";
import News from "../../Components/News/News";


const Home = () => {
    return (
        <div>
            <Top/>
            <Courses/>
            <News/>
        </div>
    );
};

export default Home;