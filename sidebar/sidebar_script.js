//Window.postMessage listener

//TEMPORARY - number of notes in sidebar
var num_notes = 1;

window.onload=function(){
	initialize();
}

function initialize(){
	var add_note_button = document.getElementById("add_note_button");
	add_note_button.onclick=function(){
		num_notes++;
		add_note(num_notes);
	}
}

function add_note(index) {
	
	var note_section = document.getElementById("note_section");
	
	var note = document.createElement("DIV");
	note.id = "note"+index;
	note.className = "note";
	
	note.innerHTML = "<textarea class='note_header' rows='1' cols='22' maxlength='25' placeholder='Header'></textarea><button type='button' class='close_button'>X</button><button type='button' class='info_button'>?</button><div class='note_break'></div><div class='note_info'>Info gets displayed here!</div><textarea class='note_body' placeholder='. . .'></textarea><div class='note_ghost'><div>";
	
	var close_button = note.getElementsByClassName("close_button")[0];
	close_button.onclick=function(){
		delete_note(note.id);
	}
	var info_button = note.getElementsByClassName("info_button")[0];
	info_button.onclick=function(){
		show_info(note.id);
	}
	
	var note_header = note.getElementsByClassName("note_header")[0];
	var note_info = note.getElementsByClassName("note_info")[0];
	var note_body = note.getElementsByClassName("note_body")[0];
	var note_ghost = note.getElementsByClassName("note_ghost")[0];
	
	note_section.appendChild(note);
}

function set_contents(index, dataArr) {

}

function get_contents(index) {

}

function save_notes() {

}

//BUTTON FUNCTIONS
function show_info(note_id) {
	var info = document.getElementById(note_id).getElementsByClassName("note_info")[0];
	console.log(info.style.display);
	if(info.style.display == "none" || info.style.display == "") {
		info.style.display = "block";
	} else {
		info.style.display = "none";
	}
}

function delete_note(note_id) {
	console.log(note_id);
	var note = document.getElementById(note_id);
	note.parentNode.removeChild(note);
}