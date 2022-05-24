import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Carousel() {

    const style = {
        width: 600,
        height:300,
        margin: 40,

    }

    const texts: string[] = [
        '"את אסון לעולם"',
        '"בחיים לא תסתדרי בלעדיי"',
        '"את לא שווה כלום"',
        '"אפילו המשפחה שלך לא סובלת אותך"',
        '"יותר טוב לילדים בלעדייך"',
        '"את לא מתפקדת"'
    ]

    return (
        <AwesomeSlider style={style}>
            {texts.map((text: string) => (
                <div style={{color: "white", fontSize: 35}}>{text}</div>
            ))}
        </AwesomeSlider>
    );
}

export default Carousel;
