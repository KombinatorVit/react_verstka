import style from './Main.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>

                <div className={style.text}><span>Hi there</span>

                    <h1>
                        I am Groot!
                    </h1>
                    <p>
                        I React Developer
                    </p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;


