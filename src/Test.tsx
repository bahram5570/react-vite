// eslint-disable-next-line import/no-absolute-path
import { ReactComponent as SvgEl } from './assets/svg.svg';

const Test = () => {
  const list1 = ['a', 'b', 'c'];
  const list2 = { a: 1, b: 2 };

  return (
    <div>
      <img src="/src/assets/png.png" alt="sdfs" />

      <SvgEl />

      <button
        type="button"
        id="testing_button"
        className="main"
        style={{ background: '#ff0000' }}
        onClick={(x) => console.log(x)}>
        Test
      </button>

      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut tenetur
        recusandae totam doloribus voluptatum, et sit voluptatibus obcaecati sed
        quas, sapiente ipsum in qui tempora natus mollitia non ipsa enim. Nulla,
        autem! Non delectus hic accusamus recusandae adipisci amet eaque quas
        magni earum cum. Itaque nulla alias sit porro odio doloribus molestiae
        eaque atque quidem non! Sapiente earum voluptate numquam recusandae quod
        molestiae explicabo ullam. Quis eum, voluptatem quaerat quia corporis
        quae magni quidem similique sit laboriosam deleniti tenetur incidunt a
        vitae animi numquam fugiat nisi sapiente itaque! Magni fugit tempora
        dignissimos ullam itaque aut, vel odio. Modi explicabo dolores ex sed
        atque sapiente repudiandae cupiditate consequatur illo. Facere, odio
        recusandae! Labore at molestiae odit. In optio vitae, soluta voluptas
        laudantium fugiat velit odit ducimus. Dolore hic sequi quia fuga quis
        deleniti aliquid sed, qui et quasi culpa mollitia quam maxime ut ducimus
        esse modi, dolores id alias laudantium, aut magnam impedit! Quia, ad
        eius quas ullam temporibus delectus quam voluptatum ipsa hic vitae
        exercitationem neque possimus, animi cumque facere, officiis saepe vero
        molestias provident nisi dignissimos? Voluptates, mollitia natus? Quasi
        asperiores quae neque, exercitationem distinctio doloribus iste quaerat
        veritatis. Quibusdam totam ipsa natus, similique fugiat quidem, adipisci
        vitae explicabo sapiente quis neque quaerat minima, non saepe
        perspiciatis laboriosam blanditiis accusamus id vel. Sequi, dolores
        iusto veritatis animi quia dicta cupiditate ratione commodi dolorum
        consequuntur numquam qui aspernatur! Necessitatibus, odio possimus!
        Beatae, ullam illo. Temporibus repudiandae tempore magni vero similique
        perspiciatis culpa accusantium, et natus ratione! Saepe quam unde porro
        ipsam voluptatem quisquam quas debitis rem sit voluptas? In impedit
        necessitatibus saepe asperiores iste eaque ex maxime ipsum nihil
        mollitia exercitationem magni alias et sed neque, autem aliquam
        excepturi animi iure. Ab officiis velit eveniet atque iste consequatur,
        consequuntur id ullam eum architecto commodi maiores. Recusandae eveniet
        repellendus molestias beatae.
      </h2>
    </div>
  );
};

export default Test;
