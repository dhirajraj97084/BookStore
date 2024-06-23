import React from 'react'

function Cards({item}) {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-md my-8 ">
                <figure><img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1718941947~exp=1718945547~hmac=848894910b7d6d23fb46de96324925bb343d669bb970ac652867f93d44f759d2&w=740" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end px-7">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
