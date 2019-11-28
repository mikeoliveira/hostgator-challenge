import api from '../../services/api';

const result =  api.get(api.baseURL).then(function (response) {
    console.log(response.data.shared);
    return response;
});

console.log(result);
