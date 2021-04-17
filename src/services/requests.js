import axios from 'axios'

export const createPattern = (patternObject) => {
    const response = await axios.post(
        'http://127.0.0.1:5000/create_pattern',
        JSON.stringify(patternObject),
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )

    return response
}


