const remoteURL = "http://localhost:8088"

export default {
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(result => result.json())
    }
}