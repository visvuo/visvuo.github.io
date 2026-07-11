const buttons = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab-content');

buttons.forEach(button => {

  button.addEventListener('click', () => {

    buttons.forEach(btn => {
      btn.classList.remove('active');
    });

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    button.classList.add('active');

    const target = document.getElementById(
      button.dataset.tab
    );

    if (target) {
      target.classList.add('active');
    }

  });

});