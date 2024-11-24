import React from 'react';
import dayjs from 'dayjs';


interface ITimeline {
  time: {
    from: dayjs.Dayjs;
    to: dayjs.Dayjs;
  };
  points: {
    time: dayjs.Dayjs;
    title: string;
    description: string;
  }[];
}

const generateTimelineMinutes = (from: dayjs.Dayjs, to: dayjs.Dayjs) => {
  const options = [];

  let currentTime = from;

  while (currentTime.isBefore(to)) {
    options.push(currentTime);
    currentTime = currentTime.add(10, 'minutes');
  }

  return options;
}

const Timeline = ({
  time,
  points
}: ITimeline) => {
  const timelineMinutes = generateTimelineMinutes(time.from, time.to);

  const getPointPosition = (point: ITimeline['points'][0]) => {
    const pointTime = dayjs(point.time);
    const pointIndex = timelineMinutes.findIndex((minute) => pointTime.isSame(dayjs(minute), 'minute'));

    return pointIndex;
  }

  return (
    <div className="bg-gray-100 overflow-x-auto">
      <ul className={`grid h-[16px] bg-slate-200`} style={{gridTemplateColumns: `repeat(${timelineMinutes.length}, 40px)`}}>
        {timelineMinutes.map((minute, index) => (
          <li key={index} className="flex text-[8px] items-center justify-center text-slate-500">
            <span className="mr-[-40px]">
              {minute.format('HH:mm')}
            </span>
          </li>
        ))}
      </ul>
      <ul className={`grid h-[40px] relative items-center`} style={{gridTemplateColumns: `repeat(${timelineMinutes.length}, 40px)`}}>
        {timelineMinutes.map((minute, index) => (
          <li key={index} className="flex items-center justify-center border-r h-full">
            {points.find((point) => getPointPosition(point) === index) && (
              <div className="left-[10px] h-[15px] w-[15px] border border-[#000] bg-[#FDE047] transform -rotate-45 z-10"/>
            )}
          </li>
        ))}

        <li className="absolute col-span-full left-[10px] w-[calc(100%-20px)] h-[10px] bg-blue-400 rounded-lg"/>
      </ul>
    </div>
  );
};

export default Timeline;
