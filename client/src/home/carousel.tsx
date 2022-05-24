import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Carousel() {

    const style = {
        width: 600,
        height:300,
        margin: 50
    }

    return (
        <AwesomeSlider style={style}>
            <div data-src="https://scontent.ftlv7-1.fna.fbcdn.net/v/t39.30808-6/265577753_7287408307951431_1509598764210386736_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=49nHNJ9H9QMAX-oOrMr&tn=Yyv7KSsXN0FFwQQ9&_nc_ht=scontent.ftlv7-1.fna&oh=00_AT_HRdvHXRl3KZucQYCKd_sQ27_fIPtkZPmfXcbaYWRW-g&oe=62917224">1</div>
            <div data-src="https://scontent.ftlv7-1.fna.fbcdn.net/v/t1.6435-9/197083250_6290747760950829_1869851587776506060_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=f_y8Ef7o6Y4AX9_d6IH&_nc_ht=scontent.ftlv7-1.fna&oh=00_AT9GLlk6cmsM4iTW-nTlx8zeoicRbzp8kwqs3b7VMBMVhw&oe=62B2A21E">2</div>
            <div data-src="https://scontent.ftlv7-1.fna.fbcdn.net/v/t1.6435-9/73203271_3711602132198751_8442612381908992000_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=xdabvAjs4j0AX9UWa89&_nc_ht=scontent.ftlv7-1.fna&oh=00_AT_pxeqhFC3rKoKy95XsjLO4ddSJ32ZC9VwE9Sr9TlGS0w&oe=62B3154D">3</div>
            <div data-src="https://scontent.ftlv7-1.fna.fbcdn.net/v/t1.18169-9/1001879_673897642635897_1678909310_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=g3GCuTor-lkAX_BF6sc&_nc_ht=scontent.ftlv7-1.fna&oh=00_AT9DByv7uCBJa_66QFdaHRsO9QMUE8ziGvfow9OZycKr9Q&oe=62B273C7">4</div>
        </AwesomeSlider>
    );
}

export default Carousel;
