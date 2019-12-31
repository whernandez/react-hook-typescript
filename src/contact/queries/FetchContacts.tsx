import React from 'react';
import {useQuery, useMutation} from '@apollo/react-hooks';
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

const UPDATE_PROFILE = gql`
  mutation UpdateUserProfile($profile: UpdateUserProfileInput!) {
    UpdateUserProfile(input: $profile) {
      name
      filename
    }   
  }
`;

const profile = {
    name: "this.nameRef.current.value",
    picture: "this.pictureFileRef.current.files[0]",
  };

const FetchContacts : React.FC = () => {
    const {loading, error, data} = useQuery(FETCH_CONTACTS);
    // const [addTodo, { data }] = useMutation(UPDATE_PROFILE);

    const postMutation = () => {
      console.log(data)
      // addTodo({ variables: { profile } });
    }

    // console.log(data)
    // addTodo({ variables: { profile } });
    // if (loading) return (<p>Loading</p>);
    // data.map((cont:any, index:number) => {
    //     console.log(cont);
    // });

    return (<button onClick={postMutation}>Hide Column</button>)
};

export default FetchContacts;
