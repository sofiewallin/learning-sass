/* Show and hide main menu on smaller screens by Sofie Wallin 2021 */

export function responsiveMenu() {

    const header = document.getElementById('main-header'); // Get main header tag
    const nav = document.getElementById('main-navigation'); // Get main navigation tag
    const menu = document.getElementById('main-menu'); // Get main menu

    // Add enhanced menu class 
    header.classList.add('enhanced-menu');

    // Close menu by adding class
    menu.classList.add('closed');

    // Create for toggling menu
    let button = document.createElement('button');
    button.id = 'toggle-menu';
    button.setAttribute('aria-controls', 'main-menu');
    button.setAttribute('aria-expanded', 'false');
    button.classList.add('button--menu');
    button.innerHTML = '<span class="hide-show">Visa</span> meny';

    // Add button right before menu
    nav.insertBefore(button, menu);

    // Add event to button for toggling visibility of menu and the button text
    button.addEventListener('click', function() {
        menu.classList.toggle('closed');
        button.classList.toggle('close');

        // Toggle ARIA expanded attribute
        if ( button.getAttribute('aria-expanded') === 'false') {
            button.setAttribute('aria-expanded', 'true');
        } else {
            button.setAttribute('aria-expanded', 'false');
        }

        // Toggle button text
        let hideShow = button.querySelector('.hide-show');
        if (hideShow.innerHTML === 'Visa') {
            hideShow.innerHTML = 'Dölj';
        } else {
            hideShow.innerHTML = 'Visa';
        }
    });

}
