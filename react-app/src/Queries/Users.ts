import {
  gql,
  LazyQueryHookOptions,
  LazyQueryResultTuple,
  OperationVariables,
  useLazyQuery,
} from "@apollo/client";

const GET_USERS = gql`
  query ExampleQuery {
    Users {
      id
      firstName
      lastName
      maidenName
      age
      gender
      email
      phone
      username
      password
      birthDate
      image
      bloodGroup
      height
      weight
      eyeColor
      hair {
        color
        type
      }
      domain
      ip
      address {
        address
        city
        coordinates {
          lat
          lng
        }
        postalCode
        state
      }
      macAddress
      university
      bank {
        cardExpire
        cardNumber
        cardType
        currency
        iban
      }
      company {
        address {
          address
          city
          coordinates {
            lat
            lng
          }
          postalCode
          state
        }
        department
        name
        title
      }
      ein
      ssn
      userAgent
      crypto {
        coin
        wallet
        network
      }
    }
  }
`;

export const useGetUsersData = (
  baseOptions?: LazyQueryHookOptions
): LazyQueryResultTuple<Partial<any>, OperationVariables> => {
  const options = { ...baseOptions };
  return useLazyQuery(GET_USERS, options);
};
