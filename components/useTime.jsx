import React from 'react';

export default useTime = () => {
    
    let currentTime = new Date();
    {
        if(currentTime.getHours()<12)
            return("Good Morning Bondhu");
        else if(currentTime.getHours()<17)
            return("Good Afternoon Bondhu");
        else
            return("Good Evening Bondhu");

    }
}
