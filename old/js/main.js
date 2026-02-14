document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, attaching event listeners');

    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    const link3 = document.getElementById('link3');

    console.log('link1:', link1);
    console.log('link2:', link2);
    console.log('link3:', link3);

    if (link1) {
        link1.addEventListener('click', () => {
            console.log('Link1 clicked');
            window.open('https://arch2kx.github.io/arch2k-arcade/', '_blank');
        });
    }

    if (link2) {
        link2.addEventListener('click', () => {
            console.log('Link2 clicked');
            window.open('https://arch2kx.github.io/archs-ba-student-quiz/', '_blank');
        });
    }

    if (link3) {
        link3.addEventListener('click', () => {
            console.log('Link3 clicked - Opening Aronasay');
            window.open('https://github.com/arch2kx/aronasay/', '_blank');
        });
    }

    console.log('All event listeners attached');
});
