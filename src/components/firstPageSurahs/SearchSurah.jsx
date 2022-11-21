import React, { useState } from 'react';
import "./SearchSurah.css";
import { QuranData } from '../../data/quran-metadata';
import {Text} from "../../svg/IconText";
import { Link } from "react-router-dom";
import { Play } from "../../svg/IconPlay";
import { Number } from "../../svg/IconNumber";

function SearchSurah() {

    const [searchSurah, setSearchSurah] = useState(QuranData.Suras); 
    const handelFilter = (e) => { 
        const value = e.target.value;
        if (value === "") { 
            setSearchSurah(QuranData.Suras); 
        } else { 
            const filter = QuranData.Suras.filter((item) => { 
                return item[4].includes(value.toLowerCase()); 
            }); 
            setSearchSurah(filter); 
        } 
    };
    return(
        <div className='menusurah'>
            <div className="header"><Text/></div>
            <h3 className="title">سوره</h3>
            <input 
                type="text" 
                className="input" 
                placeholder="نام سوره را تایپ کنید ..." 
                onChange={(e) => handelFilter(e)}
            />
            {searchSurah?.map((item,index) => {
                return(
                    <div className="body" key={index}>
                        <div className='surah'>
                            <Link to={`/surah/${item[4]}`} style={{textDecoration:'none'}}>

                                <div className='stylesvg'>
                                    <div className="itemsurahtext">
                                        <div className="numbersurah">
                                           <span className="countsourh">{index+=1}</span>
                                           <div className="number"><Number/></div>
                                        </div>
                                        {item[4]}
                                   </div>

                                   <div className='iconplay'>
                                        <div classNam="play"><Play/></div>
                                    </div>

                                </div>    
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default SearchSurah;