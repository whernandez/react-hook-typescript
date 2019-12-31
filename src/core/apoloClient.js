import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { createUploadLink } from 'apollo-upload-client';

const up = createUploadLink({
    uri: 'http://localhost:8080', // Use env var instead
});

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
    // uri: 'http://localhost:8080',
    uri: 'http://api.consultorio.local/app_dev.php/',
    // fetchOptions: {
    //     mode: 'no-cors'
    // }
    useGETForQueries: true
});

export default new ApolloClient({
    // Provide required constructor fields
    cache: cache,
    link: link,
    // Provide some optional constructor fields
    // name: 'react-hooks-ts-graphql',
    // version: '0.0.0',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});
