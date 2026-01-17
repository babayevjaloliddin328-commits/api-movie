const api = `https://www.omdbapi.com/?s=panda&apikey=c65fcde9`;
const elList = document.querySelector(".cards");
const elLoading = document.querySelector(".loading");
const elSearch = document.querySelector(".search");





const getMovie = async (url)=>{
    const request = await axios.get(url);
console.log(request?.data);
    showMovies (request?.data);
};
elSearch.addEventListener("change", (e)=>{
    const Inputvalue = e.target.value.trim();
    elList.innerHTML = '';


  getMovie(`https://www.omdbapi.com/?s=${Inputvalue}&apikey=c65fcde9`);
    

    
})

 


try{
    getMovie(api);
}catch(error){
    throw new Error(error)
}




//showMovies

function showMovies(movies){

    const {Search, Response , totalResults } = movies


    if(Response === 'True'){    
    elLoading.innerHTML = ''; 
        Search?.map(({Poster, Year , Title}, index)=>{
            elList.innerHTML += `
            <div class="card">
                <img width='300' src=${Poster}alt="">
                <h1>${Title}</h1>
                <p>${Year}</p>
                <p>id</p>
            </div>
            `
        });
    } else{
        elList.innerHTML = 'kino topilmadi'; 
    }
}
