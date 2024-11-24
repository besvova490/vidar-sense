import Image from "next/image";
import { SearchCheck, ExternalLink, TriangleAlert } from 'lucide-react';
import dayjs from 'dayjs';

// components
import { Button } from "@/components/ui/button";
import CopyWrapper from "@/components/CopyWrapper";
import Timeline from "@/components/Timeline";
import { Alert, AlertDescription } from "@/components/ui/alert";


const EVENT_MAIN_INFO = [
  { label: "Drone", value: "drone", },
  { label: "Date identified", value: "dateIdentified" },
  {
    label: "Coordinates",
    value: "coordinates",
    render: (value: string) => (
      <div>
        <CopyWrapper text={value}>
          <span>{ value }</span>
        </CopyWrapper>
        <a className="text-xs text-[#697A8D] underline text-nowrap cursor-pointer">
          Change coordinate system
        </a>
      </div>
    )
  },
  { label: "Snapshot Timecode", value: "snapshotTimecode" },
];


function EventInfo() {

  const timelinePoints = [
    { time: dayjs().set('hour', 15).set('minute', 40), title: 'Point 1', description: 'Description 1', },
    { time: dayjs().set('hour', 15).set('minute', 50), title: 'Point 11', description: 'Description 11', },
    { time: dayjs().set('hour', 16).set('minute', 40), title: 'Point 2', description: 'Description 2', },
    { time: dayjs().set('hour', 17).set('minute', 30), title: 'Point 3', description: 'Description 3', },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ul className="grid grid-cols-2 gap-4">
        {
          EVENT_MAIN_INFO.map((item) => (
            <li key={item.label} className="flex flex-col gap-1">
              <span className="text-sm text-[#697A8D]">{item.label}</span>
              <div className="text-base font-medium">
                { item.render ? item.render(item.value) : item.value }
              </div>
            </li>
          ))
        }
      </ul>
      <div>
        <p className="text-xs text-[#697A8D]">Object Snapshot</p>
        <div className="relative rounded-lg overflow-hidden h-[200px]">
          <Image
            src="https://picsum.photos/300/200"
            alt="object snapshot"
            fill
            className="object-cover"
          />
          <div className="absolute text-white cursor-pointer bottom-[10px] right-[10px] w-[32px] h-[32px] rounded-lg bg-black/50 flex items-center justify-center">
            <SearchCheck size={16}/>
          </div>
        </div>
      </div>
      <div className="border rounded-lg w-full">
        <div className="flex items-center justify-between p-4">
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs text-[#697A8D]">Streaming Source</span>
            <div className="flex items-center justify-start gap-1">
              <div className="w-[8px] h-[8px] rounded-full bg-green-500" />
              <span className="text-sm font-medium">
                Live Now
              </span>
            </div>
          </div>
          <Button variant="outline">
            <ExternalLink size={16}/>
            Spectate
          </Button>
        </div>
        <Timeline
          time={{ from: dayjs().set('hour', 15).set('minute', 20), to: dayjs().set('hour', 17).set('minute', 50), }}
          points={timelinePoints}
        />
      </div>
      <Alert variant="warning">
        <TriangleAlert size={16}/>
        <AlertDescription>
          This object has been identified by VidarSense. Please review it to determine if it is a valid enemy target, and approve or delete it as necessary.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default EventInfo;
