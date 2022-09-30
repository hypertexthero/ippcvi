// Thank you, Phina Kersly: https://www.section.io/engineering-education/adding-dark-theme-to-your-site/

let theme = localStorage.getItem('data-theme');
const lightswitch = document.getElementById("switch");
const changeThemeToDark = () =>{
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
    console.log("Dark theme set")
    }

const changeThemeToLight = () =>{
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light')
    console.log("Light theme set")
    }

if(theme === 'dark'){
    changeThemeToDark()
    }
  
lightswitch.addEventListener('click', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }   
});

