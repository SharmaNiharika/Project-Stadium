import React from 'react'

const bookingData = [
  {
    id: 1,  
    game: "Cricket",
    date: "2023-07-15",
    timeStart: "10:00 AM",
    timeEnd: "12:00 PM",
    description: "Join us for an exciting cricket match at our state-of-the-art stadium. Experience the thrill of the game and cheer for your favorite team!",
    price: 20,
    location: "Stadium A",
    
    facilityImgs:[
        {
            img: "https://i.pinimg.com/474x/39/e8/f1/39e8f14ce62fb407f110b15f1442ab7a.jpg",
        },
        {   
            img: "https://i.pinimg.com/474x/11/6c/89/116c89aa9e38ecd6d8344521d7e7b8a7.jpg"
        },
        {
            img: "https://i.pinimg.com/736x/8f/a7/9f/8fa79fa674b328de572ec071752c1aad.jpg"
        }
    ],
    
    feedback:[
        
         {
            user: "John Doe",
            rating: 4.5,
            comment: "Great experience! The facility was clean and well-maintained."
         }  ,
         {
            user: "John Doe",
            rating: 4.5,
            comment: "Great experience! The facility was clean and well-maintained."
         },
         {
            user: "John Doe",
            rating: 4.5,
            comment: "Great experience! The facility was clean and well-maintained."
         },
         {
            user: "John Doe",
            rating: 4.5,
            comment: "Great experience! The facility was clean and well-maintained."
         }

    ]
       
    




    } 
]


const booking = () => {
  return (
    <div>
      
      
    </div>
  )
}

export default booking
