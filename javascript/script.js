var panels = document.querySelectorAll('.panel');
// console.log(panels)

panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeActiveclasses();
		panel.classList.add('active');

	})
})

function removeActiveclasses (){
	panels.forEach(panel => {
		panel.classList.remove('active');
	})
}