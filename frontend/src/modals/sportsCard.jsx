import React from 'react'

const sportsCards = [
    {
        _id: 1,
        img1: "https://i.pinimg.com/736x/ef/45/b1/ef45b13568194d1a03b09eb9de6f66a6.jpg",
        title: "Badminton",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc."

    },
    {
        _id: 2,
        img1: "https://i.pinimg.com/736x/a8/d8/dc/a8d8dc2461725f5fe13b7ca8b1f6338f.jpg",
        title: "Volleyball 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc."
    },
    {
         _id: 3,
        img1: "https://i.pinimg.com/736x/a2/89/a0/a289a069f60fe8add7e2f4b4513ab20c.jpg",
        title: "Running 3",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc."
    },
    

];

const sportsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {sportsCards.map((item) => (
        <div key={item._id} className="flex flex-col items-center gap-4 border-2 justify-center w-100px ">
            <div className="flex justify-center items-center h-[200px] w-full " >
                <img src={item.img1} alt={item.title} className=" w-full text-white h-full object-cover" />
            </div>
              
              <h3 className=" text-slate-400 text-sm font-bold mt-4">{item.title}</h3>
              <p className=" text-center mt-2 p-2 text-slate-400 text-sm ">{item.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Know More
              </button>
        </div>
      ))}   
        </div>
   
  )
}

export default sportsCard
