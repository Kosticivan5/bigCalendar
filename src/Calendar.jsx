import { useMemo } from "react";

const calendar = () => {
  const { defaultDate } = useMemo(() => {
    defaultDate = new Date(2015, 3, 14);
  });

  return <Calendar defaultDate={defaultDate} />;
};
export default calendar;
