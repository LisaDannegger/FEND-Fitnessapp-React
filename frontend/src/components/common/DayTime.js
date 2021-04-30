import React from "react";

const getDayTime = (time) => {
  if (time < 11) {
    return "Morgen,";
  } else if (time > 17) {
    return "Abend,";
  } else {
    return "Tag,";
  }
};

const DayTime = (props) => {
  const daytime = getDayTime(new Date().getHours());

  return <h1>{daytime}</h1>;
};

export { DayTime };
