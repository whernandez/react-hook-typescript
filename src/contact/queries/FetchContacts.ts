import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const FETCH_CONTACTS = gql`
    query {
        findAllCompanies {
            companies {
                id
                name
                contacts {
                    id
                    email
                }
            }
        }
    }
`;

const FetchContacts : React.FC = () => {
    const {loading, error, data} = useQuery(FETCH_CONTACTS);
    console.log(data)
    // if (loading) return (<p>Loading</p>);
    data.map((cont:any, index:number) => {
        console.log(cont);
    });

    return null;
};

export default FetchContacts;
