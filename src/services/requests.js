import axios from 'axios'

export const createPattern = async(patternObject) => {
    const response = await axios.post(
        'http://127.0.0.1:5000/create_pattern',
        JSON.stringify(patternObject),
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )

    return response
}

export const getPatterns = async (uid) => {
    const response = await axios.post(
        'http://127.0.0.1:5000/get_patterns',
        {
            'uid': uid,
        },
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )

    return response.data
}

export const getUserInfo = async (uid) => {
    const response = await axios.post(
        'http://127.0.0.1:5000/get_user_info',
        {
            'uid': uid,
        },
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    )

    return response.data
}

export const calculateResults = async(formData) => {
    const response = await axios.post(
        'http://127.0.0.1:5000/calculate_results',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' } }
    )

    return response
}


