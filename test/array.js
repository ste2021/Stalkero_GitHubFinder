let lista = [{ title: 'Teco Crivellari', job: 'Developer' }, { title: 'Estela de Oliveira', job: 'Intern' },
    { title: 'Dayla Caroline', job: 'Contadora' }, { title: 'Dayla Caroline', job: 'Contadora' }, { title: 'Teco Crivellari', job: 'Developer' }, { title: 'Estela de Oliveira', job: 'Intern' }, { title: 'Dayla Caroline', job: 'Contadora' },
    { title: 'Dayla Caroline', job: 'Contadora' }, { title: 'Teco Crivellari', job: 'Developer' },
    { title: 'Estela de Oliveira', job: 'Intern' }, { title: 'Dayla Caroline', job: 'Contadora' },
    { title: 'Dayla Caroline', job: 'Contadora' },
    { title: 'Teco Crivellari', job: 'Developer' },
    { title: 'Estela de Oliveira', job: 'Intern' },
    { title: 'Dayla Caroline', job: 'Contadora' },
    { title: 'Dayla Caroline', job: 'Contadora' }, { title: 'Teco Crivellari', job: 'Developer' }, { title: 'Estela de Oliveira', job: 'Intern' },
    { title: 'Dayla Caroline', job: 'Contadora' }, { title: 'Dayla Caroline', job: 'Contadora' }, { title: 'Teco Crivellari', job: 'Developer' },
    { title: 'Estela de Oliveira', job: 'Intern' }, { title: 'Dayla Caroline', job: 'Contadora' }, { title: 'Dayla Caroline', job: 'Contadora' },
    { title: 'Teco Crivellari', job: 'Developer' }, { title: 'Estela de Oliveira', job: 'Intern' }, { title: 'Dayla Caroline', job: 'Contadora' },
    { title: 'Dayla Caroline', job: 'Contadora' }
];

//para percorrer cada item da lista com o for
for (let item of lista) {

    let tmp = document.querySelector("#tmp").content;
    let clone = tmp.cloneNode(true); //filhos da div,,, usa o true para percorrer pelos elementos h2 e h5
    clone.querySelector('h2').innerText = item.title;
    clone.querySelector('h5').innerText = item.job;

    document.querySelector("#lista").appendChild(clone);
}
//maneira mais fácil d criar as divs pela api, a chamada vc vai ter que estudar por conta nega