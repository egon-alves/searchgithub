const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class = "info">
                <img class='img' src="${user.avatarUrl} alt="Foto do perfil do usuario"/>
                <div class="data" >
                <h1>${user.name ?? 'Não possui nome cadastrado  😭'}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrado  😭'}</p>
                </div>
            </div> `
        
     
    }
}

export { screen }