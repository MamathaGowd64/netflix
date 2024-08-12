import React from 'react'

const useGPTSearchMovies = () => {
    const getResults = async () => {
        const gptResults= await client.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-3.5-turbo',
          });
 }
}

export default useGPTSearchMovies
