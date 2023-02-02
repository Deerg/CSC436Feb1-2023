const Person = (props) =>{

    //const firstName = props.firstName;
    //const lastName = props.lastName;
    const {firstName, lastName} = props;
    return <p>
        Hello, {firstName}, {lastName};
    </p>;
}

Person.defaultProps ={
    firstName :" Yee without a name"
}
export default Person;