import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="main-menu">
      <h1>Фитнес</h1>
      <img
        class="logo"
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4cfdcb5a-0137-4457-8be1-6e7bd1f29ebb"
        alt=""
      />
      <ul>
        <li class="nav-item active">
          <Link to="/main">
            <span class="nav-text">Главная</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link to="/profile">
            <span class="nav-text">Профиль</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link to="/schedule">
            <span class="nav-text">Расписание</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link to="/calc">
            <span class="nav-text">Калькулятор</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link to="#">
            <span class="nav-text">Выйти</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
