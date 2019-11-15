import React, {Fragment, ReactNode} from 'react';

type FieldValidatorT = {
    children: ReactNode,
    error: string | undefined,
    touched: boolean | undefined
}

const FieldValidator = ({children, error, touched}: FieldValidatorT) => {
    return (
        <Fragment>
            {children}
            {
                error && touched && <label style={{color:'red'}}>{error}</label>
            }
        </Fragment>
    )
};

export default FieldValidator;

