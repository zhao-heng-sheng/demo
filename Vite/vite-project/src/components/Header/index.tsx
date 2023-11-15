import styles from "./index.module.scss";
import logoSrc from '@assets/imgs/vite.jpg'
// import { ReactComponent as ReactLogo } from '@assets/react.svg'
export function Header() {
    console.log(styles);
    return (
        <div className={styles.header}>
            {/* <ReactLogo /> */}
            <div>
                <img src={logoSrc} alt="" />
            </div>
            <p>sadfas</p>
            <button bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="sm white" font="mono light" p="y-2 x-4" border="2 rounded blue-200">
                Button
            </button>

            <p className={styles.x}>This is Header</p>
        </div>
    );
}
