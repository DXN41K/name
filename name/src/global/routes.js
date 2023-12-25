import CalcPage from "../pages/CalcPage/CalcPage";
import MainPage from "../pages/MainPage/MainPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SchedulePage from "../pages/SchedulePage/SchedulePage";

export const routes = [
    {
        link: '/main',
        name: 'Заправка',
        page: <MainPage />,
    },
    {
        link: '/profile',
        name: 'Транзакции',
        page: <ProfilePage />,
    },
    {
        link: '/schedule',
        name: 'Информация по ДУТ',
        page: <SchedulePage />,
    },
    {
        link: '/calc',
        name: 'Информация по ДУТ',
        page: <CalcPage />,
    },
]
