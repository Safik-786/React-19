import React from 'react'
import { productData } from '../Constants/product.data'
import { Link, useSearchParams } from 'react-router-dom'


function ProjectPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    console.log("searchParams", searchParams.get("price"));


    const filteredProducts = productData.filter(product => {
        const priceFilter = searchParams.get("price");
        if (product.price > priceFilter) {
            return true;
        }
        else {  
            return false;
        }
    });

    return (
        <div className='flex m-6 shadow bg-slate-100'>
            {/* filters */}
            <div className='w-1/10 p-2 shadow rounded-2xl space-y-2'>
                <button onClick={() => setSearchParams({ price: '200' })} className='bg-white whitespace-nowrap text-teal-500 text-xs uppercase shadow rounded-lg cursor-pointer px-3 py-2'>Price gt 200</button>
                <button onClick={() => setSearchParams({ price: '300' })} className='bg-white whitespace-nowrap text-teal-500 text-xs uppercase shadow rounded-lg cursor-pointer px-3 py-2'>Price gt 300</button>
                <button onClick={() => setSearchParams({ price: '500' })} className='bg-white whitespace-nowrap text-teal-500 text-xs uppercase shadow rounded-lg cursor-pointer px-3 py-2'>Price gt 500</button>
                <button onClick={() => setSearchParams({ price: '800' })} className='bg-white whitespace-nowrap text-teal-500 text-xs uppercase shadow rounded-lg cursor-pointer px-3 py-2'>Price gt 800</button>
                <button onClick={() => setSearchParams({ price: '2000' })} className='bg-white whitespace-nowrap text-teal-500 text-xs uppercase shadow rounded-lg cursor-pointer px-3 py-2'>Price gt 2000</button>
                <button onClick={() => setSearchParams({ price: '5000' })} className='bg-white whitespace-nowrap text-teal-500 text-xs uppercase shadow rounded-lg cursor-pointer px-3 py-2'>Price gt 5000</button>
            </div>
            <div className='w-9/10` grid grid-cols-3     gap-6  p-4 '>
                {
                    filteredProducts.map((product) => (

                        <Link to={`/dashboard/projects/${product.slug}`} key={product.id}>
                            <div key={product.id} className='p-4 shadow gap-4 bg-white rounded-2xl '>
                                <div className='flex '>
                                    {product.images.map((image, index) => (
                                        <img key={index} src={image} alt={product.title} style={{ width: '100px', marginRight: '10px' }} />
                                    ))}
                                </div>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                                <p>Discount Price: ${product.discountPrice}</p>
                                <p>Rating: {product.rating} ({product.reviewsCount} reviews)</p>
                                <p>Stock: {product.stock}</p>
                                <p>Category: {product.category} - {product.subCategory}</p>
                                <p>Brand: {product.brand}</p>
                                <p>Variants: {product.variants.map(variant => variant.color).join(', ')}</p>
                                <p>Featured: {product.isFeatured ? 'Yes' : 'No'}</p>
                                <p>Created At: {new Date(product.createdAt).toLocaleDateString()}</p>

                            </div>
                        </Link>
                    ))
                }


            </div>
        </div>
    )
}

export default ProjectPage