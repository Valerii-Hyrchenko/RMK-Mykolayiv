import assemblyImg from "../assets/img/assembly.webp";
import projectImg from "../assets/img/project.webp";
import distributionImg from "../assets/img/distribution.webp";
import phoneImg from "../assets/icons/phone.svg";
import emailImg from "../assets/icons/email.svg";
import locationImg from "../assets/icons/location.svg";

let id = Date.now();

export const headerUkr = [
  {
    id: id++,
    text: "ПРО КОМПАНІЮ",
    routWay: "/about_company",
  },
  {
    id: id++,
    text: "НАПРЯМИ ДІЯЛЬНОСТІ",
    routWay: "/business_line",
  },
  {
    id: id++,
    text: "КОНТАКТИ",
    routWay: "/contacts",
  },
  {
    id: id++,
    text: "НОВИНИ",
    routWay: "/news",
  },
];

export const businessLineUkr = [
  {
    id: id++,
    img: assemblyImg,
    title: "МОНТАЖНІ РОБОТИ",
  },
  {
    id: id++,
    img: projectImg,
    title: "ПРОЕКТУВАННЯ",
  },
  {
    id: id++,
    img: distributionImg,
    title: "ДИСТРИБУЦІЯ",
  },
];

export const aboutCompanyUkr = [
  {
    id: id++,
    preText: "Місія...",
    text: "впровадження ефективних, безпечних та якісних інженерних рішень для підприємств.",
  },
  {
    id: id++,
    preText: "Ціль...",
    text: "бути ефективним та лідируючим провайдером з інжинірингу та монтажних робіт. ",
  },
  {
    id: id++,
    text: "Ми завжди дотримуємося високих стандартів якості та безпеки, що дозволяє нам надавати найкращий сервіс для Клієнтів  та забезпечити ефективну роботу нашої команди. Спеціалісти компанії мають відповідний досвід, високий рівень кваліфікації, надійні та сучасні інструменти для проведення робіт. Ми завжди стежимо за новими тенденціями та технологіями у своїй галузі, щоб забезпечити Клієнтів найсучаснішими та ефективнішими рішеннями. Готові відповісти на всі запитання та запити наших Клієнтів, щоб забезпечити повну задоволеність їх потреб та очікувань.",
  },
];

export const contactsUkr = [
  {
    id: id++,
    img: phoneImg,
    title: "ТЕЛЕФОН",
    info: "+38(099)999-99-99",
  },
  {
    id: id++,
    img: emailImg,
    title: "ПОШТА",
    info: "mylogin@gmail.com",
  },
  {
    id: id++,
    img: locationImg,
    title: "АДРЕСА",
    info: "54000, м.Миколаїв, вул. Якась вулиця імені Мене, буд.99, офіс №999",
  },
];

export const newsUkr = [
  {
    id: id++,
    title: "Заголовок новини 1",
    text: "",
  },
  {
    id: id++,
    title: "Заголовок новини 2",
    text: "",
  },
  {
    id: id++,
    title: "Заголовок новини 3",
    text: "",
  },
  {
    id: id++,
    title: "Заголовок новини 4",
    text: "",
  },
  {
    id: id++,
    title: "Заголовок новини 5",
    text: "",
  },
  {
    id: id++,
    title: "Заголовок новини 6",
    text: "",
  },
  {
    id: id++,
    title: "Заголовок новини 7",
    text: "",
  },
  {
    id: id++,
    title: "Заголовок новини 8",
    text: "",
  },
];

export const missionUkr = {
  id: id++,
  text: "ефективні, безпечні та якісні рішення",
};

export const assemblyDetailsUkr = {
  id: id++,
  title: "Ми пропонуємо наступні послуги з монтажу:",
  info: [
    { id: id++, text: "монтаж кабельних трас та кабелів 0,4кВ;" },
    { id: id++, text: "монтаж контрольних кабельних мереж;" },
    { id: id++, text: "монтаж та підключення щитів 0,4кВ;" },
    { id: id++, text: "монтаж та внутрішнього освітлення;" },
    { id: id++, text: "монтаж зовнішнього освітлення;" },
    { id: id++, text: "монтаж контурів заземлення;" },
    { id: id++, text: "монтаж трас кабелів 6-10кВ;" },
    { id: id++, text: "пусконалагоджувальні роботи." },
  ],
};

export const projectsDetailsUkr = [
  {
    id: id++,
    title: "Ми пропонуємо наступні послуги з проектування:",
    info: [
      {
        id: id++,
        text: "проектування розділу ЕП (електропостачання, мережі 6-10кВ);",
      },
      {
        id: id++,
        text: "проектування розділів ЕТР (розташування обладнання, кабельні траси 0,4кВ, мережі 0,4кВ, схеми щитів, заземлення, розеткові мережі);",
      },
      {
        id: id++,
        text: "проектування розділів АК (контрольні мережі, підключення КВП);",
      },
      {
        id: id++,
        text: "проектування розділів ЕО та ЕЗ;",
      },
      {
        id: id++,
        text: "проектування розділів БЗ (блискавкозахист);",
      },
      {
        id: id++,
        text: "розробка проектної кошторисної документації.",
      },
    ],
  },
  {
    id: id++,
    title: "Додатково пропонуємо:",
    info: [
      {
        id: id++,
        text: "супровід при проходженні експертизи розробленої нами проектної Документації;",
      },
      {
        id: id++,
        text: "розробку, відновлення проектної документації для існуючого обладнання;",
      },
      {
        id: id++,
        text: "бюджетні розрахунки для САРЕХ проектів електротехнічного напряму.",
      },
    ],
  },
];

export const distributionDetailsUkr = {
  id: id++,
  title:
    "Ми будемо раді запропонувати наступні матеріали та обладнання від офіційних постачальників на території України:",
  info: [
    { id: id++, text: "електротехнічне обладнання;" },
    { id: id++, text: "кабелі;" },
    { id: id++, text: "лотки та кабельні конструкції;" },
    { id: id++, text: "електрощитове обладнання." },
  ],
};
