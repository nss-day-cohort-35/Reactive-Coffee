const remoteURL = "http://localhost:8088"

export default {
    get(id) {
        return fetch(`${remoteURL}/coffee/${id}`).then(result => result.json())
    },
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(result => result.json())
    },
    delete(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`,{
            method: "DELETE"
        })
        .then(result => result.json())
    }
}