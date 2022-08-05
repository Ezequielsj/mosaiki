import mock from '../utils/mock'


/* mock.onPost('/api/home/login').reply(200, {
    'id': 1,
    'username': 'Ezequielsantos',
    'email': 'ezequielsantos@poli.ufrj.br'
}); */

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data)
    

    if (email !== 'ezequielsantos@poli.ufrj.br' || password !== '71025616' ) {
        return [400, {message:'Email ou senha incorretos'}]
    }

    const user = {
        id: 1,
        name: 'Ezequiel Santos',
        username: 'ezequielsantos',
        email: 'ezequielsantos@poli.ufrj.br'
    }

    return [200, { user }]
});

