import axios from 'axios';  

const url_quest = 'http://localhost:4000/questions';        //direccion de las preguntas del foro

export const fetchQuests = () => axios.get(url_quest);
export const fetchQuest = (id)=> axios.get(`${url_quest}/${id}`);
export const createQuest = (newQuest) => axios.post(url_quest, newQuest);
export const updateQuest = (id, updatedPost) => axios.patch(`${url_quest}/${id}`, updatedPost);
export const deleteQuest = (id) => axios.delete(`${url_quest}/${id}`);