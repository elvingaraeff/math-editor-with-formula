import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import moment from "moment";

export default function CustomCalendar({ date, setDate }) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {moment(new Date(date.from)).format("DD.MM.YYYY")} -{" "}
                  {moment(new Date(date.to)).format("DD.MM.YYYY")}
                </>
              ) : (
                moment(new Date(date.from)).format("DD.MM.YYYY")
              )
            ) : (
              <span>Tarixi seçin</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            fromYear={1900}
            toYear={2024}
            captionLayout="dropdown-buttons"
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
