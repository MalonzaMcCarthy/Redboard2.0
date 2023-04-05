import styles from './menu.module.scss';
import classNames from 'classnames';
import { sortBy, genres } from '../../data';
import { useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    // const [type, setType] = useState<string>('All');
    // const [genre, setGenre] = useState<string>('All');

    const { dispatch, state } = useContext(SearchContext);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="https://i.imgur.com/zYa4iMN.png" className={styles.logoImg} />
                <h6 className={styles.logoText}>RedBoard</h6>
            </div>
            <span className={styles.queryTitle}>
                An Entertainment platform made for students that allows users to search for movies
                by title, sort them by genre, view trending and upcoming movies, and bookmark their
                favorite movies.{' '}
            </span>
            <span className={styles.queryTitle}>TYPE</span>
            <hr className={styles.hr} />
            <ul className={styles.menuList}>
                {sortBy.map((item) => (
                    <li
                        className={classNames(
                            styles.listItem,
                            state.sortBy === item.q && styles.active
                        )}
                        key={item.q}
                        onClick={() => dispatch({ type: 'SORT_BY', payload: item.q })}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <span className={styles.queryTitle}>GENRE</span>
            <hr className={styles.hr} />
            <ul className={styles.menuList}>
                {genres.map((item) => (
                    <li
                        onClick={(e) => dispatch({ type: 'ADD_GENRE', payload: item.id })}
                        className={classNames(
                            styles.listItem,
                            state.genre === item.id && styles.active
                        )}
                        key={item.id}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <a href="https://github.com/MalonzaMcCarthy" className={styles.github}>
                Github
            </a>
        </div>
    );
};
