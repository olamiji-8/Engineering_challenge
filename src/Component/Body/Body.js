import React, { useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Body = () => {
    const [key, setkey] = useState('');
    const [keys, setkeys] = useState('');

    const item = [

        { name: 'Akin ', type: 'man', date: "2022-01-01", id: "1" },
        { name: 'Adey', type: 'women', date: "2022-01-01", id: "2" },
        { name: 'Shad ', type: 'child', date: "2022-01-01", id: "3" },
        { name: 'Matt', type: 'adolescent', date: "2022-01-02", id: "4" },
        { name: 'John', type: 'child', date: "2022-01-02", id: "5" },
        { name: 'Adel', type: 'teen', date: "2022-01-02", id: "6" },
        { name: 'Adda', type: 'man', date: "2022-01-03", id: "7" },
        { name: 'Aila', type: 'adolescent', date: "2022-01-03", id: "8" },
        { name: 'Aida', type: 'child', date: "2022-01-03", id: "9" },
        { name: 'Aice', type: 'teen', date: "2022-01-04", id: "10" },
        { name: 'Liam', type: 'women', date: "2022-01-04", id: "11" },
        { name: 'Noah', type: 'man', date: "2022-01-04", id: "12" },
        { name: 'Dean', type: 'adolescent', date: "2022-01-05", id: "13" },
        { name: 'Cora', type: 'women', date: "2022-01-05", id: "14" },
        { name: 'Dina', type: 'teen', date: "2022-01-05", id: "15" },
    ]

    const items = [
        {
            date: '2022-01-01',
            data: [
                { name: 'Akin ', type: 'man', date: "2022-01-01", id: "1" },
                { name: 'Adey', type: 'women', date: "2022-01-01", id: "2" },
                { name: 'Shad ', type: 'child', date: "2022-01-01", id: "3" },

            ]
        },
        {
            date: '2022-01-02',
            data: [
                { name: 'Matt', type: 'adolescent', date: "2022-01-02", id: "4" },
                { name: 'John', type: 'child', date: "2022-01-02", id: "5" },
                { name: 'Adel', type: 'teen', date: "2022-01-02", id: "6" },

            ]
        },
        {
            date: '2022-01-03',
            data: [
                { name: 'Adda', type: 'man', date: "2022-01-03", id: "7" },
                { name: 'Aila', type: 'adolescent', date: "2022-01-03", id: "8" },
                { name: 'Aida', type: 'child', date: "2022-01-03", id: "9" },
            ]
        },
        {
            date: '2022-01-04',
            data: [
                { name: 'Aice', type: 'teen', date: "2022-01-04", id: "10" },
                { name: 'Liam', type: 'women', date: "2022-01-04", id: "11" },
                { name: 'Noah', type: 'man', date: "2022-01-04", id: "12" },

            ]
        },
        {
            date: '2022-01-05',
            data: [
                { name: 'Dean', type: 'adolescent', date: "2022-01-05", id: "13" },
                { name: 'Cora', type: 'women', date: "2022-01-05", id: "14" },
                { name: 'Dina', type: 'teen', date: "2022-01-05", id: "15" },

            ]
        },

    ]

    // the function to set the filter key
    function filter(key) {
        setkey(key)
    }
    function filters(key) {
        setkeys(key)
    }
    // the function to set the filter key


    return (
        <>
            <div className="">
                <div className="">


                    <div className="">
                        <h3 className='Text'>
                            WITHOUT DATE SORTING
                        </h3>
                        <div className="">
                            <div className="Search">
                                <input type="search" name="" id="" onChange={(e) => filter(e.target.value)} />
                                <SearchIcon/>
                            </div>
                            <div className="nav">
                                <button onClick={(e) => filter('')}>all</button>
                                <button onClick={(e) => filter('man')}>man</button>
                                <button onClick={(e) => filter('women')}>women</button>
                                <button onClick={(e) => filter('teen')}>teen</button>
                                <button onClick={(e) => filter('adolescent')}>adolescent</button>
                            </div>
                        </div>
                        <div className="row">

                            {item.filter((x) => x.type
                                .includes(key.toLowerCase()) || x.name.toLowerCase()
                                    .includes(key.toLowerCase()) || x.date
                                        .includes(key.toLowerCase()) || x.id
                                            .includes(key.toLowerCase())).map(({ name, type, date, id }, i) => {
                                                return (
                                                    <>
                                                        <div className="row-list">

                                                            <ul className='transparent'>
                                                                <li>{name} </li>
                                                                <li>{type} </li>
                                                                <li>{date} </li>
                                                                <li>{id} </li>
                                                            </ul>
                                                        </div>
                                                    </>
                                                )
                                            })}
                        </div>
                    </div>




                    <div className="Section">
                        <h3 className='Text'>
                            WITH DATE SORTING
                        </h3>
                        <div className="">
                            <div className="Search">
                                <input type="search" name="" id="" onChange={(e) => filters(e.target.value)} />
                                <SearchIcon/>
                            </div>
                            <div className="nav">
                                <button onClick={(e) => filters('')}>all</button>
                                <button onClick={(e) => filters('man')}>man</button>
                                <button onClick={(e) => filters('women')}>women</button>
                                <button onClick={(e) => filters('teen')}>teen</button>
                                <button onClick={(e) => filters('adolescent')}>adolescent</button>
                            </div>
                        </div>
                        <div className="">

                            {items.map(({ date, data }, i) => {

                                return (
                                    <>
                                        <div className="row">
                                            {date}
                                            {data.filter((x) => x.type
                                                .includes(keys.toLowerCase()) || x.name.toLowerCase()
                                                    .includes(keys.toLowerCase()) || x.date
                                                        .includes(keys.toLowerCase()) || x.id
                                                            .includes(keys.toLowerCase())).map(({ name, type, date, id }, i) => {
                                                                return (
                                                                    <>
                                                                        <div className="row-list">

                                                                            <ul className='transparent'>
                                                                                <li>{name} </li>
                                                                                <li>{type} </li>
                                                                                <li>{date} </li>
                                                                                <li>{id} </li>
                                                                            </ul>
                                                                        </div>
                                                                    </>
                                                                )
                                                            })}
                                        </div>
                                    </>
                                )
                            })}
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;