import api from './apiConfig'

export const getBikes = async () => {
  try {
    const response = await api.get('/bikes')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getBike = async id => {
  try {
    const response = await api.get(`/bikes/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createBike = async (userID, bike) => {
  try {
    const response = await api.post(`/${userID}/bikes`, bike)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateBike = async (id, bike) => {
  try {
    const response = await api.put(`/bikes/${id}`, bike)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteBike = async id => {
  try {
    const response = await api.delete(`/bikes/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}