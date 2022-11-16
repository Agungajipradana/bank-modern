import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h3 className={styles.heading3}>
        Find a better card deal <br className="sm:block hidden" /> in few easy steps.
      </h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%] " />
    </div>
  </section>
);

export default CardDeal;
