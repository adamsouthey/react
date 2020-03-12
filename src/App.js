import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

export const App = () => {
    const [loading, setLoading] = useState(true)
    const [giphyData, setGiphyData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=Tr8iKNxQPg6dc2XZ5R4Sa5qNVSfP2L1P`)
                .then(
                    response => {
                        setLoading(false)
                        setGiphyData(response.data.data)
                    }
                )
        } catch (err) {
            console.log('Error fetching and parsing data', err.message);
        }
    }

    return (
        <>
            <h1 style={{ color: 'red', fontSize: '5rem' }}> GIFSs</h1>
            <div className="container" >
                {
                    loading && !giphyData ? <p>Loading GIFs...</p> : giphyData.map((item) => {
                        return (
                            <>
                                <img className="item" key={item.id} src={item.images.downsized_large.url} alt="" />
                            </>
                        )
                    })
                }
            </div>
        </>

    )

}