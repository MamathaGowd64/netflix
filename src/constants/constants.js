export const USER_AVATAR =
    "https://ik.imagekit.io/3buj7rcwco/user_icon.png?updatedAt=1710247789248";

export const LOADER_BTN_CONTENT =
    '<div className="flex justify-center items-center"><span>signing in/up ...  </span> &nbsp; &nbsp;<div className="loader"></div></div>';
  
export const URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmFmODAxODc1M2JhZjI1YWY1NGI1NDQxNzY2Nzc2YiIsIm5iZiI6MTcyMjkzMjQxNi42MjYwMzYsInN1YiI6IjY2YjFkOGU1Mzg1YmI0MjM3ZTllNjlkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SNdGwme3IHz65yR6QPHZIl77KZ8WrOL2kPZQGls-GR0'
    }
}
  
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export const SUPPORTED_LANGUAGES = [{ identifier: "en", name: "English" }, { identifier: "hindi", name: "Hindi" }, { identifier: "arabic", name: "Arabic" }]

//export const OPENAI_KEY = "sk-BvoM2r9kMKp7dLp0VX5spV3YIM7Yw1Dky8QKsCpa8UT3BlbkFJxIy6fyVG1lm9DpFRgnWUrh2G8o6CpoGjhdLS8ZGDgA"
export const OPENAI_KEY = process.env.REACT_APP_OPAINAI_KEY;