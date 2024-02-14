export const setLocalStorage = (storage, value) => {
    localStorage.setItem(storage, JSON.stringify(value))
}

export const findLocalStorage = (storage) => {
    let storageData = JSON.parse(localStorage.getItem(storage))
    return storageData
}

export const removeLocalStorage = (storage) => {
    localStorage.removeItem(storage)
}

export const clearLocalStorage = async () => {
    localStorage.clear()
}

