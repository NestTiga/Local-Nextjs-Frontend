import { NextPage } from 'next';
import styles from './local.module.css';

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

const LocalesPage: NextPage = () => {
    return (
        <div className={styles.main}>
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

export default LocalesPage;