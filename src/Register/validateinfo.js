

export default function validateinfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "**Username required**"
    }

    //phonenumber
    if (!values.phone) {
        errors.phone = "Phonenumber required"
    } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "**Phone number is invalid**"
    }

    if (!values.password) {
        errors.password = '**Password is required**'
    } else if (values.password.length < 6) {
        errors.password = '**Password needs to be 6 or more characters**'
    }

    if (!values.password2) {
        errors.password2 = '**Password is required**'
    } else if (values.password2 !== values.password) {
        errors.password2 = '**Password do not match**'
    }

    return errors;
}