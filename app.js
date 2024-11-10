document.getElementById('bookingForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const category = document.getElementById('category').value;
    const timing = document.getElementById('timing').value;
    const availableSeat = document.getElementById('availableSeat').value;
    const name = document.getElementById('name').value;
    const bookingDate = document.getElementById('bookingDate').value;

    // Display booking details
    document.getElementById('categoryDisplay').textContent = `Category: ${category}`;
    document.getElementById('timingDisplay').textContent = `Timing: ${timing}`;
    document.getElementById('availableSeatDisplay').textContent = `Available Seat: ${availableSeat}`;
    document.getElementById('nameDisplay').textContent = `Name: ${name}`;
    document.getElementById('bookingDateDisplay').textContent = `Booking Date: ${bookingDate}`;

    // Show booking details section
    document.getElementById('bookingDetails').classList.remove('hidden');
});
