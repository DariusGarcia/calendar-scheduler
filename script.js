// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// using document to ensure that all elements are loaded before running jquery.
$(document).ready(function () {
	// function to keep the different time slots in sync with the current time of day.
	const timeHandler = () => {
		var todayTime = dayjs()

		// grab each element that contains each time slot and do a loop iteration over each object
		// to compare to the current time.
		$('.time-block').each(() => {
			let localStorageTime = parseInt($(this).attr('id'))
			if (localStorageTime > todayTime) {
				$(this).addClass('future')
				$(this).removeClass('present')
				$(this).remove('past')
			} else if (localStorageTime < todayTime) {
				$(this).addClass('past')
			} else if (localStorageTime == todayTime) {
				$(this).removeClass('past')
				$(this).addClass('present')
			} else {
				return
			}
		})
	}

	timeHandler()

	// fetch the current time using the dayjs lib
	$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))

	// function that saves the input text to local storage
	$('.saveBtn').click(function () {
		// get the submitted input text and the time slot and save it to localStorage
		var inputText = $(this).siblings('.description').val()
		// query selecting the elements with an id attribute
		var time = $(this).parent().attr('id')
		localStorage.setItem(time, inputText)
	})

	// fetch all events in local storage using val which will set the value of the <input> field:
	$('#hour-9 .description').val(localStorage.getItem('hour-9'))
	$('#hour-10 .description').val(localStorage.getItem('hour-10'))
	$('#hour-11 .description').val(localStorage.getItem('hour-11'))
	$('#hour-12 .description').val(localStorage.getItem('hour-12'))
	$('#hour-13 .description').val(localStorage.getItem('hour-13'))
	$('#hour-14 .description').val(localStorage.getItem('hour-14'))
	$('#hour-15 .description').val(localStorage.getItem('hour-15'))
	$('#hour-16 .description').val(localStorage.getItem('hour-16'))
	$('#hour-17 .description').val(localStorage.getItem('hour-17'))
})
