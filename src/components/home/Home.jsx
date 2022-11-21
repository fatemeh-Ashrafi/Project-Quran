import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import {Quran} from '../../svg/IconQuran';
import { Book } from "../../svg/IconBook";
import {Setting} from '../../svg/IconSetting';

export default function Home() {

  return (
    <div className='home'>
        <div className='iconquran'>
            <Link  to="/search" style={{textDecoration:"none"}}>
                <div className='quran'><Quran/></div> 
                <div className='book'><Book/></div> 
            </Link>
            <div className='textsurah'>قرآن</div>
        </div>

        <div className='iconsetting'>
            <Link to="/setting" style={{textDecoration:"none"}}>
                <div className='quran'><Quran/></div> 
                <div className='settingsvg'><Setting/></div> 
            </Link>
            <div className='textsetting'>تنظیمات</div>
        </div>
    </div>
  )
}
