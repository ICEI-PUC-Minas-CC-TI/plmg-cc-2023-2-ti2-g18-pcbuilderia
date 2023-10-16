package App.security;

import org.apache.commons.validator.routines.EmailValidator;

public class EmailValidatorSecurity {
    public static boolean validateEmail(String email) {
        return EmailValidator.getInstance().isValid(email);
    }
}
