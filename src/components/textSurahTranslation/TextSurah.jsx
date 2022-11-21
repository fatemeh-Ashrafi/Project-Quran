import './TextSurah.css'
import { QuranData } from "../../data/quran-metadata";
import JsonData from "../../data/quran-text-emla.json";
import Translation from '../../data/quran-translate.fa.makarem.json';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { IconTextSurah } from '../../svg/IconTextSurah';
import Theme from '../../setting/theme/Theme';
import "../../font/IRANSansWeb_Black.ttf"
import { useCallback, useEffect , useState ,useRef} from 'react';
import { ButtonPlay } from '../../svg/IconButtonPlay';
import { ButtonStop } from '../../svg/IconButtonStop';

export default function TextSurah() {
   
   const ref = useRef(null)
    const param = useParams();
    const [surahData,setSurahData] = useState({index: null, maxAyahNumber: null, text: [], textTranslate: []})
    useEffect(() => {
        const dataIndex = QuranData.Suras.findIndex((item)=>{
            return item[4] === param.id;
        })
        const data = QuranData.Suras[dataIndex]
        const text = JsonData.slice(data[0],data[0] + data[1]);
        const textTranslate = Translation.slice(data[0],data[0] + data[1]);
        setSurahData({index: dataIndex, text, textTranslate, maxAyahNumber: data[1]})
    }, [param])

    const fontSizeText = useSelector((state) =>state.fontSize.value.font);
    const fontSizeTranslate= useSelector((state) =>state.fontSize.value.fontTranslate);

    const fontFamily = useSelector((state) => state.fontSize.value.fontFamily);

    const qari = useSelector((state) => state.sound.qari);

    const [audioData, setAudioData] = useState({
        ayahNumber: null,
        src: ''
    })

    const audioEl = useCallback(() => <audio  ref={ref}  src={audioData.src} onEnded={() => handleChangeAudioSrc(audioData.ayahNumber + 1)} autoPlay={true} />, [audioData])

    const handleChangeAudioSrc = (number) => {
        if(number > surahData.maxAyahNumber) return
        const surahNumber = `00${surahData.index + 1}`.slice(-3)
        const ayahNumber = `00${number}`.slice(-3)
        const src = `http://tanzil.net/res/audio/${qari}/${surahNumber}${ayahNumber}.mp3`
        setAudioData({
            ayahNumber: number,
            src,
        })
    }
    function handelStopPlay() {
        const audio = ref.current;
        return audio.pause();
    }
    return(
        <div className='surahtext' style={{backgroundColor: `${Theme}`}} >
            {audioEl()}
            <div className='headerquran'>
                <div className='image'>
                    <img src="https://app.nasimrezvan.com/assets/quran-backdrop.7b12a1e.svg"  />
                </div>
                <div className='icontextsurah'><IconTextSurah/></div>
            </div>

            {surahData.text.map((item,index)=>{
                return( 
                <div key={index} className={`itemsurah ${ index === +audioData.ayahNumber - 1 ? 'itemsurah--playing': ''}`}>
                    <div className='surah'style={{fontSize:`${fontSizeText}px`}} >{item}</div>
                    <div className='translate'
                        style={{fontSize:`${fontSizeTranslate}px`,fontFamily:fontFamily}}>{surahData.textTranslate[index]}
                    </div>
                    <div className='iconbutton'>
                    <div onClick={() => handleChangeAudioSrc(index + 1)} className="buttonplay">
                        <ButtonPlay/>
                    </div>
                    <div onClick={() => handelStopPlay()} className="buttonstop">
                        <ButtonStop/>
                    </div>
                    </div>               
                </div>
                )  
            })}
        </div>   
    )
}