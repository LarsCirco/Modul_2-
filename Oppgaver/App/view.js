const html=document.getElementById('app');
updateview();
function updateview(){
    if(model.app.page== 'startPage') startView();

}

function startView()
{
    let container = document.createElement('div')
    let headingContainer= document.createElement('div')

    let instillingerknapp = document.createElement('button');
    instillingerknapp.textcontent = 'innstillinger';
    instillingerknapp.style.display = 'inline';
    instillingerknapp.setattribute('onclick', 'showinnstillinger()');
    headingContainer.appendChild(instillingerknapp)

    let heading = document.createElement('h4');
    heading.style.display = 'inline';
    heading.textContent='startsiden'
    headingContainer.appendChild(heading)
    

}