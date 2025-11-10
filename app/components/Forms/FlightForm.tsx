import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  cityOptions,
  tripOption,
  fareOptions,
  classOptions,
  travellersDetails,
} from "../../utils/Navitems";
// import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import { SetStateAction, useState } from "react";
import { addDays } from "date-fns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { HiOutlineSearch, HiOutlineSwitchHorizontal } from "react-icons/hi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const FlightForm = () => {
  const handleFormSubmit = (e: {
    preventDefault: () => void;
    target: unknown;
  }) => {
    e.preventDefault();
    console.log("Form Value", e.target);
  };

  const [selectedTrip, setSelectedTrip] = useState("Round Trip");
  const handleSelectedTrips = (e: SetStateAction<string>) => {
    setSelectedTrip(e);
  };

  const [selectedFare, setSelectedFare] = useState("Regular Fare");
  const handleSelectedFare = (e: SetStateAction<string>) => {
    setSelectedFare(e);
  };

  const [selectedFromCity, setSelectedFromCity] = useState("DAC");
  const handleFromCitySelected = (e: SetStateAction<string>) => {
    setSelectedFromCity(e);
  };

  const [selectedToCity, setSelectedToCity] = useState("");
  const handleToCitySelected = (e: SetStateAction<string>) => {
    setSelectedToCity(e);
  };

  const handleSwitch = () => {
    setSelectedFromCity(selectedToCity);
    setSelectedToCity(selectedFromCity);
  };

  const [date, setDate] = useState(new Date());

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const [openTravellersPopOver, setOpenTravellersPopOver] = useState(false);
  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    kids: 0,
    infants: 0,
  });

  const totalTravellers =
    travellers.adults +
    travellers.children +
    travellers.kids +
    travellers.infants;

  // const onDateChange = (e: SetStateAction<Date>) => {
  //   setDate(e);
  //   setOpenDate((prev) => !prev);
  // };

  // const [range, setRange] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: "selection",
  //   },
  // ]);

  // const onDateRangeChange = (
  //   e:
  //     | unknown[]
  //     | ((
  //         prevState: { startDate: Date; endDate: Date; key: string }[]
  //       ) => { startDate: Date; endDate: Date; key: string }[])
  // ) => {
  //   console.log("onDateRangeChange", e);
  //   // let startDate = format(e[0].startDate, "dd-MM-yyyy");
  //   // let endDate = format(e[0].endDate, "dd-MM-yyyy");
  //   // let dateObj = [
  //   //   {
  //   //     startDate,
  //   //     endDate,
  //   //     key: "Selection",
  //   //   },
  //   // ];
  //   // console.log("dateObj", dateObj);
  //   // console.log("startDate", e[0].startDate);
  //   // console.log("endDate", e[0].endDate);
  //   // setRange(dateObj);
  //   // if (e[0].startDate === e[0].endDate) {
  //   //   setOpenDateRange(false);
  //   // }
  //   setRange(e);
  // };

  // const [openDate, setOpenDate] = useState(false);
  // const [openDateRange, setOpenDateRange] = useState(false);
  // const handleOpenDate = () => {
  //   // setOpenDate(!openDate);
  //   setOpenDate((prev) => !prev);
  // };
  // const handleOpenDateRange = () => {
  //   // setOpenDateRange(!openDateRange);
  //   setOpenDateRange((prev) => !prev);
  // };

  return (
    <div>
      <form className="pt-4 top-75 rounded-xl" onSubmit={handleFormSubmit}>
        <Card className="bg-blue-50">
          <CardHeader className="">
            {/* <CardTitle>Flight</CardTitle> */}
            <CardDescription>
              <div className="flex justify-between items-center mx-auto">
                <RadioGroup
                  defaultValue="Round Trip"
                  onValueChange={handleSelectedTrips}
                  className="flex"
                >
                  {tripOption.map((trip) => {
                    return (
                      <div
                        key={trip.id}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem value={trip.name} id={trip.name} />
                        <Label htmlFor={trip.name}>{trip.name}</Label>
                      </div>
                    );
                  })}
                </RadioGroup>
                <div className="flex items-center gap-2">
                  <Popover
                    open={openTravellersPopOver}
                    onOpenChange={setOpenTravellersPopOver}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[180px] justify-between"
                      >
                        {totalTravellers} Travellers
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-72 p-4">
                      {travellersDetails.map((item) => (
                        <div
                          key={item.key}
                          className="flex justify-between items-center py-2"
                        >
                          <div>
                            <p className="font-medium">{item.label}</p>
                            <p className="text-sm text-gray-500">
                              {item.subtitle}
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <button
                              className="h-8 w-8 flex items-center justify-center border rounded-full text-gray-500"
                              onClick={() => {
                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                item.key === "adults"
                                  ? setTravellers((prev) => ({
                                      ...prev,
                                      [item.key]: Math.max(
                                        1,
                                        prev[item.key] - 1
                                      ),
                                    }))
                                  : setTravellers((prev) => ({
                                      ...prev,
                                      [item.key]: Math.max(
                                        0,
                                        prev[item.key] - 1
                                      ),
                                    }));
                              }}
                            >
                              −
                            </button>
                            <span>{travellers[item.key]}</span>
                            <button
                              className="h-8 w-8 flex items-center justify-center border rounded-full text-gray-500"
                              onClick={() =>
                                setTravellers((prev) => ({
                                  ...prev,
                                  [item.key]: prev[item.key] + 1,
                                }))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}

                      <Button
                        onClick={() => setOpenTravellersPopOver(false)}
                        className="w-full mt-3"
                      >
                        Done
                      </Button>
                    </PopoverContent>
                  </Popover>
                  <Select
                    value="First Class"
                    // onValueChange={handleFromCitySelected}
                  >
                    <SelectTrigger className="w-[180px] bg-white">
                      <SelectValue placeholder="Select Class">
                        {/* {selectedFromCity} */}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Class</SelectLabel>
                        {classOptions.map((c) => {
                          return (
                            <SelectItem key={c.id} value={c.name}>
                              <p className="text-xs">{c.name}</p>
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent className="grid grid-cols-5 gap-2 bg-white/80 pt-4">
            <div className="col-span-2 flex justify-center gap-2 mb-4">
              <Select
                value={selectedFromCity}
                onValueChange={handleFromCitySelected}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select City">
                    {selectedFromCity}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>From</SelectLabel>
                    {cityOptions.map((city) => {
                      return (
                        <SelectItem key={city.id} value={city.shortForm}>
                          <div className="flex justify-center items-center gap-2 max-w-[180px]">
                            <p>{city.shortForm} </p>
                            <span>|</span>
                            <div>
                              <p className="text-xs">{city.name}</p>
                              <p className="text-[12px]">{city.airport}</p>
                            </div>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="bg-gray-400" onClick={handleSwitch}>
                <HiOutlineSwitchHorizontal />
              </Button>
              <Select
                value={selectedToCity}
                onValueChange={handleToCitySelected}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select City">
                    {selectedToCity}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>To</SelectLabel>
                    {cityOptions.map((city) => {
                      return (
                        <SelectItem key={city.id} value={city.shortForm}>
                          <div className="flex justify-center items-center gap-2 max-w-[180px]">
                            <p>{city.shortForm} </p>
                            <span>|</span>
                            <div>
                              <p className="text-xs">{city.name}</p>
                              <p className="text-[12px]">{city.airport}</p>
                            </div>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2">
              {selectedTrip === "One Way" && (
                <div>
                  <Popover>
                    <PopoverTrigger>
                      <p>{format(date, "dd MMMM, yyyy")}</p>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        autoFocus
                        disabled={{ before: new Date() }}
                        className="rounded-lg border shadow-sm"
                      />
                    </PopoverContent>
                  </Popover>
                  {/* {openDate && <Calendar date={date} onChange={onDateChange} />} */}
                </div>
              )}
              {selectedTrip === "Round Trip" && (
                <div>
                  <Popover>
                    <PopoverTrigger>
                      <p>
                        {/* {format(dateRange?.from, "dd MMMM, yyyy")} to{" "}
                          {format(dateRange?.to, "dd MMMM, yyyy")} */}
                        {dateRange?.from && dateRange?.to
                          ? `${dateRange.from.toDateString()} → ${dateRange.to.toDateString()}`
                          : dateRange?.from
                          ? `Start: ${dateRange.from.toDateString()}`
                          : "Select date range"}
                      </p>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="range"
                        // defaultMonth={dateRange?.from}
                        selected={dateRange}
                        onSelect={setDateRange}
                        // numberOfMonths={2}
                        disabled={{ before: new Date() }}
                        // fromDate={new Date()}
                        className="rounded-lg border shadow-sm"
                      />
                    </PopoverContent>
                  </Popover>
                  {/* <div
                  // onClick={handleOpenDateRange}
                  // onClick={() => setOpenDateRange(!openDateRange)}
                  // className="flex gap-1 mb-2"
                  > </div> */}
                  {/* {openDateRange && (
                      <DateRangePicker
                       ranges={range}
                       // onChange={(item) => setRange([item.selection])}
                       onChange={(item) => onDateRangeChange([item.selection])}
                       dateDisplayFormat="dd-MM-yyyy"
                       moveRangeOnFirstSelection={false}
                       minDate={new Date()}
                       // months={2}
                       direction="horizontal"
                       rangeColors={["#23A5B6"]}
                       showDateDisplay={true}
                     /> 
                  )}*/}
                </div>
              )}
              {selectedTrip === "Multi City" && (
                <div>
                  <Label>Username</Label>
                  <input type="text" id="vname" />
                </div>
              )}
            </div>
            <div className="col-span-1 flex justify-center mb-4">
              <Button type="submit" className="bg-orange-400">
                <HiOutlineSearch />
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <RadioGroup
              defaultValue="Regular Fare"
              onValueChange={handleSelectedFare}
              className="flex"
            >
              {fareOptions.map((item) => {
                return (
                  <div key={item.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.name} id={item.name} />
                    <Label htmlFor={item.name}>{item.name}</Label>
                  </div>
                );
              })}
            </RadioGroup>
            {/* <Button type="submit">Save changes</Button> */}
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default FlightForm;
