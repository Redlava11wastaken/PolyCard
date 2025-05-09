async function fetchData(){
    try{

        const PolyUser = document.getElementById("PolyName").value;
        const proxyUrl = 'https://corsproxy.io/?key=ADDKEYHERE&url=';
        const url = 'https://api.polytoria.com/v1/users/'+PolyUser;
        const response = await fetch(proxyUrl + url);

            if(!response.ok){
                throw new Error("Could Not Fetch User")
            }

            const data = await response.json();
            const PolyAvatar = data.thumbnail.avatar;
            const user = data.username
            const imgElement = document.getElementById("PolyAvatar")
            const nameElement = document.getElementById("username")
            const memebertext = document.getElementById("member")
            const isplus = data.membershipType;
            nameElement.innerHTML = user;
            imgElement.src = PolyAvatar;
            imgElement.style.display = "block";
    }       
    catch(error){
        console.error(error);
    }
}