import React from 'react';
import {useFormik} from 'formik';

const withForm = (OriginalComponent: React.ElementType) => {
  const Form = (props: any) => {
    const formik = useFormik({
      initialValues: props.initialValues || {},
      onSubmit: props.onSubmit ? props.onSubmit : () => {},
      validationSchema: props.validationSchema || {},
    });
    return <OriginalComponent formik={formik} {...props} />;
  };
  return Form;
};

export default withForm;
