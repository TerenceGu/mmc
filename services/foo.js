/**
 * Created by Administrator on 2016/2/25.
 */
const FormData = require('form-data');
const fetch = require('node-fetch');

const testFetch = name => {
  const form = new FormData();
  form.append('name', name);
  return fetch('http://www.baidu.com', {
    body: form,
    method: 'POST',
    headers: form.getHeaders(),
  });
};

testFetch('yuji').then(result => {
  console.log(result);
}).catch(err => console.log(err));
