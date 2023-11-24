document.getElementById('Job-Select').addEventListener('change', function () {
    // Get the selected option
    var selectedOption = this.options[this.selectedIndex];

    // Get the text content of the selected option
    var selectedText = selectedOption.textContent;

    // Get the label of the selected option's parent optgroup
    var selectedCategory = selectedOption.parentElement.label;

    // Alert the result
    alert('Selected Job: ' + selectedText + ' under Category: ' + selectedCategory);
});