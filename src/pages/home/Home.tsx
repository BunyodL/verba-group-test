import styles from "./Home.module.css";
import Navbar from "../../components/navbar/Navbar";
import { Paper } from "../../components/paper";
import { ControlPanel } from "../../components/controlPanel";

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles["papers-wrapper"]}>
                <ControlPanel />

                <Paper>
                    <Navbar />
                </Paper>
            </div>
        </section>
    );
};

export default Home;
