const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Crypto {
        coin: String,
        wallet: String,
        network: String,
    }

    type Coordinates {
        lat: Float,
        lng: Float,
    }

    type Hair {
        color: String,
        type: String,
    }

    type Address {
        address: String,
        city: String,
        coordinates: Coordinates,
        postalCode: String,
        state: String,
    }

    type Bank {
        cardExpire: String,
        cardNumber: String,
        cardType: String,
        currency: String,
        iban: String,
    }

    type Company {
        address: Address,
        department: String,
        name: String,
        title: String,
    }

    type User {
        id: Int,
        firstName: String,
        lastName: String,
        maidenName: String,
        age: Int,
        gender: String,
        email: String,
        phone: String,
        username: String,
        password: String,
        birthDate: String,
        image: String,
        bloodGroup: String,
        height: Float,
        weight: Float,
        eyeColor: String,
        hair: Hair,
        domain: String,
        ip: String,
        address: Address,
        macAddress: String,
        university: String,
        bank: Bank,
        company: Company,
        ein: String,
        ssn: String,
        userAgent: String,
        crypto: Crypto,
    }


    type Employee {
        id: Float,
        firstName: String,
        lastName: String,
    }
  type Query {
    Users: [User]
  }
`;

module.exports = typeDefs;
