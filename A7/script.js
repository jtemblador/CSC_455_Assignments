// Get the canvas element and its context
const canvas = document.getElementById('drawingCanvas');
canvas.width = 800;  // Match your CSS width
canvas.height = 600; // Match your CSS height
let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

let start_background_color = "white";
let draw_color = "black";
let draw_width = "2";
let is_drawing = false;

// Touch events
canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("touchcancel", stop, false);
// Add this to your JavaScript file
document.getElementById('clearCanvas').addEventListener('click', clear_canvas);

// Mouse events
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
    is_drawing = true;
    const rect = canvas.getBoundingClientRect();
    let x, y;
    
    // Handle both mouse and touch events
    if (event.type === 'mousedown') {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    } else if (event.type === 'touchstart') {
        x = event.touches[0].clientX - rect.left;
        y = event.touches[0].clientY - rect.top;
    }
    
    context.beginPath();
    context.moveTo(x, y);
    
    // Prevent default behavior only for touch events
    if (event.type.includes('touch')) {
        event.preventDefault();
    }
}

function draw(event) {
    if (!is_drawing) return;
    
    const rect = canvas.getBoundingClientRect();
    let x, y;
    
    // Handle both mouse and touch events
    if (event.type === 'mousemove') {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    } else if (event.type === 'touchmove') {
        x = event.touches[0].clientX - rect.left;
        y = event.touches[0].clientY - rect.top;
    }
    
    context.lineTo(x, y);
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
    
    // Prevent default behavior only for touch events to prevent scrolling
    if (event.type.includes('touch')) {
        event.preventDefault();
    }
}

function stop(event) {
    is_drawing = false;
    
    // Prevent default behavior only for touch events
    if (event && event.type && event.type.includes('touch')) {
        event.preventDefault();
    }
}

function clear_canvas() {
    context.fillStyle = start_background_color;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
}