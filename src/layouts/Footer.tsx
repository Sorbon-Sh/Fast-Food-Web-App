const Footer = () => {
    return(
        <footer className="bg-green-400 footer flex">
  <article className="dodo__pizza">
    <ul>
      <li>Дода Пицца</li>
      <li>Додо-книга</li>
      <li>Блог Сила ума</li>
      <li></li>
    </ul>
  </article>
  <div className="it-is__interesting"><ul>
    <li>Работа</li>
    <li>В пиццерии</li>
  </ul>
  </div>
  <div>
    <ul>
      <li>Это интересно</li>
      <li>Почему мы готовим без перчаток?</li>
    </ul>
  </div>
  <div className="phone"><ul>
    <li>App store and Google Play</li>
    <li><div>6600</div>
    <div>Звонок по телефону</div>
    </li>
    <li>feedback@dodopizza.tj</li>
  </ul></div>
  <section className="flex justify-between">
    <nav>
      <ul className="flex">
        <li>ДОДО ПИЦАА 2024</li>
        <li>Публичная оферта</li>
        <li>Пользовательское соглашения</li>
        <li>Условия оброботки персональных данных</li>
      </ul>
    </nav>
    <div>Icons</div>
  </section>
</footer>
    )
}

export default Footer