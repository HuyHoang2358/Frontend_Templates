/*
Template Name: Skote - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Apex Chart init js
*/


!function ($) {
    "use strict";
    var CalendarPage = function () { };

    CalendarPage.prototype.init = function () {

        var addEvent = $("#event-modal");
        var modalTitle = $("#modal-title");
        var formEvent = $("#form-event");
        var selectedEvent = null;
        var newEventData = null;
        var forms = document.getElementsByClassName('needs-validation');
        var selectedEvent = null;
        var newEventData = null;
        var initialLocaleCode = 'en';
        var localeSelectorEl = document.getElementById('locale-selector');
        /* initialize the calendar */

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var Draggable = FullCalendar.Draggable;
        var externalEventContainerEl = document.getElementById('external-events');
        // init draggable
        new Draggable(externalEventContainerEl, {
            itemSelector: '.external-event',
            eventData: function (eventEl) {
                return {
                    title: eventEl.innerText,
                    className: $(eventEl).data('class')
                };
            }
        });
        var defaultEvents = [{
            title: 'All Day Event',
            start: new Date(y, m, 1)
        },
        {
            title: 'Long Event',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2),
            className: 'bg-warning'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d - 3, 16, 0),
            allDay: false,
            className: 'bg-info'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d + 4, 16, 0),
            allDay: false,
            className: 'bg-primary'
        },
        {
            title: 'Meeting',
            start: new Date(y, m, d, 10, 30),
            allDay: false,
            className: 'bg-success'
        },
        {
            title: 'Lunch',
            start: new Date(y, m, d, 12, 0),
            end: new Date(y, m, d, 14, 0),
            allDay: false,
            className: 'bg-danger'
        },
        {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            className: 'bg-success'
        },
        {
            title: 'Click for Google',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: 'http://google.com/',
            className: 'bg-dark'
        }];

        var calendarEl = document.getElementById('calendar');

        function addNewEvent(info) {
            addEvent.modal('show');
            formEvent.removeClass("was-validated");
            formEvent[0].reset();

            $("#event-title").val();
            $('#event-category').val();
            modalTitle.text('Add Event');
            newEventData = info;
        }

        var calendar = new FullCalendar.Calendar(calendarEl, {
            editable: true,
            droppable: true,
            selectable: true,
            initialView: 'dayGridMonth',
            themeSystem: 'bootstrap',
            weekNumbers: true,
            locale: initialLocaleCode,
            headerToolbar: {
                left: 'prev,next today',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                center: 'title',
            },
            dayMaxEventRows: true, // for all non-TimeGrid views
            views: {
                timeGrid: {
                    dayMaxEventRows: 5 // adjust to 6 only for timeGridWeek/timeGridDay
                }
            },
            // footerToolbar: {
            //     left: 'prev,next today',
            //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            //     center: 'title',
            // },
            eventClick: function (info) {
                addEvent.modal('show');
                formEvent[0].reset();
                selectedEvent = info.event;
                $("#event-title").val(selectedEvent.title);
                $('#event-category').val(selectedEvent.classNames[0]);
                newEventData = null;
                modalTitle.text('Edit Event');
                newEventData = null;
            },
            dateClick: function (info) {
                addNewEvent(info);
            },
            events: defaultEvents
        });
        calendar.render();

        calendar.getAvailableLocaleCodes().forEach(function(localeCode) {
            var optionEl = document.createElement('option');
            optionEl.value = localeCode;
            optionEl.selected = localeCode == initialLocaleCode;
            optionEl.innerText = localeCode;
            localeSelectorEl.appendChild(optionEl);
        });
      
          // when the selected option changes, dynamically change the calendar option
        localeSelectorEl.addEventListener('change', function() {
            if (this.value) {
              calendar.setOption('locale', this.value);
            }
        });
        /*Add new event*/
        // Form to add new event

        $(formEvent).on('submit', function (ev) {
            ev.preventDefault();
            var updatedTitle = $("#event-title").val();
            var updatedCategory = $('#event-category').val();

            // validation
            if (forms[0].checkValidity() === false) {
                ev.preventDefault();
                ev.stopPropagation();
                forms[0].classList.add('was-validated');
            } else {
                if (selectedEvent) {
                    selectedEvent.setProp("title", updatedTitle);
                    selectedEvent.setProp("classNames", [updatedCategory]);
                } else {
                    var newEvent = {
                        title: updatedTitle,
                        start: newEventData.date,
                        allDay: newEventData.allDay,
                        className: updatedCategory
                    }
                    calendar.addEvent(newEvent);
                }
                addEvent.modal('hide');
            }
        });

        $("#btn-delete-event").on('click', function (e) {
            if (selectedEvent) {
                selectedEvent.remove();
                selectedEvent = null;
                addEvent.modal('hide');
            }
        });

        $("#btn-new-event").on('click', function (e) {
            addNewEvent({ date: new Date(), allDay: true });
        });

    },
        //init
        $.CalendarPage = new CalendarPage, $.CalendarPage.Constructor = CalendarPage
}(window.jQuery),

    //initializing 
    function ($) {
        "use strict";
        $.CalendarPage.init()
    }(window.jQuery);