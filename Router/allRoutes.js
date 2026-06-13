import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/menu","menu","/pages/menu.html"),
    new Route("/contact","contact","/pages/contact.html"),
    new Route("/signup","S'inscrire","/pages/signup.html"),
    new Route("/auth","connexion","/pages/auth.html"),
    new Route("/password","Mot de passe","/pages/auth.html"),  
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Vite et Gourmand";