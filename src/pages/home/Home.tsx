import { ControlPanel } from "../../components/controlPanel";
import { Navbar } from "../../components/navbar";
import { Paper } from "../../components/paper";
import { TasksList } from "../../components/tasksList";
import { useGetTasksFromLC } from "../../hooks";
import styles from "./Home.module.css";

const Home = () => {
    useGetTasksFromLC();

    return (
        <section className={styles.home}>
            <div className={styles["papers-wrapper"]}>
                <ControlPanel />
                <Paper className={styles["todolist-paper"]}>
                    <Navbar />
                    <TasksList />
                </Paper>
            </div>
        </section>
    );
};

export default Home;
