import { useSelector, useDispatch } from "react-redux";
import {
    addText,
    removeText,
    addtranslate,
    removetranslate,
    changeFont,
} from "./FontSizeSlice";
import { changeQari} from "./SoundSlice";
import "./FontSize.css";

const FontSize = () => {
    const dispatch = useDispatch();

    const fontSizeText = useSelector((state) => state.fontSize.value.font);
    const fontSizeTranslate = useSelector((state) => state.fontSize.value.fontTranslate);

    const fontFamily = useSelector((state) => state.fontSize.value.fontFamily);

    return (
        <div className="fontsizefamily">
            <div className="buttonsizetext">
                <div className="fontsizesurah">
                    <p> سایز فونت سوره : </p>
                    <p>{fontSizeText}</p>
                </div>

                <div className="addfontsize">
                    <button onClick={() => dispatch(addText())}>Add</button>
                </div>

                <div className="removefontsize">
                    <button onClick={() => dispatch(removeText())}>Remove</button>
                </div>

                <div className="textsize">
                    <p style={{ fontSize: `${fontSizeText}px` }}></p>
                </div>
            </div>

            <div className="fontsizetranslate">
                <div className="texttranslate"style={{ fontFamily: fontFamily }}>
                    <p> سایز فونت ترجمه: </p>
                    <p>{fontSizeTranslate}</p>
                </div>

                <div className="addfontsize">
                    <button onClick={() => dispatch(addtranslate())}>Add</button>
                </div>

                <div className="removefontsize">
                    <button onClick={() => dispatch(removetranslate())}>Remove</button>
                </div>

                <div className="textsize">
                    <p style={{ fontSize: `${fontSizeTranslate}px` }}></p>
                </div>
            </div>

            <div>
                <div className="fontfamilysurah">
                    <p> نوع فونت سوره </p>
                </div>

                <div>
                    <button onClick={() => dispatch(changeFont("vazir"))}>Vazir</button>
                </div>

                <div>
                    <button onClick={() => dispatch(changeFont("yekan"))}>Yekan</button>
                </div>

                <p style={{ fontFamily: fontFamily }}></p>
            </div>

            <div>
                <div className="fontfamilysurah">
                    <p> نوع قاری : </p>
                </div>

                <div>
                    <button onClick={() => dispatch(changeQari("minshawi"))}>منشاوی</button>
                </div>

                <div>
                    <button onClick={() => dispatch(changeQari("husary"))}>خلیل الحصری</button>
                </div>
            </div>
        </div>
    );
};
export default FontSize;
