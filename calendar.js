const calendarE1 = document.getElementById("calendar");
const monthYearE1 = document.getElementById("monthYear");
const modalE1 = document.getElementById("eventModal");
let currentDate = new Date();

function renderCalendar(date = new Date()){
    calendarE1.innerHTML = '';

    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();


    const totalDays = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    monthYearE1.textContent = date.toLocaleDateString("en-US",{
        month: 'long',
        year: 'numeric'
    });

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekDays.forEach(day =>{
        const dayE1 = document.createElement("div");
        dayE1.className = "day-name";
        dayE1.textContent = day;
        calendarE1.appendChild(dayE1);
    })

    for(let i = 0; i < firstDayOfMonth; i++){
        calendarE1.appendChild(document.createElement("div"));
    }

    for(let day = 1; day <= totalDays; day++){
        const dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        const cell = document.createElement("div");
        cell.className = "day";

        if(
            day === today.getDate &&
            month === today.getMonth()&&
            year === today.getFullYear()
        ){
            cell.classList.add("today");
        }

        const dateE1 = document.createElement("div");

        dateE1.className = "date-number";
        dateE1.textContent = day;
        cell.appendChild(dateE1);

        const eventToday = events.filter(e => e.date === dateStr);
        const eventBox = document.createElement("div");
        eventBox.className = "events";


        eventsToday.forEach(event =>{
            const ev = document.createElement("div");
            ev.className = "event";

            const courseE1 = document.createElement("div");
            courseE1.className = "course";
            courseE1.textContent = event.title.split(" - ")[0];

            const instructorE1 = document.createElement("div");

            instructorE1.className = "instructor";
            instructorE1.textContent = "🧑🏻‍🏫" + event.title.split(" - ")[1];

            const timeE1 = document.createElement("div");
            timeE1.className = "time";
            timeE1.textContent = "⏰" + event.start_time + " - " + event.end_time();

            ev.appendChild(courseE1);
            ev.appendChild(instructorE1);
            ev.appendChild(timeE1);
            eventBox.appendChild(ev);
        });

        const overlay = document.createElement("div");
        overlay.className = "day-overlay"; 

        const addBtn = document.createElement("button");

        addBtn.className = "overlay-btn";

        addBtn.textContent = "+ Add";
        addBtn.onclick = e => {
            e.stopPropagation();
            openModalForAdd(dateStr);
        };

        overlay.appendChild(addBtn);

        if(eventToday.length > 0){
            const editBtn = document.createElement("button");
            editBtn.className = "overlay-btn";
            editBtn.textContent = "Edit";
            editBtn.onclick = e =>{
                e.stopPropagation();
                openModalForEdit(eventToday);
            };

            overlay.appendChild(editBtn);
        }
        
        cell.appendChild(overlay);
        cell.appendChild(eventBox);
        calendarE1.appendChild(cell);
    }
}

