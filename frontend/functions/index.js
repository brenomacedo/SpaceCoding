const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })
const fs = require('fs')
const uuid = require('uuid-v4')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
    projectId: 'spacecoding-16607',
    keyFilename: 'key.json'
})


exports.uploadUserImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        try{
            fs.writeFileSync('/tmp/imageToSave.png', request.body.image, 'base64')
            const bucket = storage.bucket('spacecoding-16607.appspot.com/')
            const id = uuid()
            bucket.upload('/tmp/imageToSave.png', {
                uploadType: 'media',
                destination: `users/${id}.png`,
                metadata: {
                    metadata: {
                        contentType: 'image/png',
                        firebaseStorageDownloadTokens: id
                    }
                }
            }, (err, file) => {
                if (err) {
                    return response.status(500).json({ error: err })
                } else {
                    const fileName = encodeURIComponent(file.name)
                    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/'
                        + bucket.name + '/o/' + fileName + '?alt=media&token=' + id
                    return response.status(201).json({
                        imageUrl: imageUrl,
                        destination: `users/${id}.png`
                    })
                }
            })
        } catch(err) {
            console.log(err)
            return response.status(500).json({ error: err })
        }
    })
})

exports.uploadPostImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        try{
            fs.writeFileSync('/tmp/imageToSave.png', request.body.image, 'base64')
            const bucket = storage.bucket('spacecoding-16607.appspot.com/')
            const id = uuid()
            bucket.upload('/tmp/imageToSave.png', {
                uploadType: 'media',
                destination: `posts/${id}.png`,
                metadata: {
                    metadata: {
                        contentType: 'image/png',
                        firebaseStorageDownloadTokens: id
                    }
                }
            }, (err, file) => {
                if (err) {
                    return response.status(500).json({ error: err })
                } else {
                    const fileName = encodeURIComponent(file.name)
                    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/'
                        + bucket.name + '/o/' + fileName + '?alt=media&token=' + id
                    return response.status(201).json({
                        imageUrl: imageUrl,
                        destination: `posts/${id}.png`
                    })
                }
            })
        } catch(err) {
            console.log(err)
            return response.status(500).json({ error: err })
        }
    })
})

exports.deleteImage = functions.https.onRequest((request, response) => {
    try{
        cors(request, response, () => {
            const bucket = storage.bucket('spacecoding-16607.appspot.com')
            bucket.file(request.body.filename).delete().catch(err => console.log('teste'))
        })
    }catch(err){
        console.log(err)
    }
})
