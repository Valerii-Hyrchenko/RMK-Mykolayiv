import assemblyImg from "../assets/img/assembly.webp";
import projectImg from "../assets/img/project.webp";
import distributionImg from "../assets/img/distribution.webp";
import phoneImg from "../assets/icons/phone.svg";
import emailImg from "../assets/icons/email.svg";
import locationImg from "../assets/icons/location.svg";
import missionImg from "../assets/img/mission.webp";
import targetImg from "../assets/img/target.webp";
import arrowNextProjectStage from "../assets/icons/arrow_next_project_stage.svg";
import firstProjectStage from "../assets/img/first_project_stage.webp";
import supplyProjectStage from "../assets/img/supply_project_stage.webp";
import assemblingProjectStage from "../assets/img/assembling_project_stage.webp";
import finalProjectStage from "../assets/img/final_project_stage.webp";
import factory from "../assets/img/factory.webp";
import generator from "../assets/img/generator.webp";

let id = Date.now();

export const headerUkr = [
  {
    id: id++,
    text: "НАПРЯМИ ДІЯЛЬНОСТІ",
  },
  {
    id: id++,
    text: "ПРО КОМПАНІЮ",
  },
  {
    id: id++,
    text: "КОНТАКТИ",
  },
  {
    id: id++,
    text: "НОВИНИ",
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
    text: "впровадження оптимальних, безпечних та якісних інженерних електротехнічних рішень в новому будівництві, оновлені та відбудові існуючих об’єктів.",
    fullDescription1:
      "Ми завжди дотримуємось високих стандартів якості та безпеки, що дозволяє нам надавати найкращий сервіс для Клієнтів  та забезпечити ефективну роботу нашої команди. Спеціалісти компанії мають відповідний досвід, високий рівень кваліфікації, надійні та сучасні інструменти для проведення робіт.",
    fullDescription2:
      "Ми постійно стежимо за новими тенденціями та технологіями у своїй галузі, щоб запропонувати нашим Клієнтам найсучасніші та ефективні рішення, які забезпечать повну задоволеність їх потреб та очікувань.",
    name: "Олександр ДЕРМІЛЬОВ,",
    position: "директор",
    img: missionImg,
  },
  {
    id: id++,
    preText: "Ціль...",
    text: "бути ефективним та лідируючим провайдером з електромонтажних  робіт та інжинірингу.",
    img: targetImg,
  },
];

export const projectStagesUkr = {
  title: "етапи реалізації проекту",
  arrowImg: arrowNextProjectStage,
  description: [
    {
      id: id++,
      itemTitle: "проектування",
      img: firstProjectStage,
      itemText: "… починається з оформлення технічного завдання",
    },
    {
      id: id++,
      itemTitle: "поставка матеріалів",
      img: supplyProjectStage,
      itemText: "закупка та поставка запроектованих матеріалів та обладнання",
    },
    {
      id: id++,
      itemTitle: "монтажні роботи",
      img: assemblingProjectStage,
      itemText:
        "погодження організаційних питань та графіку  з Замовником,  виконання робіт",
    },
    {
      id: id++,
      itemTitle: "оформлення виконавчої документації",
      img: finalProjectStage,
      itemText:
        "завершення робіт, оформлення та передача Замовнику відповідної документації, журналів та Актів",
    },
  ],
};

export const contactsUkr = [
  {
    id: id++,
    img: phoneImg,
    title: "ТЕЛЕФОН",
    info: "+ 38 (067) 495 24 95",
  },
  {
    id: id++,
    img: emailImg,
    title: "ПОШТА",
    info: "aleksandr.dermilov @ukr.net",
  },
  {
    id: id++,
    img: locationImg,
    title: "АДРЕСА",
    info: "54037, Україна, м.Миколаїв, вул.Приміська, буд.64/2",
  },
];

export const missionUkr = {
  id: id++,
  text: "ефективні, безпечні та якісні рішення",
  footerName: "© 2023 РМК-МИКОЛАЇВ",
};

export const sectionsTitles = {
  businessLine: {
    id: id++,
    text: "Напрями діяльності",
  },
  aboutCompany: {
    id: id++,
    text: "Про компанію",
  },
  contacts: {
    id: id++,
    text: "Контакти",
  },
  news: {
    id: id++,
    text: "Головні новини",
  },
};

export const assemblyDetailsUkr = {
  id: id++,
  title: "Ми пропонуємо наступні послуги з монтажу:",
  info: [
    { id: id++, text: "монтаж кабельних трас та кабелів 0,4кВ;" },
    { id: id++, text: "монтаж контрольних кабельних мереж;" },
    { id: id++, text: "монтаж та підключення щитів 0,4кВ;" },
    {
      id: id++,
      text: "монтаж та підключення контрольно-вимірювальних приладів;",
    },
    { id: id++, text: "монтаж внутрішнього освітлення;" },
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
        text: "проектування розділу ЕТР (розташування обладнання, кабельні траси 0,4кВ, мережі 0,4кВ, схеми щитів, заземлення, розеткові мережі);",
      },
      {
        id: id++,
        text: "проектування розділу АК (контрольні мережі, підключення КВП);",
      },
      {
        id: id++,
        text: "проектування розділів ЕО та ЕЗ;",
      },
      {
        id: id++,
        text: "проектування розділу БЗ (блискавкозахист);",
      },
      {
        id: id++,
        text: "розробка проектно-кошторисної документації.",
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
    { id: id++, text: "кабельно-провідникова продукція;" },
    { id: id++, text: "лотки та кабельні конструкції;" },
    { id: id++, text: "електрощитове обладнання." },
  ],
};

export const articlesNewsUkr = [
  {
    id: id++,
    attributes: {
      title: "Участь у відновленні заводу після російської агресії",
      img: factory,
      article: [
        {
          id: id++,
          paragraph: `Наша компанія була вдячна за надану довіру та можливість прийняти участь у відновленні заводу, 
          який зазнав великих руйнувань внаслідок російської агресії.`,
        },
        {
          id: id++,
          paragraph: `В якості підрядника було виконано великий спектр електромонтажних та пусконалагоджувальних робіт, 
          серед яких демонтаж пошкодженого устаткування та монтаж нового, монтаж силових та контрольних кабельних трас, 
          підключення та налагоджування обладнання.`,
        },
        {
          id: id++,
          paragraph: `Не дивлячись на суттєві ризики виконання робіт у прифронтовій зоні, всі роботи були виконані вчасно та якісно.`,
        },
        {
          id: id++,
          paragraph: `Період виконання робіт: липень – вересень 2023р.`,
        },
      ],
      readMore: "читати далі...",
    },
  },
  {
    id: id++,
    attributes: {
      title: "Монтаж та підключення дизельного-генератору 1 МВт",
      img: generator,
      article: [
        {
          id: id++,
          paragraph: `Перед нашою компанією постало завдання підключити до мереж існуючої ТП дизель-генератор (ДГ) 1250 кВА 
                      (Standby) відповідно до розробленої проектної документації.`,
        },
        {
          id: id++,
          paragraph: `В рамках цих робіт ми виконали:`,
        },
        {
          id: id++,
          paragraph: `- підготували фундамент для встановлення ДГ;`,
        },
        {
          id: id++,
          paragraph: `- проклали кабельні траси, використовуючи лотки OBO Bettermann;`,
        },
        {
          id: id++,
          paragraph: `- проклали кабелі ВВГнг необхідного перерізу в траншеях та по кабельних конструкціях;`,
        },
        {
          id: id++,
          paragraph: `- проклали кабелі власних потреб ДГ;`,
        },
        {
          id: id++,
          paragraph: `- виконали монтаж зовнішнього контуру заземлення (OBO Bettermann);`,
        },
        {
          id: id++,
          paragraph: `- підключили обладнання.`,
        },
        {
          id: id++,
          paragraph: `Всі роботи були виконані вчасно та якісно.`,
        },
        {
          id: id++,
          paragraph: `Місце проведення робіт: м. Миколаїв.`,
        },
        {
          id: id++,
          paragraph: `Період виконання робіт: травень 2023р.`,
        },
      ],
      readMore: "читати далі...",
    },
  },
];
