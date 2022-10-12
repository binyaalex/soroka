import { useState } from 'react';
import MainSquare from '../mainSquare/MainSquare'
// import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';

import Map from '../map/Map'
//images
import logo from '../../assets/icons/soroka-logo.png'
import mapIcon from '../../assets/icons/map-icon.svg'

import general from '../../assets/images/general.jpg'
import lifestyle from '../../assets/images/lifestyle.png'
import patient from '../../assets/images/patient.jpg'
import relligion from '../../assets/images/relligion.jpg'
import services from '../../assets/images/services.jpg'

import niceToMeet from '../../assets/images/general/niceToMeet.jpg'
import ways from '../../assets/images/general/ways.jpg'
import info from '../../assets/images/general/info.jpg'
import security from '../../assets/images/general/security.jpg'
import phone from '../../assets/images/general/phone.png'

import eat from '../../assets/images/lifestyle/eat.jpg'
import garden from '../../assets/images/lifestyle/garden.jpg'

import rights from '../../assets/images/patient/rights.jpg'
import army from '../../assets/images/patient/army.jpg'

import sarah from '../../assets/images/services/sarah.jpg'
import wheelChair from '../../assets/images/services/wheelChair.jpg'
import internet from '../../assets/images/services/internet.jpg'
import tv from '../../assets/images/services/tv.jpg'

import knesset from '../../assets/images/relligion/knesset.jpg'
import kosher from '../../assets/images/relligion/kosher.jpg'
import islam from '../../assets/images/relligion/islam.jpg'

const MainArr = [
    {
        img: general,
        color: 'general',
        text: 'מידע כללי',
        categories: [
            {
                title: 'נעים להכיר',
                img: niceToMeet,
                text: 'סורוקה - מרכז רפואי אוניברסיטאי על-שם משה סורוקה, הוא מרכז שלישוני, שבו יותר מ-1100 מיטות אשפוז. כבית חולים-על, מעניק המרכז הרפואי שירותים רפואיים ליותר ממיליון תושבים בנגב.עוד מידע על סורוקה תמצאו ב',
                link: 'https://hospitals.clalit.co.il/soroka/he/about/Pages/about-the-medical-center.aspx'
            },
            {
                title: 'דרכי גישה, חניה והתמצאות ',
                img: ways,
                text: 'לרשות המגיעים לסורוקה ברכב פרטי, עומד מערך של חניונים בתשלום הפרושים ברחבי המרכז הרפואי. החל מתאריך 1.5.2014 המרכז הרפואי סורוקה התאים את הקריטריונים לקבלת פטור מתשלום דמי חנייה להמלצות משרד הבריאות. למידע נוסף לחצו על ה',
                link: 'https://hospitals.clalit.co.il/soroka/he/patients-Info/Pages/directions.aspx'
            },
            {
                title: 'עמדת מודיעין',
                img: info,
                text: 'אם ברצונכם להגיע למחלקה/יחידה ואינכם יודעים היכן היא נמצאת, תוכלו לפנות לעמדת המויעין על פי ה',
                link: 'https://hospitals.clalit.co.il/soroka/he/patients-Info/Pages/information.aspx'
            },
            {
                title: 'מחלקת ביטחון',
                img: security,
                text: 'מחלקת הביטחון עוסקת בשמירה על בטחונם של כל באי המרכז הרפואי סורוקה. לפירוט על תחומי הפעילות תוכלו ללחוץ על ה',
                link: 'https://hospitals.clalit.co.il/soroka/he/about/management/Pages/admin-security.aspx'
            },
            {
                title: 'מספרי טלפון שימושיים',
                img: phone,
                text: 'לשירתוכם, תמצאו בכתבה המצורפת מספרי טלפון חיוניים שיסייעו לכם בקבלת השירות הרצוי, ב',
                link: 'https://hospitals.clalit.co.il/soroka/he/about/Pages/contact-us.aspx'
            }
        ]
    },
    {
        img: lifestyle,
        color: 'lifestyle',
        text: 'נוחות ופנאי',
        categories: [
            {
                title: 'איפה אוכלים?',
                img: eat,
                text: 'איפה דוכן הקפה הקרוב אליי? אלו חנויות נמצאות ברחבי בית החולים? ואיפה יש מכונות אוטומטיות לקניית שתייה וחטיפים? ריכזנו הכל במדריך אחד ב',
                link: 'https://hospitals.clalit.co.il/soroka/he/patients-Info/Pages/maternity-area--food.aspx'
            },
            {
                title: 'גן רוגע',
                img: garden,
                text: 'מקום למאושפזים ולבני משפחותיהם להתרגעות, לשקט ולמנוחה. פרטים ב',
                link: 'https://hospitals.clalit.co.il/soroka/he/patients-Info/Pages/sculptures.aspx'
            },
        ]
    },
    {
        img: patient,
        color: 'patient',
        text: 'זכויות המטופל',
        categories: [
            {
                title: 'מרכז מידע למיצוי זכויות',
                img: rights,
                text: 'במרכז הרפואי סורוקה, בשיתוף עם משרד הבריאות, פועל מרכז למיצוי זכויות הנובעות ממצב בריאותי. מטרת המרכז היא להעניק למטופלים ולבני משפחתם מידע, ליווי וסיוע במימוש זכויות המגיעות להם מגופים ממשלתיים, מהרשות המקומית ומגורמים נוספים. השירות ניתן ללא תשלום ומופעל על ידי עובדים סוציאליים ורכזי מיצוי זכויות, מטעם משרד הבריאות. פרטים ב',
                link: 'https://hospitals.clalit.co.il/soroka/he/patients-Info/Pages/rights-center.aspx'
            },
            {
                title: 'מידע לחיילים הפונים למיון',
                img: army,
                text: 'חיילים יקרים, לפני פנייתכם למיון, חשוב שתדעו מהם המקרים בהם את רשאים לפנות למיון ללא הפנייה מרופא צבאי ומהם המקרים בהם אתם מחוייבים בהפנייה. הכתבה המצורפת תעשה לכם סדר, ב',
                link: 'https://hospitals.clalit.co.il/soroka/he/patients-Info/Pages/soldiers.aspx'
            },

        ]
    },

    {
        img: services,
        color: 'services',
        text: 'שירותים מיוחדים',
        categories: [
            {
                title: 'יד שרה',
                img: sarah,
                text: '​עמותת יד שרה מפעילה סניף במרכז הרפואי סורוקה, לטובת שירותי השאלת ציוד רפואי. אם הטיפול או השיקום שלכם מחייב קביים, כיסא גלגלים או עזרים אחרים, כאן תמצאו את המידע שיעזור לכם, ב',
                link: 'https://hospitals.clalit.co.il/soroka/he/patients-Info/Pages/yad-sara.aspx'
            },
            {
                title: 'כיסאות גלגלים להשאלה',
                img: wheelChair,
                text: 'ברחבי בית החולים מוצבות חמש תחנות עגינה שבהן כ-50 כסאות גלגלים להשאלה בכל שעות היממה. השירות אינו כרוך בתשלום ובתום השימוש עליכם להחזיר את הכיסאות לאחת מהתחנות. לפרטים לחצו על ה',
                link: 'https://hospitals.clalit.co.il/soroka/he/patients-Info/Pages/wheelchairs-for-borrowing.aspx'
            },
            {
                title: 'שירותי אינטרנט',
                img: internet,
                text: 'במרכז הרפואי סורוקה קיימת רשת תקשורת אלחוטית באצמעותה תוכלו לגלוש באינטרנט ללא תשלום. פרטים נוספים ב',
                link: 'https://hospitals.clalit.co.il/soroka/he/patients-Info/Pages/internet.aspx'
            },
            {
                title: 'השכרת מקלטי טלוויזיה',
                img: tv,
                text: 'בעת האשפוז במלחקה תוכלו ליהנות מצפייה במכשיר טלוויזיה שיותקן סמוך למיטתכם. השירות ניתן בתשלום. פלרטים נוספים לחצו על ה',
                link: 'https://hospitals.clalit.co.il/soroka/he/patients-Info/Pages/televisions.aspx'
            }
        ]
    },
    {
        img: relligion,
        color: 'relligion',
        text: 'שירותי דת',
        categories: [
            {
                title: 'בית כנסת',
                img: knesset,
                text: 'בית הכנסת בבית החולים פתוח לשימוש עובדי בית החולים, המטופלים והמבקרים בו. מידע על שעות פעילות וכן פעילויות נוספות המתקיימות בבית הכנסת, תוכלו למצוא ב',
                link: 'https://hospitals.clalit.co.il/soroka/he/about/management/Pages/admin-religserv-synagogue.aspx'
            },
            {
                title: 'מחלקת דת וכשרות',
                img: kosher,
                text: 'המחלקה לדת ולכשרות בבית החולים מטפלת בנושאים רבים הקשורים בשמירה על חוקי הכשרות ומנהגי חג ושבת. בכתבה המצורפת תוכלו לקרוא על מגוון תחומי הטיפול של היחידה, ב',
                link: 'https://hospitals.clalit.co.il/soroka/he/about/management/Pages/admin-religserv.aspx'
            },
            {
                title: 'חדר תפילה לציבור המוסלמי',
                img: islam,
                text: 'לרשות הציבור המוסלמי קיים בבית החולים חדר תפילה. לפרטים, לחצו על ה',
                link: 'https://hospitals.clalit.co.il/soroka/he/about/management/Pages/admin-religserv-muslim-prayer-room.aspx'
            }
        ]
    },
]
const Main = () => {
    const [mainSelect, setMainSelect] = useState('');
    const [subSelect, setSubSelect] = useState();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const openMap = () => {
        const popup = document.querySelector('.map').parentElement
        console.log(popup);
        popup.style.display = "block";
    }


    return (
        <>
            <main className='mainPage' >
                <div className='pageNav'>
                    <img onClick={handleShow} src={mapIcon} />
                    <img src={logo} />

                </div>
                {MainArr.map((el, i) => {
                    return (
                        <MainSquare
                            color={el.color}
                            img={el.img}
                            text={el.text}
                            key={i}
                            categories={el.categories}
                            mainSelect={mainSelect}
                            subSelect={subSelect}
                            setMainSelect={setMainSelect}
                        />
                    )
                })}
                <Map show={show} setShow={setShow} />
                <footer>
                    <BsFillChatDotsFill size='3em' style={{ color: 'var(--blue)' }} />
                    <a className='clalit' href="https://www.clalit.co.il" >אתר כללית</a>
                    <a className='soroka' href="https://hospitals.clalit.co.il/soroka/he/Pages/default.aspx" >אתר סורוקה</a>
                </footer>
            </main>
        </>
    )
}

export default Main