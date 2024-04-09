import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';



function App() {

    const [dataList, setDataList] = useState([]);


    const getGroceryData = () => {
        axios.get('/api/grocery').then((r) => {
            setDataList(r.data);
        }).catch((e) => {
            console.log('Error in client-side GET request', e);
        })

    };

   useEffect(() => {
    console.log('page load');
    getGroceryData()
   }, []);

    return (
        <section>
            <header>
            <Header />
            </header>
            <main>
                <form>

                </form>
                {
                  dataList.map((datas) => {
                    return <div key={datas.id}>
                       {datas.name}  {datas.quantity}{datas.unit}
                    </div>
                  })
                }
            </main>
        </section>
    );
}

export default App;
