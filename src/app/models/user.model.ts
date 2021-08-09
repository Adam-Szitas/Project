export interface User{
  onboarded: boolean;
  user: Profile;
}

    interface Profile{
      name: string;
      surname: string;
      displayName: string;
      password: string;
      contact: Contact;
    }

        interface Contact{
          email: string;
          phoneNumber: string;
          locations: Array<Locations>;
          socialNetworks: Array<{
            id: string;
            name: string;
            url: string;
          }>;
        }

        interface Locations{
          id: string;
          name: string,
          location: Location;
          address: Address;
        }

            interface Location{
              latitude: number;
              longitude: number;
            }

            interface Address{
              streetName: string;
              streetNumber: string;
              suburb: string;
              stateOrProvince: string;
              complex: string;
              postalCode: string;
              city: string;
              country: string;
              addressString: string;
            }
