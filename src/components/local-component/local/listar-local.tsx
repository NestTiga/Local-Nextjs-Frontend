//import { fetchLocalStores } from "app/services/local-service/local";
import style from "./local.module.sass";

interface Locale {
    id: number;
    name: string;
    location: string;
}

const locales: Locale[] = [
    { id: 1, name: 'Locale 1', location: 'Location 1' },
    { id: 2, name: 'Locale 2', location: 'Location 2' },
    { id: 3, name: 'Locale 3', location: 'Location 3' },
];

export const ListarLocal = async () => {
    //const localesListado= await fetchLocalStores();
    //console.log(localesListado)
    return (
        <div className={style.Local}>
            <h1>List of Locales</h1>
            <ul>
                {locales.map((locale) => (
                    <li key={locale.id}>
                        <h2>{locale.name}</h2>
                        <p>{locale.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
