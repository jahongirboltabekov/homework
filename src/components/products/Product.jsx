import axios from 'axios'
import { Pagination, Box } from '@mui/material/';
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import './Product.scss'

const count = 6;

function Product() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products`)
            .then(res => {
                const totalItems = res.data.length;
                setTotalPages(Math.ceil(totalItems / count));
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const getPageData = () => {
        const startIndex = (page - 1) * count;
        const endIndex = startIndex + count;
        return data.slice(startIndex, endIndex);
    };

    let product = getPageData().map((el) =>
        <div className="card" key={el.id}>
            <div className="img">
                <img src={el.image} alt="" />
            </div>
            <div className="card_text">
                <h3>{el.title.slice(0, 20)}</h3>
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p> <del>${el.price * 2}</del>${el.price}</p>
            </div>
        </div>
    );

    return (
        <div>
            <div className="container">
                <div className="text">
                    <p>Find your favourite Products.</p>
                    <h3>Our Latest Products</h3>
                </div>
                <div className="products">
                    {product}
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                    <Pagination 
                        count={totalPages} 
                        page={page} 
                        onChange={(_, value) => setPage(value)} 
                        color="primary" 
                    />
                </Box>
            </div>
        </div>
    )
}

export default Product;
