
export default function (response) {
  let data = response.data;
    if(response.status === 200 && data.status === 1){
      return response;
    }else{

    }
}
