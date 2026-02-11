// app/classes/components/ScheduleTable.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Filter,
  BookOpen,
} from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

interface ClassType {
  _id: string;
  name: string;
  color: string;
  duration: string;
  maxParticipants: number;
  image?: {
    asset?: {
      url?: string;
    };
  };
}

interface ClassSlot {
  time: string;
  spots: number;
  instructor: string;
  room: string;
  classType: ClassType;
}

interface DaySchedule {
  day: string;
  date: string;
  classes: ClassSlot[];
}

interface ScheduleTableProps {
  schedule?: {
    weekStart: string;
    days: DaySchedule[];
  };
  classTypes: ClassType[];
}

export default function ScheduleTable({
  schedule,
  classTypes,
}: ScheduleTableProps) {
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [timeFilter, setTimeFilter] = useState<string>("all");
  const [classFilter, setClassFilter] = useState<string>("all");

  useEffect(() => {
    if (window.innerWidth < 768) {
      setViewMode("list");
    }
  }, []);

  // Default schedule if none from Sanity
  const defaultDays: DaySchedule[] = [
    { day: "monday", date: "Today", classes: [] },
    { day: "tuesday", date: "Tomorrow", classes: [] },
    { day: "wednesday", date: "Oct 30", classes: [] },
    { day: "thursday", date: "Oct 31", classes: [] },
    { day: "friday", date: "Nov 1", classes: [] },
    { day: "saturday", date: "Nov 2", classes: [] },
    { day: "saturday", date: "Nov 2", classes: [] },
    { day: "sunday", date: "Nov 3", classes: [] },
  ];

  const days = schedule?.days || defaultDays;

  // Sample time slots
  const timeSlots = [
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];

  // Helper functions
  const getDayName = (day: string) => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  const normalizeTime = (time: string): string => {
    const trimmed = time.trim();
    if (!trimmed) return "";

    const hasAmPm = /am|pm/i.test(trimmed);
    if (hasAmPm) {
      return trimmed
        .replace(/\s+/g, " ")
        .replace(/(am|pm)$/i, " $1")
        .toUpperCase()
        .replace("  ", " ")
        .trim();
    }

    const match24 = trimmed.match(/^(\d{1,2})(?::(\d{2}))?$/);
    if (!match24) return trimmed;

    let hour = parseInt(match24[1], 10);
    const minutes = match24[2] ?? "00";
    const isPM = hour >= 12;
    hour = hour % 12;
    if (hour === 0) hour = 12;

    return `${hour}:${minutes} ${isPM ? "PM" : "AM"}`;
  };

  const formatTime = (time: string) => {
    return normalizeTime(time).replace(" AM", "").replace(" PM", "");
  };

  const getTimeCategory = (time: string): string => {
    const normalized = normalizeTime(time);
    const hour = parseInt(normalized.split(":")[0]);
    const isAM = normalized.includes("AM");
    const timeCategory =
      hour < 12 ? (isAM ? "morning" : "evening") : "afternoon";
    return timeCategory;
  };

  // Function to get classes for a specific day
  const getClassesForDay = (day: string): ClassSlot[] => {
    // If we have schedule data from Sanity, use it
    if (schedule?.days) {
      const dayData = schedule.days.find((d) => d.day === day);
      return (dayData?.classes || []).map((cls) => ({
        ...cls,
        time: normalizeTime(cls.time),
      }));
    }

    // If we don't have schedule data but have class types, generate sample schedule
    if (classTypes.length > 0) {
      // Generate sample classes based on day
      const dayIndex = days.findIndex((d) => d.day === day);
      const sampleClassesForDay: ClassSlot[] = [];

      // Add 2-3 sample classes per day
      const sampleTimes = [
        { time: "6:00 AM", instructor: "Klaudia" },
        { time: "7:00 AM", instructor: "Sarah" },
        { time: "5:00 PM", instructor: "Emma" },
        { time: "6:00 PM", instructor: "Klaudia" },
      ];

      // Pick 2-3 random times for this day
      const timesToUse = sampleTimes.slice(0, 2 + (dayIndex % 3));

      timesToUse.forEach((timeSlot, idx) => {
        const classTypeIndex =
          (dayIndex + idx) % Math.min(classTypes.length, 5);
        const classType = classTypes[classTypeIndex];

        if (classType) {
          sampleClassesForDay.push({
            time: timeSlot.time,
            spots: Math.floor(Math.random() * 8) + 4, // 4-12 spots
            instructor: timeSlot.instructor,
            room: idx % 2 === 0 ? "main" : "reformer",
            classType: classType,
          });
        }
      });

      return sampleClassesForDay;
    }

    return [];
  };

  // Filter classes based on selected filters
  const filteredClasses = getClassesForDay(days[selectedDay].day).filter(
    (cls) => {
      if (timeFilter !== "all") {
        const timeCat = getTimeCategory(cls.time);
        if (timeFilter !== timeCat) return false;
      }
      if (classFilter !== "all") {
        if (classFilter !== cls.classType?._id) return false;
      }
      return true;
    },
  );

  const timeCategories = [
    { id: "all", name: "All Times" },
    { id: "morning", name: "Morning (5AM-12PM)" },
    { id: "afternoon", name: "Afternoon (12PM-5PM)" },
    { id: "evening", name: "Evening (5PM-9PM)" },
  ];

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand-sageDark" />
            <h3 className="text-xl font-bold text-brand-charcoal">
              Week of{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </h3>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-lg ${
                viewMode === "grid"
                  ? "bg-brand-sageDark text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-lg ${
                viewMode === "list"
                  ? "bg-brand-sageDark text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              List View
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 w-full lg:w-auto">
          {/* Time Filter */}
          <div className="relative w-full sm:w-auto">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="w-full sm:w-auto pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-brand-sage focus:ring-2 focus:ring-brand-sage/20"
            >
              {timeCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          {/* Class Filter */}
          <div className="relative w-full sm:w-auto">
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="w-full sm:w-auto pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-brand-sage focus:ring-2 focus:ring-brand-sage/20"
            >
              <option value="all">All Classes</option>
              {classTypes.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {cls.name}
                </option>
              ))}
            </select>
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex md:hidden w-full gap-2">
        <button
          onClick={() => setViewMode("grid")}
          className={`flex-1 px-4 py-2 rounded-lg ${
            viewMode === "grid"
              ? "bg-brand-sageDark text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Grid View
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`flex-1 px-4 py-2 rounded-lg ${
            viewMode === "list"
              ? "bg-brand-sageDark text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          List View
        </button>
      </div>

      {/* Day Navigation */}
      <div className="flex items-center justify-between mb-8 gap-2">
        <button
          onClick={() =>
            setSelectedDay((prev) => (prev > 0 ? prev - 1 : days.length - 1))
          }
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex w-full md:w-auto justify-start md:justify-center gap-2 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`flex-shrink-0 min-w-[120px] md:min-w-0 px-4 md:px-6 py-3 rounded-xl transition-all duration-300 ${
                selectedDay === index
                  ? "bg-brand-sageDark text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="font-medium">{getDayName(day.day)}</div>
              <div className="text-sm opacity-80">{day.date}</div>
            </button>
          ))}
        </div>

        <button
          onClick={() =>
            setSelectedDay((prev) => (prev < days.length - 1 ? prev + 1 : 0))
          }
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Schedule Display */}
      {viewMode === "grid" ? (
        /* GRID VIEW */
        <div className="bg-white rounded-2xl border border-gray-200 overflow-x-auto shadow-lg">
          <div className="min-w-[920px]">
            {/* Grid Header */}
            <div className="grid grid-cols-12 border-b border-gray-200">
              <div className="col-span-2 p-4 bg-gray-50">
                <div className="font-semibold text-gray-700">Time</div>
              </div>
              {days.map((day, idx) => (
                <div
                  key={idx}
                  className={`col-span-1.5 p-4 text-center cursor-pointer transition-colors ${
                    selectedDay === idx
                      ? "bg-brand-sageLight border-b-2 border-brand-sageDark"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedDay(idx)}
                >
                  <div className="font-bold text-gray-800">
                    {getDayName(day.day).substring(0, 3)}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{day.date}</div>
                </div>
              ))}
            </div>

            {/* Time Slots */}
            <div className="divide-y divide-gray-100">
              {timeSlots.map((timeSlot, timeIdx) => {
                // Check if there's a class at this time slot for the selected day
                const classesAtSlot = getClassesForDay(
                  days[selectedDay].day,
                ).filter(
                  (cls) => normalizeTime(cls.time) === normalizeTime(timeSlot),
                );

                return (
                  <div
                    key={timeIdx}
                    className="grid grid-cols-12 hover:bg-gray-50 transition-colors"
                  >
                    <div className="col-span-2 p-4 border-r border-gray-100">
                      <div className="font-medium text-gray-700">
                        {timeSlot}
                      </div>
                      <div className="text-xs text-gray-500">
                        {classesAtSlot.length > 0
                          ? `${classesAtSlot.length} class${classesAtSlot.length > 1 ? "es" : ""}`
                          : "No class"}
                      </div>
                    </div>

                    {days.map((day, dayIdx) => {
                      const classesAtDayTime = getClassesForDay(day.day).filter(
                        (cls) =>
                          normalizeTime(cls.time) === normalizeTime(timeSlot),
                      );

                      return (
                        <div
                          key={dayIdx}
                          className={`col-span-1.5 p-2 border-r border-gray-100 min-h-[80px] ${
                            classesAtDayTime.length > 0
                              ? "cursor-pointer hover:bg-gray-50"
                              : "bg-gray-50/30"
                          }`}
                          onClick={() =>
                            classesAtDayTime.length > 0 &&
                            setSelectedTime(timeSlot)
                          }
                        >
                          {classesAtDayTime.length > 0 ? (
                            <div className="h-full space-y-2">
                              {classesAtDayTime
                                .slice(0, 2)
                                .map((slot, slotIdx) => (
                                  <div
                                    key={slotIdx}
                                    className="rounded-lg p-3 shadow-sm transition-all duration-300 hover:shadow-md"
                                    style={{
                                      backgroundColor:
                                        slot.classType.color + "20",
                                      borderLeft: `4px solid ${slot.classType.color}`,
                                    }}
                                  >
                                    <div className="font-semibold text-sm text-gray-800 truncate">
                                      {slot.classType.name}
                                    </div>
                                    <div className="text-xs text-gray-600 mt-1 truncate">
                                      {slot.instructor}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-2 flex justify-between">
                                      <span>{slot.spots} spots</span>
                                      <span className="text-xs px-1 bg-white/50 rounded">
                                        {slot.room === "reformer" ? "R" : "M"}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              {classesAtDayTime.length > 2 && (
                                <div className="text-xs text-gray-500 px-2">
                                  +{classesAtDayTime.length - 2} more
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="h-full flex items-center justify-center">
                              <span className="text-xs text-gray-400">-</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* LIST VIEW */
        <div className="space-y-4">
          {filteredClasses.map((classSlot, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-brand-sage transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedTime(classSlot.time)}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                  {/* Time Badge */}
                  <div className="bg-brand-sageLight text-brand-sageDark px-4 py-3 rounded-xl min-w-[100px] w-full sm:w-auto text-center">
                    <div className="text-2xl font-bold">
                      {formatTime(classSlot.time)}
                    </div>
                    <div className="text-xs mt-1">
                      {normalizeTime(classSlot.time).includes("AM")
                        ? "Morning"
                        : "Evening"}
                    </div>
                  </div>

                  {/* Class Info */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-brand-charcoal mb-2">
                          {classSlot.classType.name}
                        </h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {classSlot.instructor}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {classSlot.room === "reformer"
                              ? "Reformer Room"
                              : "Main Studio"}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              classSlot.spots > 5
                                ? "bg-green-100 text-green-800"
                                : classSlot.spots > 0
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {classSlot.spots} spots left
                          </span>
                        </div>
                      </div>

                      {classSlot.classType.image?.asset?.url && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden sm:ml-4">
                          <Image
                            src={classSlot.classType.image.asset.url}
                            alt={classSlot.classType.name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                    </div>

                    {/* Class Details */}
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {classSlot.classType.duration}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        Max {classSlot.classType.maxParticipants}
                      </span>
                      <span className="px-3 py-1 bg-brand-cream text-brand-sageDark rounded-full text-sm">
                        {classSlot.spots > 0 ? "Book Now" : "Waitlist"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  href={`/booking?class=${classSlot.classType.name.toLowerCase().replace(/\s+/g, "-")}&time=${classSlot.time}&day=${days[selectedDay].day}`}
                  className="bg-brand-sageDark hover:bg-brand-sage text-white whitespace-nowrap w-full sm:w-auto"
                >
                  {classSlot.spots > 0 ? "Book Spot" : "Join Waitlist"}
                  <BookOpen className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}

          {filteredClasses.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
              <Clock className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h4 className="text-xl font-bold text-gray-700 mb-2">
                No classes match your filters
              </h4>
              <p className="text-gray-500 mb-6">
                Try changing your filters or select a different day
              </p>
              <Button
                onClick={() => {
                  setTimeFilter("all");
                  setClassFilter("all");
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 p-4 bg-gray-50 rounded-xl">
        <div className="text-sm font-medium text-gray-700">Class Legend:</div>
        {classTypes.slice(0, 5).map((cls, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: cls.color }}
            />
            <span className="text-sm text-gray-600">{cls.name}</span>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          href="/booking"
          className="bg-brand-sageDark hover:bg-brand-sage text-white px-8"
        >
          Book Multiple Classes
        </Button>
        <Button
          href="/pricing"
          variant="outline"
          className="border-brand-sageDark text-brand-sageDark hover:bg-brand-sageDark/5"
        >
          View Pricing Packages
        </Button>
        <Button
          href="/private-training"
          variant="secondary"
          className="text-brand-sageDark hover:bg-brand-sageLight"
        >
          Private Training Options
        </Button>
      </div>
    </div>
  );
}
