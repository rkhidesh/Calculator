// Catch our elements and add an event listener
// to the button container. `handleClick` returns a
// new function that is called when the listener is fired
const output = document.querySelector('.output');
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', handleClick(), false);

function handleClick() {

    // Initialise the sum
    const sum = [];

    // Return the function that will be called
    // when a click event occurs
    return function (e) {

        // Because we're using event delegation (details
        // below) we need to check that the element that
        // was clicked was a button
        if (e.target.matches('.button')) {

            // Destructure the type from the dataset, and
            // the text content
            const { dataset: { type }, textContent } = e.target;

            // `switch` on the type
            switch (type) {

                // If it's equals evaluate the elements in
                // the array, and output it
                case 'equals': {
                    output.textContent = eval(sum.join(''));
                    break;
                }

                // Clear empties the array, and clears
                // the output
                case 'clear': {
                    sum.length = 0;
                    output.textContent = '';
                    break;
                }

                // Otherwise add the textContent to
                // the array, and update the output
                default: {
                    sum.push(textContent);
                    output.textContent = sum.join(' ');
                    break;
                }
            }
        }

    }

}