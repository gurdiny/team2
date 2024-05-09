const getData = async () => {
    
    let response = await fetch('https://devtoretojs-default-rtdb.firebaseio.com/posts.json')

    
    let data = await response.json()

   

    let keys = Object.keys(data) 

    let productArr = keys.map((key) => {
        return { ...data[key], key }
    })

    
    return productArr

}
export {getData}