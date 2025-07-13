<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar Project</title>
    <meta name="discription" content="my project calendar">

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css"/>
</head>

<body>
    <header>
        <h1>📅 Course Calendar<br> My Calendar Project</h1>
    </header>

    <!-- it`s Clock -->
    <div class="clock-container">
        <div id="clock"></div>
    </div>

    <!-- it`s Calendar -->
    <div class="calendar">
        <div class="nav-btn-container">
            <button class="nav-btn">⏪</button>
            <h2 id="mounthYear" style="margin: 0"></h2>
            <button class="nav-btn">⏩</button>
        </div>
        <div class="calendar-grid" id="calendar"></div>
    </div>

    <!-- Modal for add/edit/delete appointment-->
    <div class="modal" id="eventModal">
        <div class="modal-content">

            <div id="eventSelectorWrapper">
                <label for="eventSelector">
                    <strong>Select Event:</strong>
                </label>
                <select id="eventSelector">
                    <option disabled selected>Выберите событие...</option>
                </select>
            </div>

            <!-- Main Form -->
            <form method="POST" id="eventForm">
                <input type="hidden" name="action" id="formAction" value="add">
                <input type="hidden" name="event_id" id="eventId">

                <label for="courseName">Название курса:</label>
                <input type="text" name="course_name" id="courseName" required>

                <label for="instructorName">Тема курса:</label>
                <input type="text" name="instructor_name" id="instructorName" required>

                <label for="startDate">Дата начала:</label>
                <input type="date" name="start_date" id="startDate" required>

                <label for="endDate">Дата конца:</label>
                <input type="date" name="end_date" id="endDate" required>

                <label for="startTime">Время начала:</label>
                <input type="time" name="start_time" id="startTime" required>

                <label for="endTime">Время окончания:</label>
                <input type="time" name="end_time" id="endTime" required>
                

                <button type="submit">Сохранить</button>
            </form>

            <!-- Delete Form -->
            <form method="POST" onsubmit="return confirm('Вы уверены что хотите удалить это событие?')">
                <input type="hidden" name="action" value="delete">
                <input type="hidden" name="event_id" id="deleteEventId">
                <button type="submit" class="submit-btn">🗑️ Удалить</button>
            </form>

            <!--❌ Cancel -->
            <button type="button" class="submit-btn">❌ Отмена</button>

        </div>
    </div>

    <script src="calendar.js"></script>
</body>

</html>