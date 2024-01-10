import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import * as weekday from "dayjs/plugin/weekday";
import * as weekOfYear from "dayjs/plugin/weekOfYear";
import "react-big-calendar/lib/css/react-big-calendar.css";
// global locale 'ru'
import "dayjs/locale/ru";
import * as localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);
dayjs.locale("ru");
// ---
dayjs.extend(weekday);
dayjs.extend(weekOfYear);

const localizer = dayjsLocalizer(dayjs);

const myEventList = [
  {
    title: "meeting",
    allDay: true,
    start: new Date(2024, 4, 0),
    end: new Date(2024, 4, 0),
  },
  {
    title: "meeting",
    allDay: true,
    start: new Date(2024, 0, 4),
    end: new Date(2024, 0, 9),
  },
  {
    title: "meeting",
    allDay: true,
    start: new Date(2024, 0, 1),
    end: new Date(2024, 0, 3),
  },
];

// ==============
console.log(dayjs(new Date("2024-01-08")).week());
// ==============

const App = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventList}
        startAccessor="start"
        endAccessor="end"
        messages={{
          month: "Месяц",
          today: "Сегодня",
          previous: "<",
          next: ">",
          work_week: "Werkweek",
          yesterday: "Gisteren",
        }}
        style={{ height: 500 }}
      />
    </div>
  );
};
export default App;
