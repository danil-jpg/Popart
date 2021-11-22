const postData = async (url , data ) =>{

	let res = await fetch(url , {
		method: "POST",
		body: data
	});

	return await res.text()
}

const getResource = async (url) =>{
	let res = await fetch(url)

	if(!res.ok){
		throw new Error("Could not fetch" + url + ",status" + res.status);
	}
// response.text() – читает ответ и возвращает как обычный текст,
	return await res.json()
}

export {postData , getResource};