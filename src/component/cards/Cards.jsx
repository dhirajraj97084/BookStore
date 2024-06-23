import React from 'react'

function Cards({item}) {
    return (
        <div>
            <div className="card m-3 md:w-96  bg-base-100 shadow-md my-8 ">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions flex justify-between px-7">
                        <div className=" border px-2 py-1 rounded-md ">$ {item.price}</div>
                        <div className=" border px-2 py-1 rounded-md hover:bg-pink-700 hover:text-white">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
