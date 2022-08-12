const user = {
        avatarUrl: '',
        name:'',
        bio:'',
        userName:'',
        repositories:[],
        following:'',
        followers:'',
        eventos:[],


        setInfo(gitHubUser) {
            this.avatarUrl = gitHubUser.avatar_url
            this.name = gitHubUser.name
            this.bio = gitHubUser.bio
            this.userName = gitHubUser.login
            this.followers = gitHubUser.followers
            this.following = gitHubUser.following
            this.eventos = gitHubUser.received_events_url
            

            
        }, 
        setRepositories(repositories) {
            this.repositories = repositories
        }, 
        setEvents(eventos){

            this.eventos = eventos

           

        }
} 

export { user }