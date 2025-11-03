import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  type: "spectacle" | "atelier" | "autre";
  description?: string;
  image?: string;
}

interface EventCalendarProps {
  onEventSelect?: (event: Event | null) => void;
}

const EventCalendar = ({ onEventSelect }: EventCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Les images seront passées depuis la page parent, donc on garde les événements sans images ici
  const events: Event[] = [
    {
      id: 1,
      title: "Corps en mouvement",
      date: new Date(2025, 2, 15),
      time: "20h00",
      location: "Théâtre Municipal",
      type: "spectacle",
      description: "Une performance de danse contemporaine",
    },
    {
      id: 2,
      title: "Voix croisées",
      date: new Date(2025, 2, 22),
      time: "19h30",
      location: "Espace Culturel",
      type: "spectacle",
      description: "Une pièce théâtrale collaborative",
    },
    {
      id: 3,
      title: "Atelier Danse Contemporaine",
      date: new Date(2025, 2, 25),
      time: "18h00",
      location: "Studio principal",
      type: "atelier",
      description: "Technique, improvisation et expression corporelle",
    },
    {
      id: 4,
      title: "Harmonie urbaine",
      date: new Date(2025, 3, 5),
      time: "21h00",
      location: "Salle des Fêtes",
      type: "spectacle",
      description: "Concert mêlant musiques du monde",
    },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Jours du mois précédent pour compléter la première semaine
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
      });
    }

    // Jours du mois actuel
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    // Jours du mois suivant pour compléter la dernière semaine
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.toDateString() === date.toDateString()
    );
  };

  const hasEvent = (date: Date) => {
    return getEventsForDate(date).length > 0;
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="bg-card rounded-2xl shadow-elegant p-3 sm:p-4 md:p-6 border border-border/50 overflow-hidden">
        <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <h2 className="text-base sm:text-xl md:text-2xl font-bold text-foreground truncate">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
          </div>
          <div className="flex gap-1 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={previousMonth}
              className="w-7 h-7 sm:w-8 sm:h-8 p-0"
              aria-label="Mois précédent"
            >
              <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextMonth}
              className="w-7 h-7 sm:w-8 sm:h-8 p-0"
              aria-label="Mois suivant"
            >
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-3 sm:mb-4">
          {dayNames.map((day) => (
            <div
              key={day}
              className="text-center text-[10px] sm:text-xs font-semibold text-muted-foreground py-1 sm:py-1.5"
            >
              {day}
            </div>
          ))}
          {days.map((day, index) => {
            const hasEventOnDay = hasEvent(day.date);
            const isSelected =
              selectedDate?.toDateString() === day.date.toDateString();
            const isToday =
              day.date.toDateString() === new Date().toDateString();

            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedDate(day.date);
                  const eventsForDay = getEventsForDate(day.date);
                  if (onEventSelect) {
                    onEventSelect(eventsForDay.length > 0 ? eventsForDay[0] : null);
                  }
                }}
                className={`
                  aspect-square p-0.5 sm:p-1 text-[10px] sm:text-xs md:text-sm rounded-md transition-all duration-200
                  ${
                    !day.isCurrentMonth
                      ? "text-muted-foreground/30"
                      : "text-foreground hover:bg-primary/10"
                  }
                  ${
                    isSelected
                      ? "bg-primary text-primary-foreground ring-1 ring-primary"
                      : ""
                  }
                  ${isToday && !isSelected ? "bg-accent/20 font-semibold" : ""}
                  ${hasEventOnDay && !isSelected ? "relative" : ""}
                `}
              >
                {day.date.getDate()}
                {hasEventOnDay && (
                  <span className="absolute bottom-0 sm:bottom-0.5 left-1/2 -translate-x-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>

      {selectedDate && selectedDateEvents.length > 0 && (
        <div className="border-t border-border/50 pt-4 mt-4">
          <h3 className="text-base sm:text-lg font-bold mb-3 text-foreground">
            Événements du {selectedDate.toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
            })}
          </h3>
          <div className="space-y-3">
            {selectedDateEvents.map((event) => (
              <div
                key={event.id}
                className="bg-muted/30 rounded-lg p-3 border border-border/30"
              >
                <div className="flex items-start justify-between mb-1.5">
                  <h4 className="font-bold text-sm sm:text-base text-foreground">
                    {event.title}
                  </h4>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ml-2 flex-shrink-0 ${
                      event.type === "spectacle"
                        ? "bg-primary text-primary-foreground"
                        : event.type === "atelier"
                        ? "bg-tertiary text-tertiary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
                {event.description && (
                  <p className="text-xs text-muted-foreground mb-2">
                    {event.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedDate && selectedDateEvents.length === 0 && (
        <div className="border-t border-border/50 pt-4 mt-4 text-center text-sm text-muted-foreground">
          <p>Aucun événement prévu ce jour.</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default EventCalendar;

