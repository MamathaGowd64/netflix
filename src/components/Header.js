
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from "../utils/firebase"
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice.js'
import React, { useEffect } from "react";
import { SUPPORTED_LANGUAGES, URL } from "../constants/constants.js"
import { toggleGPTSearchView } from "../utils/GPTSlice.js";
import { changeLanguage } from "../utils/configSlice.js";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user)
  const gpt=useSelector((store)=>store.gpt.showGPTSearh)
  
  

  const handleSignOut = () => {
    signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    navigate("/error")
  });

  }
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {        
        const { uid, email, displayName } = user;
        const userInfo = { uid, email, displayName }
        dispatch(addUser(userInfo));       
        navigate("/browse")
      } else {     
        dispatch(removeUser()); 
        navigate("/")
      }
    });
    return (() => { unsubscribe(); })
  }, []);

  const handleGPTSearhClick = () => {
    dispatch(toggleGPTSearchView());
  };
  const handleLanguageChange = (e) => {
   dispatch(changeLanguage(e.target.value))
}

  return (
    <div className='absolute flex flex-col md:flex-row justify-between items-stretch md:items-center w-full bg-gradient-to-b from-black  to-[rgba(0,0,0,0.9)] md:bg-gradient-to-r md:from-black md:to-transparent z-20'>
      <div>
      <img className="p-5 md:p-6  md:ml-6 w-40 md:w-48 mx-auto md:mx-[unset]"
        src={URL}
        alt="svg"
      />
      </div>
      <div className="navbar pb-4 md:pb-[unset] mt-[-0.25rem] md:mt-[unset]">
        <ul className="flex justify-around items-center">
          {user && (
            <>
              {!gpt && (
                <li className="hidden md:block p-2 m-4 font-medium text-lg bg-[rgba(0,0,0,0.8)] text-black  rounded-md">
                  <select onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES?.map((each) => {
                      return (
                        <option 
                          key={each.identifier}
                          value={each.identifier}>
                          {each.name}
                        </option>
                      );
                    })}
                  </select>
                </li>
              )}

              <li className="md:p-2 mr-2 md:m-4 md:font-medium md:text-lg md:bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
                <button
                  className="flex justify-center items-center"
                  to="/"
                  onClick={handleGPTSearhClick}
                >
                  <span>
                    {gpt ? "Homepage" : "GPT Search"}
                  </span>
                </button>
              </li>
              <li className="md:p-2 md:m-4 md:font-medium md:text-lg md:bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
                <button
                  className="flex justify-center items-center"
                  to="/"
                  onClick={handleSignOut}
                >
                  <img
                    className="rounded-[50%] md:rounded h-8 w-8"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAz1BMVEX/AAz/////AAD///38///8AAD/AAb///v8//3+9fP8//n528X//Pr5///96eH7w7b89+/+8u36opH+opb659P83NL9XEz8ZE77rJb9zLn338v72MX8t6j6f174DwD7z7r7t6H6c1v6cFH78+L7mHv6gWv5kHD6ya/7XT36NB/8KBn3/On3SSz80Mb749f8SDX9Myz4hXf7Y1n8qaL+S0f8a2T9kH/6i3P+d239mor8ubT7a1f4NQD2YkL4Txj2WTH8ra76o4f8f3v5eVL8VEFPxia2AAAFJ0lEQVR4nO3cfVPaShQHYPY1aUSSIFAEGrQUkQgCckUQ216vfP/PdHeRCkkYB5O4tp3f85c6nZyc7GvgbAsFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgPSk/FtCU0qFEJSaT0jqyDTH0FR8rp8eNZqtL4HpdFToVvuo0T47FzSP60nxtVJkRCt2vtFcrnkgKrrXxXVkVuxc5BCa0h7nZIPzxqW5bGjfVWm8xK5kzoaGlWPywrF46VzkcqcHhK5VucO2wfnVIFtoGg6P2faCFrP49WczbUNHTW5ZO8kwXhllCS1pvUiiLO6OTWQjwymPhSa2W8gwAdGbEmGxZGxnYqKj0Rs/HpoQf5L+OUoxtVj0isyyeNtA08jwjFjxZCziBqmbho6GPJYMUb97/7x/MnRc4YlkGMkwYOltKd7QGp8bSKamJpt4Mjb3ZumTmXh7kym//z6A3kansjWH2dPck2llmVQODH2nRkhiArDJv39my+xNhmdombm/N5mugTFzwxPLjO5oi/TJqA1F4ukwYt8YSGbUSSZjkdJ56tCycJ98OIw0Mu0qDgwdunuSsYf99KHpJNnPLF5Ov3K9IfTcSXQKyytn2HzQ0GWxGVItXDUTezM6bqsF2tqJyxi/ztQnxGc/sg1X13QWZj4OULNPZKmxLOJ1M74DzL3oHOBMQzOvALIw83Z2NMyy2UxkfIx0eUXWOzLd0CqXej4v4weQepnTvUtTQ5VfZP8Egj60ObfVRR3OjxvfjeWisxm0bbXc6M6mXtgHeUSmdNSqfFL80yejn2eoISu+9jo6tNd7yuspUkEfLr//EML4B2dSUPHw8/KHyPUpUvoRHwF+dGgAAAAAAAAAAAAAAAAAgEPJv+eLTUnDcd/wF/fvRNLxsn7UmxmoDUvQX3bnGFbS4LblccKPT1ems5F0MJ/chnmlo1KZt0rrIkdmu6HpAzx3Vd8ruYtBHgUilAZdt2Tb7LkS0DdQHhoJv/TWBYmfGo9B1kMDKpWLoc/Jpl7bsjPUNachRWVTXGk7149Zal4kpf161SPbakDCePq65jTosritFC2WVOukCi+pEF+PPMZ3zjapn7wMxzRSoI9Fe/c4ktdbvbWQR+rDh6u6F6tsZkxNAFlrAd+GzovRSnHuHM1G4aEJ6aOM4bj2WNlTom379cDs+JeiGbkPxjjnTrtbGwU6oVcy0g1Cg1Ft3uo4e8rNud9emW2Xgj7D12AkVsZvc37VLM9vVqFYL6iRpKR8/lswqN3+V296epzHOxghXrNrsKJym82g5cce7POJIqvTbJVn8+VqHAYB/UUEhb5qjslselr1dv51pFW84cJQ0W4iG9F11W0legpTf7Id/7o6vG+dnZyUT7Ry/ex+OKyWPCc5SDaZcc+d9T+iWdbUvnDiJm6OWdr2Z2f9u2Pps6x6Bk6c/dnoTOfjD90vU7XN7V2R48hdPRco7+1IbF/n0mOHV2a13LZ56dMR4ap8xeNTweGYHirucmy+ZHcfNUmFd419R3oOotanb2P54Y2ypTYlD48VS21Ktl3sNS9DihXbX0SuL0W5UHPv4LHqFx3r9Ty2CXn+9dmTyLcsOz/qCfcXvWbJL76ekO14pWrz7GLwm1dlqwcdrO5OXLWg+E5yRXE8v1QduvXF0zj4XZskYr0X7q/OJ4t6y3WHzeracOi699PyYrK87Is/q1Be/trB9EerVU0bDfrBZr/2B+Wx69fWcrPn/MD/BQYAAAAAAAAAAAAAAAAAAADgnf0PmztTey1V3IgAAAAASUVORK5CYII="
                    alt="profile"
                  />
                  <span>(sign out)</span>
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header;
