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
            <button >
                Button
            </button>

            <p className={styles.x}>This is Header</p>
        </div>
    );
}
