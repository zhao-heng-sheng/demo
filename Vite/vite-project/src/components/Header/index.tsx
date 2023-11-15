import styles from "./index.module.scss";
export function Header() {
    console.log(styles);
    return (
        <div className="p-40px text-center">
            <p>sadfas</p>
            <button bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="sm white" font="mono light" p="y-2 x-4" border="2 rounded blue-200">
                Button
            </button>
            <p className={styles.x}>This is Header</p>
        </div>
    );
}
