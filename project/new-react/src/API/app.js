import axios from 'axios'
export function getData() {
    return axios.get('http://localhost:4000/find')
  }
