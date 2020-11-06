export class ContactModel {
    fullName: string;
    title: string;
    personalAddress: { address: string; };
    company: string;
    companyAddress: { city: string; street: string; };
    phone: string;
    avatar: string;

    constructor(contact) {

    }

}

export const ContactsList: ContactModel[] = [

    {
        fullName: 'Alex Jonathan',
        title: 'CEO',
        personalAddress: {
            address: 'Reviera State, 32/116'
        },
        company: 'Twitter Inc',
        companyAddress: {
            city: 'CA 94107, San Francisco',
            street: '795 Folsom Ave, Suite 600'
        },
        phone: '(123) 456-7890',
        avatar: '/assets/alex-jonathan.jpg'
    },
    {
        fullName: 'Janet Carton',
        title: 'Graphic designer',
        personalAddress: {
            address: 'Reviera State, 32/116'
        },
        company: 'Twitter Inc',
        companyAddress: {
            city: 'CA 94107, San Francisco',
            street: '795 Folsom Ave, Suite 600'
        },
        phone: '(123) 456-7890',
        avatar: '/assets/janeth-carton.jpg'
    },
    {
        fullName: 'John smit',
        title: 'Graphic designer',
        personalAddress: {
            address: 'Reviera State, 32/116'
        },
        company: 'Twitter Inc',
        companyAddress: {
            city: 'CA 94107, San Francisco',
            street: '795 Folsom Ave, Suite 600'
        },
        phone: '(123) 456-7890',
        avatar: '/assets/john-smith.jpg'
    },
    {
        fullName: 'Michael Zimber',
        title: 'CEO',
        personalAddress: {
            address: 'Reviera State, 32/116'
        },
        company: 'Twitter Inc',
        companyAddress: {
            city: 'CA 94107, San Francisco',
            street: '795 Folsom Ave, Suite 600'
        },
        phone: '(123) 456-7890',
        avatar: '/assets/michael-zimber.jpg'
    },
    {
        fullName: 'Monica Smit',
        title: 'CEO',
        personalAddress: {
            address: 'Reviera State, 32/116'
        },
        company: 'Twitter Inc',
        companyAddress: {
            city: 'CA 94107, San Francisco',
            street: '795 Folsom Ave, Suite 600'
        },
        phone: '(123) 456-7890',
        avatar: '/assets/monica-smith.jpg'
    },
    {
        fullName: 'Sandra Smit',
        title: 'CEO',
        personalAddress: {
            address: 'Reviera State, 32/116'
        },
        company: 'Twitter Inc',
        companyAddress: {
            city: 'CA 94107, San Francisco',
            street: '795 Folsom Ave, Suite 600'
        },
        phone: '(123) 456-7890',
        avatar: '/assets/sandra-smith.jpg'
    }
];